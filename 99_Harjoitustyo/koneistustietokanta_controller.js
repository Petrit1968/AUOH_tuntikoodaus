const koneistustietokanta_model = require("./koneistustietokanta_model");


// CRUD

//CREATE

const api_post_parameter = (req, res) => {
  let model = koneistustietokanta_model(req.body);
  
  model
    .save()
    .then((model) => {
      res.send(model);
    })
    .catch((err) => {
      res.status(500);
      res.send(err.message);
    });
};

// READ

const api_get_parameters = (req, res) => {
    koneistustietokanta_model.find({}).then((parameters)=>{
        res.send(parameters);
    });
};

const api_get_parameter = (req, res) => {
    const id = req.params.id;
    koneistustietokanta_model.findById(id).then((parameter)=>{
        res.send(parameter);
    }).catch(()=>{
        res.status(404);
        res.send("not found");
    });
};


const api_put_parameter = (req, res) => {
    const id = req.params.id;
    koneistustietokanta_model.findByIdAndUpdate(id, req.body).then((parameter)=>{
        res.send(parameter);
    });
};

//DELETE

const api_delete_parameter = (req, res) => {
    const id = req.params.id;
    koneistustietokanta_model.findByIdAndDelete(id).then(()=>{
        console.log()
        res.send();
    });
};


module.exports.api_post_parameter = api_post_parameter;
module.exports.api_get_parameters = api_get_parameters;
module.exports.api_get_parameter = api_get_parameter;
module.exports.api_put_parameter = api_put_parameter;
module.exports.api_delete_parameter= api_delete_parameter;