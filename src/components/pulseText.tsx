import "./pulseText.css";

const PulseText = function ({
  text,
  style,
  TextStyle,
}: {
  text: string;
  style: any;
  TextStyle: any;
}) {
  return (
    <div style={{ ...style }} className="circle pulse green">
      <span style={{ ...TextStyle }}>{text}</span>
    </div>
  );
};
export default PulseText;
