import { useEffect, useRef } from "react";
import Computer from "./Computer";
import "./computerMobile.css";
const ComputerMobile = function ({
  mobileVideo,
  computerVideo,
  style,
  state,
  index,
}: {
  mobileVideo: string;
  computerVideo: string;
  style?: any;
  state: number;
  index: number;
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
    <div className="ComputerMobile" style={{ position: "relative", ...style }}>
      <Computer
        state={state}
        index={index}
        video={computerVideo}
        style={{ paddingRight: "100px" }}
      />
      <div
        className="MobileScreen"
        style={{
          position: "absolute",
          height: "263px",
          width: "122px",
          left: "380px",
          top: "80px",
          backgroundColor: "red",
          borderRadius: "15px",
          padding: "6px 6px 3px",
        }}
      >
        <video
          ref={videoRef}
          className="bg-video"
          autoPlay
          loop
          muted
          playsInline
          style={{
            borderRadius: "10px",
            height: "250px",
            width: "110px",
            objectFit: "cover",
          }}
        >
          <source src={mobileVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default ComputerMobile;
