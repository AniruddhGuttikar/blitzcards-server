import mongoose from "mongoose";

import User from "../models/User.model";
import Flashcard from "../models/Flashcard.model";
import FlashcardSet from "../models/FlashcardSet.model";
import Collection from "../models/Collection.model";

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
