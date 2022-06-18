// const mongoose = require("mongoose")

// User.js
// default export
// module.exports = mongoose.model("User", userSchema)

// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// }

// () => {
//     console.log(`connected to ${url}`)
// }, (err) => {
//     console.error(err)
// })

/////////
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connection established successfully to ${url}`))
  .catch((err) => console.log("Error:", err))

import mongoose from "mongoose"

// localhost does not work
// const url = "mongodb://localhost/testdb"
// This works
const url = "mongodb://127.0.0.1:27017/testdb"

const db = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (err) {
    console.error("Error:", err)
  }
}

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "))
db.once("open", function () {
  console.log("Connected successfully")
})

const conn = mongoose.connection
conn.once("open", function () {
  console.log("MongoDB database connection established successfully")
})

// correct way to connect to mongodb
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connection established successfully to ${url}`))
  .catch((err) => console.log("Error:", err))

const user = new User({
  name: "Rob Pike",
  age: 65,
})
await user.save()

user
  .save()
  .then(() => console.log("user James saved"))
  .catch((err) => console.error(err))
