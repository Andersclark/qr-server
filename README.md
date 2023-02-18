# QrServer

## Description

A simple Node+Express app for outputting QR-codes based on requests.

## Internals

This is pretty rudimentary: A webserver that responds to a single url-parameter by generating a qr-code encoded in a DataURL. The server has a small run-time cache and that is it.

If you simply want code for generating QrCodes, than the dependency in use here is: [qrcode](https://www.npmjs.com/package/qrcode)

## How to run

1. Clone the repo
1. Navigate terminal into folder
1. Install dependencies with `npm install`
1. Start server by typing `npm start`
1. Open a browser and navigate to `http://localhost:3000/{YOUR TEXT HERE}`
1. The server should respond with a data-url.
