const Joi = require("joi");

const addGuestSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" is required field`,
    "string.empty": `"name" can't be empty`,
  }),
  isAccepted: Joi.boolean().required().messages({
    "any.required": `"isAccepted" is required field`,
    "string.empty": `"isAccepted" can't be empty`,
  }),
  company: Joi.boolean().required().messages({
    "any.required": `"company" is required field`,
    "string.empty": `"company" can't be empty`,
  }),
  meal: Joi.string().valid("meat", "fish", "vegetarian", "all").required().messages({
    "any.required": `"meal" is a very required field`,
    "any.only": `Please choose from "meat", "fish", "vegetarian", "all"`
  }),
});

module.exports = {
  addGuestSchema,
}