import "./styles.css";
import { ReactComponent as BgTriangle } from "./bgtr.svg";
export default function App() {
  return (
    <div className="App">
      <div className="pageBox">
        <div className="triangleLeft"></div>
        {/* <BgTriangle /> */}
        <img src="./landing.png" alt="ola" />
      </div>

      <h1 className="cname">Hey from</h1>
    </div>
  );
}
