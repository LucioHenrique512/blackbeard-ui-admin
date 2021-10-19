import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const ContentContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.white};
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.1);
  width: 400px;
  overflow: hidden;
  @media (max-width: 500px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0rem;
  }
`;

export const Header = styled.header`
  background: ${({ theme }) => theme.black};
  padding: ${({ theme }) => theme.paddingMd};
`;

export const FormContainer = styled.div`
  padding: ${({ theme }) => theme.paddingMd};
`;

export const Form = styled.form``;
