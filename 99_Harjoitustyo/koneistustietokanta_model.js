const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        Tool_name:{
            type: String,
            required: true
        },
        Material: {
            type: String,
            required: true
        },
        Cutting_speed: {
            type: Number,
            required: true
        },
        Feed_rate: {
            type: Number,
            required: true
        }
        
    }
);

module.exports = mongoose.model("koneistustietokanta", schema);

// koneistustietokanta_db
// Machining_parameter_set