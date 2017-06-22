#!/usr/bin/env node
'use strict';

//Dependencies
const vorpal = require('vorpal')();

//Commands
const investment_profile = require('./commands/investment_profile');
const instruments = require('./commands/instruments');
const quote_data = require('./commands/quote_data'); // Not authenticated
const accounts = require('./commands/accounts');
const user = require('./commands/user');
const dividends = require('./commands/dividends');
const orders = require('./commands/orders');
const positions = require('./commands/positions');
const nonzero_positions = require('./commands/nonzero_positions');
const place_buy_order = require('./commands/buy_order');
const place_sell_order = require('./commands/sell_order');
const fundamentals = require('./commands/fundamentals');
const cancel_order = require('./commands/cancel_order');
const watchlists = require('./commands/watchlists');
const create_watch_list = require('./commands/create_watchlist');
const sp500_up = require('./commands/sp500_up');
const sp500_down = require('./commands/sp500_down');
const splits = require('./commands/splits');
const historicals = require('./commands/historicals');
const url = require('./commands/url');

// Setup Commands
investment_profile.setup(vorpal);
instruments.setup(vorpal);
quote_data.setup(vorpal);
accounts.setup(vorpal);
user.setup(vorpal);
dividends.setup(vorpal);
orders.setup(vorpal);
positions.setup(vorpal);
nonzero_positions.setup(vorpal);
place_buy_order.setup(vorpal);
place_sell_order.setup(vorpal);
fundamentals.setup(vorpal);
cancel_order.setup(vorpal);
watchlists.setup(vorpal);
create_watch_list.setup(vorpal);
sp500_up.setup(vorpal);
sp500_down.setup(vorpal);
splits.setup(vorpal);
historicals.setup(vorpal);
url.setup(vorpal);

// Initialize Vorpal
vorpal
    .delimiter('rhterm ~ %')
    .show(); 