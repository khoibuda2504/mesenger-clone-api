const mongoose = require("mongoose");
const Schema = mongoose.Schema
const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    text: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
