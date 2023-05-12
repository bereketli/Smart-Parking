const Joi = require("joi")

function employeeValidator(input){
    const schema = Joi.object({

        slotNumber:Joi.number()
            .integer(),
        occupied: Joi.boolean(),
        reserved: Joi.boolean,
        carPlate: Joi.string()
            .min(6)
            .max(9),
    
    })

    const validation = schema.validate(input)
    
    if (validation.error){
        return validation.error.details[0].message
    }

    else{
        return false
    }


}

module.exports = employeeValidator