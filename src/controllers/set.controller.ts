import mongoose from "mongoose";

import User from "../models/User.model";
import Flashcard from "../models/Flashcard.model";
import FlashcardSet from "../models/FlashcardSet.model";
import Collection from "../models/Collection.model";

import { Request, Response } from "express";

const fetchAllSets = async (req: Request, res: Response) => {};

const fetchSetById = async (req: Request, res: Response) => {};

const createSet = async (req: Request, res: Response) => {};

const updateSetById = async (req: Request, res: Response) => {};

const deleteSetById = async (req: Request, res: Response) => {};

export { fetchAllSets, fetchSetById, updateSetById, deleteSetById, createSet };
