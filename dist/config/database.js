"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Writer_entity_1 = require("../entities/Writer.entity");
const Book_entity_1 = require("../entities/Book.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite", // Motor de base de datos SQLite
    database: "db.sqlite", // Archivo de la base de datos
    synchronize: true, // Sincroniza automáticamente las tablas
    logging: false, // Deshabilita el log SQL en consola
    entities: [Writer_entity_1.Writer, Book_entity_1.Book], // Entidades cargadas en esta conexión
});
