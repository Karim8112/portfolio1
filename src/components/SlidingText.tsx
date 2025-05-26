const PlanningText = function (props: {
  index: number;
  state: number;
  text: string;
  title?: string;
}) {
  console.log(
    "this is text",

    props.index,
    props.state,
    props.title
  );

  return (
    <>
      <p
        style={{
          color: "#A1A1A1",
          position: "absolute",
          transition: "all",
          transitionDuration: "0.6s",
          transitionTimingFunction: "ease-in",
          left: 0,
          top: props.index == props.state ? 0 : "-150px",
          lineHeight: "25px",

          fontSize: "16px",
        }}
      >
        {props.title ? (
          <span
            style={{
              fontSize: "16px",
              color: "#9747ff",
              marginRight: "10px",
            }}
          >
            {props.title}
          </span>
        ) : (
          <></>
        )}
        {props.text}
      </p>
    </>
  );
};

// the text block with texts combined
const Text = function ({
  ref,
  title1,
  title2,
  state,
  height,
  textArray,
  titlesArray,
  props,
  classname,
}: {
  ref: React.RefObject<null>;
  title1: string;
  title2?: string;
  state: number;
  height: string;
  textArray: string[];
  titlesArray: string[];
  props?: any;
  classname?: string;
}) {
  return (
    <div className={classname} {...props} ref={ref}>
      <h2 style={{ color: "white", fontSize: "32px", marginBottom: "32px" }}>
        {title1}
        <br /> {title2 ? `,${title2}` : ""}
      </h2>
      <div
        className="textContainer"
        style={{
          width: "100%",
          height: height,
          // backgroundColor: "aqua",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {textArray.map((el, index) => {
          return (
            <PlanningText
              index={index}
              state={state}
              text={el}
              title={titlesArray[index]}
            />
          );
        })}
        {/* <PlanningText index={0} state={imageIndex} text={textArray[0]} />
        <PlanningText index={1} state={imageIndex} text={textArray[1]} />
        <PlanningText index={2} state={imageIndex} text={textArray[2]} /> */}
      </div>
    </div>
  );
};

export default Text;
