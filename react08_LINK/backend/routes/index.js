const express = require('express')
const router = express.Router()
const path = require('path')
const conn = require('../config/db.js')


router.get('/',(req,res)=>{
    console.log('메인라우터');
    res.sendFile(path.join(__dirname,'..','..','frontend','build','index.html'))

})
router.post('/getData',(req,res)=>{
    console.log('요청오냐?',req.body);

    let sql = 'INSERT INTO NODEJS_MEMBER VALUES(?,?,?)'

    conn.query(sql, ['admin','1234',req.body.data],(err,rows)=>{

        if(err){console.log('인설트 쿼리 이슈 발생');}

        if(rows){
            res.send({result:'success'})
        }else{
            res.send({result:'fail'})
        }
    })
    conn.end()
})


// 실습 회원가입, 로그인 처리를 할 수 있는 기능 구현

router.post('/join',(req,res)=>{
    console.log(req.body);
    let id = req.body.member.id
    let pw = req.body.member.pw
    let nk = req.body.member.nk

    let sql = 'insert into NODEJS_MEMBER VALUES(?,?,?)'

    conn.query(sql,[id,pw,nk],(err,rows)=>{
        if(err){console.log('회원가입 오류발생');
        }
        if(rows){
            res.send({result : '성공'})
        }else{
            res.send({result : '실패'})
        }
    })
})

router.post('/login',(req,res)=>{
    console.log(req.body);
    let id = req.body.log.id
    let pw = req.body.log.pw

    let sql = 'select * from NODEJS_MEMBER WHERE id=? AND pw=?'
    conn.query(sql,[id,pw],(err,rows)=>{
        if(err){console.log('로그인 이슈 발생',err);}

        // 데이터 베이스에서 조회된 정보를 갯우세 상관없이 배렬로 묶여서 반환된다
        console.log(rows);
        
        if(rows.length > 0){
            // 데이터베이스에서 조회된 key값은 대소문자 구분이 되기때문에 정확한 key값으로 접근해야함
            res.send({result:'success',nickname:rows[0].nickname})
        }else{
            res.send({result:'fail'})
        }
    })
})
module.exports = router