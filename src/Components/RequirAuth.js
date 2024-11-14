import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie";

const RequirAuth = ({children}) => {
  const navigate=useNavigate();
  const token = Cookies.get("accessToken");
  const user=useSelector(state => state.userState.user)
  useEffect(()=>{
    if(!token && !user){
        navigate("/",{replace:true})
      }
      else  navigate("/home",{replace:true})
  },[token,navigate,user])
  return children
}

export default RequirAuth
