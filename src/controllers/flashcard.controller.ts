import mongoose from "mongoose";

import User from "../models/User.model";
import Flashcard from "../models/Flashcard.model";
import FlashcardSet from "../models/FlashcardSet.model";
import Collecetion from "../models/Collection.model";

import { Request, Response } from "express";

const fetchAllFlashcards = async (req: Request, res: Response) => {};

const fetchFlashcardById = async (req: Request, res: Response) => {};

const createFlashcard = async (req: Request, res: Response) => {};

const updateFlashcardById = async (req: Request, res: Response) => {};

const deleteFlashcardById = async (req: Request, res: Response) => {};

export {
  createFlashcard,
  fetchAllFlashcards,
  fetchFlashcardById,
  updateFlashcardById,
  deleteFlashcardById,
};
