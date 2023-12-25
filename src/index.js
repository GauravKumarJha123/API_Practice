const express = require("express");

const {PORT } = require('./config/serverConfig');
const bodyParser = require("body-parser");
const setupAnsStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    const PORT = 3000;
    app.listen(PORT, () =>{
        console.log(process.env);
    });
}

setupAnsStartServer();