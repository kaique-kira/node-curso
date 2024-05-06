import express from "express";
import livroController from "../controllers/livroscontrollers.js";

const router = express.Router();

router.get("/livros/cadastrar", (req, res) => {
  res.sendFile(public + "/cadastroLivros.html");
});

router
  .get("/livros", livroController.getLivros)
  .get("/livros/busca", livroController.getLivroByEditora)
  .get("/livros/busca/titulo", livroController.getLivroByNome)
  .get("/livros/:id", livroController.getLivrosById)
  .post("/livros", livroController.createLivros)
  .put("/livros/:id", livroController.updateLivros)
  .delete("/livros/:id", livroController.deleteLivros);

export default router;
