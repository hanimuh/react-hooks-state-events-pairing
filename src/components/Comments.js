import React, {useState} from 'react'
import video from '../data/video';

export default function Comments() {
  const [show, setShow]= useState(false)
  function trigger (){
    setShow((show) => !show)
  }
  const commentsDiv= [video.comments.map((comment)=>(
    <div>
      <h3>{comment.user}</h3>
      <p>{comment.comment}</p>
    </div>
    
  ))];

  return (
    <div>
      <button onClick={trigger}>{show?'show comments':'hide comments'} </button>
      <br/>
      <h2>{video.comments.length} comments</h2>
      <span>{show? null: commentsDiv}</span>
    </div>
  )
}
