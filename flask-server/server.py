from flask import Flask, request
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)

@app.route('/scrape', methods=['POST'])
def scrape():
    data = request.get_json()
    url = data['url']
    params = data['params']

    response = requests.get(url, params=params)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract all text from the HTML
    text = soup.get_text()

    return {'message': 'Scraped successfully', 'text': text}

if __name__ == '__main__':
    app.run(debug=True)
