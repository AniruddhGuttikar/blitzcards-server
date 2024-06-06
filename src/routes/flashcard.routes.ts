import { Router } from "express";

import {
  createFlashcard,
  deleteFlashcardById,
  fetchAllFlashcards,
  fetchFlashcardById,
  updateFlashcardById,
} from "../controllers/flashcard.controller.js";

const flashcardRouter = Router();

flashcardRouter.get("/", fetchAllFlashcards);
flashcardRouter.get("/:id", fetchFlashcardById);
flashcardRouter.put("/", createFlashcard);
flashcardRouter.delete("/:id", deleteFlashcardById);
flashcardRouter.patch("/:id", updateFlashcardById);

export default flashcardRouter;
