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
    # data = request.files['file']
    # try:
    #     fs = FileStorage.instance()
    #     fs.set_rules_from_text(data)
    #     return {'rules_count': len(fs.rules)}
    # except Exception as err:
    #     print('ERROR "/api/file" - ', err)
    #     return {}, 500
    file = request.files['file']
    print(dataFile)
    print(file)
    return jsonify({'success': True, 'message': f'File received successfully'})
if __name__ == '__main__':
    FileStorage.instance().set_rules_from_file()
    app.run(debug=True)
