const express = require('express');
const path = require('path');
const GeoJSONVT = require('geojson-vt'); // Use GeoJSONVT for processing

const app = express();
const port = 3000;

// Read the GeoJSON file
const geojson = require('./data/countries-fixed.geojson');

// Process GeoJSON data using GeoJSONVT
const geojsonvt = new GeoJSONVT({
    maxZoom: 10, // Set maximum zoom level
    tolerance: 0.01 // Set tolerance for simplification
});
const tiles = geojsonvt.tileByFeature(geojson);

// Define API endpoint to fetch processed data
app.get('/geojson', (req, res) => {
    // Get zoom level, x, and y coordinates from query parameters
    const zoom = Number(req.query.zoom);
    const x = Number(req.query.x);
    const y = Number(req.query.y);

    // Get tile data for the specified zoom, x, and y coordinates
    const tile = tiles[zoom][y][x];

    // Send the tile data as JSON response
    res.json({
        type: 'FeatureCollection',
        features: tile.features,
    });
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
