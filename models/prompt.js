import { Schema } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User ",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
    ref: "User ",
  },
  tag: {
    type: String,
    required: [true, "tag is required"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
