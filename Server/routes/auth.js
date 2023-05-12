const express = require("express")
const validateAuth = require("../validation/validateAuth")
const router = express.Router()

router.post("/", async(req, res) =>{
   
    const err_aut_input =  validateAuth(req.body)
    if (!err_aut_input){

    }
    else{

        res.status(200).send(err_aut_input)
    }

})

module.exports = router

