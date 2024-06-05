import mongoose, { Schema } from "mongoose";

export interface IFlashcard {
  question: String;
  defaultAnswer: String;
  aiAnswer: String;
  author: mongoose.Types.ObjectId;
  confidence: Number;
  createdAt: Date;
}
const flashcardSchema = new Schema<IFlashcard>({
  question: {
    type: String,
    required: true,
  },
  defaultAnswer: {
    type: String,
    required: true,
  },
  aiAnswer: {
    type: String,
    default: "",
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  confidence: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Flashcard = mongoose.model<IFlashcard>("Flashcard", flashcardSchema);
export default Flashcard;
