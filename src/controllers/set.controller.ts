import mongoose from "mongoose";

import User from "../models/User.model.js";
import Flashcard from "../models/Flashcard.model.js";
import FlashcardSet from "../models/FlashcardSet.model.js";
import Collection from "../models/Collection.model.js";

import { Request, Response } from "express";

const fetchAllSets = async (req: Request, res: Response) => {};

const fetchSetById = async (req: Request, res: Response) => {};

const createSet = async (req: Request, res: Response) => {};

const updateSetById = async (req: Request, res: Response) => {};

const deleteSetById = async (req: Request, res: Response) => {};

export { fetchAllSets, fetchSetById, updateSetById, deleteSetById, createSet };
