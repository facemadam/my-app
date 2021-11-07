import { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as SvgSun } from "../../assets/svg/sun.svg";
import { ReactComponent as SvgMoon } from "../../assets/svg/moon.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 60px;
  height: 25px;
  margin: 0 1.5rem;
  background-color: var(--color-background-toggle);
  border-radius: 1rem;
  cursor: pointer;
`;

const ToggleItem = styled.div`
  display: flex;
  align-items: center;
  > svg {
    width: 1rem;
    height: 1rem;
    fill: var(--color-font-button);
  }
`;

const Circle = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background-color: var(--color-background-section);
  border-radius: 50%;
  position: absolute;
  left: 12%;
  transition: left 0.5s, transform 0.5s;
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
  &.move {
    transform: translateX(148%);
  }
`;

function Theme() {
  const [mode, setMode] = useState(true);
  const ModeToggle = (e) => {
    setMode(!mode);
  };

  useEffect(() => {
    if (mode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [mode]);

  return (
    <Container onClick={ModeToggle}>
      <ToggleItem>
        <SvgSun />
      </ToggleItem>
      <ToggleItem>
        <SvgMoon />
      </ToggleItem>
      <Circle className={mode ? "" : "move"} />
    </Container>
  );
}

export default Theme;
