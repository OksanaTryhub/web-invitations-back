const { ctrlWrapper } = require('../utils');
const guests = require('../models/guest'); 

const getAllGuests = async (req, res) => {
    const result = await guests.getAll();
    res.json(result);
}

const addGuest = async (req, res) => {
    const result = await guests.addGuest(req.body);
    res.status(201).json(result);
}

module.exports = {
  getAllGuests: ctrlWrapper(getAllGuests),
  addGuest: ctrlWrapper(addGuest),  
}

