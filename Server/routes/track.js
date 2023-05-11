const express = require("express")
const db = require("../config/admin")
router = express.Router()

router.get("/cars", async(req, res) => {
    const Slots = db.collection("Customer")

    Slots.get()
        .then((doc) => {
            doc.forEach((slot) => {
                res.status(200).send(slot.data())

            } )
            
        })
        .catch((error) => {
            res.send(error)
        })


})

module.exports = router