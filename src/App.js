import "./App.css";
import avata from "./assets/images/avata.png";
import portfolio from "./assets/images/portfolio.png";
import bars from "./assets/svg/bars.svg";
import times from "./assets/svg/times.svg";
import svg_php from "./assets/svg/php.svg";
import svg_ci from "./assets/svg/ci.svg";
import svg_mysql from "./assets/svg/mysql.svg";
import svg_mongo from "./assets/svg/mongo.svg";
import svg_git from "./assets/svg/git.svg";
import svg_html5 from "./assets/svg/html5.svg";
import svg_css from "./assets/svg/css.svg";
import svg_js from "./assets/svg/js.svg";
import svg_react from "./assets/svg/react.svg";
import svg_diagram from "./assets/svg/diagram.svg";
import svg_email from "./assets/svg/email.svg";
import svg_github from "./assets/svg/github.svg";
import svg_facebook from "./assets/svg/facebook.svg";
import svg_instagram from "./assets/svg/instagram.svg";

function App() {
  return (
    <>
      <header className="Header">
        <input type="checkbox" id="rnbToggle" className="header__check" />
        <div className="Header__gnb">
          <a href="/" className="Header__gnb__logo">
            <h4>A.SHarea</h4>
          </a>
          <label for="rnbToggle" className="Header__gnb__bars">
            <img src={bars} alt="bars" />
          </label>
        </div>
        <div className="Header__rnb">
          <div className="Header__rnb__head">
            <label for="rnbToggle" className="Header__rnb__bars">
              <img src={times} alt="times" />
            </label>
          </div>
          <div className="Header__rnb__body">
            <a href="#welcome" className="Header__rnb-item">
              Welcome
            </a>
            <a href="#about" className="Header__rnb-item">
              About
            </a>
            <a href="#skill" className="Header__rnb-item">
              Skill
            </a>
            <a href="#project" className="Header__rnb-item">
              Project
            </a>
            <a href="#contact" className="Header__rnb-item">
              Contact
            </a>
          </div>
        </div>
        <div className="Header__overlay"></div>
      </header>
      <main className="Main">
        <div className="Main__welcome" id="welcome">
          <div className="Main__info">
            <div className="Main_info-text">
              <h1>Welcome, ASHarea</h1>
              <h4>
                <font color="#bcaed0">I'm a full stack developer</font>
              </h4>
              <h5>
                <font color="#876eab">
                  안녕하세요. 웹 개발자 안수현의 포트폴리오 사이트입니다.
                </font>
              </h5>
            </div>
            <div className="Main__avata">
              <div className="Main__avata-wrap">
                <img src={avata} className="Main__avata-img" />
              </div>
            </div>
          </div>
          <div className="Main__quick">
            <div className="Main__buttons">
              <a
                href="https://facemadam.github.io/my-app/files/이력서_tngus6047.pdf"
                target="_blank"
                className="Main__buttons-item"
              >
                이력서
              </a>
            </div>
          </div>
        </div>
        <div class="Divider" id="about">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="Main__about">
          <h2>About</h2>
          <div className="Main__dev">
            <div className="Main__dev__box">
              <div className="Main__dev__box-item">
                <font color="#808080">// 내 정보 추출</font>
              </div>
              <div className="Main__dev__box-item">
                <font color="#cc7832">const </font>developer ={" "}
                <font color="#ffc66d">getDeveloper</font>(
                <font color="#6a8759">"json"</font>);
              </div>
              <br />
              <div className="Main__dev__box-item">
                <font color="#808080">// 내 정보 출력</font>
              </div>
              <div className="Main__dev__box-item">
                <font color="#cc7832">console.log</font>(developer);
              </div>
            </div>
            <div className="Main__dev__box">
              <div>{"{"}</div>
              <div className="Main__dev__box-info">
                <div>
                  <font color="#6d599a">name</font>:{" "}
                  <font color="#6a8759">"안수현"</font>,
                </div>
                <div>
                  <font color="#6d599a">age</font>:{" "}
                  <font color="#6897bb">31</font>,
                </div>
                <div>
                  <font color="#6d599a">email</font>:{" "}
                  <font color="#6a8759">"tngus6047@gmail.com"</font>,
                </div>
                <div>
                  <font color="#6d599a">address</font>:{" "}
                  <font color="#6a8759">"Gunpo-si, Gyeonggi-do."</font>,
                </div>
                <div>
                  <font color="#6d599a">work</font>:{" "}
                  <font color="#6a8759">"web"</font>,
                </div>
                <div>
                  <font color="#6d599a">experience</font>: [
                  <font color="#6897bb">5</font>,{" "}
                  <font color="#6a8759">"year"</font>
                  ],
                </div>
                <div>
                  <font color="#6d599a">personality</font>: [
                  <font color="#6a8759">"Mild"</font>,{" "}
                  <font color="#6a8759">"meticulous"</font>,{" "}
                  <font color="#6a8759">"quiet"</font>]
                </div>
              </div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>
        <div class="Divider Divider-deg">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="Main__skill" id="skill">
          <h2>Skills</h2>
          <div className="Main__card">
            <div className="Main__skill__info">
              저는 <b>Front-End</b>와 <b>Back-End</b>를 모두 활용한{" "}
              <b>Web App</b>
              구현을 좋아하고, 주로 <b>LAMP</b> 환경에서 개발을 진행합니다.
            </div>
            <div className="Main__skill__badges">
              <div className="Main__skill__badges-item">
                <img src={svg_php} alt="PHP" />
              </div>
              <div className="Main__skill__badges-item">
                <img src={svg_ci} alt="CodeIgniter" />
              </div>
              <div className="Main__skill__badges-item">
                <img src={svg_mysql} alt="MySQL" />
              </div>
              <div className="Main__skill__badges-item">
                <img src={svg_mongo} alt="MongoDB" />
              </div>
              <div className="Main__skill__badges-item">
                <img src={svg_git} alt="Git" />
              </div>
              <div className="Main__skill__badges-item">
                <img src={svg_html5} alt="HTML5" />
              </div>
              <div className="Main__skill__badges-item">
                <img src={svg_css} alt="CSS3" />
              </div>
              <div className="Main__skill__badges-item">
                <img src={svg_js} alt="Javascript" />
              </div>
              <div className="Main__skill__badges-item">
                <img src={svg_react} alt="React" />
              </div>
            </div>
          </div>
        </div>
        <div className="Main__project" id="project">
          <h2>Project</h2>
          <div className="Main__card">
            <div className="Main__board">
              <div className="Main__board__preview">
                <img
                  src={portfolio}
                  alt="Portfolio"
                  className="Main__avata-img"
                />
              </div>
              <div className="Main__board__content">
                <div className="Main__board__content-wrap">
                  <div className="Main__board__content-icon">
                    <img src={svg_diagram} alt="diagram" />
                  </div>
                  <div className="Main__board__content-body">
                    <div className="Main__board__content-info">
                      <b>포트폴리오</b>
                    </div>
                    <div className="Main__board__content-info">
                      <small>React.js 기반 반응형 웹사이트</small>
                    </div>
                  </div>
                </div>
                <a
                  href="https://github.com/facemadam/my-app"
                  target="_blank"
                  className="Main__board__content-button"
                >
                  Detail
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="Main__contact" id="contact">
          <h2>Contact</h2>
          <div className="Main__card">
            <div className="Main__board">
              <div className="Main__board__content">
                <div className="Main__board__content-wrap">
                  <div className="Main__board__content-icon">
                    <img src={svg_email} alt="email" />
                  </div>
                  <div className="Main__board__content-body">
                    <div className="Main__board__content-info">
                      <b>이메일</b>
                    </div>
                    <div className="Main__board__content-info">
                      <small>tngus6047@gmail.com</small>
                    </div>
                  </div>
                </div>
                <a href="#" className="Main__board__content-button Mbcb__red">
                  Send
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="Footer">
        <div className="Footer__icons">
          <div className="Footer__icons">
            <a
              href="https://github.com/facemadam"
              className="Footer__icons-item"
            >
              <img src={svg_github} alt="Github" />
            </a>
            <a
              href="https://www.facebook.com/facemadam"
              className="Footer__icons-item"
            >
              <img src={svg_facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/suhyeon2005/"
              className="Footer__icons-item"
            >
              <img src={svg_instagram} alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="Footer__copyright">
          <div>@ 2021 SuHyun An.</div>
          <div>
            <small>ALL RIGHTES RESERVED.</small>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
