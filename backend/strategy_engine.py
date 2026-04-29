from delta_api import get_mark_price

def run_strategy():
    price=get_mark_price()

    if price % 2 == 0:
        return 'BUY'

    return 'SELL'
