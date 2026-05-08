var size = 0;
var placement = 'point';
function categories_INTER_LINEA_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'AGUA POTABLE Y/O ALCANTARILLADO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(133,235,140,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.3299999999999998}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'REDES DE AGUA POTABLE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(95,119,213,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'REDES DE ALCANTARILLADO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(237,119,50,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'REDES DE ELECTRIFICACIÓN':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(234,104,169,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'REDES DE RIEGO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(181,74,238,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'REDES DE TELECOMUNICACIONES':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(14,210,197,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(203,237,79,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_INTER_LINEA_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("TIPO_INT");
    var labelFont = "7.800000000000001px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.5;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (exp_label_INTER_LINEA_5_eval_expression(context) !== null && resolution > 0 && resolution < 14) {
        labelText = String(exp_label_INTER_LINEA_5_eval_expression(context));
    }
    
    var style = categories_INTER_LINEA_5(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
