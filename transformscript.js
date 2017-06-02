/* load the rdf mapping and vocab into the script */
.load rdfMapping.js
.load rdfVocab.js

/* Containers for transformation data */
var vocab = [];
var headings = {};
var buffer;

/*Make vocabs for dataset*/
for(var i = 0; i < data_vocab.length; i++){
    if(i == 0){vocab = [];}
    var key = data_vocab[i].name;
    vocab[key] = data_vocab[i];
}

/*Read function of the csv file*/
function read(input) {
    buffer = [];
    fs.readFile(input, "utf-8", (err, data) => {
        if (err) throw err;
        // console.log(data);
        buffer = data.split('\n');

        console.log(buffer.length);

        //Make arrays of each line
        for (var i = 0; i < buffer.length; i++) {
            buffer[i] = buffer[i].split(',');
            
            var buffer2 = [];
            var string = "";
            var makingstring = false;
            
            for(var j = 0; j < buffer[i].length; j++){
                if(!makingstring){
                    if(buffer[i][j].charAt(0) == '"'){
                        makingstring = true;
                    }else{
                        buffer2.push(buffer[i][j]);
                    }
                }
                
                if(buffer[i][j].charAt(buffer[i][j].length-1) == '"'){
                    string += buffer[i][j];
                    buffer2.push(string.substring(1, string.length -1));
                        
                    string = "";
                    makingstring = false;
                }else if(makingstring){
                    string += buffer[i][j];
                }
            }
            
            buffer[i] = buffer2;
            /*for(var j = 0; j < buffer[i].length; j++){
                buffer[i][j] = buffer[i][j].substring(1, buffer[i][j].length-1);
            }*/
        }
    });
}

/*Hash function  - used to hash namespaces for keys*/
String.prototype.hashCode = function () {
    var hash = 0;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return (hash + 2147483647) + 1; 
}


/*Build array for headings, to lookup colum positions*/
function build() {
    headings = []; //reset headings
    for (var i = 0; i < buffer[0].length; i++) { //for all elements i first buffer row
        var value = buffer[0][i];
        headings[value] = i; //add an entry with value as key and arrayposition as value
    }
};

//function to transform structure
function the(data, buffer){
    var count = 0;
    var arango_value = [];  //main value array
    var arango_value2 = {}; //array for namepsace nodes
    var arango_edge = [];   //array for all edges
    
    var head = headings;
    
    
    function loop(data, line){            
        var obj = {}
    
        if(data !== null){
            obj = {"_key":count.toString()};
            obj['namespace+id'] = "";
            //console.log(obj._key);
            count ++;
        }
        
        for(key in data){
            
            //console.log(key);
            
            if(key === "prefix"){
              /*  console.log("------------------")
                console.log("get prefix!")
                console.log(data[key])
                console.log(vocab[data[key]])
                console.log(data)
                console.log("------------------")
                */
                obj['namespace'] = vocab[data[key]].namespace;
                                
                var nameHash = obj.namespace.hashCode().toString();
                var isThere = false;
                
                if(arango_value2.length !== 0){
                    for(key2 in arango_value2){
                        if(key2 == nameHash){
                            isThere = true;
                        }
                    }
                }
                
                if(!isThere && nameHash !== undefined){
                    arango_value2[nameHash] = {"_key": nameHash, "label": obj.namespace};
                    arango_edge.push({"_from": 0, "_to": nameHash});
                    //console.log(arango_value2);
                }
                
                obj['namespace+id'] = vocab[data[key]].namespace;                
            }
            
            if(key === 'constant' || key === "propertyName"){
                obj['namespace+id'] += data[key];                
            }
            
            if(key === "column" || key === "literalValue"){
                var test = data[key].value;
                var field = head[test];
                var val = line[field];

                obj[key] = data[key].value;
                obj['value'] = line[field];

                if(!isNaN(obj.value)){
                    obj.value = +obj.value;
                }   

            }else if(Array.isArray(data[key])){
                data[key].forEach(function(entry) {
                    var ArrToObj = {"_from": obj._key, "_to":loop(entry, line)};
                    if(typeof ArrToObj._to != 'undefined'){
                        arango_edge.push(ArrToObj);
                    }
                });
            }else if(typeof data[key] === 'object'){
                var ObjToObj = {"_from": obj._key, "_to":loop(data[key], line)};
                if(typeof ObjToObj._to != 'undefined'){
                    arango_edge.push(ObjToObj);
                }
            }else{
                obj[key] = data[key];
            }
        }
        
        if(data !== null){
            obj['label'] = "";
            
            if(typeof obj.prefix != 'undefined'){
                obj.label = obj.label + obj.prefix + " ";
            }
            
            if(typeof obj.value != 'undefined'){
                obj.label = obj.label + obj.value;
            }
            
            if(typeof obj.propertyName != 'undefined'){
                obj.label = obj.label + ": " + obj.propertyName;
            }    
            
            //handle prefix mapping of keys here.....
            
            if(obj.__type !== "Property"){
                
                if(obj.value !== undefined){
                    obj['namespace+id'] += obj.value.toString();
                    obj['old_key'] = obj._key;
                    obj._key = obj["namespace+id"].hashCode().toString();
                    
                    for(var i = 0; i < arango_edge.length; i++){
                        if(arango_edge[i]._from === obj.old_key){
                            arango_edge[i]._from = obj._key;
                        }else if(arango_edge[i]._to === obj.old_key){
                            arango_edge[i]._to = obj._key;
                        }
                        
                    }
                }
                
                if(obj.namespace !== undefined){
                    arango_edge.push({"_from":obj.namespace.hashCode().toString(), "_to":obj._key});
                }
            }
            
            //End prefix handling of keys
            var existsInSet = false;
            
            for (key in arango_value){
                if(arango_value[key]._key === obj._key){
                    existsInSet = true;
                    break;
                }
            }
            
            if(!existsInSet){
                arango_value.push(obj);
            }
        }
        
        return obj._key;
    };
    
    var rootNode = {"_key":count.toString(), "label": "Start node", "value": "Start node"};
    count ++;
    
    for(var i = 1; i < buffer.length; i++){
    //for(var i = 1; i < 3; i++){
        //console.log(buffer[i][0]);
        arango_edge.push({"_from": 0, "_to":(count).toString()});
        obKey = loop(data, buffer[i]);
        //console.log(obKey);
    }
    
    //delete rootNode.graphRoots;
    arango_value.push(rootNode);
    
    /*Add all namespaces to node collection*/
    for(key in arango_value2){
        arango_value.push(arango_value2[key]);
    }
    
    /*Sort the info so it's easier to read*/
    arango_value.sort(function(a, b) {
        return a._key - b._key;
    });
    
    arango_edge.sort(function(a, b) {
        return a._from - b._from;
    });
    
    
    
    //Save as array with objects
    write_array(arango_value, arango_edge);
    
    //Save one object per line
    //write_object(arango_value, arango_edge);
        
}

function write_array(arangoValue, arangoEdge){
    var fs = require('fs');
    
    var stamp = new Date().toISOString().replace('T', ' ').replace('.', '')
    
    fs.writeFile(stamp + "_arango_value.json", JSON.stringify(arangoValue), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    
    fs.writeFile(stamp + "_arango_edge.json", JSON.stringify(arangoEdge), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

function write_object(arangoValue, arangoEdge){
    var fs = require('fs');
    var stamp = new Date().toISOString().replace('T', ' ').replace('.', '')
    
    //write nodes
    console.log("writing node values to file...");
    for(var i = 0; i < arangoValue.length; i++){
        fs.appendFileSync(stamp + "_arango_value.json", JSON.stringify(arangoValue[i]) + '\n', function(err) {
            if(err) {
                return console.log(err);
            }
            //console.log("The file was started...");
        }); 
    }
    
    console.log("The file \""+stamp+"_arango_value.json\" was saved!");
    console.log("writing edge values to file...");
    
    //Write edges
    for(var i = 0; i < arangoEdge.length; i++){
            fs.appendFileSync(stamp + "_arango_edge.json", JSON.stringify(arangoEdge[i])+'\n', function(err) {
                if(err) {
                    return console.log(err);
                }
                //console.log("The file was started...");
            }); 
    }
    
    console.log("The file \""+stamp+"_arango_edge.json\" was saved!");
}

function run(){
    the(data, buffer);
}