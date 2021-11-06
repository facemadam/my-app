import styled from "styled-components";
import { ReactComponent as SvgGithub } from "../assets/svg/github.svg";
import { ReactComponent as SvgFacebook } from "../assets/svg/facebook.svg";
import { ReactComponent as SvgInstagram } from "../assets/svg/instagram.svg";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--section-padding);
  color: var(--color-purple);
  background-color: var(--color-white-bright1);
`;

const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const IconItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50px;
  max-width: 50px;
  color: var(--color-purple);
  font-size: 0.75em;
  > svg {
    width: 30px;
    height: 30px;
    fill: var(--color-purple-bright1);
  }
  > svg:hover {
    fill: var(--color-purple);
  }
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  text-align: center;
`;

const CopyrightItem = styled.p`
  margin: 0;
  color: var(--color-purple-bright3);
  font-size: 0.75em;
`;

function Footer() {
  return (
    <Container>
      <Icons>
        <IconItem href="https://github.com/facemadam">
          <SvgGithub />
        </IconItem>
        <IconItem href="https://www.facebook.com/facemadam">
          <SvgFacebook />
        </IconItem>
        <IconItem href="https://www.instagram.com/suhyeon2005/">
          <SvgInstagram />
        </IconItem>
      </Icons>
      <Copyright>
        <CopyrightItem>@ 2021 SuHyun An.</CopyrightItem>
        <CopyrightItem>ALL RIGHTES RESERVED.</CopyrightItem>
      </Copyright>
    </Container>
  );
}

export default Footer;
