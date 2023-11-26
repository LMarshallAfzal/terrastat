import json

def fix_right_hand_rule(geojson):
    for feature in geojson['features']:
        if feature['geometry']['type'] == 'MultiPolygon':
            for polygon in feature['geometry']['coordinates']:
                outer_ring = polygon[0]
                if not is_counterclockwise(outer_ring):
                    reverse_coordinates(outer_ring)
        elif feature['geometry']['type'] == 'Polygon':
            polygon = feature['geometry']['coordinates']
            if not is_counterclockwise(polygon):
                reverse_coordinates(polygon)

def is_counterclockwise(polygon):
    area = 0
    for i in range(len(polygon)):
        j = (i + 1) % len(polygon)
        area += polygon[i][0] * polygon[j][1] - polygon[i][1] * polygon[j][0]
    return area > 0

def reverse_coordinates(polygon):
    polygon.reverse()

with open('countries.geojson', 'r') as f:
    geojson = json.load(f)

fix_right_hand_rule(geojson)

with open('countries-fixed.geojson', 'w') as f:
    json.dump(geojson, f, indent=4)
