const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({
    size: String,
    bread: String,
    protein: String,
    cheese: String,
    veggies: [String],
    sauces: [String],
    seasonings: [String],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Sub", subSchema);
