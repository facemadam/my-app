import styled from "styled-components";
import { ReactComponent as SvgEmail } from "../../assets/svg/email.svg";

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
  margin: 0;
  &:not(:nth-child(1)) {
    margin-top: 1em;
  }
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
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  @media (min-width: 769px) {
    flex-direction: row;
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
  @media (min-width: 769px) {
    flex-direction: row;
    align-items: center;
  }
`;

const BoxItemBodyTextTop = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  margin-right: 0.5em;
`;

const BoxItemBodyTextBottom = styled.small`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BoxItemBodyButton = styled.a.attrs({
  target: "_blank",
})`
  position: relative;
  margin-top: 1.5em;
  padding: 0.8em 3.6em;
  background-color: #ffeeee;
  color: #ff888a;
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
  @media (min-width: 769px) {
    margin-top: 0;
    padding: 0.8em 1.6em;
  }
`;

function Contact() {
  return (
    <Container id="contact">
      <Title>Contact</Title>
      <Box>
        <BoxItem>
          <BoxItemBody>
            <BoxItemBodyContent>
              <BoxItemBodyIcon>
                <SvgEmail />
              </BoxItemBodyIcon>
              <BoxItemBodyText>
                <BoxItemBodyTextTop>이메일</BoxItemBodyTextTop>
                <BoxItemBodyTextBottom>
                  tngus6047@gmail.com
                </BoxItemBodyTextBottom>
              </BoxItemBodyText>
            </BoxItemBodyContent>
          </BoxItemBody>
        </BoxItem>
      </Box>
    </Container>
  );
}

export default Contact;
