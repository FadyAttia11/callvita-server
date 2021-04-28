const express = require("express");
const router = new express.Router();

router.get('/', (req,res) => {
    res.send('endpoints from task are working!')
})

module.exports = router;