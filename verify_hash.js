const log = console.log;
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
let filePath = path.join(__dirname, 'files', 'hash.txt');
fs.readFile(filePath, 'utf-8', (err, data) => {
    if(!fs.existsSync(filePath)) {
        log('File Not Found...');
        throw err;
    } else {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('Verify hash: ', text => {
            // CREATE HASH
            const hash = crypto.createHash('sha256');
            hash.update(`${text}`);
            log('Verifying Hash...\n********************');
            if (hash.digest('hex') !== data) {
                log("No Match Found, try again...");
            } else {
                log('MATCH FOUND!!!');
            }
            readline.close();
        });
    }
});






// let Secret = new (function (){
//     "use strict";

//     let world_enc = "utf8"
//     let secret_enc = "hex";
//     let key = "some_secret_key";

//     this.hide = function(payload){
//         let cipher = crypto.createCipheriv('aes128', key);
//         let hash = cipher.update(payload, world_enc, secret_enc);
//         hash += cipher.final(secret_enc);
//         return hash;
//     };
//     this.reveal = function(hash){
//         let sha1 = crypto.createDecipheriv('aes128', key);
//         let payload = sha1.update(hash, secret_enc, world_enc);
//         payload += sha1.final(world_enc);
//         return payload;
//     }
// });

// export {Secret};