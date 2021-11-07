import { useState } from "react";
import styled from "styled-components";
import Theme from "./Home/Theme";
import { ReactComponent as SvgBars } from "../assets/svg/bars.svg";
import { ReactComponent as SvgTimes } from "../assets/svg/times.svg";

const Container = styled.header`
  position: fixed;
  width: 100%;
  color: var(--color-font);
  background-color: var(--color-background);
  z-index: 2;
`;

const Gnb = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: var(--min-width);
  padding: 0.5em 1rem;
  @media (min-width: 769px) {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Logo = styled.a`
  font-weight: bold;
`;

const Bars = styled.div`
  display: flex;
  > svg {
    width: 25px;
    height: 25px;
    fill: var(--color-font);
    cursor: pointer;
  }
`;

const Times = styled.label`
  cursor: pointer;
  > svg {
    width: 25px;
    height: 25px;
    fill: var(--color-background);
  }
`;

const Rnb = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  max-width: 0;
  background-color: var(--color-font);
  transition: max-width 0.4s ease-out;
  z-index: 4;
  &.active {
    max-width: 100%;
  }
`;

const RnbHead = styled.div`
  display: flex;
  padding: 2em 20rem 2em 3rem;
`;

const RnbBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 20rem 1em 3rem;
`;

const RnbItem = styled.a`
  position: relative;
  margin: 0.5em 0;
  text-align: left;
  color: var(--color-background);
  font-size: 1.75em;
  font-weight: bold;
  opacity: 0.4;
  &.active,
  &:hover {
    opacity: 1;
    transition: all 0.4s;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  max-width: 0;
  background-color: #dbdbdb;
  opacity: 0.5;
  z-index: 3;
  &.active {
    max-width: 100%;
  }
`;

function Header() {
  const [isRnb, setIsRnb] = useState(false);
  const [isRnbItem, setIsRnbItem] = useState(false);
  const toggleRnb = () => {
    setIsRnb(!isRnb);
    if (!isRnbItem) setIsRnbItem("#welcome");
  };
  const toggleRnbItem = (e) => {
    setIsRnb(!isRnb);
    setIsRnbItem(e.target.getAttribute("href"));
  };

  return (
    <Container>
      <Gnb>
        <Logo>A.SHarea</Logo>
        <Bars>
          <Theme />
          <SvgBars onClick={toggleRnb} />
        </Bars>
      </Gnb>
      <Rnb className={isRnb ? "active" : ""}>
        <RnbHead>
          <Times>
            <SvgTimes onClick={toggleRnb} />
          </Times>
        </RnbHead>
        <RnbBody>
          <RnbItem
            href="#welcome"
            onClick={toggleRnbItem}
            className={isRnbItem == "#welcome" ? "active" : ""}
          >
            Welcome
          </RnbItem>
          <RnbItem
            href="#about"
            onClick={toggleRnbItem}
            className={isRnbItem == "#about" ? "active" : ""}
          >
            About
          </RnbItem>
          <RnbItem
            href="#skill"
            onClick={toggleRnbItem}
            className={isRnbItem == "#skill" ? "active" : ""}
          >
            Skill
          </RnbItem>
          <RnbItem
            href="#project"
            onClick={toggleRnbItem}
            className={isRnbItem == "#project" ? "active" : ""}
          >
            Project
          </RnbItem>
          <RnbItem
            href="#contact"
            onClick={toggleRnbItem}
            className={isRnbItem == "#contact" ? "active" : ""}
          >
            Contact
          </RnbItem>
        </RnbBody>
      </Rnb>
      <Overlay className={isRnb ? "active" : ""} />
    </Container>
  );
}

export default Header;
