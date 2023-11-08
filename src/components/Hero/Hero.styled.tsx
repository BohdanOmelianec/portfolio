import styled, { keyframes } from "styled-components";
import { Button } from "components/ui/Button";
import { Section } from "components/Container/Container.styled";

export const SectionStyled = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  gap: 3rem;

  @media(max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export const DivWrapper = styled.div`
  width: min-content;
  min-width: 500px;

  & h2,
  & h3 {
    font-size: 3rem;
    white-space: nowrap;
  }

  @media(max-width: 768px) {
    min-width: 400px;

    & h2,
    & h3 {
      font-size: 2rem;
    }
  }
`;

export const HeroTitle = styled.h2`
  background: var(--gradient);
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
`;

const heroContentSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(60%);
  }
`;

export const DivText = styled.div`
  background: var(--glacier);
  backdrop-filter: blur(5px);
  border-radius: 1.25rem;
  font-size: 1.125rem;
  line-height: 1.5rem;
  padding: 1.5rem;
  margin-top: 3rem;
  will-change: transform;
  animation: ${heroContentSlide} 1.2s ease-out;

  @media(max-width: 900px) {
    margin-top: 1.5rem;
  }
`;


export const ButtonWrapper = styled.div`
  width: min-content;
  background: var(--gradient);
  padding: 2px;
  border-radius: 11px;
  margin-top: 2rem;
`;

export const DownloadButton = styled(Button)`
  display: block;
  width: 150px;
  background-color: var(--darkGray);
  color: var(--textColor);
  text-align: center;
  transition: all .5s ease-out;

  &:hover {
    background-color: transparent;
    color: var(--darkGray);
  }
`;

const showImage = keyframes`
  from {
    opacity: 0;
    transform:  scale(.8);
  }
`;

const floatingShape = keyframes`
  0%,100%{
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate3d(0,0,0) rotateZ(0.01deg);
  }
  34%{
    border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
    transform: translate3d(0,6px,0) rotateZ(0.01deg);
  }
  50%{
    transform: translate3d(0,0,0) rotateZ(0.1deg);
  }
  67%{
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60% ;
    transform: translate3d(0,-3px,0) rotateZ(0.01deg);
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 500px;

  animation: ${floatingShape} 8s -4s linear infinite, ${showImage} 1s linear;
  box-shadow: 0 0 75px -25px var(--accentBlueTr);
  
  @media(max-width: 900px) {
    width: min-content;
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: border-radius, transform;
  animation: ${floatingShape} 8s linear infinite;
`;