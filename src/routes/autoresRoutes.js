import express from "express";
import autoresController from "../controllers/autoresController.js";

const router = express.Router();
router
    .get("/autores", autoresController.getAutores)
    .post("/autores", autoresController.createAutores)
    .put("/autores/:id", autoresController.updateAutores)
    .get("/autores/:id", autoresController.getAutoresById)
    .delete("/autores/:id", autoresController.deleteAutores)

export default router;