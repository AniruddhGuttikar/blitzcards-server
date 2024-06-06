import mongoose from "mongoose";

import User from "../models/User.model";
import Flashcard from "../models/Flashcard.model";
import FlashcardSet from "../models/FlashcardSet.model";
import Collection from "../models/Collection.model";

import { Request, Response } from "express";

const fetchUserById = async (req: Request, res: Response) => {};

const createUser = async (req: Request, res: Response) => {};

const updateUserById = async (req: Request, res: Response) => {};

const deleteUserById = async (req: Request, res: Response) => {};

export { createUser, fetchUserById, updateUserById, deleteUserById };
