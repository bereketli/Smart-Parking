const express = require("express")
const router = express.Router()
const db = require("../config/admin")


router.post("/",async(req, res) => {
    const Slot = db.collection("Customer")
    const query = Slot.where(req.body.field, "==", req.body.carPlate)
    const filtered = query.get()
                        .then((doc) => {
                            doc.forEach((list) =>{

                                res.status(200).send(list.data())
                            })
                        })
                        .catch((error) => {
                            
                            res.status(500).send(error)
                        })


})

module.exports = router