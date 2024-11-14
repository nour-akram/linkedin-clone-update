import { useSelector } from "react-redux"
import "./style.css"
import {  useState } from "react";
import Popup from "../Popup/Popup";
const PostModel = () => {
    const user =useSelector(state=>state.userState.user);
    const loading =useSelector(state=>state.articlesState.loading);
    const [showPopup,setShowPopup]=useState(false);
    const handelShowPopup=()=>{
      setShowPopup(!showPopup);
    }
   
  return (
    <div className="postModel">
         <div className="upper">
            {user?<img src={user.photoURL} alt="not found"/>:<img src="/Images/user.svg" alt="not found"/>}
            <button  onClick={handelShowPopup} disabled={ loading? true : false}>
                 puplish your post
            </button>
         </div>
         <div className="lower">
            <div className="item">
                <img src="/Images/photo-icon.svg" alt="not found" />
                <span>Photo</span>
            </div>
            <div className="item">
               <img src="/Images/video-icon.svg" alt="not found" />
               <span>Video</span>
            </div>
            <div className="item">
                <img src="/Images/event-icon.svg" alt="not found" />
                <span>Event</span>
            </div>
            <div className="item">
                <img src="/Images/article-icon.svg" alt="not found" />
                <span>Write article</span>
            </div>
            
         </div>
         {showPopup && (
                <>
                    <div className="overlay" onClick={handelShowPopup}></div>
                    <Popup handelShowPopup={handelShowPopup} />
                </>
            )}
    </div>
  )
}

export default PostModel
