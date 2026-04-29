MAX_DAILY_LOSS=0.05
MAX_OPEN_TRADES=1

def check_risk(balance, open_positions):
    if len(open_positions) >= MAX_OPEN_TRADES:
        return False
    if balance <=0:
        return False
    return True
