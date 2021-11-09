import { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as SvgTop } from "../../assets/svg/top.svg";

const Container = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s;
  z-index: 3;
  &.visible {
      opacity: 1;
  }
  > svg {
    width: 2.2rem;
    height: 2.2rem;
    fill: var(--color-font);
    opacity: 0.8;
  }
  &:hover > svg {
    opacity: 1;
  }
}`;

function Top() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 800 ? true : false);
  };
  const moveScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <Container className={visible ? "visible" : "none"}>
      <SvgTop onClick={moveScrollTop} />
    </Container>
  );
}

export default Top;
