/*
  세션 
  - 데이터를 저장해서 공유한다 -> 서버가 관리하는 영역
  - 세션을 너무 많이 만들면, 서버에 부하가 간다.
  - 세션은 브라우져가 종료되면 알아서 삭제
  - 설치):1.세션 기능: express-session, 2. 세션저장소 : session-file-store
*/ 

const express =require("express")
const router = express.Router();

// 1. 세션생성하기
// 등록할때는 req.session.key = value
// 개발자 도구에서 확인해보면 값이 나오지만 암호화된 데이터 출력
// 개인 정보같은 중요정보는 session에서 관리한다.
router.get("/setSession",(req,res)=>{
    req.session.name = "fred";
    console.log("세션등록완료");
    res.redirect("/");
    
})

// 2.세션 확인하기
router.get("/getSession",(req,res)=>{
    console.log("세션조회결과",req.session.name)
    req.session.name
})

// 3. 세션삭제하기
router.get("/clearSession",(req,res)=>{
    // 1. 비어있는 데이터를 넣어준다
    req.session.name = ""
    // 2. 모든 세션을 지운다
    req.session.destroy();
    res.redirect("/")
})

module.exports = router;