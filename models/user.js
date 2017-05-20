'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

let User = new Schema({
    user_login: {
        type: String,
        trim: true,
        index: true,
        require: true
    },
    user_email: {
        type: String,
        trim: true,
        unique: true,
        index: true,
        required: true
    },
    user_pass: {
        type: String,
        require: true,
        default: ''
    }
});

Mongoose.model('User', User);