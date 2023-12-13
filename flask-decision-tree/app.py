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

# Route for POST method "/api/file"
@app.route('/api/file', methods=['POST'])
def post_file():
    # Get data from the request body
    if request.content_length > 1E6:
        return 'Arquivo excedeu o tamanho máximo de 1MB', 400
    if request.content_encoding:
        return 'Arquivo não pode estar codificado.', 400

    data = request.get_data(as_text=True)
    try:
        fs = FileStorage.instance()
        fs.set_rules_from_text(data)
        return {'rules_count': len(fs.rules)}
    except Exception as err:
        print('ERROR "/api/file" - ', err)
        return {}, 500

if __name__ == '__main__':
    FileStorage.instance().set_rules_from_file()
    app.run(debug=True)
