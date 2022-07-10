import video from "../data/video.js";
import VideoDetails from "./VideoDetails.js";
import Votes from "./Votes.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDetails/>
      <Votes/>
      <Comments/>
    </div>
  );
}

export default App;
