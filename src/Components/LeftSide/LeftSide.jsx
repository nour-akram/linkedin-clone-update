import { useSelector } from "react-redux"
import "./style.css"
const LeftSide = () => {
  const user =useSelector(state => state.userState.user)
  return (
    <div className="contanier-leftside">
        <div className="cardImage"></div>
        <div className="userInfo">
            <div className="userImage"></div>
            <p>Welcome , {user? user.displayName :""}</p>
            <span>add a photo</span>
        </div>
        <div className="secondPart">
            <div className="left">
                <span>Connections</span>
                <p>Grow your network</p>
            </div>
            <div className="right">
                <img src="/Images/widget-icon.svg" alt="not found" />
            </div>
        </div>
        <div className="thirdPart">
            <img src="/Images/item-icon.svg" alt="not found" />
            <p>my items</p>
        </div>
        <div className="fourthPart">
            <div className="left">
                <p>groups</p>
                <p>events</p>
                <p>follows hashtags</p>
            </div>
            <div className="right">
                <img src="/Images/plus-icon.svg" alt="not found" />
            </div>
        </div>
        <div className="lastPart">
            <p>Discover more</p>
        </div>
    </div>
  )
}

export default LeftSide
