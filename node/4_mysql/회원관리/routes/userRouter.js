// 회원정보를 db에 연결해서 관리하는 라우터
const express = require("express");
const router = express.Router();
const conn = require("../config/db");


// 1.회원가입 경로로 접근했을 때
router.post("/join",(req,res)=>{
    // 1. 프론트에서 넘어온 데이터 확인하기
    // 포스트로 넘긴 데이터는 req안에 body로 존재한다

    console.log("넘어온 데이터 :",req.body);
    let {id,pw,nick}= req.body;

    // 2. db와 연결해서 데이터 처리
    // 2-1. 처리할 sql문장
    // 2-2. 입력할 데이터가 필요할 경우-> 값을 넣어주기
    // 2-3. 처리할 콜백함수

    let sql = "insert into member values (?,?,?)"
    conn.query(sql,[id,pw,nick],(err,rows)=>{
        console.log("db insert:", rows);
        if(rows){
            // 가입성공시 메인으로 이동
            res.redirect("/")
        }else{
            // 가입실패시 
            res.send("<script>alert('실패')</script>")
        }
    })
})

// 2. 로그인 하는 로직
router.post("/login",(req,res)=>{
    // 사용자가 보낸 id,pw로 db를 검증하는 목적

    console.log("문자형태로 넘어온 데이터",req.body);
    let {id,pw} = req.body

    // 실습
    // 1.sql 쿼리문 작성
    let sql = "SELECT * FROM member WHERE id = ? AND pw = ?";

    // 2.conn쿼리문 실행
    conn.query(sql,[id,pw],(err,rows)=>{
        console.log(rows);
       
        //  id와 pw가 일치하하면 성공 아니면 실패
        // select문을 실행할 때 반드시 rows의 length로 조건을 부여
        // 조건이 성립하면데이터가 들어있는 배열 리턴, 아니면 비어있는 배열 리턴
        // 반드시 데이터의 길이가 0보다 크다 == 데이터가 담겨있다
        if (rows.length > 0) {
            console.log("로그인 성공");
            // 사용자의 닉네임 정보를 세션에 저장
            // 사용자의 데이터는 db에서 조회했기 때문에, rows변수에서 데이터 꺼내기
            req.session.nick = rows[0].nick;
            res.redirect("/")
        } else {
            console.log("로그인 실패");
        }
    })
})

// 3.회원정보 수정
router.post("/update",(req,res)=>{
    console.log(req.body);
    let {id,pw,nick} = req.body

    // 쿼리문 작성
    // update문을 활용해서 조건을 부여할 때는 affectedRows을 활용
    // 조건이 잘못되도 응답은 넘어옴 affectedRows =0
    // 조건 부여시 affectedRows >0 -> 영향받은 행이 존재
    let sql = "update member set nick = ? where id = ?  and pw = ?";
    conn.query(sql,[nick,id,pw],(err,rows)=>{
        console.log(rows);
        if (rows.affectedRows > 0) {
            console.log("변경성공");
            res.redirect("/")
            
        }else{
            console.log("변경없음");
        }
        

    })
})
// 4.삭제
router.post("/delete",(req,res)=>{
    console.log(req.body);
    let {id,pw} = req.body

    let sql = "delete from member where id =? and pw = ?"
    conn.query(sql,[id,pw],(err,rows)=>{
        console.log(rows);
        if(rows.affectedRows>0){
            console.log("삭제");
            res.redirect("/")
        }else{
            console.log("삭제 안됨");
        }

    })

})

// 5.로그아웃
router.get("/logout",(req,res)=>{
    
    req.session.destroy();
    res.redirect("/")
})
module.exports = router;