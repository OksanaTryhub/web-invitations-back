const express = require('express'); 

const { validateBody } = require('../../utils');
const schemas = require('../../schemas/people'); 
const ctrl = require('../../controllers/people');


const router = express.Router();

router.get('/', ctrl.getAllPeople);

router.post('/', validateBody(schemas.addPersonSchema), ctrl.addPerson);

module.exports = router;