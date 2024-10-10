import { useState } from "react";

function VideoPreview(file) {
  const fileName = useState(file);

  return (
    <video id="videoPlayer" width="50%" controls muted="muted" autoPlay>
      <source src={"/video/" + fileName} type="video/mp4" />
    </video>
  )
}

export default VideoPreview;