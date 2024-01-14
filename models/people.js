const fs = require("fs/promises");
const path = require('path');
// const {nanoid} = require('nanoid');

const peoplePath = path.join(__dirname, "people.json");

const getAll = async () => {
  const data = await fs.readFile(peoplePath);
  return JSON.parse(data);
}

const addPerson = async ({ name, isAccepted, company, meal }) => {
  const people = await getAll();
  const person = {
    // id: nanoid(),
    name,
    isAccepted,
    company,
    meal
  };
  people.push(person);

  await fs.writeFile(peoplePath, JSON.stringify(people, null, 2));
  return person;
}

module.exports = {
  getAll,
  addPerson
}