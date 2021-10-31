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
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'government': 'government', 'ground_floor:height': 'ground_floor:height', 'evacuation_center': 'evacuation_center', 'office': 'office', 'atm': 'atm', 'height': 'height', 'shop': 'shop', 'school:type_idn': 'school:type_idn', 'addr:housenumber': 'addr:housenumber', 'wikipedia': 'wikipedia', 'website': 'website', 'tourism': 'tourism', 'addr:street': 'addr:street', 'addr:housename': 'addr:housename', 'religion': 'religion', 'amenity': 'amenity', 'name': 'name', 'addr:postcode': 'addr:postcode', 'admin_level': 'admin_level', 'type': 'type', 'operator:type': 'operator:type', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'government': '', 'ground_floor:height': '', 'evacuation_center': '', 'office': '', 'atm': '', 'height': '', 'shop': '', 'school:type_idn': '', 'addr:housenumber': '', 'wikipedia': '', 'website': '', 'tourism': '', 'addr:street': '', 'addr:housename': '', 'religion': '', 'amenity': '', 'name': '', 'addr:postcode': '', 'admin_level': '', 'type': '', 'operator:type': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'government': 'no label', 'ground_floor:height': 'no label', 'evacuation_center': 'no label', 'office': 'no label', 'atm': 'no label', 'height': 'no label', 'shop': 'no label', 'school:type_idn': 'no label', 'addr:housenumber': 'no label', 'wikipedia': 'no label', 'website': 'no label', 'tourism': 'no label', 'addr:street': 'no label', 'addr:housename': 'no label', 'religion': 'no label', 'amenity': 'no label', 'name': 'no label', 'addr:postcode': 'no label', 'admin_level': 'no label', 'type': 'no label', 'operator:type': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_building_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});