"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
//Importamos cosas de nuestro fichero database
var _require = require('./database'),
  conectarADataBase = _require.conectarADataBase;

// Iniciar el servidor
var port = 3000;
_app["default"].listen(port, function () {
  console.log("Servidor iniciado en el puerto ".concat(port));
});
conectarADataBase();