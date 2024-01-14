const fs = require("fs/promises");
const path = require('path');

const guestsPath = path.join(__dirname, "guests.json");

const getAll = async () => {
  const data = await fs.readFile(guestsPath);
  return JSON.parse(data);
}

const addGuest= async ({ name, isAccepted, company, meal }) => {
  const guests = await getAll();
  const guest = {
    name,
    isAccepted,
    company,
    meal
  };
  guests.push(guest);

  await fs.writeFile(guestsPath, JSON.stringify(guests, null, 2));
  return guest;
}

module.exports = {
  getAll,
  addGuest
}

