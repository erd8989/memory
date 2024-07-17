/*
    넌적스(탬플릿 엔진)쓰는 이유 ?
    - html페이지는 정적인 페이지 (변화가 없는 페이지)
    - 그러면 서버가 템플릿(페이지 1개)을 가지고 페이지를 제작해라
    - 넌적스 장점 : html + js

    - 넌적스 사용방법 : 1. nunjucks nunjucks chokidar 생성
                       2. views폴더 생성 -> 동적인 html파일 생성

*/

const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");
const nunjucks = require("nunjucks");


// 라우터 등록
app.use("/",mainRouter);

// 1. 넌적스 세팅
// -view엔진 설정, 넉석스 설정코드는 반드시 필요
app.set("view engine", "html");

// 2. 넌적스를 쓸 때 조회할 정보
nunjucks.configure("views", {
    express : app,
    watch : true

})





app.listen(3000);

