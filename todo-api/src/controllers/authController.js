const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const ATOKEN_EXPIRERY = 60 * 24 * 30; // 30 Days

const ATokenSecret = process.env.ACCESS_TOKEN_SECRET;

function _generateToken(data) {
  return jwt.sign(data, ATokenSecret, {expiresIn: `${ATOKEN_EXPIRERY}m`});
}

const authController = {
  postSignUp: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const passwordHash = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: passwordHash });

      const accessToken = _generateToken({ id: user._id });

      const now = new Date();
      now.setMinutes(now.getMinutes() + ATOKEN_EXPIRERY);

      const reposnseData = {
        expiresIn: now.toISOString(),
        accessToken,
      }

      res.status(201).json(reposnseData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user', details: error });
    }
  },

  postLogin: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email: email });
      console.log("user", user);

      if (!(!!user)) {
        return res.status(404).send({ error: "User not found" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).send({ error: "Invalid password" });
      }

      const accessToken = _generateToken({ id: user._id });

      const now = new Date();
      now.setMinutes(now.getMinutes() + ATOKEN_EXPIRERY);

      const reposnseData = {
        expiresIn: now.toISOString(),
        accessToken,
      }

      console.log("reposnseData", reposnseData);

      res.status(200).json(reposnseData);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to login', details: error });    
    }
  },
};

module.exports = authController;