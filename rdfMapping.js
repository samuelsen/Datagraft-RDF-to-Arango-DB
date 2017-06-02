/* Important! data is the value used to map refrence the rdf mapping. Need to be present!*/
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