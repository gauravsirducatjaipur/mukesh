const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const signupController = async (req, res) => {
  try {
    const { name, address, city, email, password } = req.body;
    console.log("request body is", req.body)
    const exist = await User.findOne({ email });

    console.log("user exist is", exist)
    if (exist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    // console.log("hashed password is", hashedpassword)


    const user = await User.create({ name, address, city, email, password: hashedpassword });
    // console.log("user is", user)

    res.status(201).json({ message: "signup successful", user });

    res.send("register successfull")
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("req body is", req.body)

    const user = await User.findOne({ email });
    console.log("user is", user)

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("is Match have", isMatch)

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = generateToken(user._id)
    console.log("token is", token)

    res.status(200).json({
      token: generateToken(user._id),
      user,
    });
    // res.send("login successfull")
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const profileController = (req, res) => {
  console.log("profile controller called by user")



  // res.send("Welcome to profile page")
  res.status(200).json(req.user, { message: "Welcome to profile page" });

}

module.exports = { signupController, loginController, profileController };