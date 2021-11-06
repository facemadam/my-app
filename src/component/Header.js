import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SvgBars } from "../assets/svg/bars.svg";
import { ReactComponent as SvgTimes } from "../assets/svg/times.svg";

const Container = styled.header`
  position: fixed;
  width: 100%;
  color: var(--color-purple);
  background-color: var(--color-white);
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

const Bars = styled.label`
  cursor: pointer;
  > svg {
    width: 25px;
    height: 25px;
    fill: #6d599a;
  }
`;

const Times = styled.label`
  cursor: pointer;
  > svg {
    width: 25px;
    height: 25px;
    fill: #fff;
  }
`;

const Rnb = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  max-width: 0;
  background-color: var(--color-purple);
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
  color: #947eb4;
  font-size: 1.75em;
  font-weight: bold;
  &.active,
  &:hover {
    color: var(--color-white);
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
  transition: max-width 0.4s ease-out;
  z-index: 3;
  &.active {
    max-width: 100%;
  }
`;

function Header() {
  const [active, setActive] = useState(false);
  const handleOnClick = () => {
    setActive(!active);
  };

  return (
    <Container>
      <Gnb>
        <Logo>A.SHarea</Logo>
        <Bars onClick={handleOnClick}>
          <SvgBars />
        </Bars>
      </Gnb>
      <Rnb className={active ? "active" : ""}>
        <RnbHead>
          <Times onClick={handleOnClick}>
            <SvgTimes />
          </Times>
        </RnbHead>
        <RnbBody>
          <RnbItem href="#welcome" onClick={handleOnClick}>
            Welcome
          </RnbItem>
          <RnbItem href="#about" onClick={handleOnClick}>
            About
          </RnbItem>
          <RnbItem href="#skill" onClick={handleOnClick}>
            Skill
          </RnbItem>
          <RnbItem href="#project" onClick={handleOnClick}>
            Project
          </RnbItem>
          <RnbItem href="#contact" onClick={handleOnClick}>
            Contact
          </RnbItem>
        </RnbBody>
      </Rnb>
      <Overlay className={active ? "active" : ""} />
    </Container>
  );
}

export default Header;
