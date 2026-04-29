quantumtrade-ai/

README.md
.env.example
.gitignore

frontend/
 ├── public/
 │   └── index.html
 │
 └── src/
     ├── components/
     │    ├── ChartPanel.jsx
     │    ├── RiskPanel.jsx
     │    ├── PositionsTable.jsx
     │    ├── BotControls.jsx
     │    └── TradeJournal.jsx
     │
     ├── pages/
     │    ├── Dashboard.jsx
     │    ├── Backtesting.jsx
     │    └── Strategies.jsx
     │
     ├── App.js
     └── index.js


backend/
 ├── app.py
 ├── strategy_engine.py
 ├── risk_engine.py
 ├── delta_api.py
 ├── alerts.py
 ├── requirements.txt


database/
 └── schema.sql


docs/
 └── deployment.md
