import styled from "styled-components";

const Container = styled.div`
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

function Overlay({ className }) {
  return <Container className={className} />;
}

export default Overlay;
