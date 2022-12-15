import React,{useState} from "react"
import Comments from "./Comments";
function Details({title, views, date, likesNow, dislikesNow,comments,onClickLike,onClickDislike}){
    //console.log(props.details)
    const [hide, setHide] = useState(false)
    
    const commentButton = hide? "Show Comments" : "Hide Comments"
    function handleClick(){
        
        setHide(!hide)
    }
    
    return (
        <div>
            <h2>{title}</h2>
            <p>{views} Views | Uploaded {date}</p>
            <button onClick={onClickLike} >{likesNow}👍</button>
            <button onClick={onClickDislike}>{dislikesNow}👎</button>
            <button style={{display:"block" }} onClick={handleClick}>{commentButton}</button>
            <hr/>
            <Comments comments={comments} hide={hide}/>
        </div>
    )
}

export default Details;