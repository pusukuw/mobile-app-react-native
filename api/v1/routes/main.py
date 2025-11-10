import os
import json
import logging
from flask import Flask, request, jsonify

# Set up logging
logging.basicConfig(level=logging.INFO)

# Create the Flask app
app = Flask(__name__)

# Load configuration from file
with open('config.json') as f:
    config = json.load(f)

# Define a route for the API
@app.route('/api/data', methods=['GET'])
def get_data():
    # Get the required data from the database
    data = {'message': 'Hello, World!'}
    return jsonify(data)

# Run the app if this is the main module
if __name__ == '__main__':
    # Run the app with debug mode enabled
    app.run(debug=True, host=config['host'], port=config['port'])