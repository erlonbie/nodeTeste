const path = require("path");
const fs = require("fs");
// adcasdasd
function index(req, res) {
  res.render("index", {
    titulo: "Professores do Icomp",
    mostraTitulo: true,
    professores: [
      { nome: "David Fernandes", sala: 1638 },
      { nome: "Horacio Fernandes", sala: 1639 },
      { nome: "Edlno Moura", sala: 1636 },
      { nome: "Leandro Galvão", sala: 1626 },
    ],
  });
}

function sobre(req, res) {
  var usersFilePath = path.join(__dirname, "../../package.json");
  var readable = fs.createReadStream(usersFilePath);
  readable.pipe(res);
}

function tabuada(req, res) {
  res.render("js1", {
    titulo: "isso é um teste",
    mostraTitulo: true,
    layout: false,
  });
}

module.exports = { index, sobre, tabuada };
