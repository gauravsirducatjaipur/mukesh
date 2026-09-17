const jwt = require("jsonwebtoken");
const User = require("../models/User");


const protect = async (req, res, next) => {
  // console.log("request header is", req.headers)
  const authHeader = req.headers.authorization;
  // console.log("auth header is", authHeader)

  if (!authHeader || !authHeader.startsWith("Bearer "))
    return res.status(401).json({ message: "Unauthorized, token not found" });

  const token = authHeader.split(" ")[1];
  // console.log("Token is", token);

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // console.log("Decoded token is", decoded);

  req.user = await User.findById(decoded.id).select("-password");
  // console.log("User is", req.user);

  if (!req.user)
    return res.status(401).json({ massage: "User not found" });

  next();
}

module.exports = { protect }