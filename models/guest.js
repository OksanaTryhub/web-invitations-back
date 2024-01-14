const { Schema, model } = require('mongoose');

const guestSchema = new Schema({
 name: {
    type: String,
    required: [true, "Name must be!"],
  },
  isAccepted: {
    type: Boolean,
    required: true,
  },
  company: Boolean,
  meal: String,
 
}, { versionKey: false, timestamps: true });

const Guest = model("guest", guestSchema);

module.exports = Guest;
