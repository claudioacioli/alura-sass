const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("client"));

const server = () => {
  console.log("Bem vindo ao servidor");
  console.log(`Estamos escutando na porta ${port}`);
};

app.listen(port, server);

