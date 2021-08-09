const express = require("express");
const app = express();
const router = require("./config/router");
const logger = require("morgan");
const handlebars = require("express-handlebars");
const sass = require("node-sass-middleware");
//const morgan = require('morgan');
//comentário teste
//comentario pra testar o novo repositorio
app.use(logger("combined"));
app.engine(
  "hbs",
  handlebars({
    helpers: require(`${__dirname}/app/views/helpers`),
    //    layoutsDir: __dirname + "/app/views/layouts",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", `${__dirname}/app/views`);

app.use(
  sass({
    src: `${__dirname}/public/scss`,
    dest: `${__dirname}/public/css`,
    outputStyle: "compressed",
    prefix: "/css",
  })
);

app.use("/img", express.static(`${__dirname}/public/img`));
app.use("/css", express.static(`${__dirname}/public/css`));
app.use(router);

app.listen(3000, function () {
  console.log("Escutando a porta 3000");
});
