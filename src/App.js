import "./App.css";
import { ReactComponent as BgEle } from "./img/BG.svg";
import { ReactComponent as BgColored } from "./img/BGcol.svg";
import { ReactComponent as Recicon } from "./img/recruitIcon.svg";
import { ReactComponent as Writingicon } from "./img/writingIcon.svg";
import { ReactComponent as Bulbicon } from "./img/bulbIcon.svg";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Feedback from "./components/Feedback";

function App() {
  return (
    <div className="App">
      <BgEle className="bg" />
      {/* <BgColored classname="bg"/> */}
      <div className="pageBox">
        <Navbar />
        {/* <BgTriangle style={{width:"500vw",height:"500vh",transform:"translate(-2600px,-250px)",overflow:"hidden"}}/> */}
        {/* <img src={landing} alt="ola" /> */}
        <div className="cname">Audley Consultants</div>
        <div className="cname tline">Audley Consultants</div>
        <div className="btn-grp center">
          <button className="btn">Employee</button>
          <button className="btn">query?</button>
        </div>
      </div>
      <div className="pageBox p2">
        <div className="content-block">
          <p id="about" class="heading" align="center">
            ABOUT US
          </p>
          <div className="info-block">
            Audley Consultants (OPC) PVT LTD has been immensely successful in
            creating a global network of a highly adept intelligent workforce
            that can help a company achieve its mission-critical projects and
            goals . Keeping pace with projects and being on the lookout for
            extremely talented individuals has become ever more challenging.
            Here is where Your growth is our goal!{" "}
          </div>
        </div>
      </div>
      <div className="pageBox p3">
        <div className="content-block">
          <p id ="services" class="heading" align="center">
            OUR SERVICES
          </p>
          <div className="info-block">
            Audley Consultants has been immensely successful in creating a
            global network by providing different kind of services like
            <div className="all-services">
              {/* 1st service */}
              <div className="services">
                <Recicon className="service-icon" />
                <div className="service-title">Recruitment Services</div>
                <div className="service-subtitle">Permanent/Contractual</div>
              </div>
              {/* 2nd service */}
              <div className="services">
                <Writingicon className="service-icon" />
                <div className="service-title">Resume Writing</div>
                <div className="service-subtitle">Permanent/Contractual</div>
              </div>
              {/* 3rd service */}
              <div className="services">
                <Bulbicon className="service-icon" />
                <div className="service-title">Career Counseling</div>
                <div className="service-subtitle">Permanent/Contractual</div>
              </div>
              {/* 4th service */}
              <div className="services">
                <Recicon className="service-icon" />
                <div className="service-title">Recruitment Services</div>
                <div className="service-subtitle">Permanent/Contractual</div>
              </div>
              {/* <Services icon="yp" title="Job" subtitle="Less" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="pagebox p4"> Yolo</div>
    </div>
  );
}


export default App;
