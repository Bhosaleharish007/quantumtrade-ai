import random

def get_balance():
    return {
      'balance':1000
    }

def get_positions():
    return []

def get_mark_price(symbol='BTCUSDT'):
    return 95000 + random.randint(-500,500)
