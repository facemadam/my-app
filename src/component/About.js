import Divide from "../component/Divide";

function About() {
  return (
    <>
      <Divide id="about" />
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
      <Divide class="Divider-deg" />
    </>
  );
}

export default About;
