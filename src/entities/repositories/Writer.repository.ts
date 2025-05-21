// Writer.repository.ts
import { AppDataSource } from "../../config/database";
import { Writer } from "../Writer.entity";
export const WriterRepo = AppDataSource.getRepository(Writer);
