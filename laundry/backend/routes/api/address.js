const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middlewares/auth');
const User = require('../../models/Address');
const Address = require('../../models/Address');

// create address
router.post(
    '/create',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('phone', 'Phone is required').not().isEmpty(),
        check('address', 'address is required').not().isEmpty(),
        check('country', 'country is required').not().isEmpty(),
        check('state', 'state is required').not().isEmpty(),
        check('city', 'city is required').not().isEmpty(),
        check('pincode', 'pincode is required').not().isEmpty()
    ], auth,
    async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            if (req.user) {
                console.log("ok");
                const address = await Address.create(req.body);
                Address.user_id = req.user.id;
                await address.save();
                return res.status(201).json(address);
            }

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);



module.exports = router;