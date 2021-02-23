const Joi = require('joi');
const validator = Joi.object({
    name:Joi.string()
            .min(3)
            .max(25)
            .required(),
    age:Joi.number()
            .min(1),       
})
module.exports=validator;