var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cieki_1 = new ol.format.GeoJSON();
var features_cieki_1 = format_cieki_1.readFeatures(json_cieki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cieki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cieki_1.addFeatures(features_cieki_1);
var lyr_cieki_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cieki_1, 
                style: style_cieki_1,
                interactive: true,
                title: '<img src="styles/legend/cieki_1.png" /> Ścieżki'
            });
var format_Zdjcia_2 = new ol.format.GeoJSON();
var features_Zdjcia_2 = format_Zdjcia_2.readFeatures(json_Zdjcia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zdjcia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zdjcia_2.addFeatures(features_Zdjcia_2);
var lyr_Zdjcia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zdjcia_2, 
                style: style_Zdjcia_2,
                interactive: true,
                title: '<img src="styles/legend/Zdjcia_2.png" /> Zdjęcia'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_cieki_1.setVisible(true);lyr_Zdjcia_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cieki_1,lyr_Zdjcia_2];
lyr_cieki_1.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Zdjcia_2.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_cieki_1.set('fieldImages', {'begin': '', 'end': '', });
lyr_Zdjcia_2.set('fieldImages', {'photo': 'ExternalResource', 'filename': '', 'directory': 'ExternalResource', 'altitude': '', 'direction': '', 'rotation': '', 'longitude': '', 'latitude': '', 'timestamp': '', });
lyr_cieki_1.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Zdjcia_2.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_Zdjcia_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});