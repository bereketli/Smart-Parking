const express = require("express")
const bcrypt = require("bcrypt")
const customerValidator= require("../validation/customer")
const EmployeeValidator = require("../validation/employees")
const db = require("../config/admin")
const router = express.Router()

router.post("/:id", async(req, res) => {

    if (req.params.id == "customer"){
        const Customers = db.collection("Customers")
        const error_customer_input = customerValidator(req.body)

        if ( !error_customer_input){

            bcrypt.hash(req.body.password, 10 , async(err, result) =>{
                req.body.password = result
                
                await Employees.add(req.body)
                res.status(200).send(req.body)
                

            })
     
        }
    
    else{
        res.status(400).send(is_customer_input_correct)
    }

    }

    else{

        const Employees = db.collection("Employees")
        const error_employee_input = EmployeeValidator(req.body)

        if (!error_employee_input){
            bcrypt.hash(req.body.password, 10 , async(err, result) =>{
                req.body.password = result
                
                await Employees.add(req.body)
                res.status(200).send(req.body)
                

            })
            
         
           
        }
        else{
            res.status(400).send(error_employee_input)
        }

    
    }  
})


module.exports = router