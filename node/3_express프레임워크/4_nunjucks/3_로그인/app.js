const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const mainRouter = require("./routes/mainRouter")
const bp = require("body-parser")

// app에게 post 처리방식 등록
app.use(bp.urlencoded({extended : true}));

// app에게 라우터등록
app.use("/",mainRouter);

// 넌적스 뷰엔진 등록
app.set("view engine", "html");

nunjucks.configure("views", {
    express : app,
    watch : true
})


app.listen(3000)
