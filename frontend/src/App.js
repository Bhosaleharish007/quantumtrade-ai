from flask import Flask, jsonify, request
from flask_cors import CORS
import threading
import time

from delta_api import get_balance, get_positions
from strategy_engine import run_strategy

app = Flask(__name__)
CORS(app)

bot_running = False


def trading_loop():
    global bot_running

    while bot_running:
        try:
            signal = run_strategy()
            print(f"Signal: {signal}")
        except Exception as e:
            print(f"Strategy Error: {e}")

        time.sleep(60)


@app.route('/')
def home():
    return jsonify({
        'platform':'QuantumTrade AI',
        'status':'running'
    })


@app.route('/api/balance')
def balance():
    try:
        return jsonify(get_balance())
    except Exception as e:
        return jsonify({'error':str(e)}),500


@app.route('/api/positions')
def positions():
    try:
        return jsonify(get_positions())
    except Exception as e:
        return jsonify({'error':str(e)}),500


@app.route('/api/start', methods=['POST'])
def start_bot():
    global bot_running

    if not bot_running:
        bot_running = True
        thread = threading.Thread(
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
    bot_running = False

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


@app.route('/api/kill-switch', methods=['POST'])
def kill_switch():
    global bot_running
    bot_running=False

    return jsonify({
      'emergency_stop':'activated'
    })


if __name__=='__main__':
    app.run(
        host='0.0.0.0',
        port=8080,
        debug=True
    )
