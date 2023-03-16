const log = console.log;
const fsPromises = require('fs').promises;
const path = require('path');
const writeFilePath = path.join(__dirname, 'logs', 'log.txt');
exports.writeLog = async(contents) => {
    try {
        log('Writing log...\n****************************************************************\n');
        await fsPromises.writeFile(writeFilePath, `${contents}`);
        const data = await fsPromises.readFile(writeFilePath, 'utf8');
        log(`LOG: ${data}`);
        log('\n****************************************************************\nDone...\n')
    } catch (err) {
        console.error(err);
    }
}
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});

