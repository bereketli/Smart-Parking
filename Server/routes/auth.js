const express = require("express")
const validateAuth = require("../validation/validateAuth")
const db = require("../config/admin")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const router = express.Router()

router.post("/", async(req, res) =>{
  
   
    const err_aut_input =  validateAuth(req.body)
    if (!err_aut_input){
        const Employees = db.collection("Employees")
        const query = Employees.where("email", "==", req.body.email)

        const filtered = query.get()
                        .then(async(doc) => {
                      
                            doc.forEach(async(list) =>{

                                const validPassword = await bcrypt.compare(req.body.password,list.data().password)
                                if (!validPassword ){
                                  
                                    res.status(400).send("email and password mismatch")
                                }
                                else{
                                   
                                    token = jwt.sign(list.data(), list.data().password )
                                    res.status(200).header("x-auth-token", token).send(list.data())
                       
                                    
                                }   

                            })
                              
                        })
                        .catch((error) => {
      
                            res.status(500).send(error)
                        })

    }
    else{

        res.status(200).send(err_aut_input)
    }

})

module.exports = router

