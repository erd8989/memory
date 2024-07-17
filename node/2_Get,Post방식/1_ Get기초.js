const http = require('http');
const url = require('url');

http.createServer((req,res)=>{
//1. 사용자가 넘긴 url데이터를 조회-> get방식은 url에 데이터를 동반해서 보내기 때문
  console.log(req.url);
  // 넘겨받은 string형태의 데이터를 컴퓨터가 조회할 수 있게 qs방식으로 변경!
  // -queryString = url뒤에 ?라고 적혀있는 데이터를 ->url에 데이터를 동반해서 보낸다
  // url모듈을 활용해서 String데이터를 Object데이터로 변환
  let url_query = url.parse(req.url,true).query;
  console.log('변형된 데이터 : ',url_query);
  // 실습 : 콘솔 창에 num1과 num2dml 더한 결과를 출력
  console.log(parseInt(url_query.num1)+parseInt(url_query.num2));
  // 실습2 : 
  // 1.클라이언트에게 num1과 num2,opr받기 
  
  let num1 = url_query.num1
  let num2 = url_query.num2
  let opr = url_query.opr

  // 2. opr의 값에 맞게 연산을 진행
  if (opr == '+') {console.log(parseInt(num1) + parseInt(num2));
    
  } else if(opr == '-') {
    console.log(parseInt(num1) - parseInt(num2));

  } else if(opr == '*') {

    console.log(parseInt(num1) * parseInt(num2));
  } else if(opr == '/') {

    console.log(parseInt(num1) / parseInt(num2));
  }
  
  
  
}).listen(3000)
