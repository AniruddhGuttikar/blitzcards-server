import mongoose from "mongoose";

import User from "../models/User.model.js";
import Flashcard from "../models/Flashcard.model.js";
import FlashcardSet from "../models/FlashcardSet.model.js";
import Collection from "../models/Collection.model.js";

import { Request, Response } from "express";

const fetchUserById = async (req: Request, res: Response) => {};

const createUser = async (req: Request, res: Response) => {};

const updateUserById = async (req: Request, res: Response) => {};

const deleteUserById = async (req: Request, res: Response) => {};

export { createUser, fetchUserById, updateUserById, deleteUserById };
