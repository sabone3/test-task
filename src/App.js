import "./App.css";
import logoImage from "./assets/images/logo.svg";
import img from "./assets/images/1.svg";
import download_btn from "./assets/images/download_btn.svg";
import instagram from "./assets/images/instagram.svg";
import vk from "./assets/images/vk.svg";
import ok from "./assets/images/ok.svg";
import facebook from "./assets/images/facebook.svg";

function App() {
  return (
    <div className="App">
      <div className="bg">
        <div className="container">
          <div className="logo">
            <img src={logoImage} alt="" />
          </div>

          <div className="body">
            <div className="left">
              <div className="title">
                Lorem - <p>ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
              <div className="text">
                <p>• Aenean commodo ligula eget dolor</p>
                <p>• Aenean massa.</p>
                <p>• Donec pede justo, fringilla vel, aliquet</p>
                <p>• In enim justo, rhoncus ut, imperdiet Integer tincidunt.</p>
              </div>
              <button className="download_btn">
                <img src={download_btn} alt="" />
              </button>
              <div className="text_under_btn">Quisque rutrum</div>
            </div>

            <div className="img">
              <img src={img} alt="" />
            </div>
          </div>

          <div className="footer">
            <div className="footer_text">Etiam ultricies nisi vel augue</div>
            <div className="social">
              <button className="icon">
                <img src={instagram} alt="" />
              </button>
              <button className="icon">
                <img src={vk} alt="" />
              </button>
              <button className="icon">
                <img src={ok} alt="" />
              </button>
              <button className="icon">
                <img src={facebook} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;