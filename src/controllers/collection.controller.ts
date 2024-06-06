import mongoose from "mongoose";

import User from "../models/User.model.js";
import Flashcard from "../models/Flashcard.model.js";
import FlashcardSet from "../models/FlashcardSet.model.js";
import Collection from "../models/Collection.model.js";

import { Request, Response } from "express";

const fetchAllCollections = async (req: Request, res: Response) => {};

const fetchCollectionById = async (req: Request, res: Response) => {};

const createCollection = async (req: Request, res: Response) => {};

const updateCollectionById = async (req: Request, res: Response) => {};

const deleteCollectionById = async (req: Request, res: Response) => {};

export {
  createCollection,
  fetchAllCollections,
  fetchCollectionById,
  updateCollectionById,
  deleteCollectionById,
};
