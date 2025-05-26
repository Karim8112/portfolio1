import "./App.css";
import {
  HeroShadow,
  HomeRectangle,
  LeftLight,
  RightLight,
} from "./assets/icons";
import Customers from "./pages/customers";
import Enterprises from "./pages/enterprises";

import Hero from "./pages/Hero";
import Planning from "./pages/planning";

function App() {
  return (
    <div className="App">
      <HomeRectangle
        style={{
          width: "100vw",
          position: "absolute",
          left: "0",
        }}
      ></HomeRectangle>
      <HeroShadow className="heroShaodw"></HeroShadow>
      <LeftLight className="leftLight"></LeftLight>
      <RightLight className="rightLight"></RightLight>
      {/* components */}
      <Hero />
      <Planning />
      <Enterprises />
      <Customers />
      <LeftLight className="enterpriseLight"></LeftLight>
      <RightLight className="customerLight"></RightLight>
    </div>
  );
}

export default App;
