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
var format_INTER_POLIG_4 = new ol.format.GeoJSON();
var features_INTER_POLIG_4 = format_INTER_POLIG_4.readFeatures(json_INTER_POLIG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_INTER_POLIG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INTER_POLIG_4.addFeatures(features_INTER_POLIG_4);
var lyr_INTER_POLIG_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INTER_POLIG_4, 
                style: style_INTER_POLIG_4,
                popuplayertitle: 'INTER_POLIG',
                interactive: true,
                title: '<img src="styles/legend/INTER_POLIG_4.png" /> INTER_POLIG'
            });
var format_INTER_LINEA_5 = new ol.format.GeoJSON();
var features_INTER_LINEA_5 = format_INTER_LINEA_5.readFeatures(json_INTER_LINEA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_INTER_LINEA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INTER_LINEA_5.addFeatures(features_INTER_LINEA_5);
var lyr_INTER_LINEA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INTER_LINEA_5, 
                style: style_INTER_LINEA_5,
                popuplayertitle: 'INTER_LINEA',
                interactive: true,
    title: 'INTER_LINEA<br />\
    <img src="styles/legend/INTER_LINEA_5_0.png" /> AGUA POTABLE Y/O ALCANTARILLADO<br />\
    <img src="styles/legend/INTER_LINEA_5_1.png" /> REDES DE AGUA POTABLE<br />\
    <img src="styles/legend/INTER_LINEA_5_2.png" /> REDES DE ALCANTARILLADO<br />\
    <img src="styles/legend/INTER_LINEA_5_3.png" /> REDES DE ELECTRIFICACIÓN<br />\
    <img src="styles/legend/INTER_LINEA_5_4.png" /> REDES DE RIEGO<br />\
    <img src="styles/legend/INTER_LINEA_5_5.png" /> REDES DE TELECOMUNICACIONES<br />\
    <img src="styles/legend/INTER_LINEA_5_6.png" /> <br />' });
var format_INTER_PUNTO_6 = new ol.format.GeoJSON();
var features_INTER_PUNTO_6 = format_INTER_PUNTO_6.readFeatures(json_INTER_PUNTO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_INTER_PUNTO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INTER_PUNTO_6.addFeatures(features_INTER_PUNTO_6);
var lyr_INTER_PUNTO_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INTER_PUNTO_6, 
                style: style_INTER_PUNTO_6,
                popuplayertitle: 'INTER_PUNTO',
                interactive: true,
    title: 'INTER_PUNTO<br />\
    <img src="styles/legend/INTER_PUNTO_6_0.png" /> REDES DE AGUA POTABLE<br />\
    <img src="styles/legend/INTER_PUNTO_6_1.png" /> REDES DE ALCANTARILLADO<br />\
    <img src="styles/legend/INTER_PUNTO_6_2.png" /> REDES DE DESAGUE<br />\
    <img src="styles/legend/INTER_PUNTO_6_3.png" /> REDES DE ELECTRIFICACIÓN<br />\
    <img src="styles/legend/INTER_PUNTO_6_4.png" /> REDES DE TELECOMUNICACIONES<br />\
    <img src="styles/legend/INTER_PUNTO_6_5.png" /> <br />' });
var format_Derechodevia_7 = new ol.format.GeoJSON();
var features_Derechodevia_7 = format_Derechodevia_7.readFeatures(json_Derechodevia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Derechodevia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Derechodevia_7.addFeatures(features_Derechodevia_7);
var lyr_Derechodevia_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Derechodevia_7, 
                style: style_Derechodevia_7,
                popuplayertitle: 'Derecho de via',
                interactive: true,
                title: '<img src="styles/legend/Derechodevia_7.png" /> Derecho de via'
            });
var format_Progresivas_8 = new ol.format.GeoJSON();
var features_Progresivas_8 = format_Progresivas_8.readFeatures(json_Progresivas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Progresivas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Progresivas_8.addFeatures(features_Progresivas_8);
var lyr_Progresivas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Progresivas_8, 
                style: style_Progresivas_8,
                popuplayertitle: 'Progresivas',
                interactive: true,
                title: '<img src="styles/legend/Progresivas_8.png" /> Progresivas'
            });
var group_INTERFERENCIAS = new ol.layer.Group({
                                layers: [lyr_INTER_POLIG_4,lyr_INTER_LINEA_5,lyr_INTER_PUNTO_6,],
                                fold: 'close',
                                title: 'INTERFERENCIAS'});
var group_PREDIOS = new ol.layer.Group({
                                layers: [lyr_ComunidadesCampesinas_1,lyr_MatricesPrivados_2,lyr_Areasafectadas_3,],
                                fold: 'close',
                                title: 'PREDIOS'});

lyr_GoogleSatellite_0.setVisible(true);lyr_ComunidadesCampesinas_1.setVisible(true);lyr_MatricesPrivados_2.setVisible(true);lyr_Areasafectadas_3.setVisible(true);lyr_INTER_POLIG_4.setVisible(true);lyr_INTER_LINEA_5.setVisible(true);lyr_INTER_PUNTO_6.setVisible(true);lyr_Derechodevia_7.setVisible(true);lyr_Progresivas_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_PREDIOS,group_INTERFERENCIAS,lyr_Derechodevia_7,lyr_Progresivas_8];
lyr_ComunidadesCampesinas_1.set('fieldAliases', {'N°_EXP': 'N°_EXP', 'CODIGO': 'CODIGO', 'ESTAD_AVAN': 'ESTAD_AVAN', 'FORMA_ADQ': 'FORMA_ADQ', 'NOM_TITU': 'NOM_TITU', 'COMUNIDAD': 'COMUNIDAD', 'AREA_AFEC': 'AREA_AFEC', 'TECNICO_EX': 'TECNICO_EX', 'LEGAL_EXP': 'LEGAL_EXP', });
lyr_MatricesPrivados_2.set('fieldAliases', {'N°_EXP': 'N°_EXP', 'CODIGO': 'CODIGO', 'ESTAD_AVAN': 'ESTAD_AVAN', 'FORMA_ADQ': 'FORMA_ADQ', 'MONTO_TOTA': 'MONTO_TOTA', 'NOM_TITU': 'NOM_TITU', 'AREA_AFEC': 'AREA_AFEC', 'TECNICO_EX': 'TECNICO_EX', 'LEGAL_EXP': 'LEGAL_EXP', });
lyr_Areasafectadas_3.set('fieldAliases', {'CODIGO': 'CODIGO', 'N°_EXP': 'N°_EXP', 'ESTAD_AVAN': 'ESTAD_AVAN', 'FORMA_ADQ': 'FORMA_ADQ', 'MONTO_TOTA': 'MONTO_TOTA', 'NOM_TITU': 'NOM_TITU', 'AREA_AFEC': 'AREA_AFEC', 'TECNICO_EX': 'TECNICO_EX', 'LEGAL_EXP': 'LEGAL_EXP', });
lyr_INTER_POLIG_4.set('fieldAliases', {'ITEM': 'ITEM', 'ETELI': 'ETELI', 'TITULAR': 'TITULAR', 'TIPO_INT': 'TIPO_INT', 'DESC_ELEM': 'DESC_ELEM', 'TIPO_CONV': 'TIPO_CONV', 'EST_ACT': 'EST_ACT', 'EST_LIB': 'EST_LIB', });
lyr_INTER_LINEA_5.set('fieldAliases', {'OID_': 'OID_', 'ETELI': 'ETELI', 'TITULAR': 'TITULAR', 'TIPO_INT': 'TIPO_INT', 'DESC_ELEM': 'DESC_ELEM', 'TIPO_CONV': 'TIPO_CONV', 'EST_ACT': 'EST_ACT', 'ITEM': 'ITEM', 'EST_LIB': 'EST_LIB', });
lyr_INTER_PUNTO_6.set('fieldAliases', {'TITULAR': 'TITULAR', 'TIPO_INT': 'TIPO_INT', 'DESC_ELEM': 'DESC_ELEM', 'TIPO_CONV': 'TIPO_CONV', 'EST_ACT': 'EST_ACT', 'ITEM': 'ITEM', 'EST_LIB': 'EST_LIB', 'ETELI': 'ETELI', });
lyr_Derechodevia_7.set('fieldAliases', {'Id': 'Id', 'nombre': 'nombre', 'SUBTRAMO': 'SUBTRAMO', });
lyr_Progresivas_8.set('fieldAliases', {'P_text': 'P_text', 'PROGRESIVA': 'PROGRESIVA', });
lyr_ComunidadesCampesinas_1.set('fieldImages', {'N°_EXP': 'TextEdit', 'CODIGO': 'TextEdit', 'ESTAD_AVAN': 'TextEdit', 'FORMA_ADQ': 'TextEdit', 'NOM_TITU': 'TextEdit', 'COMUNIDAD': 'TextEdit', 'AREA_AFEC': 'TextEdit', 'TECNICO_EX': 'TextEdit', 'LEGAL_EXP': 'TextEdit', });
lyr_MatricesPrivados_2.set('fieldImages', {'N°_EXP': 'TextEdit', 'CODIGO': 'TextEdit', 'ESTAD_AVAN': 'TextEdit', 'FORMA_ADQ': 'TextEdit', 'MONTO_TOTA': 'TextEdit', 'NOM_TITU': 'TextEdit', 'AREA_AFEC': 'TextEdit', 'TECNICO_EX': 'TextEdit', 'LEGAL_EXP': 'TextEdit', });
lyr_Areasafectadas_3.set('fieldImages', {'CODIGO': 'TextEdit', 'N°_EXP': 'TextEdit', 'ESTAD_AVAN': 'TextEdit', 'FORMA_ADQ': 'TextEdit', 'MONTO_TOTA': 'TextEdit', 'NOM_TITU': 'TextEdit', 'AREA_AFEC': 'TextEdit', 'TECNICO_EX': 'TextEdit', 'LEGAL_EXP': 'TextEdit', });
lyr_INTER_POLIG_4.set('fieldImages', {'ITEM': '', 'ETELI': '', 'TITULAR': '', 'TIPO_INT': '', 'DESC_ELEM': '', 'TIPO_CONV': '', 'EST_ACT': '', 'EST_LIB': '', });
lyr_INTER_LINEA_5.set('fieldImages', {'OID_': 'TextEdit', 'ETELI': 'TextEdit', 'TITULAR': 'TextEdit', 'TIPO_INT': 'TextEdit', 'DESC_ELEM': 'TextEdit', 'TIPO_CONV': 'TextEdit', 'EST_ACT': 'TextEdit', 'ITEM': 'TextEdit', 'EST_LIB': 'TextEdit', });
lyr_INTER_PUNTO_6.set('fieldImages', {'TITULAR': 'TextEdit', 'TIPO_INT': 'TextEdit', 'DESC_ELEM': 'TextEdit', 'TIPO_CONV': 'TextEdit', 'EST_ACT': 'TextEdit', 'ITEM': 'TextEdit', 'EST_LIB': 'TextEdit', 'ETELI': 'TextEdit', });
lyr_Derechodevia_7.set('fieldImages', {'Id': 'Range', 'nombre': 'TextEdit', 'SUBTRAMO': 'TextEdit', });
lyr_Progresivas_8.set('fieldImages', {'P_text': 'TextEdit', 'PROGRESIVA': 'TextEdit', });
lyr_ComunidadesCampesinas_1.set('fieldLabels', {'N°_EXP': 'inline label - always visible', 'CODIGO': 'inline label - always visible', 'ESTAD_AVAN': 'inline label - always visible', 'FORMA_ADQ': 'inline label - always visible', 'NOM_TITU': 'inline label - always visible', 'COMUNIDAD': 'inline label - always visible', 'AREA_AFEC': 'inline label - always visible', 'TECNICO_EX': 'inline label - always visible', 'LEGAL_EXP': 'inline label - always visible', });
lyr_MatricesPrivados_2.set('fieldLabels', {'N°_EXP': 'inline label - always visible', 'CODIGO': 'inline label - always visible', 'ESTAD_AVAN': 'inline label - always visible', 'FORMA_ADQ': 'inline label - always visible', 'MONTO_TOTA': 'inline label - always visible', 'NOM_TITU': 'inline label - always visible', 'AREA_AFEC': 'inline label - always visible', 'TECNICO_EX': 'inline label - always visible', 'LEGAL_EXP': 'inline label - always visible', });
lyr_Areasafectadas_3.set('fieldLabels', {'CODIGO': 'inline label - always visible', 'N°_EXP': 'inline label - always visible', 'ESTAD_AVAN': 'inline label - always visible', 'FORMA_ADQ': 'inline label - always visible', 'MONTO_TOTA': 'inline label - always visible', 'NOM_TITU': 'inline label - always visible', 'AREA_AFEC': 'inline label - always visible', 'TECNICO_EX': 'inline label - always visible', 'LEGAL_EXP': 'inline label - always visible', });
lyr_INTER_POLIG_4.set('fieldLabels', {'ITEM': 'no label', 'ETELI': 'no label', 'TITULAR': 'no label', 'TIPO_INT': 'no label', 'DESC_ELEM': 'no label', 'TIPO_CONV': 'no label', 'EST_ACT': 'no label', 'EST_LIB': 'no label', });
lyr_INTER_LINEA_5.set('fieldLabels', {'OID_': 'hidden field', 'ETELI': 'hidden field', 'TITULAR': 'inline label - always visible', 'TIPO_INT': 'inline label - always visible', 'DESC_ELEM': 'inline label - always visible', 'TIPO_CONV': 'hidden field', 'EST_ACT': 'hidden field', 'ITEM': 'hidden field', 'EST_LIB': 'hidden field', });
lyr_INTER_PUNTO_6.set('fieldLabels', {'TITULAR': 'inline label - always visible', 'TIPO_INT': 'inline label - always visible', 'DESC_ELEM': 'hidden field', 'TIPO_CONV': 'hidden field', 'EST_ACT': 'hidden field', 'ITEM': 'hidden field', 'EST_LIB': 'hidden field', 'ETELI': 'hidden field', });
lyr_Derechodevia_7.set('fieldLabels', {'Id': 'hidden field', 'nombre': 'hidden field', 'SUBTRAMO': 'inline label - always visible', });
lyr_Progresivas_8.set('fieldLabels', {'P_text': 'inline label - always visible', 'PROGRESIVA': 'hidden field', });
lyr_Progresivas_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});