import { useState } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { ReactComponent as SvgTimes } from "../../assets/svg/times.svg";

const AnimateModal = keyframes`
  0% {
    top: -20px;
  }
  100% {
    top: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: var(--color-font);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
  animation-name: ${AnimateModal};
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  -webkit-animation-fill-mode: forwards;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  max-width: 968px;
  height: auto;
  background-color: #fff;
  padding: 2.5rem;
  margin: 2rem;
  border-radius: 1em;
  background-color: var(--color-background);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
`;

const ModalClose = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  outline: none;
  border: none;
  background: transparent;
  > svg {
    width: 1rem;
    height: auto;
    fill: var(--color-font);
    transition: all 0.3s;
    cursor: pointer;
  }
  > svg:hover {
    transform: scale(1.1);
  }
`;

const ModalContent = styled.div`
  width: 100%;
`;

function Modal({ show, close, children }) {
  return createPortal(
    <>
      {show ? (
        <Container>
          <ModalBox>
            <ModalClose>
              <SvgTimes onClick={close} />
            </ModalClose>
            <ModalContent>{children}</ModalContent>
          </ModalBox>
        </Container>
      ) : null}
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
