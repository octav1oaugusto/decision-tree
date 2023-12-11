from flask import Flask, request, jsonify
from utils import get_tree_data
app = Flask(__name__)

# Main route "/api"
@app.route('/api', methods=['GET'])
def get_root():
    return 'This is the main route (/api).'

# Route for GET method "/api/tree"
@app.route('/api/tree', methods=['GET'])
def get_tree():
    tree_data = get_tree_data()

    # Convert the dictionary to JSON and return the response
    return jsonify(tree_data)

# Route for POST method "/api/file"
@app.route('/api/file', methods=['POST'])
def post_file():
    # Get data from the request body
    data = request.json
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
