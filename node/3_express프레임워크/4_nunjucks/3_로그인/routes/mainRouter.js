const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("main")

})
// 로그인을 요청했을 때
router.post("/login",(req,res)=>{
    let {id,pw}=req.body

    if (id == "smhrd" && pw=="1234") {
        res.render("success",{id:id})

        
    }else{
        res.render("fail")
    }});
module.exports = router;


