const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    first_name : {
        type : String,
        required: true,
    },
    last_name : {
        type : String,
    },
    email: {
        type : String
    },
    images : [String],
    password: {
        type: String,
        required: true,
    },
    gender : {
        type: String,
        required: true,
    },
    // _id : {
    //     type : String,
    //     required: true
    // }

});


const userModel = mongoose.model('users',usersSchema);

module.exports = usersSchema;