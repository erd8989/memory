const express = require("express");
const app = express();
const bp = require("body-parser")

app.use(express.static("public"));
app.use(bp.urlencoded({extended : true }));



app.get("/",(req,res)=>{

    console.log("서버생성");
    // 메인페이지 등옥
    res.sendfile(__dirname+"/public/login.html")



})

//  get방식으로 넘어온 데이터 처리
app.get("/getLogin",(req,res)=>{
    console.log("겟방식으로 요청옴");
    console.log(req.url);
    //   get 방식으로 넘어온 데이터를 객체로 출력-> req.query로 출력
    console.log(req.query);

    //실습 입력한 id = smhrd이고 비번은 "1234"-> 성공 그외는 실패
    if (req.query.id =="smhrd" && req.query.pw == "1234" ) {
        console.log("성공");
        // 성공시 성공페이지
        res.redirect("/성공.html")
        // redirect -> url이 변동 -> 사용자에게 위치 공개 -> 절대 경로를보여주면 안된다
        // 위에서 static을 public에서 찾도록 작업
    }else{
        console.log("실패");
        // 실패시 실패페이지
        res.redirect("/실패.html")
    }

      
})

// post데이터 처리
// post데이터는 buffer형태의 암호화된 데이터가 넘어온다 -> 문자로 변형 -> 객체 변형
app.post("/postLogin",(req,res)=>{
    // bp가 변환한 데이터를 활용 
    console.log(req.body);


})

app.listen(3000)