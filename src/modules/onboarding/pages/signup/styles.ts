import styled from "styled-components";
import barbershopChair from "../../assets/barbershop_chair.png";

export const ContentContainer = styled.div`
  background: ${({ theme }) => theme.background};
  flex: 0.45;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PresentationContainer = styled.div`
  background: ${({ theme }) => theme.black};
  background-image: url(${barbershopChair});
  background-position: -200px;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 0.55;
  display: flex;
  position: relative;
  align-items: center;
  ::after {
    background: linear-gradient(to right, #00000090, #00000010);
    display: block;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
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
  left: ${-FloatIconContainerSize / 1.65}rem;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.background};

  @media (max-width: 1150px) {
    ${ContentContainer} {
      flex: 0.6;
    }
    ${PresentationContainer} {
      flex: 0.4;
    }
  }

  @media (max-width: 900px) {
    ${ContentContainer} {
      padding-top: 2rem;
      width: 100vw;
      flex: 1;
    }
    ${PresentationContainer} {
      display: none;
    }
  }
`;
