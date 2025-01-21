var map = new ol.Map({
    target: 'map', // El elemento donde se renderizará el mapa
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM() // Mapa base de OpenStreetMap
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-3.7038, 40.4168]), // Coordenadas (longitud, latitud)
        zoom: 12 // Nivel de zoom inicial
    })
});