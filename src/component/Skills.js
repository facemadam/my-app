import { ReactComponent as SvgPhp } from "../assets/svg/php.svg";
import { ReactComponent as SvgCi } from "../assets/svg/ci.svg";
import { ReactComponent as SvgMysql } from "../assets/svg/mysql.svg";
import { ReactComponent as SvgMongo } from "../assets/svg/mongo.svg";
import { ReactComponent as SvgGit } from "../assets/svg/git.svg";
import { ReactComponent as SvgHtml } from "../assets/svg/html.svg";
import { ReactComponent as SvgCss } from "../assets/svg/css.svg";
import { ReactComponent as SvgJs } from "../assets/svg/js.svg";
import { ReactComponent as SvgReact } from "../assets/svg/react.svg";

function Skills() {
  return (
    <div className="Main__skill" id="skill">
      <h2>Skills</h2>
      <div className="Main__card">
        <div className="Main__skill__info">
          저는 <b>Front-End</b>와 <b>Back-End</b>를 모두 활용한 <b>Web App</b>
          구현을 좋아하고, 주로 <b>LAMP</b> 환경에서 개발을 진행합니다.
        </div>
        <div className="Main__skill__badges">
          <div className="Main__skill__badges-item">
            <SvgPhp />
          </div>
          <div className="Main__skill__badges-item">
            <SvgCi />
          </div>
          <div className="Main__skill__badges-item">
            <SvgMysql />
          </div>
          <div className="Main__skill__badges-item">
            <SvgMongo />
          </div>
          <div className="Main__skill__badges-item">
            <SvgGit />
          </div>
          <div className="Main__skill__badges-item">
            <SvgHtml />
          </div>
          <div className="Main__skill__badges-item">
            <SvgCss />
          </div>
          <div className="Main__skill__badges-item">
            <SvgJs />
          </div>
          <div className="Main__skill__badges-item">
            <SvgReact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
