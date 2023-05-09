const express = require("express")
const Joi = require("joi")
const cors = require("cors")
const {customerValidator}= require("./validation/customer")
const {EmployeeValidator} = require("./validation/employees")
const serviceAccount = require("./config/config.json")
const admin = require("firebase-admin")

const app = express()
app.use(express.json())
app.use(cors())

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

  



app.post("/reg/:id", async(req, res) => {
    console.log(req.params.id)
  
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

app.listen(3000, () =>{console.log("Listning on port 3000")})