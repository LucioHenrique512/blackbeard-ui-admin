import {
  Container,
  ContentContainer,
  FloatIconContainer,
  PresentationContainer,
} from "./styles";
import { useTheme } from "styled-components";
import { GiBeard } from "react-icons/gi";
import { SignupForm } from "./components/signupForm";

export const Signup: React.FC = () => {
  const { secondary } = useTheme();
  return (
    <Container>
      <ContentContainer>
        <SignupForm/>
      </ContentContainer>
      <PresentationContainer>
        <FloatIconContainer>
          <GiBeard color={secondary} size={"2.0rem"} />
        </FloatIconContainer>
      </PresentationContainer>
    </Container>
  );
};
