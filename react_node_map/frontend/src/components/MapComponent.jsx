import React, { useEffect, useState } from 'react'
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import api from '../api'
import { getFID } from 'web-vitals'

const MapComponent = () => {
    useKakaoLoader()

    const [isOpen, setIsOpen] = useState(false)
    const [position, setPosition] = useState(null)

    //현재 위치(위경도) 확인
    const getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("현재위치:", position);
        })
    }

    //서버로부터 위치정보 요청
    const getFoodPlace = async () =>{
        let res = await api.get('/place/position')

        console.log(res.data);     
        
        setPosition(res.data.position)
    }

    const EventMarkerContainer = ({ position, title }) => {
        const map = useMap()
        const [isVisible, setIsVisible] = useState(false)
    
        return (
          <MapMarker
            position={position} // 마커를 표시할 위치
            // @ts-ignore
            onClick={(marker) => map.panTo(marker.getPosition())}
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
          >
            {isVisible && <div style={{ padding: "5px", color: "#000" }}>{title}</div>}
          </MapMarker>
        )
      }

    useEffect(() => {
        getCurrentPosition()
        getFoodPlace()
    }, [])

    return (
        <div>
            <Map // 지도를 표시할 Container
                id="map"
                center={{
                    // 지도의 중심좌표
                    lat: 35.1469568,
                    lng: 126.9235712,
                }}
                style={{
                    // 지도의 크기
                    width: "100%",
                    height: "350px",
                }}
                level={3} // 지도의 확대 레벨
            >
                { position?.map((pos)=>(
                    <EventMarkerContainer
                    key={`EventMarkerContainer-${pos.latlng.lat}-${pos.latlng.lng}`}
                    position={pos.latlng}
                    title={pos.title}
                  />
                    // <MapMarker
                    //     position={pos.latlng}
                    //     clickable={true}
                    //     onMouseOver={() => setIsOpen(true)}
                    //     onMouseOut={() => setIsOpen(false)}
                    // >
                    //     {isOpen && <div style={{ padding: "5px", color: "#000" }}>{pos.title}</div>}
                    // </MapMarker>
                ))}
            </Map>
        </div>
    )
}

export default MapComponent