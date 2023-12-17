import os
from flask import Flask, request, jsonify
from tree_build import get_tree_data
from flask_cors import CORS, cross_origin
from files import FileStorage

app = Flask(__name__)
CORS(app)

UPLOADS_FOLDER = 'uploads'
UPLOADS_PATH = os.path.join(UPLOADS_FOLDER, 'regras.csv')

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
        save_upload(file)
        return {'success': True, 'message': 'File received successfully!'}

    return jsonify({'success': False, 'message': f'Invalid file'}), 500

def save_upload(file):
    os.makedirs(UPLOADS_FOLDER, exist_ok=True)

    file.save(UPLOADS_PATH)
    fs = FileStorage.instance()
    fs.set_rules_from_file(UPLOADS_PATH)

if __name__ == '__main__':
    if os.path.exists(UPLOADS_PATH):
        FileStorage.instance().set_rules_from_file(UPLOADS_PATH)
    else:
        FileStorage.instance().set_rules_from_file()
    app.run(debug=True)
