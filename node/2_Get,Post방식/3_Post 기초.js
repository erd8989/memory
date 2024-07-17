const http = require("http")
const qs = require('querystring');
// qs모듈 -> post방식에서 데이터를 변형할 때 사용하는 모듈

http.createServer((req,res)=>{

    console.log(req.url);
    // post 방식은 url에 데이터를 보내지 않기 때문에 조회가 불가능
    // post 방식으로 데이터를 받을 때는 2개의 영역이 필요 (데이터를 처리하는 영역, 처리된 데이터를 활용하는 영역)
    // 1. 데이터를 받아 올 때
    let body = "";

    req.on("data", (data)=>{
        // post 데이터는 반드시 문자형태로 변환하는 작업이 필수이다
        // get 데이터는 url에 처음부터 문자형태로 담겨서 넘어와서 필요없다
        console.log("post로 받아돈 데이터",data);
        // post로 받아온 데이터는 Buffer형태로 출력 - String 타입으로 변환
        body = data.toString();
        console.log("문자로 변환한 데이터는", body);

    })
    // 2. 문자로 변형된 데이터를 처리하는 로직
    req.on("end",()=>{
        // 문자 데이터를 객체형태로 변환하는 작업 -> querystring모듈을 활용
        let sata = qs.parse(body)
        console.log("객체로 변형된 데이터",sata);
        // 사용자에게 h1테그로 당신의 아이디는 ""입니다, 비밀번호는 ""입니다

        res.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"})
        res.write(`<h1>당신의 아이디는 ${sata.id} 입니다</h1>`)
        res.write(`<h1>비밀번호는 ${sata.pw}입니다</h1>`)
        res.end();

    })

}).listen(3000)