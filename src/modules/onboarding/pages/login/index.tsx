import { Button, TextField, Typography } from "@material-ui/core";
import { Logo } from "../../../../components";
import {
  Container,
  ContentContainer,
  Form,
  FormContainer,
  Header,
} from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Favor insira um email válido")
    .required("Favor informe o email da sua conta."),
  password: Yup.string()
    .required("Favor insira a senha")
    .min(4, "A senha deve conter no minimo 4 characteres."),
});

export const Login: React.FC = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <Container>
      <ContentContainer>
        <Header>
          <Logo size="xx-large" isWhite />
        </Header>
        <FormContainer>
          <Typography style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
            Login
          </Typography>
          <Form onSubmit={handleSubmit}>
            <TextField
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              label="E-mail"
              type="email"
              fullWidth
              size="small"
              helperText=" "
              variant="outlined"
            />
            <TextField
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              label="Senha"
              type="password"
              fullWidth
              size="small"
              helperText=" "
              variant="outlined"
            />

            <Button
              type="submit"
              variant="contained"
              size="small"
              color="primary"
            >
              Entrar
            </Button>
          </Form>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};
