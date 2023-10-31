
import styled from "styled-components";
import CodeTitle from "components/ui/CodeTitle";
// import {
  
// } from "./SkillSet.styled";
import { Container } from "components/Container/Container.styled";

const Tools = [
  {
    title: "HTML",
    src: "/images/tools/html.png",
  },
  {
    title: "CSS",
    src: "/images/tools/css.png",
  },
  {
    title: "JavaScript",
    src: "/images/tools/js.png",
  },
  {
    title: "TypeScript",
    src: "/images/tools/ts.png",
  },
  {
    title: "React",
    src: "/images/tools/react.png",
  },
  {
    title: "NextJS",
    src: "/images/tools/nextjs.png",
  },
  {
    title: "Git",
    src: "/images/tools/git.png",
  },
  {
    title: "MaterialUI",
    src: "/images/tools/materialui.png",
  },
  {
    title: "VS Code",
    src: "/images/tools/vscode.png",
  },
  {
    title: "Figma",
    src: "/images/tools/figma.png",
  },
  {
    title: "Jira",
    src: "/images/tools/jira.png",
  },
];

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-content: center;
  align-items: center;
  // justify-items: center;
  gap: 32px;
`;

const ListItem = styled.li`
  width: 100%;
  aspect-ratio: 1/1;
  padding: 16px;
  background: var(--darkStaleBlueTr);
  border-radius: 30px;
  transition: all .8s; 
  box-shadow:       0 0 20px -10px var(--accentBlue);

  &:hover {
    box-shadow:
      0 0 40px -15px var(--accentBlue),
      0 0 50px -25px var(--accentPink);
    // border-radius: 50px;
`;

const ListTitle = styled.h3`
  width: max-content;
  margin-inline: auto;
  font-size: calc(var(--index));
  font-weight: 400;
  white-space: nowrap;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  padding: 16px;
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;


const SkillSet = () => {
  return (
    <Container as="section">
      <CodeTitle textContent="Skill Set" />
      <List>
        {Tools.map(tool => (
          <ListItem>
            <ListTitle>{tool.title}</ListTitle>
            <ImageContainer>
              <Image src={tool.src} alt={tool.title} />
            </ImageContainer>
          </ListItem>
        ))}

      </List>
    </Container>
  );
};

export default SkillSet;