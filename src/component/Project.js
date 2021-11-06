import ImgPortfolio from "../assets/images/portfolio.png";
import { ReactComponent as SvgDiagram } from "../assets/svg/diagram.svg";

function Project() {
  return (
    <div className="Main__project" id="project">
      <h2>Project</h2>
      <div className="Main__card">
        <div className="Main__board">
          <div className="Main__board__preview">
            <img
              src={ImgPortfolio}
              alt="Portfolio"
              className="Main__avata-img"
            />
          </div>
          <div className="Main__board__content">
            <div className="Main__board__content-wrap">
              <div className="Main__board__content-icon">
                <SvgDiagram />
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
  );
}

export default Project;
