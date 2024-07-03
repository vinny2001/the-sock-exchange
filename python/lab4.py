from flask import Flask, jsonify
from datetime import datetime

app = Flask(__name__)

def generate_socks(num_socks):
    socks = []
    for i in range(1, num_socks + 1):
        sock = {
            "id": i,
            "sockDetails": {
                "size": "Large",
                "color": "Yellow",
                "pattern": "Plain",
                "material": "Bamboo",
                "condition": "Used",
                "forFoot": "Both"
            },
            "additionalFeatures": {
                "waterResistant": False,
                "padded": False,
                "antiBacterial": True
            },
            "addedTimestamp": datetime.now().isoformat()
        }
        socks.append(sock)
    return socks

@app.route('/socks/<int:num_socks>')
def socks(num_socks):
    return jsonify(generate_socks(num_socks))

if __name__ == '__main__':
    app.run(debug=True)