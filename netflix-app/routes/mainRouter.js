const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("Home")
})

router.get("/Movies",(req,res)=>{
    res.render("Movies")
})

module.exports = router;