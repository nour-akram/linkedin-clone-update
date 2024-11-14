import { useSelector } from "react-redux";
import "./style.css";
import ReactPlayer from "react-player";

const Posts = () => {
  const articles = useSelector((state) => state.articlesState.articles);
  console.log(articles);

  return (
    <div className="posts">
      {articles.length > 0 &&(
        articles.map((article, id) => (
          <div className="article" key={id}>
            <div className="headerPost">
              <div className="leftheaderPost">
                <img src={article.actor.UserImage} alt="not found" />
                <div className="userInformation">
                  <p>{article.actor.UserName}</p>
                  <span>{article.actor.UserEmail}</span>
                  <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                </div>
              </div>
              <img src="/Images/ellipsis.svg" alt="not found" />
            </div>
            <p>{article.description}</p>
            {!article.shareImg && article.video ? <ReactPlayer url={article.video} width="100%" height="200px" /> 
            :article.shareImg ? <img src={article.shareImg} alt="not found"/> :""}
            <div className="counts">
                <div className="loveCount">
                   <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ff0700" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                    <span>5 Likes</span>
                </div>
                <div className="commentsCount">
                    {article.Comments} Comments
                </div>
                <div className="shareCount">
                    <span>5 Reply</span>
                </div>
            </div>
             <div className="footerPost">
                <div>
                    <img src="/Images/like-icon.svg" alt="not found" />
                    <span>like</span>
                </div>
                <div>
                     <img src="/Images/comment-icon.svg" alt="not found" />
                     <span>comment</span>
                </div>
                <div>
                     <img src="/Images/share-icon.svg" alt="not found" />
                     <span>share</span>
                </div>
                <div>
                     <img src="/Images/send-icon.svg" alt="not found" />
                     <span>send</span>
                </div>
             </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
