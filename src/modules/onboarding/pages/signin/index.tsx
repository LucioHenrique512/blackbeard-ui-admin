import { Logo } from "../../../../components";
import { SigninForm } from "./components/signinForm";
import {
  Container,
  ContentContainer,
  PresentationContainer,
  PresentationContent,
  AppSubtitle,
  FloatIconContainer,
} from "./styles";
import { GiBeard } from "react-icons/gi";
import { useTheme } from "styled-components";

export const Signin: React.FC = () => {
  const { secondary } = useTheme();

  return (
    <Container>
      <PresentationContainer>
        <FloatIconContainer>
          <GiBeard color={secondary} size={"2.0rem"} />
        </FloatIconContainer>
        <PresentationContent>
          <Logo size={"2.5rem"} isWhite />
          <AppSubtitle>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            possimus inventore debitis.
          </AppSubtitle>
        </PresentationContent>
      </PresentationContainer>
      <ContentContainer>
        <SigninForm />
      </ContentContainer>
    </Container>
  );
};
