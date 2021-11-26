import "./styles.css";
import { ReactComponent as BgTriangle } from "./img/bgtr.svg";
import landing from "./img/landing.png";
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
        {/* <BgTriangle style={{width:"500vw",height:"500vh",transform:"translate(-2600px,-250px)",overflow:"hidden"}}/> */}
        {/* <img src={landing} alt="ola" /> */}
        <h1 className="cname">Yash Consultants</h1>
        <h2 className="cname tline">Yash Consultants</h2>
        <div className="btn-grp">
          <button class="btn">Employee</button>
        </div>
      </div>
    </div>
  );
}
