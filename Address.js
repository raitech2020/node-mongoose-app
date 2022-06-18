const mongoose = require("mongoose")

const addressSchema = mongoose.Schema({
    street: String,
    city: String
})

module.exports = {
    addressSchema
}