import express from "express";
import livroController from "../controllers/livroscontrollers.js";

const router = express.Router();
router.get("/livros", livroController.getLivros);

export default router;