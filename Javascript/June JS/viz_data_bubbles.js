{
    "dataDictionary": {
        "dataColumns": [
            {
                "dataType": "real", 
                "dataValues": [
                    32850.0, 
                    66772.0, 
                    73151.0, 
                    35710.0, 
                    95926.0, 
                    75578.0, 
                    24031.0, 
                    78162.0, 
                    84904.0, 
                    35899.0, 
                    62248.0, 
                    128311.0, 
                    26269.0
                ]
            }, 
            {
                "dataType": "cstring", 
                "dataValues": [
                    "Tea", 
                    "Herbal Tea", 
                    "Espresso", 
                    "Coffee", 
                    "Green Tea", 
                    "Earl Grey", 
                    "Darjeeling", 
                    "Mint", 
                    "Lemon", 
                    "Chamomile", 
                    "Regular Espresso", 
                    "Decaf Espresso", 
                    "Caffe Mocha", 
                    "Caffe Latte", 
                    "Decaf Irish Cream", 
                    "Colombian", 
                    "Amaretto"
                ]
            }
        ]
    }, 
    "vizData": {
        "refLineTips": [], 
        "vizColumns": [
            {
                "tupleIds": [
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13
                ], 
                "indexOffset": 0, 
                "valueIndices": [], 
                "aliasIndices": [], 
                "formatStrings": [], 
                "isAutoSelect": false, 
                "fnDisagg": "", 
                "fn": "[system:visual].[tuple_id]"
            }, 
            {
                "tupleIds": [], 
                "baseColumnName": "[Sample - Coffee Chain (Access)].[Product Type]", 
                "datasourceCaption": "Sample - Coffee Chain (Access)", 
                "indexOffset": 0, 
                "fieldCaption": "Product Type", 
                "stringCollation": {
                    "charsetId": 0, 
                    "name": "LEN_RUS_S2_WO"
                }, 
                "dataType": "cstring", 
                "aliasIndices": [
                    0, 
                    0, 
                    0, 
                    1, 
                    1, 
                    1, 
                    2, 
                    2, 
                    2, 
                    2, 
                    3, 
                    3, 
                    3
                ], 
                "valueIndices": [], 
                "fn": "[Sample - Coffee Chain (Access)].[none:Product Type:nk]", 
                "formatStrings": [], 
                "isAutoSelect": true, 
                "fnDisagg": "", 
                "localBaseColumnName": "[Product Type]", 
                "fieldRole": "dimension"
            }, 
            {
                "tupleIds": [], 
                "baseColumnName": "[Sample - Coffee Chain (Access)].[Product]", 
                "datasourceCaption": "Sample - Coffee Chain (Access)", 
                "indexOffset": 0, 
                "fieldCaption": "Product", 
                "stringCollation": {
                    "charsetId": 0, 
                    "name": "LEN_RUS_S2_WO"
                }, 
                "dataType": "cstring", 
                "aliasIndices": [
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15, 
                    16
                ], 
                "valueIndices": [], 
                "fn": "[Sample - Coffee Chain (Access)].[none:Product:nk]", 
                "formatStrings": [], 
                "isAutoSelect": true, 
                "fnDisagg": "", 
                "localBaseColumnName": "[Product]", 
                "fieldRole": "dimension"
            }, 
            {
                "tupleIds": [], 
                "baseColumnName": "[Sample - Coffee Chain (Access)].[Sales]", 
                "datasourceCaption": "Sample - Coffee Chain (Access)", 
                "indexOffset": 0, 
                "fieldCaption": "SUM(Sales)", 
                "dataType": "real", 
                "aggregation": "sum", 
                "aliasIndices": [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12
                ], 
                "valueIndices": [], 
                "fn": "[Sample - Coffee Chain (Access)].[sum:Sales:qk]", 
                "formatStrings": [
                    "c", 
                    "0", 
                    "t", 
                    "$", 
                    "", 
                    "", 
                    "1", 
                    ".", 
                    ",", 
                    "3;0"
                ], 
                "isAutoSelect": false, 
                "fnDisagg": "", 
                "localBaseColumnName": "[Sales]", 
                "fieldRole": "measure"
            }
        ], 
        "ubertipData": {
            "standardCommands": {
                "commandItems": [
                    {
                        "iconRes": "KeepOnly", 
                        "command": "tabdoc:keep-only-or-exclude exclude=\"false\" worksheet=\"Sales by Product Type\"", 
                        "name": "Keep Only", 
                        "commandsType": "item"
                    }, 
                    {
                        "iconRes": "Exclude", 
                        "command": "tabdoc:keep-only-or-exclude exclude=\"true\" worksheet=\"Sales by Product Type\"", 
                        "name": "Exclude", 
                        "commandsType": "item"
                    }, 
                    {
                        "iconRes": "Merge", 
                        "command": "tabdoc:merge-or-split worksheet=\"Sales by Product Type\" merge-or-split=\"merge\"", 
                        "name": "", 
                        "commandsType": "item", 
                        "description": "Group Members"
                    }
                ]
            }, 
            "multiselectCommands": {
                "commandItems": [
                    {
                        "iconRes": "SortAscending", 
                        "command": "tabdoc:quick-sort worksheet=\"Sales by Product Type\" sort-order=\"asc\"", 
                        "name": "", 
                        "commandsType": "item", 
                        "description": "Sort Ascending"
                    }, 
                    {
                        "iconRes": "SortDescending", 
                        "command": "tabdoc:quick-sort worksheet=\"Sales by Product Type\" sort-order=\"desc\"", 
                        "name": "", 
                        "commandsType": "item", 
                        "description": "Sort Descending"
                    }
                ]
            }, 
            "ubertipPaneDatas": [
                {
                    "summaryField": "SUM(Sales)", 
                    "htmlTooltip": "<span style=\"white-space:pre-wrap\"><table style=\"vertical-align:middle;padding:0px\" cellspacing=\"0\"><tr><td style=\"white-space:pre\"><span style=\"font-family:'Arial';font-size:10pt;color:#787878;\">Product Type:</span></td><td>&nbsp;</td><td><span style=\"font-family:'Arial';font-size:10pt;color:#000000;font-weight:bold;\">&lt;[Sample - Coffee Chain (Access)].[none:Product Type:nk]&gt;</span></td></tr><tr><td style=\"white-space:pre\"><span style=\"font-family:'Arial';font-size:10pt;color:#787878;\">Product:</span></td><td>&nbsp;</td><td><span style=\"font-family:'Arial';font-size:10pt;color:#000000;font-weight:bold;\">&lt;[Sample - Coffee Chain (Access)].[none:Product:nk]&gt;</span></td></tr><tr><td style=\"white-space:pre\"><span style=\"font-family:'Arial';font-size:10pt;color:#787878;\">Sales:</span></td><td>&nbsp;</td><td><span style=\"font-family:'Arial';font-size:10pt;color:#000000;font-weight:bold;\">&lt;[Sample - Coffee Chain (Access)].[sum:Sales:qk]&gt;</span></td></tr></table></span>", 
                    "showButtons": true
                }
            ]
        }, 
        "filterFields": [], 
        "reflineFields": [], 
        "highlightCaptions": []
    }
}