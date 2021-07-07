"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpinionSchema = void 0;
const mongoose = require("mongoose");
exports.OpinionSchema = new mongoose.Schema({
    Nombre: String,
    Comentario: String,
    Puntuacion: Number
});
//# sourceMappingURL=opinion.schema.js.map