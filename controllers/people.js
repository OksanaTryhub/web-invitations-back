const { ctrlWrapper } = require('../utils');
const people = require('../models/people'); 

const getAllPeople = async (req, res) => {
    const result = await people.getAll();
    res.json(result);
}

const addPerson = async (req, res) => {
    // const { error } = addPersonSchema.validate(req.body);

    // if (error) {
    //   throw HttpError(400, error.message)
    // }
    const result = await people.addPerson(req.body);
    res.status(201).json(result);
}

module.exports = {
  getAllPeople: ctrlWrapper(getAllPeople),
  addPerson: ctrlWrapper(addPerson),  
}

