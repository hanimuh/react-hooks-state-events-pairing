import React from "react";
import video from "../data/video";

function VideoDetails(){


    return(
        <div>
            <iframe
                width="919"
                height="525"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{video.title}</h1>
            <div>
                <p>{video.views} views | Uploaded {video.createdAt}</p>
            </div>
        </div>
    )
}

export default VideoDetails;