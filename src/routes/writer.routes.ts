// writer.routes.ts
import { Router } from "express";
import { createWriter, getWriters } from "../controller/Writer.controller";
const router = Router();
router.post("/", createWriter); // Crear escritor
router.get("/", getWriters); // Listar escritores
export default router;
