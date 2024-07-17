const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const mainRouter =require("./routes/mainRouter");
const cookieRouter = require("./routes/cookie");
const sessionRouter =  require("./routes/session")


app.use("/",mainRouter);



// 쿠키세팅
const cookieParser = require("cookie-parser")
app.use(cookieParser());

// 세션 세팅
const session = require("express-session");
const fileStore = require("session-file-store")(session);
app.use(session({
    httpOnly :true, // http로 들어온 요청만 처리
    resave : false, // 세션을 재저장 할것인가
    secret : "secret", // 암호화할때 사용하는 키값
    store : new fileStore(), // 세션을 저장하기 위한 저장소 셋팅
    saveUninitialized : false // 세션에 저장할 내용이 없더라로 저장할 것인가

}))

app.use("/cookie",cookieRouter);
app.use("/session",sessionRouter);



//  넌적스 세팅
app.set("view engine", "html");
nunjucks.configure("views",{

    express : app,
    watch : true
})

app.listen(3000);
