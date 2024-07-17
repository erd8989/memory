// 접속한 사용자의 ip를 체크
const http = require('http');
const userip = require('request-ip');

http.createServer((req,res)=>{
    // req역할 파악-> 클라이언트가 넘겨준 정보를 담고 있는 공간(접속시간,접속장소,ip,데이터)
    // 사용자의 접속 ip를 확인
    let ip = userip.getClientIp(req);
    // ip앞에 붙어있는 불필요한 7글자를 삭제
    let req_ip = ip.substring(7)

    // 실습 -> 조건물 활용
    //1. 내 짝궁의 컴퓨터가 접속을 하면 console.log('환영합니다.');
    //2. 그 외 다른 사람이 접속하면 '다른 사람은 나가세요'
    //3. ip를 조회할 때는 ip모듈과  req를 활용한다

      if(req_ip == "192.168.21.224"){
        console.log("환영합니다.");
    } else{
        console.log("다른사람은 나가세요");

    }
    
    console.log(req_ip);

}).listen(3000);