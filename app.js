const mongoose = require("mongoose")
const User = require("./User.js")

const url = "mongodb://127.0.0.1:27017/testdb"

mongoose.connect(
    url,
    () => console.log("connected to mongodb"),
    (err) => console.error(err)
)

// createUser()
// createUser2()
// createUser3()
// findUserById()
// findUser4()
findUser7()

async function findUser7() {
    try {
        const user = await User.findOne({name: "Tom Hanks"})
        console.log(user)
        // before saving the user,
        // userSchema.pre("save", ... will be called
        await user.save()
        console.log(user)
    } catch (err) {
        console.error(err)
    }
}

async function findUser6() {
    try {
        const user = await User.findOne({name: "Tom Hanks"})
        console.log(user)
        console.log(user.namedEmail)
    } catch (err) {
        console.error(err)
    }
}

async function findUser5() {
    try {
        // User.find() and User.where() returns query
        const user = await User.find().byName("James")
        // const user = await User.where().byName("James")
        console.log(user)
    } catch (err) {
        console.error(err)
    }
}

async function findUser4() {
    try {
        const user = await User.findByName("James")
        console.log(user)
    } catch (err) {
        console.error(err)
    }
}

async function findUser3() {
    try {
        const user = await User.findOne({name: "James"})
        console.log(user)
        user.greeting()
    } catch (err) {
        console.error(err)
    }
}

async function findUser2() {
    try {
        const user = await User.where("age")
            .gt(45)
            .lt(55)
            .where("name")
            .equals("James")
            .populate("bestFriend")
            .limit(1)
        console.log(user)
    } catch (err) {
        console.error(err)
    }
}

async function findUser() {
    try {
        // const user = await User.findOne({name: "James"})
        const user = await User.where("age")
            .gt(45)
            .lt(55)
            .where("name")
            .equals("James")
            // .where("email")
            // .equals("jim@gmail.com")
            .populate("bestFriend")
            .limit(1)
        // .select("age")
        // user[0].bestFriend = "62a4ebf18f0d4d2be2e6cf7e"
        // await user[0].save()
        console.log(user)
    } catch (err) {
        console.error(err)
    }
}

async function findUserById() {
    try {
        const user = await User.findById("62ab15c325030441da657a0d")
        console.log(user)
    } catch (err) {
        console.error(err.message)
    }
}

async function createUser3() {
    // create user with more fields added in User schema
    try {
        const user = await User.create({
            name: "Tom Hanks",
            age: 70,
            email: "tom@gmail.com",
            hobbies: ["Bowling", "Cricket", "Cooking"],
            address: {
                street: "123 Main St",
                city: "Atlanta",
            },
        })
        console.log(user)
        user.createdAt = 5
        await user.save()
        console.log(user)
    } catch (err) {
        console.error(err.message)
    }
}

async function createUser2() {
    // create user with more fields added in User schema
    try {
        const user = await User.create({
            name: "James Garner",
            age: 84,
            email: "jm@gmail.com",
            hobbies: ["Bowling", "Cricket", "Cooking"],
            address: {
                street: "123 Main St",
                city: "Atlanta",
            },
        })
        console.log(user)
        user.createdAt = 5
        await user.save()
        console.log(user)
    } catch (err) {
        console.error(err.message)
    }
}

async function createUser() {
    // create user
    const user = await User.create({
        name: "Ken Thompson",
        age: 75,
    })
    // update user
    user.name = "Chris Lattner"
    user.age = 55
    await user.save()

    console.log(user)
}
