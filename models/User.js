const mongoose = require('mongoose');
// Creating User schema

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        isAdmin: { type: Boolean, default: false}
    },
    { timestamps: true } // createdAt and UpdatedAt time noted
);

module.exports = mongoose.model("User", UserSchema);