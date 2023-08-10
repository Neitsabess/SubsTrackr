import { useEffect, useState } from "react";
import { GetUserInfo } from "../Utitlities/Get_User_Info";
import { useNavigate } from "react-router-dom";

export function LoadingPage() {
    let navigate = useNavigate()
    var token = ""
    if (sessionStorage.getItem('token')){
         token = JSON.parse(sessionStorage.getItem('token')).user.id
      }
    const [loading, setLoading] = useState()
    const [time, setTime] = useState(100)
    var user_info = GetUserInfo(token)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            if (user_info){
            if (user_info[0].user_id === '0'){
              console.log('loading...')
              setTime(10)
            }
            else {
                setLoading(false)
            }
        }
        
        }, time);
    })
    
    if (loading === false){
        navigate('/main_page')
        navigate('main_page/dashboard')

    }

    

    return (
        <>
        <div className="loading">

        </div>
        </>
    )
}