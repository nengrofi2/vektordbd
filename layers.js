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

        var lyr_ESRI_1 = new ol.layer.Tile({
            'title': 'ESRI',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Waypoints_2 = new ol.format.GeoJSON();
var features_Waypoints_2 = format_Waypoints_2.readFeatures(json_Waypoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waypoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waypoints_2.addFeatures(features_Waypoints_2);
var lyr_Waypoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waypoints_2, 
                style: style_Waypoints_2,
                popuplayertitle: "Waypoints",
                interactive: true,
                title: 'Waypoints'
            });
var format_BataswilayahRWkelurahanCibeureum_3 = new ol.format.GeoJSON();
var features_BataswilayahRWkelurahanCibeureum_3 = format_BataswilayahRWkelurahanCibeureum_3.readFeatures(json_BataswilayahRWkelurahanCibeureum_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BataswilayahRWkelurahanCibeureum_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BataswilayahRWkelurahanCibeureum_3.addFeatures(features_BataswilayahRWkelurahanCibeureum_3);
var lyr_BataswilayahRWkelurahanCibeureum_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BataswilayahRWkelurahanCibeureum_3, 
                style: style_BataswilayahRWkelurahanCibeureum_3,
                popuplayertitle: "Batas wilayah RW kelurahan Cibeureum",
                interactive: true,
                title: '<img src="styles/legend/BataswilayahRWkelurahanCibeureum_3.png" /> Batas wilayah RW kelurahan Cibeureum'
            });
var format_Buffered_4 = new ol.format.GeoJSON();
var features_Buffered_4 = format_Buffered_4.readFeatures(json_Buffered_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_4.addFeatures(features_Buffered_4);
var lyr_Buffered_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_4, 
                style: style_Buffered_4,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_4.png" /> Buffered'
            });
var format_shapefile1_5 = new ol.format.GeoJSON();
var features_shapefile1_5 = format_shapefile1_5.readFeatures(json_shapefile1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shapefile1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shapefile1_5.addFeatures(features_shapefile1_5);
var lyr_shapefile1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shapefile1_5, 
                style: style_shapefile1_5,
                popuplayertitle: "shapefile 1",
                interactive: true,
                title: '<img src="styles/legend/shapefile1_5.png" /> shapefile 1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ESRI_1.setVisible(true);lyr_Waypoints_2.setVisible(true);lyr_BataswilayahRWkelurahanCibeureum_3.setVisible(true);lyr_Buffered_4.setVisible(true);lyr_shapefile1_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ESRI_1,lyr_Waypoints_2,lyr_BataswilayahRWkelurahanCibeureum_3,lyr_Buffered_4,lyr_shapefile1_5];
lyr_Waypoints_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BataswilayahRWkelurahanCibeureum_3.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Buffered_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_shapefile1_5.set('fieldAliases', {'Name': 'Name', });
lyr_Waypoints_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_BataswilayahRWkelurahanCibeureum_3.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Buffered_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_shapefile1_5.set('fieldImages', {'Name': 'TextEdit', });
lyr_Waypoints_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BataswilayahRWkelurahanCibeureum_3.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Buffered_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_shapefile1_5.set('fieldLabels', {'Name': 'no label', });
lyr_shapefile1_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});