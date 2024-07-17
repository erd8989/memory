const express = require("express");
const router = express.Router();

// 사용자가 메인에 도착했을 때
router.get('/',(req,res)=>{
    // 세션값을 꺼내온다
    // 값을 넘길때는 반드시 조건을 다라주자
    if(req.session.nick){
        res.render("main",{nick : req.session.nick})


    }else{
        res.render("main");
    }
})
    
  

// 사용자가 회원가입을 요청했을 때
router.get("/join",(req,res)=>{

    res.render("join");
})

// 사용자가 로그인을 요청했을 때
router.get("/login",(req,res)=>{

    res.render("login");
})

// 사용자가 회원정보 수정을 했을때
router.get("/update",(req,res)=>{

    res.render("update");
})

// 사용자가 회원탈퇴를 할 때
router.get("/delete",(req,res)=>{

    res.render("delete");
})

// 사용자가 로그아웃을 할때
router.get("/user/logout",(req,res)=>{
    res.render("logout");
})

module.exports =router;