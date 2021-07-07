"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestauranteModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const restaurante_schema_1 = require("../schemas/restaurante.schema");
const restaurante_controller_1 = require("./restaurante.controller");
const restaurante_service_1 = require("./restaurante.service");
let RestauranteModule = class RestauranteModule {
};
RestauranteModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'restaurantes', schema: restaurante_schema_1.RestauranteSchema }])],
        providers: [restaurante_service_1.RestauranteService],
        controllers: [restaurante_controller_1.RestauranteController]
    })
], RestauranteModule);
exports.RestauranteModule = RestauranteModule;
//# sourceMappingURL=restaurante.module.js.map