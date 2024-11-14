import "./style.css"
const RightSide = () => {
  return (
    <div className="container-right">
      <div className="above">
        <div className="first">
          <p>add to your feed</p>
          <img src="/Images/feed-icon.svg" alt="not found" />
        </div>
        <div className="second">
           <img src="/Images/user.svg" alt="not found" />
           <div>
               <p>#Linkedin</p>
               <button>follow</button>
           </div>
        </div>
        <div className="second">
           <img src="/Images/user.svg" alt="not found" />
           <div>
               <p>#Video</p>
               <button>follow</button>
           </div>
        </div>
         <div className="recomedation">
           <p>view all recommendations </p>
           <img src="/Images/right-icon.svg" alt="not found" />
         </div>
      </div>
      <div className="down">
         <img src="/Images/banner-image.jpg" alt="not found" />
      </div>
    </div>
  )
}

export default RightSide
