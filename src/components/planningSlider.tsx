import { useEffect, useState } from "react";
import MVP from "../assets/iamges/MVP.png";
import userflow from "../assets/iamges/userflow.png";
import jira from "../assets/iamges/jira.png";
import "./planningSlider.css";
import PulseText from "./pulseText";

const PlanningSlider = function ({
  ref,
  image = 0,
  setImage,
}: {
  ref: React.RefObject<null>;
  image: number;
  setImage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const images = [
    { image: MVP, left: image == 0 ? "0" : image == 1 ? "572px" : "412px" },
    {
      image: userflow,
      left: image == 0 ? "412px" : image == 1 ? "0" : "572px",
    },
    { image: jira, left: image == 0 ? "572px" : image == 1 ? "412px" : "0" },
  ];
  const ProgressWidth = ((image + 1) / 3) * 722;
  const defaultStyle = {
    bottom: 0,
    borderRadius: "10px",
    width: "150px",
    height: "auto",
    transition: "all",
    transitionDuration: "0.5s",
    transitionTimingFunction: "ease-in",
  };

  useEffect(() => {
    const MVP = document.querySelector(".cursor img:nth-child(1)");
    const userflow = document.querySelector(".cursor img:nth-child(2)");
    const jira = document.querySelector(".cursor img:nth-child(3)");
    MVP?.addEventListener("click", () => {
      setImage(0);
    });
    userflow?.addEventListener("click", () => {
      setImage(1);
    });
    jira?.addEventListener("click", () => {
      setImage(2);
    });
  }, []);

  // عدم رجوع
  const [clicked, setClicked] = useState<boolean>(false);
  useEffect(() => {
    if (image != 0 && !clicked) {
      setClicked(true);
    }
  }, [image]);

  return (
    <div
      ref={ref}
      className="SliderContainer"
      style={{
        position: "relative",
        width: "auto",
        height: "400px",
      }}
    >
      {!clicked ? (
        <PulseText
          text="click here"
          TextStyle={{
            color: "#9747ffc2",
            fontSize: "16px",
          }}
          style={{
            position: "absolute",
            left: "470px",
            top: "170px",
          }}
        />
      ) : (
        <></>
      )}
      <div
        className="cursor"
        style={{
          width: "100%",
          height: "97%",
          position: "relative",
        }}
      >
        {images.map((el, index) => {
          return (
            <img
              className={`${index == image ? "selectedImage" : ""}`}
              src={el.image}
              style={{
                zIndex: `${(image + 1) * 10}`,
                position: "absolute",
                ...defaultStyle,
                // order: `${el.order}`
                left: `${el.left}`,
              }}
            />
          );
        })}
        {/* <img
          className="selectedImage"
          src={MVP}
          style={{ ...defaultStyle, ...selectedStyle, order: 0 }}
        />
        <img src={userflow} style={{ ...defaultStyle, order: 1 }} />
        <img src={jira} style={{ ...defaultStyle, order: 3 }} /> */}
      </div>
      <div
        className="progress"
        style={{
          backgroundColor: "#9747FF",
          width: `${ProgressWidth}px`,
          height: "5px",
          borderRadius: "20px",
          position: "absolute",
          bottom: "0",
          transition: "all",
          transitionDuration: "0.3",
          transitionTimingFunction: "ease",
        }}
      ></div>
    </div>
  );
};
export default PlanningSlider;
