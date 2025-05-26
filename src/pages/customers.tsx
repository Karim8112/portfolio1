import { useLayoutEffect, useRef, useState } from "react";
import Text from "../components/SlidingText";
import "./enterprise.css";
import gsap from "gsap";
// iamges
import splitcost from "../assets/iamges/splitcost.png";
import syrianhome from "../assets/iamges/syrianhome.png";
import tawsella from "../assets/iamges/tawsella.png";
import Mobile from "../components/Mobile";
// videos
import SyrianHomeVide from "../assets/videos/syrianhome.mp4";
import SplitCostVid from "../assets/videos/splitcost.mp4";
import TawsellVid from "../assets/videos/tawsella.mp4";

const videosArray = [SplitCostVid, TawsellVid, SyrianHomeVide];

const Images = function ({
  imagesArray,
  state,
  setState,
}: {
  imagesArray: string[];
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}) {
  const pr = 18 + state * 192;
  return (
    <div
      style={{
        // backgroundColor: "black",
        height: "200px",
        width: `${imagesArray.length * 200}px`,
        position: "relative",
      }}
    >
      <div
        // the border
        style={{
          position: "absolute",
          top: "50%",
          translate: "0 -50%",
          width: "180px",
          height: "182px",
          left: pr,
          borderRadius: "10px",
          borderColor: "#9747FF",
          borderStyle: "solid",
          borderWidth: "2.5px",
          transition: "all",
          transitionDuration: "0.2s",
          transitionTimingFunction: "ease-in",
          zIndex: "5",
          // display: "none",
        }}
      ></div>
      {/* here are the images */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          translate: "-50% -50%",
          left: "50%",
          display: "flex",
          gap: "32px",
          zIndex: "10",
        }}
      >
        {imagesArray.map((img, index) => {
          return (
            <img
              style={{ zIndex: 15 }}
              className={` ${
                index == state ? "selectedImgEnt" : ""
              }  sliderM  `}
              width={160}
              src={img}
              key={index}
              onClick={() => setState(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

const Slider = function ({
  ref,
  state,
  setState,
  textArray,
  imagesArray,
  style,
  titlesArray,
}: {
  style?: any;
  ref: any;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  textArray: string[];
  imagesArray: string[];
  titlesArray: string[];
}) {
  return (
    <div
      style={{
        // backgroundColor: "red",
        height: "400px",
        width: "55%",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-between",
        ...style,
      }}
    >
      <Text
        titlesArray={titlesArray}
        classname="enterpriseText"
        height="100px"
        ref={ref}
        state={state}
        title1="Design for customers."
        textArray={textArray}
      />
      <Images imagesArray={imagesArray} state={state} setState={setState} />
    </div>
  );
};

const Customers = function () {
  const textArray = [
    "a mobile application for sharing expenses between friends. It includes creating groups, chat, and viewing reports.",
    "a classic taxi-ordering application. The user selects his current location and destination, orders a taxi, and tracks the driver's location. ",
    "an application for posting real estate. The user can browse existing properties, add their own, and perform highly specific searches using advanced filters.",
  ];

  const titlesArray = ["Splitcost,", "Taswella,", "Syrianhome,"];
  const imagesArray = [splitcost, tawsella, syrianhome];
  const container = useRef(null);
  const sliderRef = useRef(null);
  const screenSlider = useRef(null);
  const [state, setState] = useState<number>(0);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        })

        .to(screenSlider.current, { x: -40 }, 0);
      console.log(tl);
      // lettersRef.current.forEach((letter, i) => {
      //   tl.to(
      //     letter,
      //     {
      //       top: Math.floor(Math.random() * -75) - 25,
      //     },
      //     0
      //   );
      // });
    });

    return () => context.revert();
  }, []);

  return (
    <div
      ref={container}
      className="customers"
      style={{
        height: "140vh",
        // paddingTop: "64px",
        position: "relative",
        // backgroundColor: "white",
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        padding: "64px",
      }}
    >
      <div></div>
      <Slider
        titlesArray={titlesArray}
        ref={sliderRef}
        state={state}
        textArray={textArray}
        setState={setState}
        imagesArray={imagesArray}
        style={{ order: "2" }}
      />

      {/* ------------------------here is screen slider------------------------------ */}
      <div
        className="screenSlider"
        ref={screenSlider}
        style={{
          order: 1,
          overflow: "hidden",
          position: "relative",
          height: "600px",
          width: "600px",
          // backgroundColor: "green",
        }}
      >
        {videosArray.map((video, index) => {
          return (
            <>
              <div
                style={{
                  position: "absolute",

                  top: "0",
                  left: `${state == index ? "80px" : "-1000px"}`,
                  transition: "all",
                  transitionDuration: "0.6s",
                  transitionTimingFunction: "ease-in-out",
                }}
              >
                <Mobile video={video} index={index} state={state} />
              </div>
            </>
          );
        })}

        {/* end of mapping videos to Mobile components */}
      </div>
    </div>
  );
};
export default Customers;
