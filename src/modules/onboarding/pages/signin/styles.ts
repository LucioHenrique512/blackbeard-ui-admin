import styled from "styled-components";

export const PresentationContainer = styled.div`
  width: 40vw;
  height: 100vh;
  background: ${({ theme }) => theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PresentationContent = styled.div`
  width: 80%;
  margin-bottom: 2rem;
`;

export const AppSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondary};
  margin-top: 1rem;
`;

const FloatIconContainerSize = 5.5;

export const FloatIconContainer = styled.div`
  background: ${({ theme }) => theme.black};
  height: ${FloatIconContainerSize}rem;
  width: ${FloatIconContainerSize}rem;
  border-radius: ${FloatIconContainerSize / 1}rem;
  justify-content: center;
  align-items: center;
  display: flex;
  border: solid 0.5rem ${({ theme }) => theme.secondary};
  position: absolute;
`;

export const ContentContainer = styled.div`
  background: ${({ theme }) => theme.secondary};
  height: 100vh;
  width: 60vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.black};
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  @media (max-width: 880px) {
    flex-direction: column;
    ${PresentationContainer} {
      width: 100vw;
      height: 25vh;
    }
    ${FloatIconContainer} {
      bottom: ${-(FloatIconContainerSize / 1.65)}rem;
    }
    ${ContentContainer} {
      width: 100vw;
    }
  }
  @media (min-width: 880px) {
    ${FloatIconContainer} {
      right: ${-(FloatIconContainerSize / 1.65)}rem;
    }
  }
`;
