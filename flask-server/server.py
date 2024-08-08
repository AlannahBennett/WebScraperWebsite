from flask import Flask, request, jsonify
from bs4 import BeautifulSoup
import requests
from flask_cors import CORS
import re

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/scrape', methods=['POST'])
def scrape():
    data = request.get_json()
    url = data['url']

    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an HTTPError for bad responses
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 400

    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract all text from the HTML
    text = soup.get_text()

    # Clean up the text
    text = re.sub(r'\n+', '\n', text).strip()

    return jsonify({'message': 'Scraped successfully', 'text': text})

if __name__ == '__main__':
    app.run(debug=True)
