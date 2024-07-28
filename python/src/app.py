from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/projects/ebookconverter', methods=['GET'])
def get_project_data():
    # Call function to process data based on project_id
    data = {'message': 'Hello there'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
