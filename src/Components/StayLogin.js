import { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const StayLogin = ({children}) => {
  const navigate=useNavigate();
  const token = Cookies.get("accessToken");
  const user=useSelector(state => state.userState.user)

  useEffect(()=>{
    if(token && user){
        navigate("/home",{replace:true})
      }
      else  navigate("/",{replace:true})
  },[token,navigate,user])
  return children
}

export default StayLogin
