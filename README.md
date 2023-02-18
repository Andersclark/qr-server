# QrServer

## Description

A simple Node+Express app for outputting QR-codes based on requests.

## Internals

This is pretty rudimentary: A webserver that responds to a single url-parameter by generating a qr-code encoded in a DataURL. The server has a small run-time cache and that is it.

If you simply want code for generating QrCodes, than the dependency in use here is: [qrcode](https://www.npmjs.com/package/qrcode)
