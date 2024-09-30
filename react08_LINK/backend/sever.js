const express = require('express')
const app = express()

const indexRouter = require('./routes')

// 리액트 프로젝트 경로 설정
const path = require('path')
app.use(express.static(path.join(__dirname,'..','frontend','build')))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',indexRouter)

app.set('port',process.env.PORT || 3001)
app.listen(app.get('port'),()=>{
    console.log(`서버는 ${app.get('port')}`);
    
})