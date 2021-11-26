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
        {/* <BgTriangle/> */}
        {/* <img src={landing} alt="ola" /> */}
        <div className="cname">Yash Consultants</div>
        <div className="cname tline">Yash Consultants</div>
        <div className="btn-grp">
          <button class="btn">Employee</button>
          <button class="btn">Employer</button>
        </div>
      </div>
    </div>
  );
}

{
  /* aa
  > Job Search 
  > Feedback
  > Newsletter
  > Our recruiters
  > Info Component(about)
  > Our Services (component)
  > Login
  > 404 error 
*/
}
