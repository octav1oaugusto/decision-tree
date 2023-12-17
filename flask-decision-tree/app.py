import csv
import os
import shutil
from flask import Flask, request, jsonify
from tree_build import get_tree_data
from flask_cors import CORS, cross_origin
from files import FileStorage

app = Flask(__name__)
CORS(app)

# Main route "/api"
@app.route('/api', methods=['GET'])
def get_root():
    return 'This is the main route (/api).'

# Route for GET method "/api/tree"
@cross_origin(supports_credentials=True)
@app.route('/api/tree', methods=['GET'])
def get_tree():
    tree_data = get_tree_data()

    # Convert the dictionary to JSON and return the response
    return jsonify(tree_data)

# Route for POST method "/api/file-upload"
@cross_origin(supports_credentials=True)
@app.route('/api/file-upload', methods=['POST'])
def post_file():
    # Get data from the request body
    dataFile = request.get_data(as_text=True)
    file = request.files['file']
    move_file_to_uploads(process_data(dataFile))
    print(file)
    return jsonify({'success': True, 'message': f'File received successfully'})
  
def process_data(data):
    temporary_path = 'temp.csv'
    with open(temporary_path, 'w', newline='') as temp_file:
        csv_writer = csv.writer(temp_file)
        for line in data.splitlines():
            if line:
                components = [component.strip('"') for component in line.split(',', 2)]
                
                if len(components) >= 2:
                    name = components[0]
                    tags = () if len(components) == 2 else tuple(tag.strip('"') for tag in components[1][1:-1].split(';'))
                    value_str = components[-1].rstrip(';')
                    
                    try:
                        value = float(value_str)
                        csv_writer.writerow([name, tags, value])
                    except ValueError:
                        print(f"Skipping invalid line: {line}")

    return temporary_path


def move_file_to_uploads(temporary_path):
    uploads_folder = 'uploads'
    destination_path = os.path.join(uploads_folder, 'regras-teste.csv')
    
    os.makedirs(uploads_folder, exist_ok=True)
    
    if os.path.exists(destination_path):
        os.remove(destination_path) 
        
    shutil.move(temporary_path, destination_path)

if __name__ == '__main__':
    FileStorage.instance().set_rules_from_file()
    app.run(debug=True)
