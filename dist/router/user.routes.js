"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var tiposIdentificacion_controller_1 = require("../controllers/tiposIdentificacion.controller");
router.get("/tiposIdentificacion", tiposIdentificacion_controller_1.getTiposIdentificacion);
router.get("/tiposIdentificacion/:id", tiposIdentificacion_controller_1.getTipoIdentificacion);
exports.default = router;
