ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([499196.814416, 8583393.892955, 566708.352146, 8626899.390888]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ComunidadesCampesinas_1 = new ol.format.GeoJSON();
var features_ComunidadesCampesinas_1 = format_ComunidadesCampesinas_1.readFeatures(json_ComunidadesCampesinas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_ComunidadesCampesinas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesCampesinas_1.addFeatures(features_ComunidadesCampesinas_1);
var lyr_ComunidadesCampesinas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunidadesCampesinas_1,
maxResolution:280044.6615226196,
 
                style: style_ComunidadesCampesinas_1,
                popuplayertitle: 'Comunidades Campesinas',
                interactive: true,
    title: 'Comunidades Campesinas<br />\
    <img src="styles/legend/ComunidadesCampesinas_1_0.png" /> <br />\
    <img src="styles/legend/ComunidadesCampesinas_1_1.png" /> 01.- INSCRITO<br />\
    <img src="styles/legend/ComunidadesCampesinas_1_2.png" /> 02.- PAGADO<br />\
    <img src="styles/legend/ComunidadesCampesinas_1_3.png" /> 03.- CON RESOLUCION<br />\
    <img src="styles/legend/ComunidadesCampesinas_1_4.png" /> 04.- CON TASACION<br />\
    <img src="styles/legend/ComunidadesCampesinas_1_5.png" /> 05.- EN PROCESO DE TASACION<br />\
    <img src="styles/legend/ComunidadesCampesinas_1_6.png" /> 06.- CON EXPEDIENTE TECNICO LEGAL PARA TASACION<br />\
    <img src="styles/legend/ComunidadesCampesinas_1_7.png" /> 08.- CON TOPOGRAFÍA<br />\
    <img src="styles/legend/ComunidadesCampesinas_1_8.png" /> 09.- DESIGNADO<br />' });
var format_MatricesPrivados_2 = new ol.format.GeoJSON();
var features_MatricesPrivados_2 = format_MatricesPrivados_2.readFeatures(json_MatricesPrivados_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_MatricesPrivados_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MatricesPrivados_2.addFeatures(features_MatricesPrivados_2);
var lyr_MatricesPrivados_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MatricesPrivados_2,
maxResolution:280044.6615226196,
 
                style: style_MatricesPrivados_2,
                popuplayertitle: 'Matrices Privados',
                interactive: true,
    title: 'Matrices Privados<br />\
    <img src="styles/legend/MatricesPrivados_2_0.png" /> <br />\
    <img src="styles/legend/MatricesPrivados_2_1.png" /> 01.- INSCRITO<br />\
    <img src="styles/legend/MatricesPrivados_2_2.png" /> 02.- PAGADO<br />\
    <img src="styles/legend/MatricesPrivados_2_3.png" /> 03.- CON RESOLUCION<br />\
    <img src="styles/legend/MatricesPrivados_2_4.png" /> 04.- CON TASACION<br />\
    <img src="styles/legend/MatricesPrivados_2_5.png" /> 05.- EN PROCESO DE TASACION<br />\
    <img src="styles/legend/MatricesPrivados_2_6.png" /> 06.- CON EXPEDIENTE TECNICO LEGAL PARA TASACION<br />\
    <img src="styles/legend/MatricesPrivados_2_7.png" /> 08.- CON TOPOGRAFÍA<br />\
    <img src="styles/legend/MatricesPrivados_2_8.png" /> 09.- DESIGNADO<br />' });
var format_Areasafectadas_3 = new ol.format.GeoJSON();
var features_Areasafectadas_3 = format_Areasafectadas_3.readFeatures(json_Areasafectadas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Areasafectadas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areasafectadas_3.addFeatures(features_Areasafectadas_3);
var lyr_Areasafectadas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areasafectadas_3,
maxResolution:280044.6615226196,
 
                style: style_Areasafectadas_3,
                popuplayertitle: 'Areas afectadas',
                interactive: true,
    title: 'Areas afectadas<br />\
    <img src="styles/legend/Areasafectadas_3_0.png" /> <br />\
    <img src="styles/legend/Areasafectadas_3_1.png" /> 01.- INSCRITO<br />\
    <img src="styles/legend/Areasafectadas_3_2.png" /> 02.- PAGADO<br />\
    <img src="styles/legend/Areasafectadas_3_3.png" /> 03.- CON RESOLUCION<br />\
    <img src="styles/legend/Areasafectadas_3_4.png" /> 04.- CON TASACION<br />\
    <img src="styles/legend/Areasafectadas_3_5.png" /> 05.- EN PROCESO DE TASACION<br />\
    <img src="styles/legend/Areasafectadas_3_6.png" /> 06.- CON EXPEDIENTE TECNICO LEGAL PARA TASACION<br />\
    <img src="styles/legend/Areasafectadas_3_7.png" /> 08.- CON TOPOGRAFÍA<br />\
    <img src="styles/legend/Areasafectadas_3_8.png" /> 09.- DESIGNADO<br />' });
var format_Derechodevia_4 = new ol.format.GeoJSON();
var features_Derechodevia_4 = format_Derechodevia_4.readFeatures(json_Derechodevia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Derechodevia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Derechodevia_4.addFeatures(features_Derechodevia_4);
var lyr_Derechodevia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Derechodevia_4, 
                style: style_Derechodevia_4,
                popuplayertitle: 'Derecho de via',
                interactive: true,
                title: '<img src="styles/legend/Derechodevia_4.png" /> Derecho de via'
            });
var format_Progresivas_5 = new ol.format.GeoJSON();
var features_Progresivas_5 = format_Progresivas_5.readFeatures(json_Progresivas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Progresivas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Progresivas_5.addFeatures(features_Progresivas_5);
var lyr_Progresivas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Progresivas_5, 
                style: style_Progresivas_5,
                popuplayertitle: 'Progresivas',
                interactive: true,
                title: '<img src="styles/legend/Progresivas_5.png" /> Progresivas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ComunidadesCampesinas_1.setVisible(true);lyr_MatricesPrivados_2.setVisible(true);lyr_Areasafectadas_3.setVisible(true);lyr_Derechodevia_4.setVisible(true);lyr_Progresivas_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ComunidadesCampesinas_1,lyr_MatricesPrivados_2,lyr_Areasafectadas_3,lyr_Derechodevia_4,lyr_Progresivas_5];
lyr_ComunidadesCampesinas_1.set('fieldAliases', {'N°_EXP': 'N°_EXP', 'CODIGO': 'CODIGO', 'ESTAD_AVAN': 'ESTAD_AVAN', 'FORMA_ADQ': 'FORMA_ADQ', 'NOM_TITU': 'NOM_TITU', 'COMUNIDAD': 'COMUNIDAD', 'AREA_AFEC': 'AREA_AFEC', 'TECNICO_EX': 'TECNICO_EX', 'LEGAL_EXP': 'LEGAL_EXP', });
lyr_MatricesPrivados_2.set('fieldAliases', {'N°_EXP': 'N°_EXP', 'CODIGO': 'CODIGO', 'ESTAD_AVAN': 'ESTAD_AVAN', 'FORMA_ADQ': 'FORMA_ADQ', 'MONTO_TOTA': 'MONTO_TOTA', 'NOM_TITU': 'NOM_TITU', 'AREA_AFEC': 'AREA_AFEC', 'TECNICO_EX': 'TECNICO_EX', 'LEGAL_EXP': 'LEGAL_EXP', });
lyr_Areasafectadas_3.set('fieldAliases', {'CODIGO': 'CODIGO', 'N°_EXP': 'N°_EXP', 'ESTAD_AVAN': 'ESTAD_AVAN', 'FORMA_ADQ': 'FORMA_ADQ', 'MONTO_TOTA': 'MONTO_TOTA', 'NOM_TITU': 'NOM_TITU', 'AREA_AFEC': 'AREA_AFEC', 'TECNICO_EX': 'TECNICO_EX', 'LEGAL_EXP': 'LEGAL_EXP', });
lyr_Derechodevia_4.set('fieldAliases', {'Id': 'Id', 'nombre': 'nombre', 'SUBTRAMO': 'SUBTRAMO', });
lyr_Progresivas_5.set('fieldAliases', {'P_text': 'P_text', 'PROGRESIVA': 'PROGRESIVA', });
lyr_ComunidadesCampesinas_1.set('fieldImages', {'N°_EXP': 'TextEdit', 'CODIGO': 'TextEdit', 'ESTAD_AVAN': 'TextEdit', 'FORMA_ADQ': 'TextEdit', 'NOM_TITU': 'TextEdit', 'COMUNIDAD': 'TextEdit', 'AREA_AFEC': 'TextEdit', 'TECNICO_EX': 'TextEdit', 'LEGAL_EXP': 'TextEdit', });
lyr_MatricesPrivados_2.set('fieldImages', {'N°_EXP': 'TextEdit', 'CODIGO': 'TextEdit', 'ESTAD_AVAN': 'TextEdit', 'FORMA_ADQ': 'TextEdit', 'MONTO_TOTA': 'TextEdit', 'NOM_TITU': 'TextEdit', 'AREA_AFEC': 'TextEdit', 'TECNICO_EX': 'TextEdit', 'LEGAL_EXP': 'TextEdit', });
lyr_Areasafectadas_3.set('fieldImages', {'CODIGO': 'TextEdit', 'N°_EXP': 'TextEdit', 'ESTAD_AVAN': 'TextEdit', 'FORMA_ADQ': 'TextEdit', 'MONTO_TOTA': 'TextEdit', 'NOM_TITU': 'TextEdit', 'AREA_AFEC': 'TextEdit', 'TECNICO_EX': 'TextEdit', 'LEGAL_EXP': 'TextEdit', });
lyr_Derechodevia_4.set('fieldImages', {'Id': 'Range', 'nombre': 'TextEdit', 'SUBTRAMO': 'TextEdit', });
lyr_Progresivas_5.set('fieldImages', {'P_text': 'TextEdit', 'PROGRESIVA': 'TextEdit', });
lyr_ComunidadesCampesinas_1.set('fieldLabels', {'N°_EXP': 'inline label - always visible', 'CODIGO': 'inline label - always visible', 'ESTAD_AVAN': 'inline label - always visible', 'FORMA_ADQ': 'inline label - always visible', 'NOM_TITU': 'inline label - always visible', 'COMUNIDAD': 'inline label - always visible', 'AREA_AFEC': 'inline label - always visible', 'TECNICO_EX': 'inline label - always visible', 'LEGAL_EXP': 'inline label - always visible', });
lyr_MatricesPrivados_2.set('fieldLabels', {'N°_EXP': 'no label', 'CODIGO': 'no label', 'ESTAD_AVAN': 'no label', 'FORMA_ADQ': 'no label', 'MONTO_TOTA': 'no label', 'NOM_TITU': 'no label', 'AREA_AFEC': 'no label', 'TECNICO_EX': 'no label', 'LEGAL_EXP': 'no label', });
lyr_Areasafectadas_3.set('fieldLabels', {'CODIGO': 'inline label - always visible', 'N°_EXP': 'inline label - always visible', 'ESTAD_AVAN': 'inline label - always visible', 'FORMA_ADQ': 'inline label - always visible', 'MONTO_TOTA': 'inline label - always visible', 'NOM_TITU': 'inline label - always visible', 'AREA_AFEC': 'inline label - always visible', 'TECNICO_EX': 'inline label - always visible', 'LEGAL_EXP': 'inline label - always visible', });
lyr_Derechodevia_4.set('fieldLabels', {'Id': 'hidden field', 'nombre': 'hidden field', 'SUBTRAMO': 'inline label - always visible', });
lyr_Progresivas_5.set('fieldLabels', {'P_text': 'inline label - always visible', 'PROGRESIVA': 'hidden field', });
lyr_Progresivas_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});