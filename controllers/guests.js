const { ctrlWrapper } = require('../utils');
// const guests = require('../models/guest1');

const Guest = require('../models/guest');

const getAllGuests = async (req, res) => {
  // const result = await guests.getAll();
  const result = await Guest.find({}, "-createdAt -updatedAt");
    res.json(result);
}

const addGuest = async (req, res) => {
  // const result = await guests.addGuest(req.body);
  const result = await Guest.create(req.body)
    res.status(201).json(result);
}

module.exports = {
  getAllGuests: ctrlWrapper(getAllGuests),
  addGuest: ctrlWrapper(addGuest),  
}

