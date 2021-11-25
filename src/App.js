import "./styles.css";
import { ReactComponent as BgTriangle } from "./bgtr.svg";
export default function App() {
  return (
    <div className="App">
      <div className="pageBox">
        <header className="navbar">
          <div className="navbar_title navbar_item">LOGO</div>
          <div className="navbar_item">Home</div>
          <div className="navbar_item">About</div>
          <div className="navbar_item">Services</div>
          <div className="navbar_item">Blog</div>
          <div className="navbar_item">Contact</div>
          <div className="navbar_item">Follow Us</div>
        </header>
        <div className="triangleLeft"></div>
        {/* <BgTriangle /> */}
        <img src="/src/img/landing.png" alt="ola" />
      </div>

      <h1 className="cname">Yash Consultants</h1>
      <h2 className="cname tline">Yash Consultants</h2>
    </div>
  );
}
