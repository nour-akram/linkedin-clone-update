import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types"; // Import PropTypes
import "./style.css";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Timestamp } from "firebase/firestore";
import { PostArticleAPI } from "../../../redux/actions";
const Popup = ({ handelShowPopup }) => {
    const user = useSelector(state => state.userState.user);
    const dispatch=useDispatch();
    const [text, setText] = useState("");
    const [assets, setAssets] = useState("");
    const [shareImage, setShareImage] = useState("");
    const [videoLink, setVideoLink] = useState("");

    const reset = () => {
        setText("");
        setAssets("");
        setShareImage("");
        setVideoLink("");
        handelShowPopup(); 
    };

    const handelSetAssets=(type)=>{
        setShareImage('');
        setVideoLink('');
        setAssets(type)
    }
    const handelChange =(e)=>{
        const image= e.target.files[0];
        if(image ==='' || image === undefined){
            alert(`not an image ,type of this image is ${typeof image}`)
            return;
        }
        else
              setShareImage(image)
    }


    const handelPostArticle =(e)=>{
        e.preventDefault();
        if(e.target !== e.currentTarget){
            return;
        }
        const dataPosted ={
            image:shareImage,
            video:videoLink,
            user:user,
            description:text,
            time:Timestamp.now(),
        }
        reset();
        dispatch(PostArticleAPI(dataPosted));
    }
    return (
        <div className="container-popup">
            <div className="header-popup">
                <p>Create a post</p>
                <img src="/Images/close-icon.svg" alt="not found" onClick={reset} />
            </div>
            <div className="content-popup">
                {user ? <img src={user.photoURL} alt="not found" /> : <img src="/Images/user.svg" alt="not found" />}
                <p>{user.displayName}</p>
            </div>
            <textarea 
                placeholder="What do you want to talk about?" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                autoFocus={true}
            />
            {assets === "image" ? (
                <>
                    <input type="file" style={{ display: "none" }} name="image" id="file" onChange={handelChange}/>
                    <label htmlFor="file" className="file">Select an image to share</label>
                    {shareImage && <img src={URL.createObjectURL(shareImage)} alt="not found" style={{margin:"auto"}} width="60%" height="180px"/>}
                </>
            ) : assets === "video" && (
                <>
                    <input 
                        type="text" 
                        value={videoLink} 
                        onChange={(e) => setVideoLink(e.target.value)} 
                        placeholder="Please upload a video link" 
                        className="uploadVideoLink"
                    />
                    {videoLink && <ReactPlayer width="80%" height="200px" style={{margin:"auto"}} url={videoLink} />}
                </>
            )}
            <div className="footer-popup">
                <div className="optionsToShare">
                    <img src="/Images/share-image.svg" alt="not found" onClick={() => handelSetAssets("image")} />
                    <img src="/Images/share-video.svg" alt="not found" onClick={() => handelSetAssets("video")} />
                </div>
                <button className={!text?"disabled":"abled"} disabled={!text} onClick={(e)=>handelPostArticle(e)}>Post</button>
            </div>
        </div>
    );
};

Popup.propTypes = {
    handelShowPopup: PropTypes.func.isRequired
};

export default Popup;
