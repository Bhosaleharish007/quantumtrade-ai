CREATE TABLE trades (
 id SERIAL PRIMARY KEY,
 symbol TEXT,
 side TEXT,
 pnl NUMERIC
);

CREATE TABLE positions (
 id SERIAL PRIMARY KEY,
 symbol TEXT,
 status TEXT
);
