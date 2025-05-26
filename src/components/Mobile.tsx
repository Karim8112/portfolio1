import { useEffect, useRef } from "react";
import "./Mobile.css";

const Mobile = function ({
  video,
  style,
  index,
  state,
}: {
  video: string;
  style?: any;
  index: number;
  state: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.pause();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
    if (state == index) {
      videoRef.current?.play();
    }
  }, [state]);

  return (
    <div
      className="videoWrapperMobile2"
      style={{
        padding: "6px 7px 3px",
        backgroundColor: "red",
        borderRadius: "25px",
        ...style,
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          borderRadius: "20px",
          height: "530px",
          width: "250px",
          objectFit: "cover",
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Mobile;
