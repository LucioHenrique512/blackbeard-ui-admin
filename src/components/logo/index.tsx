import styled from "styled-components";

interface LogoProps {
  size?: "small" | "medium" | "large" | "x-large" | "xx-large";
  isWhite?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = "xx-large", isWhite }) => {
  return (
    <Container size={size} isWhite={isWhite}>
      Black<span>beard</span>
    </Container>
  );
};

const Container = styled.h1<LogoProps>`
  font-family: "Inter", sans-serif;
  font-size: ${({ size }) => size};
  color: ${({ theme, isWhite }) => (isWhite ? theme.white : theme.black)};
  span {
    font-weight: 400;
  }
`;