import styled from "styled-components";
import Divide from "./Divide";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  color: var(--color-background);
  background-color: var(--color-font);
`;

const Title = styled.h2``;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 769px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 968px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 2rem;
  padding: 1.5em;
  border-radius: 1rem;
  color: #a9b7c6;
  background-color: #282b2e;
  @media (min-width: 1024px) {
    margin: 1em 0;
  }
`;

const InfoBoxItem = styled.div`
  flex-wrap: wrap;
`;

const InfoBoxItemInner = styled.div`
  margin-left: 1em;
`;

function About() {
  return (
      <Container id="about">
        <Divide />
        <Title>About</Title>
        <Info>
          <InfoBox>
            <InfoBoxItem>
              <font color="#808080">// 내 정보 추출</font>
            </InfoBoxItem>
            <InfoBoxItem>
              <font color="#cc7832">const </font>developer ={" "}
              <font color="#ffc66d">getDeveloper</font>(
              <font color="#6a8759">"json"</font>);
            </InfoBoxItem>
            <br />
            <InfoBoxItem>
              <font color="#808080">// 내 정보 출력</font>
            </InfoBoxItem>
            <InfoBoxItem>
              <font color="#cc7832">console.log</font>(developer);
            </InfoBoxItem>
          </InfoBox>
          <InfoBox>
            <div>{"{"}</div>
            <InfoBoxItemInner>
              <InfoBoxItem>
                <font color="#6d599a">name</font>:{" "}
                <font color="#6a8759">"안수현"</font>,
              </InfoBoxItem>
              <InfoBoxItem>
                <font color="#6d599a">age</font>:{" "}
                <font color="#6897bb">31</font>,
              </InfoBoxItem>
              <InfoBoxItem>
                <font color="#6d599a">email</font>:{" "}
                <font color="#6a8759">"tngus6047@gmail.com"</font>,
              </InfoBoxItem>
              <InfoBoxItem>
                <font color="#6d599a">address</font>:{" "}
                <font color="#6a8759">"Gunpo-si, Gyeonggi-do."</font>,
              </InfoBoxItem>
              <InfoBoxItem>
                <font color="#6d599a">work</font>:{" "}
                <font color="#6a8759">"web"</font>,
              </InfoBoxItem>
              <InfoBoxItem>
                <font color="#6d599a">experience</font>: [
                <font color="#6897bb">5</font>,{" "}
                <font color="#6a8759">"year"</font>
                ],
              </InfoBoxItem>
              <InfoBoxItem>
                <font color="#6d599a">personality</font>: [
                <font color="#6a8759">"Mild"</font>,{" "}
                <font color="#6a8759">"meticulous"</font>,{" "}
                <font color="#6a8759">"quiet"</font>]
              </InfoBoxItem>
            </InfoBoxItemInner>
            <div>{"}"}</div>
          </InfoBox>
        </Info>
        <Divide className="rotate" />
      </Container>
  );
}

export default About;
