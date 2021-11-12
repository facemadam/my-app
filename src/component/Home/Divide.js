import styled from "styled-components";
import { ReactComponent as SvgDivider } from "../../assets/svg/divider.svg";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0;
  margin-top: -1px;
  &.rotate {
    margin-top: 0;
    margin-bottom: -1px;
    transform: rotate(180deg);
    > svg > path {
      fill: var(--color-background-section);
    }
  }
  > svg {
    position: relative;
    display: block;
    width: calc(150% + 1.3px);
    height: 120px;
    > path {
      fill: var(--color-background);
    }
  }
  @media (min-width: 769px) {
    > svg {
      height: 150px;
    }
  }
  @media (min-width: 1024px) {
    > svg {
      width: calc(150% + 1.3px);
      height: 250px;
    }
  }
`;

function Divide({ className }) {
  return (
    <Container className={className}>
      <SvgDivider />
    </Container>
  );
}

export default Divide;
