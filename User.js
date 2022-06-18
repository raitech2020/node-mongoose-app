const mongoose = require("mongoose")
const {addressSchema} = require("./Address")

const userSchema = mongoose.Schema({
        name: String,
        age: {
            type: Number,
            min: 1,
            max: 150,
            validate: {
                validator: (v) => v % 2 === 0,
                message: (props) => `${props.value} is not an even number`,
            },
        },
        email: {
            type: String,
            minLength: 6,
            maxLength: 15,
            required: false,
            lowercase: true,
        },
        createdAt: {
            type: Date,
            immutable: true,
            default: () => Date.now(),
        },
        updatedAt: {
            type: Date,
            default: Date.now(),
        },
        bestFriend: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User",
        },
        hobbies: [String],
        address: addressSchema,
    }
)

userSchema.methods.greeting = function () {
    console.log(`Hi, my name is ${this.name} and my age is ${this.age}`)
}

// static methods
userSchema.statics.findByName = function (name) {
    return this.findOne({name: RegExp(name, "i")})
}

// method on query
userSchema.query.byName = function (name) {
    return this.where({name: RegExp(name, "i")}).limit(1)
}

userSchema.virtual("namedEmail").get(function () {
    return `${this.name} <${this.email}>`
})

userSchema.pre("save", function (next) {
    this.updatedAt = Date.now()
    next()
})

userSchema.post("save", function (userDoc, next) {
    userDoc.greeting()
    next()
})

module.exports = mongoose.model("User", userSchema)
