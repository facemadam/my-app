import styled from "styled-components";
import { ReactComponent as SvgPhp } from "../../assets/svg/php.svg";
import { ReactComponent as SvgCi } from "../../assets/svg/ci.svg";
import { ReactComponent as SvgMysql } from "../../assets/svg/mysql.svg";
import { ReactComponent as SvgMongo } from "../../assets/svg/mongo.svg";
import { ReactComponent as SvgGit } from "../../assets/svg/git.svg";
import { ReactComponent as SvgHtml } from "../../assets/svg/html.svg";
import { ReactComponent as SvgCss } from "../../assets/svg/css.svg";
import { ReactComponent as SvgJs } from "../../assets/svg/js.svg";
import { ReactComponent as SvgReact } from "../../assets/svg/react.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: var(--section-padding);
  background-color: var(--color-white-bright1);
`;

const Title = styled.h2``;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  padding: 2em;
  background-color: var(--color-white);
  border-radius: 1rem;
  box-shadow: 0 5px 10px rgb(0 0 0 / 5%);
  @media (min-width: 769px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 968px;
  }
`;

const Info = styled.div``;
const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1em;
`;

const BadgeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  max-width: 80px;
  margin: 1em 0;
  > svg {
    max-width: 80px;
    height: 35px;
    max-height: 35px;
  }
  @media (min-width: 769px) {
    width: 90px;
    max-width: 90px;
    > svg {
      max-width: 90px;
      height: 45px;
      max-height: 45px;
    }
  }
  @media (min-width: 1024px) {
    width: 110px;
    max-width: 110px;
    > svg {
      max-width: 110px;
      height: 55px;
      max-height: 55px;
    }
  }
`;

function Skills() {
  return (
    <Container id="skill">
      <Title>Skills</Title>
      <Box>
        <Info>
          저는 <b>Front-End</b>와 <b>Back-End</b>를 모두 활용한 <b>Web App</b>
          구현을 좋아하고, 주로 <b>LAMP</b> 환경에서 개발을 진행합니다.
        </Info>
        <Badges>
          <BadgeItem>
            <SvgPhp />
          </BadgeItem>
          <BadgeItem>
            <SvgCi />
          </BadgeItem>
          <BadgeItem>
            <SvgMysql />
          </BadgeItem>
          <BadgeItem>
            <SvgMongo />
          </BadgeItem>
          <BadgeItem>
            <SvgGit />
          </BadgeItem>
          <BadgeItem>
            <SvgHtml />
          </BadgeItem>
          <BadgeItem>
            <SvgCss />
          </BadgeItem>
          <BadgeItem>
            <SvgJs />
          </BadgeItem>
          <BadgeItem>
            <SvgReact />
          </BadgeItem>
        </Badges>
      </Box>
    </Container>
  );
}

export default Skills;
