"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const bookControler = require('./controlers/book.controler')
const jwksClient = require("jwks-rsa");
const PORT = process.env.PORT
mongoose.connect('mongodb://localhost:27017/canOfBooks', {useNewUrlParser: true, useUnifiedTopology: true});
const book=require('./models/book.model')
const client = jwksClient({
    // this url comes from your app on the auth0 dashboard 
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
});

// this is a ready to use function
const getKey = (header, callback) => {
    client.getSigningKey(header.kid, function (err, key) {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    });
}
app.get('/', (req, res) => {
    res.send('working well....')
});
app.get('/book', bookControler)
// (req, res) => {
    // const token = req.headers.authorization.split(' ')[1];
    // jwt.verify(token, getKey, {}, (err, user) => {
    //     if (err) {
    //         res.send('invalid token');
    //     }
    //     res.send(bookControler())
    // })
    // let {email}=req.query
    // book.find({ email: email }, (error, item) => {
    //     if (error) {
    //       res.send('we have error')
    //     } else {
    //       res.send(item[0].book)
    //     }
    //   })
//     re.send(bookControler)
// });


app.listen(PORT, () => {
    console.log(`listining on port ${PORT} `);
})