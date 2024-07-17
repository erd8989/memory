/*
 쿠키: 클라이언트가 브라우저에 저장하는 데이터 공간
   - 쿠키는 서버의 자원을 사용하는게 아니라 , 브라우저의 자원을 사용한다
   - 쿠키는 사용자가 브라우저를 종료하더라도 존재
   - 반드시 만료기간을 셋팅 해준다
   - 설치 = npm i cookie-parser -> 쿠키데이터를 변환하는 모듈
   - 주의점!
   - 쿠키를 생성, 삭제 =res 활용
   - 쿠키를 조회 req 활용
   - 쿠키 생성시 생명주기 넣어주기-> 누적이 안됨
   - 개인정보가 담긴 데이터는 쿠키에 저장하면 안된다
*/ 

const express = require("express");
const router = express.Router();

// 1. 쿠키 등록하기
router.get("/setCookie",(req,res)=>{
  console.log("쿠키등록하기");

  // 쿠키를 등록하는 방법 : res.cookie(key,value)
  res.cookie("nick","cookieNickname");

  // 쿠키 만료설정 => 하지않으면 브라우저에 존재 -> 성능저하
  // 방법 - maxAge -> ms단위로 설정
  res.cookie("name","fred",{maxAge : 5000})

  // -쿠키의 수명만료를 날짜로 설정
  // expires -> 헌재날짜 +초*분*시*일
  res.cookie("age","20",{expires : new Date(Date.now()+60*60*24*3)})

  res.redirect("/");
})


// 2. 쿠키확인하기
  router.get("/getCookie",(req,res)=>{

  // 쿠키를 불러올때는 req를 사용한다
  console.log("쿠키데이터",req.cookies.nick);
  console.log("쿠키데이터 생명추가",req.cookies.name);
  console.log("쿠키데이터 생명추가2",req.cookies.age);

  res.redirect("/");
})

//  3. 쿠키삭제하기
  router.get("/clearCookie",(req,res)=>{
  
    // res 응답이 처리합니다
  res.clearCookie("nick");
  res.redirect("/");
})


module.exports = router;