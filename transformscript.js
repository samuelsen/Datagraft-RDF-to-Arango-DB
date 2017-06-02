/*Data sample 1 - infrarisk*/
const data = {
    "graphURI": "http://www.example.no/#/",
    "graphRoots": [{
        "subElements": [{
                "subElements": [{
                    "subElements": [],
                    "prefix": "Point",
                    "column": {
                        "id": 0,
                        "value": "Number"
                    },
                    "nodeCondition": [],
                    "__type": "ColumnURI",
                    "$$hashKey": "object:913"
            }],
                "prefix": "infrarisk",
                "propertyName": "occurredAtLoc",
                "propertyCondition": [],
                "__type": "Property",
                "$$hashKey": "object:851"
          },
            {
                "subElements": [{
                    "literalValue": {
                        "id": 0,
                        "value": "Began"
                    },
                    "datatype": {
                        "name": "unspecified",
                        "id": 0
                    },
                    "datatypeURI": null,
                    "onError": null,
                    "langTag": null,
                    "onEmpty": null,
                    "$$hashKey": "object:930",
                    "subElements": [],
                    "nodeCondition": [],
                    "__type": "ColumnLiteral"
            }],
                "prefix": "infrarisk",
                "propertyName": "occurredOnDate",
                "propertyCondition": [],
                "__type": "Property",
                "$$hashKey": "object:852"
          },
            {
                "subElements": [{
                    "literalValue": {
                        "id": 0,
                        "value": "Duration_in_Days"
                    },
                    "datatype": {
                        "name": "unspecified",
                        "id": 0
                    },
                    "datatypeURI": null,
                    "onError": null,
                    "langTag": null,
                    "onEmpty": null,
                    "$$hashKey": "object:947",
                    "subElements": [],
                    "nodeCondition": [],
                    "__type": "ColumnLiteral"
           }],
                "prefix": "infrarisk",
                "propertyName": "hasDuration",
                "propertyCondition": [],
                "__type": "Property",
                "$$hashKey": "object:853"
          },
            {
                "subElements": [{
                    "subElements": [],
                    "prefix": "SocietalLoss",
                    "column": {
                        "id": 0,
                        "value": "Number"
                    },
                    "nodeCondition": [],
                    "__type": "ColumnURI",
                    "$$hashKey": "object:964"
                }],
                "prefix": "infrarisk",
                "propertyName": "hadConsequence",
                "propertyCondition": [],
                "__type": "Property",
                "$$hashKey": "object:854"
            }, 
            {
                "subElements": [{
                    "subElements": [],
                    "prefix": "MonetaryLoss",
                    "column": {
                        "id": 0,
                        "value": "Number"
                    },
                    "nodeCondition": [],
                    "__type": "ColumnURI",
                    "$$hashKey": "object:981"
                }],
                "prefix": "infrarisk",
                "propertyName": "hadConsequence",
                "propertyCondition": [],
                "__type": "Property",
                "$$hashKey": "object:855"
            }, {
                "subElements": [{
                    "literalValue": {
                        "id": 0,
                        "value": "Notes_and_Comments"
                    },
                    "datatype": {
                        "name": "unspecified",
                        "id": 0
                    },
                    "datatypeURI": null,
                    "onError": null,
                    "langTag": null,
                    "onEmpty": null,
                    "$$hashKey": "object:998",
                    "subElements": [],
                    "nodeCondition": [],
                    "__type": "ColumnLiteral"
                }],
                "prefix": "infrarisk",
                "propertyName": "hasDescription",
                "propertyCondition": [],
                "__type": "Property",
                "$$hashKey": "object:856"
            }],
        "prefix": "Event",
        "column": {
            "id": 0,
            "value": "Number"
        },
        "nodeCondition": [],
        "__type": "ColumnURI",
        "$$hashKey": "object:776"
    }, 
    {
        "subElements": [{
            "subElements": [{
                "literalValue": {
                    "id": 0,
                    "value": "Dead"
                },
                "datatype": {
                    "name": "unspecified",
                    "id": 0
                },
                "datatypeURI": null,
                "onError": null,
                "langTag": null,
                "onEmpty": null,
                "$$hashKey": "object:1049",
                "subElements": [],
                "nodeCondition": [],
                "__type": "ColumnLiteral"
            }],
            "prefix": "infrarisk",
            "propertyName": "hasFatalitiesSocietalLoss",
            "propertyCondition": [],
            "__type": "Property",
            "$$hashKey": "object:1032"
        }],
        "prefix": "SocietalLoss",
        "column": {
            "id": 0,
            "value": "Number"
        },
        "nodeCondition": [],
        "__type": "ColumnURI",
        "$$hashKey": "object:777"
    }, 
    {
        "subElements": [{
            "subElements": [{
                "literalValue": {
                    "id": 0,
                    "value": "Damage_-USD"
                },
                "datatype": {
                    "name": "unspecified",
                    "id": 0
                },
                "datatypeURI": null,
                "onError": null,
                "langTag": null,
                "onEmpty": null,
                "$$hashKey": "object:1100",
                "subElements": [],
                "nodeCondition": [],
                "__type": "ColumnLiteral"
            }],
            "prefix": "infrarisk",
            "propertyName": "isOfAmountMoney",
            "propertyCondition": [],
            "__type": "Property",
            "$$hashKey": "object:1083"
        }],
        "prefix": "MonetaryLoss",
        "column": {
            "id": 0,
            "value": "Number"
        },
        "nodeCondition": [],
        "__type": "ColumnURI",
        "$$hashKey": "object:778"
    }, 
                   
    {
        "subElements": [{
            "subElements": [{
                "subElements": [],
                "prefix": "geo",
                "constant": "Point",
                "nodeCondition": [],
                "__type": "ConstantURI",
                "$$hashKey": "object:1169"
            }],
            "prefix": "rdf",
            "propertyName": "a",
            "propertyCondition": [],
            "__type": "Property",
            "$$hashKey": "object:1134"
        }, 
        {
            "subElements": [{
                "literalValue": {
                    "id": 0,
                    "value": "Centroid_Y"
                },
                "datatype": {
                    "name": "unspecified",
                    "id": 0
                },
                "datatypeURI": null,
                "onError": null,
                "langTag": null,
                "onEmpty": null,
                "$$hashKey": "object:1186",
                "subElements": [],
                "nodeCondition": [],
                "__type": "ColumnLiteral"
            }],
            "prefix": "geo",
            "propertyName": "lat",
            "propertyCondition": [],
            "__type": "Property",
            "$$hashKey": "object:1135"
        }, 
        {
            "subElements": [{
                "literalValue": {
                    "id": 0,
                    "value": "Centroid_X"
                },
                "datatype": {
                    "name": "unspecified",
                    "id": 0
                },
                "datatypeURI": null,
                "onError": null,
                "langTag": null,
                "onEmpty": null,
                "$$hashKey": "object:1203",
                "subElements": [],
                "nodeCondition": [],
                "__type": "ColumnLiteral"
            }],
            "prefix": "geo",
            "propertyName": "long",
            "propertyCondition": [],
            "__type": "Property",
            "$$hashKey": "object:1136"
        }],
        "prefix": "Point",
        "column": {
            "id": 0,
            "value": "Number"
        },
        "nodeCondition": [],
        "__type": "ColumnURI",
        "$$hashKey": "object:779"
    }, 
    {
        "subElements": [{
            "subElements": [{
                "subElements": [],
                "prefix": "Event",
                "column": {
                    "id": 0,
                    "value": "Number"
                },
                "nodeCondition": [],
                "__type": "ColumnURI",
                "$$hashKey": "object:1263"
            }],
            "prefix": "rdf",
            "propertyName": "a",
            "propertyCondition": [],
            "__type": "Property",
            "$$hashKey": "object:1237"
        }, 
        {
            "subElements": [{
                "literalValue": {
                    "id": 0,
                    "value": "Affected_sq_km"
                },
                "datatype": {
                    "name": "unspecified",
                    "id": 0
                },
                "datatypeURI": null,
                "onError": null,
                "langTag": null,
                "onEmpty": null,
                "$$hashKey": "object:1280",
                "subElements": [],
                "nodeCondition": [],
                "__type": "ColumnLiteral"
            }],
            "prefix": "infrarisk",
            "propertyName": "hasExtent",
            "propertyCondition": [],
            "__type": "Property",
            "$$hashKey": "object:1238"
        }],
        "prefix": "Flood",
        "column": {
            "id": 0,
            "value": "Number"
        },
        "nodeCondition": [],
        "__type": "ColumnURI",
        "$$hashKey": "object:780"
    }],
    "__type": "Graph",
    "$$hashKey": "object:762"
};
const data_vocab = [
    {"name":"sioc","namespace":"http://rdfs.org/sioc/ns","fromServer":true,"properties":[],"classes":[]},{"name":"dc","namespace":"http://purl.org/dc/terms/","fromServer":true,"properties":[],"classes":[]},{"name":"foaf","namespace":"http://xmlns.com/foaf/0.1/","fromServer":true,"properties":[],"classes":[]},{"name":"prov","namespace":"http://www.w3.org/ns/prov#","fromServer":true,"properties":[],"classes":[]},{"name":"time","namespace":"http://www.w3.org/2006/time","fromServer":true,"properties":[],"classes":[]},{"name":"bibo","namespace":"http://purl.org/ontology/bibo/","fromServer":true,"properties":[],"classes":[]},{"name":"rdf","namespace":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","fromServer":true,"properties":[],"classes":[]},{"name":"rss","namespace":"http://purl.org/rss/1.0/","fromServer":true,"properties":[],"classes":[]},{"name":"geo","namespace":"http://www.w3.org/2003/01/geo/wgs84_pos#","fromServer":true,"properties":[],"classes":[]},{"name":"frbr","namespace":"http://purl.org/vocab/frbr/core#","fromServer":true,"properties":[],"classes":[]},{"name":"rdfs","namespace":"http://www.w3.org/2000/01/rdf-schema#","fromServer":true,"properties":[],"classes":[]},{"name":"skos","namespace":"http://www.w3.org/2004/02/skos/core#","fromServer":true,"properties":[],"classes":[]},{"name":"org","namespace":"http://www.w3.org/ns/org#","fromServer":true,"properties":[],"classes":[]},{"name":"owl","namespace":"http://www.w3.org/2002/07/owl#","fromServer":true,"properties":[],"classes":[]},{"name":"Event","namespace":"https://www.infrarisk-fp7.eu/vocabs/#Event/","classes":[{"name":"Event:Soil","lowername":"event:soil"},{"name":"Event:MonetaryLoss","lowername":"event:monetaryloss"},{"name":"Event:Mass","lowername":"event:mass"},{"name":"Event:Bridge","lowername":"event:bridge"},{"name":"Event:Rail","lowername":"event:rail"},{"name":"Event:Point","lowername":"event:point"},{"name":"Event:Line","lowername":"event:line"},{"name":"Event:Earthquake","lowername":"event:earthquake"},{"name":"Event:Embankment","lowername":"event:embankment"},{"name":"Event:Landslide","lowername":"event:landslide"},{"name":"Event:InfrastructureComponentFailure","lowername":"event:infrastructurecomponentfailure"},{"name":"Event:SocietalLoss","lowername":"event:societalloss"},{"name":"Event:Segment","lowername":"event:segment"},{"name":"Event:NaturalHazard","lowername":"event:naturalhazard"},{"name":"Event:Flood","lowername":"event:flood"},{"name":"Event:SoilLandslide","lowername":"event:soillandslide"},{"name":"Event:Infrastructure","lowername":"event:infrastructure"},{"name":"Event:Tunnel","lowername":"event:tunnel"},{"name":"Event:OffRamp","lowername":"event:offramp"},{"name":"Event:Event","lowername":"event:event"},{"name":"Event:Slope","lowername":"event:slope"},{"name":"Event:RockLandslide","lowername":"event:rocklandslide"},{"name":"Event:InfrastructureComponent","lowername":"event:infrastructurecomponent"},{"name":"Event:GeographicalFeature","lowername":"event:geographicalfeature"},{"name":"Event:Consequence","lowername":"event:consequence"},{"name":"Event:Road","lowername":"event:road"},{"name":"Event:Polygon","lowername":"event:polygon"},{"name":"Event:UsabilityProblem","lowername":"event:usabilityproblem"}],"properties":[{"name":"Event:hasHazardMap","lowername":"event:hashazardmap"},{"name":"Event:isOfAmountMoney","lowername":"event:isofamountmoney"},{"name":"Event:hasSlopeGrade","lowername":"event:hasslopegrade"},{"name":"Event:hasSeismicDesign","lowername":"event:hasseismicdesign"},{"name":"Event:hasShapeMap","lowername":"event:hasshapemap"},{"name":"Event:concernsPartialCollapseOfinfrariskCom","lowername":"event:concernspartialcollapseofinfrariskcom"},{"name":"Event:hasWaterLevel","lowername":"event:haswaterlevel"},{"name":"Event:hasFlowVelocity","lowername":"event:hasflowvelocity"},{"name":"Event:hasExtent","lowername":"event:hasextent"},{"name":"Event:resultedInDisplacementOf","lowername":"event:resultedindisplacementof"},{"name":"Event:isOfSoilCatg","lowername":"event:isofsoilcatg"},{"name":"Event:hasInfrariskStructure","lowername":"event:hasinfrariskstructure"},{"name":"Event:isOfRock","lowername":"event:isofrock"},{"name":"Event:hasMagnitude","lowername":"event:hasmagnitude"},{"name":"Event:isOfImportance","lowername":"event:isofimportance"},{"name":"Event:isMadeOfConstMat","lowername":"event:ismadeofconstmat"},{"name":"Event:hasTypology","lowername":"event:hastypology"},{"name":"Event:isOnRock","lowername":"event:isonrock"},{"name":"Event:hasinfrariskCom","lowername":"event:hasinfrariskcom"},{"name":"Event:hasDuration","lowername":"event:hasduration"},{"name":"Event:occurredAtLoc","lowername":"event:occurredatloc"},{"name":"Event:hadConsequence","lowername":"event:hadconsequence"},{"name":"Event:isOfShock","lowername":"event:isofshock"},{"name":"Event:occurredOnDate","lowername":"event:occurredondate"},{"name":"Event:hasShakeMap","lowername":"event:hasshakemap"},{"name":"Event:hasNumberOfLanes","lowername":"event:hasnumberoflanes"},{"name":"Event:hasName","lowername":"event:hasname"},{"name":"Event:isSusceptibleToWaterInf","lowername":"event:issusceptibletowaterinf"},{"name":"Event:hasDepth","lowername":"event:hasdepth"},{"name":"Event:isOnSoil","lowername":"event:isonsoil"},{"name":"Event:hasRunOut","lowername":"event:hasrunout"},{"name":"Event:isFormedBySoil","lowername":"event:isformedbysoil"},{"name":"Event:hasDescription","lowername":"event:hasdescription"},{"name":"Event:hasScourVulneGrade","lowername":"event:hasscourvulnegrade"},{"name":"Event:hasShape","lowername":"event:hasshape"},{"name":"Event:hasInjuriesSocietalLoss","lowername":"event:hasinjuriessocietalloss"},{"name":"Event:hasFaultMechanism","lowername":"event:hasfaultmechanism"},{"name":"Event:hasEvent","lowername":"event:hasevent"},{"name":"Event:hasHeight","lowername":"event:hasheight"},{"name":"Event:hasRiskMap","lowername":"event:hasriskmap"},{"name":"Event:isGeospatiallyDescribedBy","lowername":"event:isgeospatiallydescribedby"},{"name":"Event:concernsFullCollapseOfinfrariskCom","lowername":"event:concernsfullcollapseofinfrariskcom"},{"name":"Event:isOfSoil","lowername":"event:isofsoil"},{"name":"Event:hasBridge","lowername":"event:hasbridge"},{"name":"Event:hasObject","lowername":"event:hasobject"},{"name":"Event:hasFatalitiesSocietalLoss","lowername":"event:hasfatalitiessocietalloss"},{"name":"Event:hasVolume","lowername":"event:hasvolume"},{"name":"Event:hasIntensity","lowername":"event:hasintensity"}],"fromServer":false,"$$hashKey":"object:11864"},{"name":"infrarisk","namespace":"https://www.infrarisk-fp7.eu/vocabs/#","classes":[{"name":"infrarisk:Soil","lowername":"infrarisk:soil"},{"name":"infrarisk:MonetaryLoss","lowername":"infrarisk:monetaryloss"},{"name":"infrarisk:Mass","lowername":"infrarisk:mass"},{"name":"infrarisk:Bridge","lowername":"infrarisk:bridge"},{"name":"infrarisk:Rail","lowername":"infrarisk:rail"},{"name":"infrarisk:Point","lowername":"infrarisk:point"},{"name":"infrarisk:Line","lowername":"infrarisk:line"},{"name":"infrarisk:Earthquake","lowername":"infrarisk:earthquake"},{"name":"infrarisk:Embankment","lowername":"infrarisk:embankment"},{"name":"infrarisk:Landslide","lowername":"infrarisk:landslide"},{"name":"infrarisk:InfrastructureComponentFailure","lowername":"infrarisk:infrastructurecomponentfailure"},{"name":"infrarisk:SocietalLoss","lowername":"infrarisk:societalloss"},{"name":"infrarisk:Segment","lowername":"infrarisk:segment"},{"name":"infrarisk:NaturalHazard","lowername":"infrarisk:naturalhazard"},{"name":"infrarisk:Flood","lowername":"infrarisk:flood"},{"name":"infrarisk:SoilLandslide","lowername":"infrarisk:soillandslide"},{"name":"infrarisk:Infrastructure","lowername":"infrarisk:infrastructure"},{"name":"infrarisk:Tunnel","lowername":"infrarisk:tunnel"},{"name":"infrarisk:OffRamp","lowername":"infrarisk:offramp"},{"name":"infrarisk:Event","lowername":"infrarisk:event"},{"name":"infrarisk:Slope","lowername":"infrarisk:slope"},{"name":"infrarisk:RockLandslide","lowername":"infrarisk:rocklandslide"},{"name":"infrarisk:InfrastructureComponent","lowername":"infrarisk:infrastructurecomponent"},{"name":"infrarisk:GeographicalFeature","lowername":"infrarisk:geographicalfeature"},{"name":"infrarisk:Consequence","lowername":"infrarisk:consequence"},{"name":"infrarisk:Road","lowername":"infrarisk:road"},{"name":"infrarisk:Polygon","lowername":"infrarisk:polygon"},{"name":"infrarisk:UsabilityProblem","lowername":"infrarisk:usabilityproblem"}],"properties":[{"name":"infrarisk:hasHazardMap","lowername":"infrarisk:hashazardmap"},{"name":"infrarisk:isOfAmountMoney","lowername":"infrarisk:isofamountmoney"},{"name":"infrarisk:hasSlopeGrade","lowername":"infrarisk:hasslopegrade"},{"name":"infrarisk:hasSeismicDesign","lowername":"infrarisk:hasseismicdesign"},{"name":"infrarisk:hasShapeMap","lowername":"infrarisk:hasshapemap"},{"name":"infrarisk:concernsPartialCollapseOfinfrariskCom","lowername":"infrarisk:concernspartialcollapseofinfrariskcom"},{"name":"infrarisk:hasWaterLevel","lowername":"infrarisk:haswaterlevel"},{"name":"infrarisk:hasFlowVelocity","lowername":"infrarisk:hasflowvelocity"},{"name":"infrarisk:hasExtent","lowername":"infrarisk:hasextent"},{"name":"infrarisk:resultedInDisplacementOf","lowername":"infrarisk:resultedindisplacementof"},{"name":"infrarisk:isOfSoilCatg","lowername":"infrarisk:isofsoilcatg"},{"name":"infrarisk:hasInfrariskStructure","lowername":"infrarisk:hasinfrariskstructure"},{"name":"infrarisk:isOfRock","lowername":"infrarisk:isofrock"},{"name":"infrarisk:hasMagnitude","lowername":"infrarisk:hasmagnitude"},{"name":"infrarisk:isOfImportance","lowername":"infrarisk:isofimportance"},{"name":"infrarisk:isMadeOfConstMat","lowername":"infrarisk:ismadeofconstmat"},{"name":"infrarisk:hasTypology","lowername":"infrarisk:hastypology"},{"name":"infrarisk:isOnRock","lowername":"infrarisk:isonrock"},{"name":"infrarisk:hasinfrariskCom","lowername":"infrarisk:hasinfrariskcom"},{"name":"infrarisk:hasDuration","lowername":"infrarisk:hasduration"},{"name":"infrarisk:occurredAtLoc","lowername":"infrarisk:occurredatloc"},{"name":"infrarisk:hadConsequence","lowername":"infrarisk:hadconsequence"},{"name":"infrarisk:isOfShock","lowername":"infrarisk:isofshock"},{"name":"infrarisk:occurredOnDate","lowername":"infrarisk:occurredondate"},{"name":"infrarisk:hasShakeMap","lowername":"infrarisk:hasshakemap"},{"name":"infrarisk:hasNumberOfLanes","lowername":"infrarisk:hasnumberoflanes"},{"name":"infrarisk:hasName","lowername":"infrarisk:hasname"},{"name":"infrarisk:isSusceptibleToWaterInf","lowername":"infrarisk:issusceptibletowaterinf"},{"name":"infrarisk:hasDepth","lowername":"infrarisk:hasdepth"},{"name":"infrarisk:isOnSoil","lowername":"infrarisk:isonsoil"},{"name":"infrarisk:hasRunOut","lowername":"infrarisk:hasrunout"},{"name":"infrarisk:isFormedBySoil","lowername":"infrarisk:isformedbysoil"},{"name":"infrarisk:hasDescription","lowername":"infrarisk:hasdescription"},{"name":"infrarisk:hasScourVulneGrade","lowername":"infrarisk:hasscourvulnegrade"},{"name":"infrarisk:hasShape","lowername":"infrarisk:hasshape"},{"name":"infrarisk:hasInjuriesSocietalLoss","lowername":"infrarisk:hasinjuriessocietalloss"},{"name":"infrarisk:hasFaultMechanism","lowername":"infrarisk:hasfaultmechanism"},{"name":"infrarisk:hasEvent","lowername":"infrarisk:hasevent"},{"name":"infrarisk:hasHeight","lowername":"infrarisk:hasheight"},{"name":"infrarisk:hasRiskMap","lowername":"infrarisk:hasriskmap"},{"name":"infrarisk:isGeospatiallyDescribedBy","lowername":"infrarisk:isgeospatiallydescribedby"},{"name":"infrarisk:concernsFullCollapseOfinfrariskCom","lowername":"infrarisk:concernsfullcollapseofinfrariskcom"},{"name":"infrarisk:isOfSoil","lowername":"infrarisk:isofsoil"},{"name":"infrarisk:hasBridge","lowername":"infrarisk:hasbridge"},{"name":"infrarisk:hasObject","lowername":"infrarisk:hasobject"},{"name":"infrarisk:hasFatalitiesSocietalLoss","lowername":"infrarisk:hasfatalitiessocietalloss"},{"name":"infrarisk:hasVolume","lowername":"infrarisk:hasvolume"},{"name":"infrarisk:hasIntensity","lowername":"infrarisk:hasintensity"}],"fromServer":false,"$$hashKey":"object:12352"},{"name":"SocietalLoss","namespace":"https://www.infrarisk-fp7.eu/vocabs/#SocietalLoss/","classes":[{"name":"SocietalLoss:Soil","lowername":"societalloss:soil"},{"name":"SocietalLoss:MonetaryLoss","lowername":"societalloss:monetaryloss"},{"name":"SocietalLoss:Mass","lowername":"societalloss:mass"},{"name":"SocietalLoss:Bridge","lowername":"societalloss:bridge"},{"name":"SocietalLoss:Rail","lowername":"societalloss:rail"},{"name":"SocietalLoss:Point","lowername":"societalloss:point"},{"name":"SocietalLoss:Line","lowername":"societalloss:line"},{"name":"SocietalLoss:Earthquake","lowername":"societalloss:earthquake"},{"name":"SocietalLoss:Embankment","lowername":"societalloss:embankment"},{"name":"SocietalLoss:Landslide","lowername":"societalloss:landslide"},{"name":"SocietalLoss:InfrastructureComponentFailure","lowername":"societalloss:infrastructurecomponentfailure"},{"name":"SocietalLoss:SocietalLoss","lowername":"societalloss:societalloss"},{"name":"SocietalLoss:Segment","lowername":"societalloss:segment"},{"name":"SocietalLoss:NaturalHazard","lowername":"societalloss:naturalhazard"},{"name":"SocietalLoss:Flood","lowername":"societalloss:flood"},{"name":"SocietalLoss:SoilLandslide","lowername":"societalloss:soillandslide"},{"name":"SocietalLoss:Infrastructure","lowername":"societalloss:infrastructure"},{"name":"SocietalLoss:Tunnel","lowername":"societalloss:tunnel"},{"name":"SocietalLoss:OffRamp","lowername":"societalloss:offramp"},{"name":"SocietalLoss:Event","lowername":"societalloss:event"},{"name":"SocietalLoss:Slope","lowername":"societalloss:slope"},{"name":"SocietalLoss:RockLandslide","lowername":"societalloss:rocklandslide"},{"name":"SocietalLoss:InfrastructureComponent","lowername":"societalloss:infrastructurecomponent"},{"name":"SocietalLoss:GeographicalFeature","lowername":"societalloss:geographicalfeature"},{"name":"SocietalLoss:Consequence","lowername":"societalloss:consequence"},{"name":"SocietalLoss:Road","lowername":"societalloss:road"},{"name":"SocietalLoss:Polygon","lowername":"societalloss:polygon"},{"name":"SocietalLoss:UsabilityProblem","lowername":"societalloss:usabilityproblem"}],"properties":[{"name":"SocietalLoss:hasHazardMap","lowername":"societalloss:hashazardmap"},{"name":"SocietalLoss:isOfAmountMoney","lowername":"societalloss:isofamountmoney"},{"name":"SocietalLoss:hasSlopeGrade","lowername":"societalloss:hasslopegrade"},{"name":"SocietalLoss:hasSeismicDesign","lowername":"societalloss:hasseismicdesign"},{"name":"SocietalLoss:hasShapeMap","lowername":"societalloss:hasshapemap"},{"name":"SocietalLoss:concernsPartialCollapseOfinfrariskCom","lowername":"societalloss:concernspartialcollapseofinfrariskcom"},{"name":"SocietalLoss:hasWaterLevel","lowername":"societalloss:haswaterlevel"},{"name":"SocietalLoss:hasFlowVelocity","lowername":"societalloss:hasflowvelocity"},{"name":"SocietalLoss:hasExtent","lowername":"societalloss:hasextent"},{"name":"SocietalLoss:resultedInDisplacementOf","lowername":"societalloss:resultedindisplacementof"},{"name":"SocietalLoss:isOfSoilCatg","lowername":"societalloss:isofsoilcatg"},{"name":"SocietalLoss:hasInfrariskStructure","lowername":"societalloss:hasinfrariskstructure"},{"name":"SocietalLoss:isOfRock","lowername":"societalloss:isofrock"},{"name":"SocietalLoss:hasMagnitude","lowername":"societalloss:hasmagnitude"},{"name":"SocietalLoss:isOfImportance","lowername":"societalloss:isofimportance"},{"name":"SocietalLoss:isMadeOfConstMat","lowername":"societalloss:ismadeofconstmat"},{"name":"SocietalLoss:hasTypology","lowername":"societalloss:hastypology"},{"name":"SocietalLoss:isOnRock","lowername":"societalloss:isonrock"},{"name":"SocietalLoss:hasinfrariskCom","lowername":"societalloss:hasinfrariskcom"},{"name":"SocietalLoss:hasDuration","lowername":"societalloss:hasduration"},{"name":"SocietalLoss:occurredAtLoc","lowername":"societalloss:occurredatloc"},{"name":"SocietalLoss:hadConsequence","lowername":"societalloss:hadconsequence"},{"name":"SocietalLoss:isOfShock","lowername":"societalloss:isofshock"},{"name":"SocietalLoss:occurredOnDate","lowername":"societalloss:occurredondate"},{"name":"SocietalLoss:hasShakeMap","lowername":"societalloss:hasshakemap"},{"name":"SocietalLoss:hasNumberOfLanes","lowername":"societalloss:hasnumberoflanes"},{"name":"SocietalLoss:hasName","lowername":"societalloss:hasname"},{"name":"SocietalLoss:isSusceptibleToWaterInf","lowername":"societalloss:issusceptibletowaterinf"},{"name":"SocietalLoss:hasDepth","lowername":"societalloss:hasdepth"},{"name":"SocietalLoss:isOnSoil","lowername":"societalloss:isonsoil"},{"name":"SocietalLoss:hasRunOut","lowername":"societalloss:hasrunout"},{"name":"SocietalLoss:isFormedBySoil","lowername":"societalloss:isformedbysoil"},{"name":"SocietalLoss:hasDescription","lowername":"societalloss:hasdescription"},{"name":"SocietalLoss:hasScourVulneGrade","lowername":"societalloss:hasscourvulnegrade"},{"name":"SocietalLoss:hasShape","lowername":"societalloss:hasshape"},{"name":"SocietalLoss:hasInjuriesSocietalLoss","lowername":"societalloss:hasinjuriessocietalloss"},{"name":"SocietalLoss:hasFaultMechanism","lowername":"societalloss:hasfaultmechanism"},{"name":"SocietalLoss:hasEvent","lowername":"societalloss:hasevent"},{"name":"SocietalLoss:hasHeight","lowername":"societalloss:hasheight"},{"name":"SocietalLoss:hasRiskMap","lowername":"societalloss:hasriskmap"},{"name":"SocietalLoss:isGeospatiallyDescribedBy","lowername":"societalloss:isgeospatiallydescribedby"},{"name":"SocietalLoss:concernsFullCollapseOfinfrariskCom","lowername":"societalloss:concernsfullcollapseofinfrariskcom"},{"name":"SocietalLoss:isOfSoil","lowername":"societalloss:isofsoil"},{"name":"SocietalLoss:hasBridge","lowername":"societalloss:hasbridge"},{"name":"SocietalLoss:hasObject","lowername":"societalloss:hasobject"},{"name":"SocietalLoss:hasFatalitiesSocietalLoss","lowername":"societalloss:hasfatalitiessocietalloss"},{"name":"SocietalLoss:hasVolume","lowername":"societalloss:hasvolume"},{"name":"SocietalLoss:hasIntensity","lowername":"societalloss:hasintensity"}],"fromServer":false,"$$hashKey":"object:12646"},{"name":"MonetaryLoss","namespace":"https://www.infrarisk-fp7.eu/vocabs/#MonetaryLoss/","classes":[{"name":"MonetaryLoss:Soil","lowername":"monetaryloss:soil"},{"name":"MonetaryLoss:MonetaryLoss","lowername":"monetaryloss:monetaryloss"},{"name":"MonetaryLoss:Mass","lowername":"monetaryloss:mass"},{"name":"MonetaryLoss:Bridge","lowername":"monetaryloss:bridge"},{"name":"MonetaryLoss:Rail","lowername":"monetaryloss:rail"},{"name":"MonetaryLoss:Point","lowername":"monetaryloss:point"},{"name":"MonetaryLoss:Line","lowername":"monetaryloss:line"},{"name":"MonetaryLoss:Earthquake","lowername":"monetaryloss:earthquake"},{"name":"MonetaryLoss:Embankment","lowername":"monetaryloss:embankment"},{"name":"MonetaryLoss:Landslide","lowername":"monetaryloss:landslide"},{"name":"MonetaryLoss:InfrastructureComponentFailure","lowername":"monetaryloss:infrastructurecomponentfailure"},{"name":"MonetaryLoss:SocietalLoss","lowername":"monetaryloss:societalloss"},{"name":"MonetaryLoss:Segment","lowername":"monetaryloss:segment"},{"name":"MonetaryLoss:NaturalHazard","lowername":"monetaryloss:naturalhazard"},{"name":"MonetaryLoss:Flood","lowername":"monetaryloss:flood"},{"name":"MonetaryLoss:SoilLandslide","lowername":"monetaryloss:soillandslide"},{"name":"MonetaryLoss:Infrastructure","lowername":"monetaryloss:infrastructure"},{"name":"MonetaryLoss:Tunnel","lowername":"monetaryloss:tunnel"},{"name":"MonetaryLoss:OffRamp","lowername":"monetaryloss:offramp"},{"name":"MonetaryLoss:Event","lowername":"monetaryloss:event"},{"name":"MonetaryLoss:Slope","lowername":"monetaryloss:slope"},{"name":"MonetaryLoss:RockLandslide","lowername":"monetaryloss:rocklandslide"},{"name":"MonetaryLoss:InfrastructureComponent","lowername":"monetaryloss:infrastructurecomponent"},{"name":"MonetaryLoss:GeographicalFeature","lowername":"monetaryloss:geographicalfeature"},{"name":"MonetaryLoss:Consequence","lowername":"monetaryloss:consequence"},{"name":"MonetaryLoss:Road","lowername":"monetaryloss:road"},{"name":"MonetaryLoss:Polygon","lowername":"monetaryloss:polygon"},{"name":"MonetaryLoss:UsabilityProblem","lowername":"monetaryloss:usabilityproblem"}],"properties":[{"name":"MonetaryLoss:hasHazardMap","lowername":"monetaryloss:hashazardmap"},{"name":"MonetaryLoss:isOfAmountMoney","lowername":"monetaryloss:isofamountmoney"},{"name":"MonetaryLoss:hasSlopeGrade","lowername":"monetaryloss:hasslopegrade"},{"name":"MonetaryLoss:hasSeismicDesign","lowername":"monetaryloss:hasseismicdesign"},{"name":"MonetaryLoss:hasShapeMap","lowername":"monetaryloss:hasshapemap"},{"name":"MonetaryLoss:concernsPartialCollapseOfinfrariskCom","lowername":"monetaryloss:concernspartialcollapseofinfrariskcom"},{"name":"MonetaryLoss:hasWaterLevel","lowername":"monetaryloss:haswaterlevel"},{"name":"MonetaryLoss:hasFlowVelocity","lowername":"monetaryloss:hasflowvelocity"},{"name":"MonetaryLoss:hasExtent","lowername":"monetaryloss:hasextent"},{"name":"MonetaryLoss:resultedInDisplacementOf","lowername":"monetaryloss:resultedindisplacementof"},{"name":"MonetaryLoss:isOfSoilCatg","lowername":"monetaryloss:isofsoilcatg"},{"name":"MonetaryLoss:hasInfrariskStructure","lowername":"monetaryloss:hasinfrariskstructure"},{"name":"MonetaryLoss:isOfRock","lowername":"monetaryloss:isofrock"},{"name":"MonetaryLoss:hasMagnitude","lowername":"monetaryloss:hasmagnitude"},{"name":"MonetaryLoss:isOfImportance","lowername":"monetaryloss:isofimportance"},{"name":"MonetaryLoss:isMadeOfConstMat","lowername":"monetaryloss:ismadeofconstmat"},{"name":"MonetaryLoss:hasTypology","lowername":"monetaryloss:hastypology"},{"name":"MonetaryLoss:isOnRock","lowername":"monetaryloss:isonrock"},{"name":"MonetaryLoss:hasinfrariskCom","lowername":"monetaryloss:hasinfrariskcom"},{"name":"MonetaryLoss:hasDuration","lowername":"monetaryloss:hasduration"},{"name":"MonetaryLoss:occurredAtLoc","lowername":"monetaryloss:occurredatloc"},{"name":"MonetaryLoss:hadConsequence","lowername":"monetaryloss:hadconsequence"},{"name":"MonetaryLoss:isOfShock","lowername":"monetaryloss:isofshock"},{"name":"MonetaryLoss:occurredOnDate","lowername":"monetaryloss:occurredondate"},{"name":"MonetaryLoss:hasShakeMap","lowername":"monetaryloss:hasshakemap"},{"name":"MonetaryLoss:hasNumberOfLanes","lowername":"monetaryloss:hasnumberoflanes"},{"name":"MonetaryLoss:hasName","lowername":"monetaryloss:hasname"},{"name":"MonetaryLoss:isSusceptibleToWaterInf","lowername":"monetaryloss:issusceptibletowaterinf"},{"name":"MonetaryLoss:hasDepth","lowername":"monetaryloss:hasdepth"},{"name":"MonetaryLoss:isOnSoil","lowername":"monetaryloss:isonsoil"},{"name":"MonetaryLoss:hasRunOut","lowername":"monetaryloss:hasrunout"},{"name":"MonetaryLoss:isFormedBySoil","lowername":"monetaryloss:isformedbysoil"},{"name":"MonetaryLoss:hasDescription","lowername":"monetaryloss:hasdescription"},{"name":"MonetaryLoss:hasScourVulneGrade","lowername":"monetaryloss:hasscourvulnegrade"},{"name":"MonetaryLoss:hasShape","lowername":"monetaryloss:hasshape"},{"name":"MonetaryLoss:hasInjuriesSocietalLoss","lowername":"monetaryloss:hasinjuriessocietalloss"},{"name":"MonetaryLoss:hasFaultMechanism","lowername":"monetaryloss:hasfaultmechanism"},{"name":"MonetaryLoss:hasEvent","lowername":"monetaryloss:hasevent"},{"name":"MonetaryLoss:hasHeight","lowername":"monetaryloss:hasheight"},{"name":"MonetaryLoss:hasRiskMap","lowername":"monetaryloss:hasriskmap"},{"name":"MonetaryLoss:isGeospatiallyDescribedBy","lowername":"monetaryloss:isgeospatiallydescribedby"},{"name":"MonetaryLoss:concernsFullCollapseOfinfrariskCom","lowername":"monetaryloss:concernsfullcollapseofinfrariskcom"},{"name":"MonetaryLoss:isOfSoil","lowername":"monetaryloss:isofsoil"},{"name":"MonetaryLoss:hasBridge","lowername":"monetaryloss:hasbridge"},{"name":"MonetaryLoss:hasObject","lowername":"monetaryloss:hasobject"},{"name":"MonetaryLoss:hasFatalitiesSocietalLoss","lowername":"monetaryloss:hasfatalitiessocietalloss"},{"name":"MonetaryLoss:hasVolume","lowername":"monetaryloss:hasvolume"},{"name":"MonetaryLoss:hasIntensity","lowername":"monetaryloss:hasintensity"}],"fromServer":false,"$$hashKey":"object:12951"},{"name":"Flood","namespace":"https://www.infrarisk-fp7.eu/vocabs/#Flood/","classes":[{"name":"Flood:Soil","lowername":"flood:soil"},{"name":"Flood:MonetaryLoss","lowername":"flood:monetaryloss"},{"name":"Flood:Mass","lowername":"flood:mass"},{"name":"Flood:Bridge","lowername":"flood:bridge"},{"name":"Flood:Rail","lowername":"flood:rail"},{"name":"Flood:Point","lowername":"flood:point"},{"name":"Flood:Line","lowername":"flood:line"},{"name":"Flood:Earthquake","lowername":"flood:earthquake"},{"name":"Flood:Embankment","lowername":"flood:embankment"},{"name":"Flood:Landslide","lowername":"flood:landslide"},{"name":"Flood:InfrastructureComponentFailure","lowername":"flood:infrastructurecomponentfailure"},{"name":"Flood:SocietalLoss","lowername":"flood:societalloss"},{"name":"Flood:Segment","lowername":"flood:segment"},{"name":"Flood:NaturalHazard","lowername":"flood:naturalhazard"},{"name":"Flood:Flood","lowername":"flood:flood"},{"name":"Flood:SoilLandslide","lowername":"flood:soillandslide"},{"name":"Flood:Infrastructure","lowername":"flood:infrastructure"},{"name":"Flood:Tunnel","lowername":"flood:tunnel"},{"name":"Flood:OffRamp","lowername":"flood:offramp"},{"name":"Flood:Event","lowername":"flood:event"},{"name":"Flood:Slope","lowername":"flood:slope"},{"name":"Flood:RockLandslide","lowername":"flood:rocklandslide"},{"name":"Flood:InfrastructureComponent","lowername":"flood:infrastructurecomponent"},{"name":"Flood:GeographicalFeature","lowername":"flood:geographicalfeature"},{"name":"Flood:Consequence","lowername":"flood:consequence"},{"name":"Flood:Road","lowername":"flood:road"},{"name":"Flood:Polygon","lowername":"flood:polygon"},{"name":"Flood:UsabilityProblem","lowername":"flood:usabilityproblem"}],"properties":[{"name":"Flood:hasHazardMap","lowername":"flood:hashazardmap"},{"name":"Flood:isOfAmountMoney","lowername":"flood:isofamountmoney"},{"name":"Flood:hasSlopeGrade","lowername":"flood:hasslopegrade"},{"name":"Flood:hasSeismicDesign","lowername":"flood:hasseismicdesign"},{"name":"Flood:hasShapeMap","lowername":"flood:hasshapemap"},{"name":"Flood:concernsPartialCollapseOfinfrariskCom","lowername":"flood:concernspartialcollapseofinfrariskcom"},{"name":"Flood:hasWaterLevel","lowername":"flood:haswaterlevel"},{"name":"Flood:hasFlowVelocity","lowername":"flood:hasflowvelocity"},{"name":"Flood:hasExtent","lowername":"flood:hasextent"},{"name":"Flood:resultedInDisplacementOf","lowername":"flood:resultedindisplacementof"},{"name":"Flood:isOfSoilCatg","lowername":"flood:isofsoilcatg"},{"name":"Flood:hasInfrariskStructure","lowername":"flood:hasinfrariskstructure"},{"name":"Flood:isOfRock","lowername":"flood:isofrock"},{"name":"Flood:hasMagnitude","lowername":"flood:hasmagnitude"},{"name":"Flood:isOfImportance","lowername":"flood:isofimportance"},{"name":"Flood:isMadeOfConstMat","lowername":"flood:ismadeofconstmat"},{"name":"Flood:hasTypology","lowername":"flood:hastypology"},{"name":"Flood:isOnRock","lowername":"flood:isonrock"},{"name":"Flood:hasinfrariskCom","lowername":"flood:hasinfrariskcom"},{"name":"Flood:hasDuration","lowername":"flood:hasduration"},{"name":"Flood:occurredAtLoc","lowername":"flood:occurredatloc"},{"name":"Flood:hadConsequence","lowername":"flood:hadconsequence"},{"name":"Flood:isOfShock","lowername":"flood:isofshock"},{"name":"Flood:occurredOnDate","lowername":"flood:occurredondate"},{"name":"Flood:hasShakeMap","lowername":"flood:hasshakemap"},{"name":"Flood:hasNumberOfLanes","lowername":"flood:hasnumberoflanes"},{"name":"Flood:hasName","lowername":"flood:hasname"},{"name":"Flood:isSusceptibleToWaterInf","lowername":"flood:issusceptibletowaterinf"},{"name":"Flood:hasDepth","lowername":"flood:hasdepth"},{"name":"Flood:isOnSoil","lowername":"flood:isonsoil"},{"name":"Flood:hasRunOut","lowername":"flood:hasrunout"},{"name":"Flood:isFormedBySoil","lowername":"flood:isformedbysoil"},{"name":"Flood:hasDescription","lowername":"flood:hasdescription"},{"name":"Flood:hasScourVulneGrade","lowername":"flood:hasscourvulnegrade"},{"name":"Flood:hasShape","lowername":"flood:hasshape"},{"name":"Flood:hasInjuriesSocietalLoss","lowername":"flood:hasinjuriessocietalloss"},{"name":"Flood:hasFaultMechanism","lowername":"flood:hasfaultmechanism"},{"name":"Flood:hasEvent","lowername":"flood:hasevent"},{"name":"Flood:hasHeight","lowername":"flood:hasheight"},{"name":"Flood:hasRiskMap","lowername":"flood:hasriskmap"},{"name":"Flood:isGeospatiallyDescribedBy","lowername":"flood:isgeospatiallydescribedby"},{"name":"Flood:concernsFullCollapseOfinfrariskCom","lowername":"flood:concernsfullcollapseofinfrariskcom"},{"name":"Flood:isOfSoil","lowername":"flood:isofsoil"},{"name":"Flood:hasBridge","lowername":"flood:hasbridge"},{"name":"Flood:hasObject","lowername":"flood:hasobject"},{"name":"Flood:hasFatalitiesSocietalLoss","lowername":"flood:hasfatalitiessocietalloss"},{"name":"Flood:hasVolume","lowername":"flood:hasvolume"},{"name":"Flood:hasIntensity","lowername":"flood:hasintensity"}],"fromServer":false,"$$hashKey":"object:13267"},{"name":"Point","namespace":"https://www.infrarisk-fp7.eu/vocabs/#Point","classes":[{"name":"Point:Soil","lowername":"point:soil"},{"name":"Point:MonetaryLoss","lowername":"point:monetaryloss"},{"name":"Point:Mass","lowername":"point:mass"},{"name":"Point:Bridge","lowername":"point:bridge"},{"name":"Point:Rail","lowername":"point:rail"},{"name":"Point:Point","lowername":"point:point"},{"name":"Point:Line","lowername":"point:line"},{"name":"Point:Earthquake","lowername":"point:earthquake"},{"name":"Point:Embankment","lowername":"point:embankment"},{"name":"Point:Landslide","lowername":"point:landslide"},{"name":"Point:InfrastructureComponentFailure","lowername":"point:infrastructurecomponentfailure"},{"name":"Point:SocietalLoss","lowername":"point:societalloss"},{"name":"Point:Segment","lowername":"point:segment"},{"name":"Point:NaturalHazard","lowername":"point:naturalhazard"},{"name":"Point:Flood","lowername":"point:flood"},{"name":"Point:SoilLandslide","lowername":"point:soillandslide"},{"name":"Point:Infrastructure","lowername":"point:infrastructure"},{"name":"Point:Tunnel","lowername":"point:tunnel"},{"name":"Point:OffRamp","lowername":"point:offramp"},{"name":"Point:Event","lowername":"point:event"},{"name":"Point:Slope","lowername":"point:slope"},{"name":"Point:RockLandslide","lowername":"point:rocklandslide"},{"name":"Point:InfrastructureComponent","lowername":"point:infrastructurecomponent"},{"name":"Point:GeographicalFeature","lowername":"point:geographicalfeature"},{"name":"Point:Consequence","lowername":"point:consequence"},{"name":"Point:Road","lowername":"point:road"},{"name":"Point:Polygon","lowername":"point:polygon"},{"name":"Point:UsabilityProblem","lowername":"point:usabilityproblem"}],"properties":[{"name":"Point:hasHazardMap","lowername":"point:hashazardmap"},{"name":"Point:isOfAmountMoney","lowername":"point:isofamountmoney"},{"name":"Point:hasSlopeGrade","lowername":"point:hasslopegrade"},{"name":"Point:hasSeismicDesign","lowername":"point:hasseismicdesign"},{"name":"Point:hasShapeMap","lowername":"point:hasshapemap"},{"name":"Point:concernsPartialCollapseOfinfrariskCom","lowername":"point:concernspartialcollapseofinfrariskcom"},{"name":"Point:hasWaterLevel","lowername":"point:haswaterlevel"},{"name":"Point:hasFlowVelocity","lowername":"point:hasflowvelocity"},{"name":"Point:hasExtent","lowername":"point:hasextent"},{"name":"Point:resultedInDisplacementOf","lowername":"point:resultedindisplacementof"},{"name":"Point:isOfSoilCatg","lowername":"point:isofsoilcatg"},{"name":"Point:hasInfrariskStructure","lowername":"point:hasinfrariskstructure"},{"name":"Point:isOfRock","lowername":"point:isofrock"},{"name":"Point:hasMagnitude","lowername":"point:hasmagnitude"},{"name":"Point:isOfImportance","lowername":"point:isofimportance"},{"name":"Point:isMadeOfConstMat","lowername":"point:ismadeofconstmat"},{"name":"Point:hasTypology","lowername":"point:hastypology"},{"name":"Point:isOnRock","lowername":"point:isonrock"},{"name":"Point:hasinfrariskCom","lowername":"point:hasinfrariskcom"},{"name":"Point:hasDuration","lowername":"point:hasduration"},{"name":"Point:occurredAtLoc","lowername":"point:occurredatloc"},{"name":"Point:hadConsequence","lowername":"point:hadconsequence"},{"name":"Point:isOfShock","lowername":"point:isofshock"},{"name":"Point:occurredOnDate","lowername":"point:occurredondate"},{"name":"Point:hasShakeMap","lowername":"point:hasshakemap"},{"name":"Point:hasNumberOfLanes","lowername":"point:hasnumberoflanes"},{"name":"Point:hasName","lowername":"point:hasname"},{"name":"Point:isSusceptibleToWaterInf","lowername":"point:issusceptibletowaterinf"},{"name":"Point:hasDepth","lowername":"point:hasdepth"},{"name":"Point:isOnSoil","lowername":"point:isonsoil"},{"name":"Point:hasRunOut","lowername":"point:hasrunout"},{"name":"Point:isFormedBySoil","lowername":"point:isformedbysoil"},{"name":"Point:hasDescription","lowername":"point:hasdescription"},{"name":"Point:hasScourVulneGrade","lowername":"point:hasscourvulnegrade"},{"name":"Point:hasShape","lowername":"point:hasshape"},{"name":"Point:hasInjuriesSocietalLoss","lowername":"point:hasinjuriessocietalloss"},{"name":"Point:hasFaultMechanism","lowername":"point:hasfaultmechanism"},{"name":"Point:hasEvent","lowername":"point:hasevent"},{"name":"Point:hasHeight","lowername":"point:hasheight"},{"name":"Point:hasRiskMap","lowername":"point:hasriskmap"},{"name":"Point:isGeospatiallyDescribedBy","lowername":"point:isgeospatiallydescribedby"},{"name":"Point:concernsFullCollapseOfinfrariskCom","lowername":"point:concernsfullcollapseofinfrariskcom"},{"name":"Point:isOfSoil","lowername":"point:isofsoil"},{"name":"Point:hasBridge","lowername":"point:hasbridge"},{"name":"Point:hasObject","lowername":"point:hasobject"},{"name":"Point:hasFatalitiesSocietalLoss","lowername":"point:hasfatalitiessocietalloss"},{"name":"Point:hasVolume","lowername":"point:hasvolume"},{"name":"Point:hasIntensity","lowername":"point:hasintensity"}],"fromServer":false,"$$hashKey":"object:14802"},{"name":"sioc","namespace":"http://rdfs.org/sioc/ns","fromServer":true,"properties":[],"classes":[]},{"name":"dc","namespace":"http://purl.org/dc/terms/","fromServer":true,"properties":[],"classes":[]},{"name":"foaf","namespace":"http://xmlns.com/foaf/0.1/","fromServer":true,"properties":[],"classes":[]},{"name":"prov","namespace":"http://www.w3.org/ns/prov#","fromServer":true,"properties":[],"classes":[]},{"name":"time","namespace":"http://www.w3.org/2006/time","fromServer":true,"properties":[],"classes":[]},{"name":"bibo","namespace":"http://purl.org/ontology/bibo/","fromServer":true,"properties":[],"classes":[]},{"name":"rdf","namespace":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","fromServer":true,"properties":[],"classes":[]},{"name":"rss","namespace":"http://purl.org/rss/1.0/","fromServer":true,"properties":[],"classes":[]},{"name":"geo","namespace":"http://www.w3.org/2003/01/geo/wgs84_pos#","fromServer":true,"properties":[],"classes":[]},{"name":"frbr","namespace":"http://purl.org/vocab/frbr/core#","fromServer":true,"properties":[],"classes":[]},{"name":"rdfs","namespace":"http://www.w3.org/2000/01/rdf-schema#","fromServer":true,"properties":[],"classes":[]},{"name":"skos","namespace":"http://www.w3.org/2004/02/skos/core#","fromServer":true,"properties":[],"classes":[]},{"name":"org","namespace":"http://www.w3.org/ns/org#","fromServer":true,"properties":[],"classes":[]},{"name":"owl","namespace":"http://www.w3.org/2002/07/owl#","fromServer":true,"properties":[],"classes":[]},{"name":"sioc","namespace":"http://rdfs.org/sioc/ns","fromServer":true,"properties":[],"classes":[]},{"name":"dc","namespace":"http://purl.org/dc/terms/","fromServer":true,"properties":[],"classes":[]},{"name":"foaf","namespace":"http://xmlns.com/foaf/0.1/","fromServer":true,"properties":[],"classes":[]},{"name":"prov","namespace":"http://www.w3.org/ns/prov#","fromServer":true,"properties":[],"classes":[]},{"name":"time","namespace":"http://www.w3.org/2006/time","fromServer":true,"properties":[],"classes":[]},{"name":"bibo","namespace":"http://purl.org/ontology/bibo/","fromServer":true,"properties":[],"classes":[]},{"name":"rdf","namespace":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","fromServer":true,"properties":[],"classes":[]},{"name":"rss","namespace":"http://purl.org/rss/1.0/","fromServer":true,"properties":[],"classes":[]},{"name":"geo","namespace":"http://www.w3.org/2003/01/geo/wgs84_pos#","fromServer":true,"properties":[],"classes":[]},{"name":"frbr","namespace":"http://purl.org/vocab/frbr/core#","fromServer":true,"properties":[],"classes":[]},{"name":"rdfs","namespace":"http://www.w3.org/2000/01/rdf-schema#","fromServer":true,"properties":[],"classes":[]},{"name":"skos","namespace":"http://www.w3.org/2004/02/skos/core#","fromServer":true,"properties":[],"classes":[]},{"name":"org","namespace":"http://www.w3.org/ns/org#","fromServer":true,"properties":[],"classes":[]},{"name":"owl","namespace":"http://www.w3.org/2002/07/owl#","fromServer":true,"properties":[],"classes":[]},{"name":"sioc","namespace":"http://rdfs.org/sioc/ns","fromServer":true,"properties":[],"classes":[]},{"name":"dc","namespace":"http://purl.org/dc/terms/","fromServer":true,"properties":[],"classes":[]},{"name":"foaf","namespace":"http://xmlns.com/foaf/0.1/","fromServer":true,"properties":[],"classes":[]},{"name":"prov","namespace":"http://www.w3.org/ns/prov#","fromServer":true,"properties":[],"classes":[]},{"name":"time","namespace":"http://www.w3.org/2006/time","fromServer":true,"properties":[],"classes":[]},{"name":"bibo","namespace":"http://purl.org/ontology/bibo/","fromServer":true,"properties":[],"classes":[]},{"name":"rdf","namespace":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","fromServer":true,"properties":[],"classes":[]},{"name":"rss","namespace":"http://purl.org/rss/1.0/","fromServer":true,"properties":[],"classes":[]},{"name":"geo","namespace":"http://www.w3.org/2003/01/geo/wgs84_pos#","fromServer":true,"properties":[],"classes":[]},{"name":"frbr","namespace":"http://purl.org/vocab/frbr/core#","fromServer":true,"properties":[],"classes":[]},{"name":"rdfs","namespace":"http://www.w3.org/2000/01/rdf-schema#","fromServer":true,"properties":[],"classes":[]},{"name":"skos","namespace":"http://www.w3.org/2004/02/skos/core#","fromServer":true,"properties":[],"classes":[]},{"name":"org","namespace":"http://www.w3.org/ns/org#","fromServer":true,"properties":[],"classes":[]},{"name":"owl","namespace":"http://www.w3.org/2002/07/owl#","fromServer":true,"properties":[],"classes":[]},{"name":"sioc","namespace":"http://rdfs.org/sioc/ns","fromServer":true,"properties":[],"classes":[]},{"name":"dc","namespace":"http://purl.org/dc/terms/","fromServer":true,"properties":[],"classes":[]},{"name":"foaf","namespace":"http://xmlns.com/foaf/0.1/","fromServer":true,"properties":[],"classes":[]},{"name":"prov","namespace":"http://www.w3.org/ns/prov#","fromServer":true,"properties":[],"classes":[]},{"name":"time","namespace":"http://www.w3.org/2006/time","fromServer":true,"properties":[],"classes":[]},{"name":"bibo","namespace":"http://purl.org/ontology/bibo/","fromServer":true,"properties":[],"classes":[]},{"name":"rdf","namespace":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","fromServer":true,"properties":[],"classes":[]},{"name":"rss","namespace":"http://purl.org/rss/1.0/","fromServer":true,"properties":[],"classes":[]},{"name":"geo","namespace":"http://www.w3.org/2003/01/geo/wgs84_pos#","fromServer":true,"properties":[],"classes":[]},{"name":"frbr","namespace":"http://purl.org/vocab/frbr/core#","fromServer":true,"properties":[],"classes":[]},{"name":"rdfs","namespace":"http://www.w3.org/2000/01/rdf-schema#","fromServer":true,"properties":[],"classes":[]},{"name":"skos","namespace":"http://www.w3.org/2004/02/skos/core#","fromServer":true,"properties":[],"classes":[]},{"name":"org","namespace":"http://www.w3.org/ns/org#","fromServer":true,"properties":[],"classes":[]},{"name":"owl","namespace":"http://www.w3.org/2002/07/owl#","fromServer":true,"properties":[],"classes":[]}
];

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
    //write_array(arango_value, arango_edge);
    
    //Save one object per line
    write_object(arango_value, arango_edge);
        
}

function write_array(arangoValue, arangoEdge){
    var fs = require('fs');
    fs.writeFile("arango_value2.json", JSON.stringify(arangoValue), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    
    fs.writeFile("arango_edge2.json", JSON.stringify(arangoEdge), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

function write_object(arangoValue, arangoEdge){
    var fs = require('fs');
    
    //write nodes
    console.log("writing node values to file...");
    for(var i = 0; i < arangoValue.length; i++){
        fs.appendFileSync("arango_value.json", JSON.stringify(arangoValue[i]) + '\n', function(err) {
            if(err) {
                return console.log(err);
            }
            //console.log("The file was started...");
        }); 
    }
    
    console.log("The file \"arango_value.json\" was saved!");
    console.log("writing edge values to file...");
    
    //Write edges
    for(var i = 0; i < arangoEdge.length; i++){
            fs.appendFileSync("arango_edge.json", JSON.stringify(arangoEdge[i])+'\n', function(err) {
                if(err) {
                    return console.log(err);
                }
                //console.log("The file was started...");
            }); 
    }
    
    console.log("The file \"arango_edge.json\" was saved!");
}

function run(){
    the(data, buffer);
}