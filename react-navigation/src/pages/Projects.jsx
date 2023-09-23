import React, { useState, useEffect } from "react";
import { BigGradientText } from "../styles";
import axios from "axios";
import Grid from "./Grid";
import VideoGrid from "./VideoGrid"; // Import the new VideoGrid component
import Btn from "../Button/Btn";

const Project = () => {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]); // State for videos

  const [updateUI, setUpdateUI] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/get")
      .then((res) => {
        console.log(res.data);

        // Filter media into photos and videos
        const photosData = res.data.filter((media) => media.fileType === "photo");
        const videosData = res.data.filter((media) => media.fileType === "video");

        setPhotos(photosData);
        setVideos(videosData);
      })
      .catch((err) => console.log(err));
  }, [updateUI]);

  return (
    <>
      <BigGradientText>
        <Grid photos={photos} />
        <VideoGrid videos={videos} /> {/* Render the VideoGrid component */}
        <Btn setUpdateUI={setUpdateUI} fileType="photo" />
<Btn setUpdateUI={setUpdateUI} fileType="video" />

      </BigGradientText>
    </>
  );
};

export default Project;
