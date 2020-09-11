const Joi = require('@hapi/joi');

const validateRegister =data=>{
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })
    return schema.validate(data, schema);
}

const loginValidation = data =>{
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })
    return schema.validate(data, schema);
}

module.exports.validateRegister = validateRegister;
module.exports.loginValidation = loginValidation;
    