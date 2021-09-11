"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var tiposIdentificacion_routes_1 = __importDefault(require("./router/tiposIdentificacion.routes"));
var app = express_1.default();
typeorm_1.createConnection();
// Middlewares
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
// routes
app.use(tiposIdentificacion_routes_1.default);
app.listen(8080);
console.log('Server on port', 8080);
