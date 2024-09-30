const express = require('express')
const router = express.Router()

router.get('/position',(req,res)=>{
    const positions = [
        {
          title: "카카오",
          latlng: { lat: 33.450705, lng: 126.570677 },
        },
        {
          title: "생태연못",
          latlng: { lat: 33.450936, lng: 126.569477 },
        },
        {
          title: "텃밭",
          latlng: { lat: 33.450879, lng: 126.56994 },
        },
        {
          title: "근린공원",
          latlng: { lat: 33.451393, lng: 126.570738 },
        },
      ]
      res.json({positions:positions})
    
})

module.exports =router