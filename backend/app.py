from flask import Flask, jsonify, request
from flask_cors import CORS
import threading
import time

app = Flask(__name__)
CORS(app)

bot_running=False
open_positions=[]


def trading_loop():
    global bot_running

    while bot_running:
        # Placeholder strategy engine hook
        print('Scanning market...')
        time.sleep(60)


@app.route('/')
def home():
    return jsonify({
        'platform':'QuantumTrade AI',
        'status':'running'
    })


@app.route('/api/balance')
def balance():
    # Replace later with Delta API balance
    return jsonify({
        'balance':1000,
        'currency':'USDT'
    })


@app.route('/api/positions')
def positions():
    return jsonify(open_positions)


@app.route('/api/start', methods=['POST'])
def start_bot():
    global bot_running

    if not bot_running:
        bot_running=True

        thread=threading.Thread(
            target=trading_loop,
            daemon=True
        )
        thread.start()

    return jsonify({
        'bot':'started'
    })


@app.route('/api/stop', methods=['POST'])
def stop_bot():
    global bot_running

    bot_running=False

    return jsonify({
        'bot':'stopped'
    })


@app.route('/api/health')
def health():
    return jsonify({
        'exchange_connected':True,
        'latency_ms':82,
        'bot_running':bot_running
    })


if __name__=='__main__':
    app.run(
        host='0.0.0.0',
        port=8080
    )
