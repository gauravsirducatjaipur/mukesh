const User = require("../models/User");
const bcrypt = require("bcrypt");


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


module.exports = { signupController };