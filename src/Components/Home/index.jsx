import LeftSide from "../LeftSide/LeftSide"
import Main from "../Main/Main"
import RightSide from "../RightSide/RightSide"
import "./style.css"
const Home = () => {
    return (
      <div className="container-home">
        <div className="layout">
          <LeftSide/>
          <Main/>
          <RightSide/>
        </div>
      </div>
    )
  }
  
  export default Home
  