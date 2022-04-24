const express = require("express");
const mongoose = require("mongoose");
const koneistustietokanta_controller = require("./koneistustietokanta_controller")
const body_parser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(body_parser.json());

// CREATE

app.post("/api/parameter", koneistustietokanta_controller.api_post_parameter);
app.get("/api/parameters", koneistustietokanta_controller.api_get_parameters);
app.get("/api/parameter/:id", koneistustietokanta_controller.api_get_parameter);
app.put("/api/parameter/:id", koneistustietokanta_controller.api_put_parameter);
app.delete("/api/parameter/:id", koneistustietokanta_controller.api_delete_parameter);

const db_uri = "mongodb+srv://db_user:QGoVzA46XiVaX8Uw@cluster0.9iggy.mongodb.net/koneistustietokanta_db?retryWrites=true&w=majority";


mongoose.connect(db_uri, {}).then(() => {
    console.log("db connected");
    console.log("listening port: ", PORT);
    app.listen(PORT);
  });




