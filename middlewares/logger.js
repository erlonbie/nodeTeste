const express = require('express');

function logger (tipo) {
    if (tipo === "completo") {
        return function(res, req, next) {
            console.log("Logs completos");
            next();
        }
    } else if (tipo === "simples"){
        return function(res, req, next) {
           console.log("Logs simples");
            next();
        }
    }
}

module.exports ={ logger };
