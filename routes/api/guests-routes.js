const express = require('express'); 

const { validateBody } = require('../../utils');
const schemas = require('../../schemas/guests'); 
const ctrl = require('../../controllers/guests');


const router = express.Router();

router.get('/', ctrl.getAllGuests);

router.post('/', validateBody(schemas.addGuestSchema), ctrl.addGuest);

module.exports = router;