const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middlewares/auth');
const User = require('../../models/Users');

// create users
router.post(
  '/create',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more character'
    ).isLength({ min: 6 }),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exist' }] });
      }

      user = new User({
        name,
        email,
        password,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();
      res.status(201).json({ msg: "User created successFully" });

      // // Return jsonwebtoken
      // const payload = {
      //   user: {
      //     id: user.id,
      //   },
      // };

      // jwt.sign(
      //   payload,
      //   process.env.jwtSecret,
      //   {
      //     expiresIn: 360000,
      //   },
      //   (err, token) => {
      //     if (err) throw err;
      //   }
      //   );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// get all users
router.get('/', auth, async (req, res, next) => {
  try {
    if (req.user.role === "Admin") {
      const user = await User.find();
      return res.json(user);
    }
    res.status(401).json({
      msg: "Unauthorized"
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// user all order
router.get('/getTotal', async (req, res) => {
  try {
    const getOrder = await User.find().count();
    return res.status(201).json(getOrder)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})


module.exports = router;