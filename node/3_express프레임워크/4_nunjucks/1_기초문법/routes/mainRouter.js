const express = require("express");
const router = express.Router();




router.get("/",(req,res)=>{
    // 넌적스 파일 생성시 render함수 사용하기
    res.render("main",{name : "임명진"});
})

module.exports = router;