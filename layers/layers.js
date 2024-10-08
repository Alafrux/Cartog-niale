var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GPKGIsochrones_1 = new ol.format.GeoJSON();
var features_GPKGIsochrones_1 = format_GPKGIsochrones_1.readFeatures(json_GPKGIsochrones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPKGIsochrones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPKGIsochrones_1.addFeatures(features_GPKGIsochrones_1);
var lyr_GPKGIsochrones_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPKGIsochrones_1, 
                style: style_GPKGIsochrones_1,
                popuplayertitle: "GPKG Isochrones",
                interactive: true,
                title: '<img src="styles/legend/GPKGIsochrones_1.png" /> GPKG Isochrones'
            });
var format_GaresTGVV2_2 = new ol.format.GeoJSON();
var features_GaresTGVV2_2 = format_GaresTGVV2_2.readFeatures(json_GaresTGVV2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GaresTGVV2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GaresTGVV2_2.addFeatures(features_GaresTGVV2_2);
var lyr_GaresTGVV2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GaresTGVV2_2, 
                style: style_GaresTGVV2_2,
                popuplayertitle: "Gares TGV V2",
                interactive: true,
                title: '<img src="styles/legend/GaresTGVV2_2.png" /> Gares TGV V2'
            });
var format_listedesgares_3 = new ol.format.GeoJSON();
var features_listedesgares_3 = format_listedesgares_3.readFeatures(json_listedesgares_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_listedesgares_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_listedesgares_3.addFeatures(features_listedesgares_3);
var lyr_listedesgares_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_listedesgares_3, 
                style: style_listedesgares_3,
                popuplayertitle: "liste-des-gares",
                interactive: true,
                title: '<img src="styles/legend/listedesgares_3.png" /> liste-des-gares'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GPKGIsochrones_1.setVisible(true);lyr_GaresTGVV2_2.setVisible(true);lyr_listedesgares_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GPKGIsochrones_1,lyr_GaresTGVV2_2,lyr_listedesgares_3];
lyr_GPKGIsochrones_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_GaresTGVV2_2.set('fieldAliases', {'field_1': 'field_1', 'Nom_Gare': 'Nom_Gare', 'INSEE_REG': 'INSEE_REG', 'NOM_REG': 'NOM_REG', 'INSEE_DEP': 'INSEE_DEP', 'NOM_DEP': 'NOM_DEP', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_listedesgares_3.set('fieldAliases', {'code_uic': 'code_uic', 'libelle': 'libelle', 'fret': 'fret', 'voyageurs': 'voyageurs', 'code_ligne': 'code_ligne', 'rg_troncon': 'rg_troncon', 'pk': 'pk', 'commune': 'commune', 'departemen': 'departemen', 'idreseau': 'idreseau', 'idgaia': 'idgaia', 'x_l93': 'x_l93', 'y_l93': 'y_l93', 'x_wgs84': 'x_wgs84', 'y_wgs84': 'y_wgs84', });
lyr_GPKGIsochrones_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_GaresTGVV2_2.set('fieldImages', {'field_1': 'TextEdit', 'Nom_Gare': 'TextEdit', 'INSEE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'NOM_DEP': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_listedesgares_3.set('fieldImages', {'code_uic': 'TextEdit', 'libelle': 'TextEdit', 'fret': 'TextEdit', 'voyageurs': 'TextEdit', 'code_ligne': 'TextEdit', 'rg_troncon': 'TextEdit', 'pk': 'TextEdit', 'commune': 'TextEdit', 'departemen': 'TextEdit', 'idreseau': 'TextEdit', 'idgaia': 'TextEdit', 'x_l93': 'TextEdit', 'y_l93': 'TextEdit', 'x_wgs84': 'TextEdit', 'y_wgs84': 'TextEdit', });
lyr_GPKGIsochrones_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_GaresTGVV2_2.set('fieldLabels', {'field_1': 'no label', 'Nom_Gare': 'inline label - always visible', 'INSEE_REG': 'no label', 'NOM_REG': 'no label', 'INSEE_DEP': 'no label', 'NOM_DEP': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_listedesgares_3.set('fieldLabels', {'code_uic': 'no label', 'libelle': 'no label', 'fret': 'no label', 'voyageurs': 'no label', 'code_ligne': 'no label', 'rg_troncon': 'no label', 'pk': 'no label', 'commune': 'no label', 'departemen': 'no label', 'idreseau': 'no label', 'idgaia': 'no label', 'x_l93': 'no label', 'y_l93': 'no label', 'x_wgs84': 'no label', 'y_wgs84': 'no label', });
lyr_listedesgares_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});