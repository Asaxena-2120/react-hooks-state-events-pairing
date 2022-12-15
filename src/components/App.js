import video from "../data/video.js";
import Details from "./Details.js";
import Comments from "./Comments.js"
import React,{useState} from "react";
function App() {
  console.log("Here's your data:", video);
  const [likes, setLikesNow] = useState(video.upvotes)
    const [dislikes, setDisLikesNow] = useState(video.downvotes)
    function handleUpvotes(){
      setLikesNow(likes+1)
 
  }
  function handleDownvotes(){
      setDisLikesNow(dislikes-1)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details title={video.title} views={video.views} 
      date={video.createdAt} likesNow={likes} dislikesNow={dislikes} 
      comments={video.comments} onClickLike={handleUpvotes} onClickDislike={handleDownvotes}/>
      
    </div>
    
  );
}

export default App;
