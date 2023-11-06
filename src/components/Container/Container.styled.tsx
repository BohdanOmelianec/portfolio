import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

export const Main = styled.main`
  width: min(100%, 1440px);
  min-height: 100vh;
  margin-inline: auto;
  transition: transform .5s ease-out;
`;

export const Container = styled.div`
  width: min(100%, 1440px);
  height: 100%;
  padding: calc(1rem + var(--appBarHeight)) 1rem 1rem;
  margin-inline: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media(max-width: 768px) {
    gap: 2rem;
  }
`;