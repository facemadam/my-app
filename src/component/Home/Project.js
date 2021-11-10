import { useState } from "react";
import Modal from "../Common/Modal";
import styled from "styled-components";
import ImgPortfolio from "../../assets/images/portfolio.png";
import { ReactComponent as SvgDiagram } from "../../assets/svg/diagram.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: var(--section-padding);
  background-color: var(--color-background-section);
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
  background-color: var(--color-background-item);
  border-radius: 1rem;
  box-shadow: 0 5px 10px rgb(0 0 0 / 5%);
  @media (min-width: 769px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 968px;
  }
`;

const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const BoxItemHead = styled.div`
  display: flex;
  justify-content: center;
  > img {
    max-height: 150px;
  }
  @media (min-width: 769px) {
    align-items: flex-start;
    margin-right: 1em;
  }
  @media (min-width: 1024px) {
    margin-right: 2em;
  }
`;

const BoxItemBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1em;
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
  }
`;

const BoxItemBodyContent = styled.div`
  display: flex;
  align-items: baseline;
`;

const BoxItemBodyIcon = styled.div`
  margin-right: 0.8em;
  > svg {
    height: 12px;
    max-height: 12px;
  }
  @media (min-width: 769px) {
    > svg {
      height: 14px;
      max-height: 14px;
    }
  }
  @media (min-width: 1024px) {
    height: 16px;
    max-height: 16px;
  }
`;

const BoxItemBodyText = styled.div`
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
`;

const BoxItemBodyTextTop = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  margin: 0;
`;

const BoxItemBodyTextBottom = styled.small`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BoxItemBodyButton = styled.a`
  position: relative;
  margin-top: 1.5em;
  padding: 0.8em 3.6em;
  background-color: var(--color-background-button);
  color: var(--color-font-button);
  border-radius: 0.5em;
  font-size: 0.8em;
  transition: all 0.5s;
  cursor: pointer;
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
  @media (min-width: 769px) {
    margin-top: 0;
    padding: 0.8em 1.6em;
  }
`;

const ModalBoxItemHead = styled(BoxItemHead)`
  display: flex;
  justify-content: center;
  margin: 0;
  > img {
    min-width: 320px;
    max-height: 768px;
  }
`;

const ModalBoxItemBodyText = styled(BoxItemBodyText)`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

const ModalBoxItemBodyTextTop = styled(BoxItemBodyTextTop)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  margin-top: 1.5em;
`;

const ModalBoxItemBodyTextBottom = styled(BoxItemBodyTextBottom)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.8em;
`;

function Project() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <Container id="project">
      <Title>Project</Title>
      <Box>
        <BoxItem>
          <BoxItemHead>
            <img src={ImgPortfolio} alt="Portfolio" />
          </BoxItemHead>
          <BoxItemBody>
            <BoxItemBodyContent>
              <BoxItemBodyIcon>
                <SvgDiagram />
              </BoxItemBodyIcon>
              <BoxItemBodyText>
                <BoxItemBodyTextTop>포트폴리오</BoxItemBodyTextTop>
                <BoxItemBodyTextBottom>
                  React.js 기반 반응형 웹사이트
                </BoxItemBodyTextBottom>
              </BoxItemBodyText>
            </BoxItemBodyContent>
            <BoxItemBodyButton onClick={toggleModal}>Detail</BoxItemBodyButton>
          </BoxItemBody>
        </BoxItem>
      </Box>
      <Modal show={modal} close={toggleModal}>
        <ModalBoxItemHead>
          <img src={ImgPortfolio} alt="Portfolio" />
        </ModalBoxItemHead>
        <ModalBoxItemBodyText>
          <ModalBoxItemBodyTextTop>포트폴리오</ModalBoxItemBodyTextTop>
          <ModalBoxItemBodyTextBottom>
            <font color="#fccf56">#</font> React 기반 반응형 웹사이트
          </ModalBoxItemBodyTextBottom>
          <ModalBoxItemBodyTextBottom>
            <font color="#fccf56">#</font> React 컴포넌트 디자인 구성
          </ModalBoxItemBodyTextBottom>
          <ModalBoxItemBodyTextBottom>
            <font color="#fccf56">#</font> Styled-Component 활용 CSS-in-JS 구성
          </ModalBoxItemBodyTextBottom>
          <ModalBoxItemBodyTextBottom>
            <font color="#fccf56">#</font> React Portals 활용 Modal 구현
          </ModalBoxItemBodyTextBottom>
        </ModalBoxItemBodyText>
      </Modal>
    </Container>
  );
}

export default Project;
