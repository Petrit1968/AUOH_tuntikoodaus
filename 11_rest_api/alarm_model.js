const mongoose = require("mongoose");

const schema = new mongoose.schema(
    {
        reason:{
            type: String,
            required: true
        },
        status:{
            type: String,
            required: true
        }
    }

);


module.exports = mongoose.model("alarm", schema);