# import json

s = r'"type": "Feature","properties": {},"geometry": {"type": "Polygon","coordinates": ["'
# # Read the GeoJSON file
# with open('scotland-uk_1322.geojson', 'r') as f:
#     data = json.load(f)


# # Función para cambiar el contenido de "id" a minúsculas

# # Write the modified GeoJSON file back to disk
# with open('scotland.json', 'w') as f:
#     json.dump(data, f)

# Nombre del archivo JS de entrada y salida
input_file = './third_aproach/england-uk_1321.geojson'
output_file = 'modified_countries.js'


# Leer el contenido del archivo JS
with open(input_file, 'r') as file:
    js_content = file.read()

#reemplazar todas las ocurrencias del string
modified_js_content = js_content.replace(s,'')

# Guardar el JS modificado en un nuevo archivo
with open(output_file, 'w') as output:
    output.write(modified_js_content)

print(f'Se ha guardado el JS modificado en {output_file}')