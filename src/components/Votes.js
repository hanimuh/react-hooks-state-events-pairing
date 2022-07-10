import React, {useState} from 'react'
import video from '../data/video'

export default function Votes() {
    const num1= video.upvotes
    const num2= video.downvotes
    const [upvote, setUpvote] = useState(num1);
    const [downvote, setDownvote] = useState(num2);

  return (
    <div>
      <button onClick={() => setUpvote(upvote + 1)}>
      {upvote}
      </button>
      <button onClick={() => setDownvote(downvote + 1)}>
      {downvote}
      </button>
    </div>
  )
}
