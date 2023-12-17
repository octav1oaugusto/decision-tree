import csv
import os
import shutil
from flask import Flask, request, jsonify
from tree_build import get_tree_data
from flask_cors import CORS, cross_origin
from files import FileStorage

app = Flask(__name__)
CORS(app)

UPLOADS_PATH = 'uploads/regras-teste.csv'

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
    # Get file from the request
    file = request.files['file']
    if file:
        file.save(UPLOADS_PATH)
        fs = FileStorage.instance()
        fs.set_rules_from_file(UPLOADS_PATH)
        return {'success': True, 'message': 'File received successfully!', 'rules_count': len(fs.rules)}

    return jsonify({'success': False, 'message': f'Invalid file'}), 500

if __name__ == '__main__':
    if os.path.exists(UPLOADS_PATH):
        FileStorage.instance().set_rules_from_file(UPLOADS_PATH)
    else:
        FileStorage.instance().set_rules_from_file()
    app.run(debug=True)
