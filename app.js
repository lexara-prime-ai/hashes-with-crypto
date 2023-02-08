const log = require('./logger');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const writeFilePath = path.join(__dirname, 'files', 'hash.txt');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter text to be hashed: ', text => {
    // CREATE HASH
    const hash = crypto.createHash('sha256');
    hash.update(`${text}`);
    console.log('Generating Hash...');
    log.writeLog(hash.digest('hex'));
    fs.readFile(path.join(__dirname, 'logs', 'log.txt'), 'utf-8', (err, data) => {
        if (err) throw err;
        fs.writeFile(writeFilePath, `${data}`, (err) => {
            if (err) throw err;
            console.log(`File created in : ${writeFilePath}`);
        });
    });
    readline.close();
});
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}.`);
    process.exit(1);
});

// CREATE HMAC
// const hmac = crypto.createHmac('sha256', 'secret');
// hmac.update(plainText);
// log.writeLog(hmac.digest('hex'));












