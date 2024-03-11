const VideoPlayer = ({ src }) => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <video
        autoPlay
        loop
        muted
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
