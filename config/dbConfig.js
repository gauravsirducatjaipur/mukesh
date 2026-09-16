const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log("mongoDB Connected Successfully...")
    })
    .catch((err) => {
      console.log("error in mongodb connnection", err)
    })
}


module.exports = connectDB;


// const mongoose = require("mongoose")


// const mongoose  = require("mongoose")

// mongoose.connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("mongoDB Connected Successfully...")
//   })
//   .catch((err) => {
//     console.log("error in mongodb connnection", err)
//   })


// const mongoose = require("mongoose")

// try {
//   mongoose.connect(process.env.MONGO_URL)
//   console.log("Mongodb connected succesfully")

// } catch (error) {
//   console.log("error in database connection", error)
// }


// const connectDB = () => {
//   mongoose.connect(process.env.MONGO_URL)
//     .then(() => {
//       console.log("mongoDB Connected Successfully...")
//     })
//     .catch((err) => {
//       console.log("error in db connection", err)
//     })
// }


// const connectDB = () => {
//   try {
//     mongoose.connect(process.env.MONGO_URL)
//     console.log("Mongodb connected succesfully")

//   } catch (error) {
//     console.log("error in database connection", error)
//   }
// }

// module.exports = connectDB