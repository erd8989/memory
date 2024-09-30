const express = require('express')
const router = express.Router()
const conn = require('../config/db')

router.post('/Join',(req,res)=>{
    console.log('가입요청');

    console.log(req.body);
    let {id,pw,nick}= req.body
    let sql = 'insert into nodejs_member values(?,?,?)'

    conn.connect()
    conn.query(sql,[id,pw,nick],(err,rows)=>{
        if(err){console.log('회원가입오류발생',err);
        }
        if(rows){
            res.json({result:'성공'})
        }else{
            res.json({result:'fail'})
        }
    })
    conn.end()
})

router.post('/login',(req,res)=>{
    console.log('로그인요청');
    console.log(req.body);
    // let id = req.body.log.id
    // let pw = req.body.log.pw


    let {id,pw} = req.body
    let sql = 'select * from nodejs_member WHERE id=? AND pw=?'
    conn.connect()
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