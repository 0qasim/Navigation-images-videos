// VideoGrid.jsx
import React, { useState } from "react";
import styles from "./VideoGrid.module.css"; // Create VideoGrid.module.css for styling

const VideoGrid = ({ videos }) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);

  const openVideoModal = (videoIndex) => {
    setSelectedVideoIndex(videoIndex);
  };

  const closeVideoModal = () => {
    setSelectedVideoIndex(null);
  };

  const goToNextVideo = () => {
    if (
      selectedVideoIndex !== null &&
      selectedVideoIndex < videos.length - 1
    ) {
      setSelectedVideoIndex(selectedVideoIndex + 1);
    }
  };

  const goToPrevVideo = () => {
    if (selectedVideoIndex !== null && selectedVideoIndex > 0) {
      setSelectedVideoIndex(selectedVideoIndex - 1);
    }
  };

  return (
    <div>
      <h1>Our Video Gallery</h1>
      <div className={styles.container}>
        {Array.isArray(videos) && videos.length > 0 ? (
          videos.map(({ video, _id }, index) => (
            <div key={_id} className={styles["video-grid-items"]}>
              <video
                controls
                src={`http://localhost:3001/uploads/${video}`}
                alt="video"
                onClick={() => openVideoModal(index)}
              />
            </div>
          ))
        ) : (
          <p>No videos available.</p>
        )}
      </div>
      {selectedVideoIndex !== null && (
        <Modal
          src={`http://localhost:3001/uploads/${videos[selectedVideoIndex].video}`}
          alt="video"
          onClose={closeVideoModal}
          onNext={goToNextVideo}
          onPrev={goToPrevVideo}
        />
      )}
    </div>
  );
};

export default VideoGrid;
