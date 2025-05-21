// book.routes.ts
import { Router } from "express";
import { createBook, getBooks, updateBookAuthor } from
    "../controller/Book.controller";
const router = Router();
router.post("/", createBook); // Crear libro
router.get("/", getBooks); // Listar libros
router.put("/:id/author", updateBookAuthor); // Actualizar autor
export default router;