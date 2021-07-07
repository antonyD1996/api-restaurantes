"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestauranteSchema = void 0;
const mongoose = require("mongoose");
const opinion_schema_1 = require("./opinion.schema");
exports.RestauranteSchema = new mongoose.Schema({
    Nombre: String,
    Direccion: String,
    Telefono: Number,
    Opiniones: [opinion_schema_1.OpinionSchema]
});
//# sourceMappingURL=restaurante.schema.js.map