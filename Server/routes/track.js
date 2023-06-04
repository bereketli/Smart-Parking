const express = require("express")
const db = require("../config/admin")
router = express.Router()

router.get("/cars", async(req, res) => {
    const Slots = db.collection("Customer")
    slotData = []

    Slots.get()
        .then((doc) => {
            doc.forEach((slot) => {
                slotData.push(slot.data())
            } )
            res.send(slotData)
            
        })
        .catch((error) => {
            res.send(error)
        })
    console.log(slotData)


})

module.exports = router