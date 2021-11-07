import styled from "styled-components";
import Welcome from "./Welcome";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project.js";
import Contact from "./Contact.js";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--color-font);
  background-color: var(--color-background);
`;

function Main() {
  return (
    <Container>
      <Welcome />
      <About />
      <Skills />
      <Project />
      <Contact />
    </Container>
  );
}

export default Main;
