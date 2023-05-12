const Joi = require("joi")
function customerValidator(input){

    const schema = Joi.object({

        name: Joi.string()
            .alphanum()
            .max(12),
        fatherName: Joi.string()
            .alphanum()
            .max(12),
        address: Joi.string()
            .max(40),
        phoneNumber: Joi.string()
            .min(10)
            .max(13),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        
    
    
    })
    const validation = schema.validate(input)

    if (validation.error){

            return validation.error.details[0].message

        }
    else{
        return false
    }

}

module.exports = customerValidator


