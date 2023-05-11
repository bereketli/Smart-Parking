const express = require("express")
const {customerValidator}= require("../validation/customer")
const {EmployeeValidator} = require("../validation/employees")
const router = express.Router()

router.post("/reg/:id", async(req, res) => {
  
    const db = admin.firestore()

    if (req.params.id == "customer"){
        const Customers = db.collection("Customers")
        const error_customer_input = customerValidator(req.body)

        if ( !error_customer_input){

            await Customers.add(req.body);
            res.send(req.body)
     
        }
    
    else{
        res.status(400).send(is_customer_input_correct)
    }

    }

    else{

        const Employees = db.collection("Employees")
        const error_employee_input = EmployeeValidator(req.body)

        if (!error_employee_input){
            await Employees.add(req.body)
            res.status(200).send("OK")
        }
        else{
            res.status(400).send(error_employee_input)
        }

    
    }  
})


module.exports.router = router