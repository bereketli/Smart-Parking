const Joi = require("joi")
function validateAuth(input){
    const Schema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
         password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })

    const validation = Schema.validate(input)
     
    if (validation.error){
        return validation.error.details[0].message
    }

    else{
        return false
    }


}

module.exports = validateAuth