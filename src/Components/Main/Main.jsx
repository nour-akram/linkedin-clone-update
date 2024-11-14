import { useDispatch, useSelector } from "react-redux"
import PostModel from "./postModel/PostModel"
import "./style.css"
import { useEffect } from "react";
import { GetArticlesAPI } from "../../redux/actions";
import Posts from "./Posts/Posts";
const Main = () => {
  const Articels =useSelector((state)=>state.articlesState.articles);
  const loading =useSelector((state)=>state.articlesState.loading);
  const user = useSelector(state => state.userState.user);
  const dispatch =useDispatch();
  console.log(Articels,loading,user)
  useEffect(() => {
    dispatch(GetArticlesAPI());
  }, [dispatch]);
 
  return (
    <div className="container-main">
       <PostModel/>
       {loading && 
         <div className="loader">
             <img src="/Images/loader.svg" alt="not found" />
         </div>
       }
       {Articels.length === 0 ?
         <div className="noArticles">
             <img src="/Images/noArticles.svg"/>
         </div>
       :<Posts/>}
    </div>
  )
}

export default Main
