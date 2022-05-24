import User from "../models/UserModel";
import bcrypt from "bcrypt";

const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
}; 

const createUser = async (req, res) => {
	const { username, email, password } = req.body;

	try {
    const salt = bcrypt.genSaltSync();
    const user = await new User({ username, email, password: bcrypt.hashSync(password, salt)});
    user.save();
    res.status(201).json({
      response: {
        username: user.username,
        accessToken: user.accessToken,
        userId: user._id
      },
      success: true
    })
  } catch (error) {
    res.status(409).json({ message: "Could not create user", error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && bcrypt.compareSync(password, user.password)) {
    res.status(200).json({ accessToken: user.accessToken });
  } else {
    res.status(400).json({ message: "Username and password don't match" });
  }
};

const authenticateUser = async (req, res, next) => {
	const user = await User.findOne({ accessToken: req.header("Token")});
	if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).json({ loggedOut: true })
  }
};

const sendMessage = (req, res) => {
  res.send("Yay, welcome!")
};

module.exports = { getUsers, createUser, loginUser, authenticateUser, sendMessage };