import { useEffect, useRef } from "react";
import { Desktopbottom } from "../assets/icons";
import "./Computer.css";

const Computer = function ({
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
      className="DesktopScreen"
      style={{
        ...style,
        height: "340px",
        // paddingRight: "30px",
        // background: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        justifyContent: "center",
      }}
    >
      {/* video wrapper */}
      <div
        className="videoWrapper"
        style={{
          padding: "4px 7px 3px",
          // backgroundColor: "red",
          borderRadius: "25px",
          // position: "absolute",
          // top: "100px",
          // left: "100px",
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
            borderRadius: "20px",
            height: "220px",
            width: "400px",
            objectFit: "cover",
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      {/* carrier */}
      <Desktopbottom />
    </div>
  );
};

export default Computer;
