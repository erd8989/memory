const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const bp = require("body-parser");
const mainRouter = require("./routes/mainRouter");
const userRouter = require("./routes/userRouter");

// 세션쓰기 위한 모듈 호출
const session = require("express-session");
const fileStore = require("session-file-store")(session);


// post데이터 처리 등록
app.use(bp.urlencoded({extended:true}));

// 세션관련 설정 정보 등록
app.use(session({
    httpOnly :true,
    resave : false,
    secret : "secret",
    store : new fileStore(),
    saveUninitialized : false // 세션에 저장할 내용이 없더라도 저장할것인가
}))

// 라우터 등록
app.use("/",mainRouter);
app.use("/user", userRouter);

// 넌적스 세팅
app.set("view engine", "html")
nunjucks.configure("views",{
    express : app,
    watch : true

})


app.listen(3000);

