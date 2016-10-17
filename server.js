require('dotenv').config({path: './config/.env'});

const express  = require('./express');
const postgres = require('./postgres');
const chalk    = require('chalk');
const os       = require('os');

// Server configurations
const port       = process.env.PORT || 3000;
const serverInfo = `Server started
                    Host: ${os.hostname()}
                    Port: ${port}`;

postgres
  .init()
  .then(() => console.log(chalk.green('Postgres connected')))
  .then(() => express.listen(port, () => console.log(chalk.green(serverInfo))))
  .catch(err => console.log(err));