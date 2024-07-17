const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("main.html")


})
// 축구페이지 접속
router.get("/soccer",(req,res)=>{
    res.render("soccer");
})

// 야구페이지 접속
router.get("/baseball",(req,res)=>{
    res.render("baseball");
})


module.exports = router;