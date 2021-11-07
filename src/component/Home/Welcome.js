import styled from "styled-components";
import ImgAvata from "../../assets/images/avata.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 6em 2rem 3em;
  @media (min-width: 1025px) {
    padding-top: 8em;
    padding-bottom: 4em;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 769px) {
    flex-direction: row;
    max-width: 768px;
  }
  @media (min-width: 1025px) {
    max-width: 968px;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1 1 0%;
`;

const InfoTextTop = styled.h1``;

const InfoTextMiddle = styled.h4`
  color: var(--color-font);
  opacity: 0.4;
`;
const InfoTextBottom = styled.h5`
  color: var(--color-font);
  opacity: 0.8;
`;

const InfoAvata = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
`;

const InfoAvataWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
`;

const InfoAvataImg = styled.img`
  max-height: 150px;
  @media (min-width: 769px) {
    max-height: 180px;
  }
  @media (min-width: 1025px) {
    max-height: 220px;
  }
`;

const Sub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2em 0 4em;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 769px) {
    align-items: flex-start;
    max-width: 768px;
  }
  @media (min-width: 1025px) {
    max-width: 968px;
  }
`;

const SubButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const SubButtonsItem = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0.5em 0;
  padding: 0.8em 1.6em;
  background-color: var(--color-background-button);
  color: var(--color-font-button);
  border-radius: 0.5em;
  font-size: 0.8em;
  transition: all 0.5s;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    transition: all 0.5s;
    background: var(--color-background-button-active);
    border-radius: 0.5em;
    z-index: -1;
  }
  &:hover:after {
    width: 100%;
    z-index: -1;
  }
`;

function Welcome() {
  return (
    <Container id="welcome">
      <Info>
        <InfoText>
          <InfoTextTop>Welcome, ASHarea</InfoTextTop>
          <InfoTextMiddle>I'm a full stack developer</InfoTextMiddle>
          <InfoTextBottom>
            안녕하세요. 웹 개발자 안수현의 포트폴리오 사이트입니다.
          </InfoTextBottom>
        </InfoText>
        <InfoAvata>
          <InfoAvataWrap>
            <InfoAvataImg src={ImgAvata} />
          </InfoAvataWrap>
        </InfoAvata>
      </Info>
      <Sub>
        <SubButtons>
          <SubButtonsItem
            href="https://facemadam.github.io/my-app/files/이력서_tngus6047.pdf"
            target="_blank"
          >
            이력서
          </SubButtonsItem>
        </SubButtons>
      </Sub>
    </Container>
  );
}

export default Welcome;
