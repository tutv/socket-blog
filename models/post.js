'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

let Post = new Schema({
    post_title: {
        type: String,
        required: true,
    },
    post_content: {
        type: String,
        required: true,
        default: ''
    },
    post_author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    },
});

Mongoose.model('Post', Post);