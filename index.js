const allmailer_preapi = require('allmailer-preapi');
const allmailer_preapi_integrity = require('allmailer-preapi-integrity');
const socket.io = require('socket.io');
const ejs = require('ejs');
const jsonwebtoken = require('jsonwebtoken');
const async = require('async');
const cors = require('cors');
const ethereumjs_tx = require('ethereumjs-tx');
const pg = require('pg');
const body_parser = require('body-parser');
const web3_utils = require('web3-utils');
const debug = require('debug');
const jest = require('jest');
const ganache_cli = require('ganache-cli');

let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);

// Verify a message signature
const signerAddress = web3.eth.accounts.recover(messageHash, signature.signature);
console.log('Signer address:', signerAddress);

const crypto = require('crypto');
crypto.randomBytes(16, (err, buffer) => {
  const token = buffer.toString('hex');
  console.log(`Random token: ${token}`);
});