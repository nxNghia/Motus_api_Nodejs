/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port, () => console.log(`Running on PORT ${port}`));
