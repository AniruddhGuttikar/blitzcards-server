import mongoose from "mongoose";
import bcrypt from "bcrypt";

import User from "../models/User.model.js";
import Flashcard from "../models/Flashcard.model.js";
import FlashcardSet from "../models/FlashcardSet.model.js";
import Collection from "../models/Collection.model.js";

import { Request, Response } from "express";

const fetchUserById = async (req: Request, res: Response) => {};

const createUser = async (req: Request, res: Response) => {
  const { id, username, email, password } = req.body;

  console.log("user is trying to connect");

  if (!username || !email || !password) {
    res.send("Please provide all the required fields");
    throw new Error("Please provide all the required fields");
  }

  const user = await User.findById(id);
  if (user) {
    console.log("User already exists");
    res.status(400).send("User already exists");
    return;
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({
      username: newUser.username,
      email: newUser.email,
      since: newUser.createdAt,
    });
  } catch (error) {
    res.status(500).send(`Something went wrong, err: ${error}`);
    console.error("can't create user", error);
  }
};

const updateUserById = async (req: Request, res: Response) => {};

const deleteUserById = async (req: Request, res: Response) => {};

export { createUser, fetchUserById, updateUserById, deleteUserById };
