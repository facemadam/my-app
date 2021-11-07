import styled from "styled-components";
import { ReactComponent as SvgDivider } from "../../assets/svg/divider.svg";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0;
  background-color: var(--color-background);

  ${(props) =>
    !props.id &&
    `
  transform: rotate(180deg);
  background-color: var(--color-background-section);
  `}
  > svg {
    position: relative;
    display: block;
    width: calc(150% + 1.3px);
    height: 95px;
    fill: var(--color-font);
  }
  @media (min-width: 769px) {
    > svg {
      height: 140px;
    }
  }
  @media (min-width: 1024px) {
    > svg {
      height: 190px;
    }
  }
`;

function Divide(props) {
  return (
    <Container id={props.id ? props.id : ""}>
      <SvgDivider />
    </Container>
  );
}

export default Divide;
