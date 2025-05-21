// Book.repository.ts
import { AppDataSource } from "../../config/database";
import { Book } from "../Book.entity";
export const BookRepo = AppDataSource.getRepository(Book);