import React from "react";
import video from "../data/video";
import "../index.css"

function Comments ({comments,hide}){
    console.log(comments)
    const className = hide? "hide" : "unhide";
    const eachComment=
        comments.map(element => 
            {return (
                <>
                <p><strong>{element.user}</strong></p>
                <p>{element.comment}</p>
                </>
                
            )
    })
    return (
        <div className={className}>
            <h3>{comments.length} Comments</h3>
            {eachComment}
        </div>
            
        
    )
}
export default Comments