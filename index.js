#!/usr/bin/env node
'use strict';

// Dependencies
const vorpal = require('vorpal')();
import readline from 'readline';
import figlet from 'figlet';
import colors from 'colors';

// Robinhood Credentials
var credentials = {
    username: '',
    password: ''
};

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Header
figlet.text('Robinhood Terminal', {
    font: 'Digital',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, (err, data) => {
    if (err) {
        console.log("Oops..");
        console.dir(err);
        return;
    }
    console.log(data.green);
    rl.question("Username: ", (user) => {
        rl.question('Password: ', (password) => {
            credentials.username = user;
            credentials.password = password;
            rl.close();
            // Initialize Vorpal
            vorpal
                .delimiter('rhterm %')
                .show();
        });
    });
});

/* Commands
 *  investment_profile
 *  instruments
 *  quote_data
 *  accounts
 *  user
 *  dividends
 *  orders
 *  positions
 *  nonzero_positions
 *  place_buy_order
 *  place_sell_order
 *  fundamentals
 *  cancel_order
 *  watchlists
 *  create_watch_list
 *  sp500_up
 *  sp500_down
 *  splits
 *  historicals
 *  url
 */

// Connect Robinhood API
var Robinhood = require('robinhood')(credentials, function(){
    // investment_profile
    vorpal
        .command('profile', 'Outputs "rabbit"')
        .action(function(args, callback) {
            Robinhood.investment_profile(function(err, response, body){
                if (err) {
                    console.error(err);
                } else {
                    console.log("investment_profile");
                    console.log(body);
                }
            });
            callback();
        });

    // instruments
    vorpal
        .command('instruments', 'Outputs "rabbit"')
        .action(function(args, callback) {
            Robinhood.instruments('AAPL',function(err, response, body){
                if (err) {
                    console.error(err);
                } else {
                    console.log("instruments");
                    console.log(body);
                }
            });
            callback();
        });

    // quote_data
    vorpal
        .command('quote', 'Outputs "quote_data"')
        .action(function(args, callback) {
            Robinhood.quote_data('GOOG', function(error, response, body) {
                if (error) {
                    console.error(error);
                    process.exit(1);
                }
                console.log(body);
            });
            callback();
        });

    // accounts
    vorpal
        .command('accounts', 'Outputs "rabbit"')
        .action(function(args, callback) {
            Robinhood.accounts(function(err, response, body){
                if (err) {
                    console.error(err);
                } else {
                    console.log("accounts");
                    console.log(body);
                }
            });
            callback();
        });

    // user
    vorpal
        .command('user', 'Outputs "rabbit"')
        .action(function(args, callback) {
            Robinhood.user(function(err, response, body){
                if(err){
                    console.error(err);
                } else {
                    console.log("user");
                    console.log(body);
                }
            });
            callback();
        });

    // dividends
    vorpal
        .command('dividends', 'Outputs "rabbit"')
        .action(function(args, callback) {
            Robinhood.dividends(function(err, response, body){
                if(err){
                    console.error(err);
                } else {
                    console.log("dividends");
                    console.log(body);
                }
            });
            callback();
        });

    // orders
    vorpal
        .command('orders', 'Outputs "rabbit"')
        .action(function(args, callback) {
            Robinhood.orders(function(err, response, body){
                if (err){
                    console.error(err);
                } else {
                    console.log("orders");
                    console.log(body);
                }
            });
            callback();
        });

    // positions
    vorpal
        .command('positions', 'Outputs "rabbit"')
        .action(function(args, callback) {
            Robinhood.positions(function(err, response, body){
                if (err){
                    console.erro(err);
                } else {
                    console.log("positions");
                    console.log(body);
                }
            });
            callback();
        });

    // nonzero_positions
    vorpal
        .command('nonzero-positions', 'Outputs "rabbit"')
        .action(function(args, callback) {
            Robinhood.nonzero_positions(function(err, response, body){
                if (err){
                    console.erro(err);
                }else{
                    console.log("positions");
                    console.log(body);
                }
            });
            callback();
        });

    // place_buy_order
    vorpal
        .command('buy', 'Outputs "rabbit"')
        .action(function(args, callback) {
            this.log('Wabbit');
            callback();
        });

    // place_sell_order
    vorpal
        .command('sell', 'Outputs "rabbit"')
        .action(function(args, callback) {
            this.log('Wabbit');
            callback();
        });

    // fundamentals
    vorpal
        .command('fundamentals', 'Outputs "rabbit"')
        .action(function(args, callback) {
            Robinhood.fundamentals("SBPH", function(error, response, body){
                if(error){
                    console.error(error);
                }else{
                    console.log(body);
                }
            });
            callback();
        });

    // cancel_order
    vorpal
        .command('cancel', 'Outputs "rabbit"')
        .action(function(args, callback) {
            this.log('Wabbit');
            callback();
        });

    // watchlists
    vorpal
        .command('watchlists', 'Outputs "rabbit"')
        .action(function(args, callback) {
            Robinhood.watchlists(function(err, response, body){
                if(err){
                    console.error(err);
                }else{
                    console.log("got watchlists");
                    console.log(body);
                }
            });
            callback();
        });

    // create_watch_list (Account must support multiple watchlists)
    vorpal
        .command('create', 'Outputs "rabbit"')
        .action(function(args, callback) {
            this.log('Wabbit');
            callback();
        });

    // sp500_up
    vorpal
        .command('up', 'Outputs "rabbit"')
        .action(function(args, callback) {
            Robinhood.sp500_up(function(err, response, body){
                if(err){
                    console.error(err);
                }else{
                    console.log("sp500_up");
                    console.log(body);
                }
            });
            callback();
        });

    // sp500_down
    vorpal
        .command('down', 'Outputs "rabbit"')
        .action(function(args, callback) {
            Robinhood.sp500_down(function(err, response, body){
                if(err){
                    console.error(err);
                }else{
                    console.log("sp500_down");
                    console.log(body);
                }
            });
            callback();
        });

    // splits
    vorpal
        .command('splits', 'Outputs "rabbit"')
        .action(function(args, callback) {
            this.log('Wabbit');
            callback();
        });

    // historicals
    vorpal
        .command('historicals', 'Outputs "rabbit"')
        .action(function(args, callback) {
            this.log('Wabbit');
            callback();
        });

    // url
    vorpal
        .command('url', 'Outputs "rabbit"')
        .action(function(args, callback) {
            this.log('Wabbit');
            callback();
        });

});
