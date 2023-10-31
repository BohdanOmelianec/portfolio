
import styled from "styled-components";
import CodeTitle from "components/ui/CodeTitle";
// import {
  
// } from "./About.styled";
import { Container } from "components/Container/Container.styled";


const AboutMe = () => {
  return (
    <Container as="section">
      <CodeTitle asElement="div" textContent="About Me" />
      
    </Container>
  );
};

export default AboutMe;