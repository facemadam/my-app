import ImgAvata from "../assets/images/avata.png";

function Welcome() {
  return (
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
            <img src={ImgAvata} className="Main__avata-img" />
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
  );
}

export default Welcome;
