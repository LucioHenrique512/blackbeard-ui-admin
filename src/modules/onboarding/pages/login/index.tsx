import { Button, Link, TextField, Typography } from "@material-ui/core";
import { Logo } from "../../../../components";
import {
  Container,
  ContentContainer,
  Form,
  FormContainer,
  Header,
  LinksContainer,
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
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validateOnChange: false,
      validateOnBlur: true,
      validationSchema,
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
          <Typography style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>
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
              helperText={errors.email && touched.email ? errors.email : " "}
              error={!!errors.email && touched.email}
              variant="outlined"
              style={{ marginBottom: "1rem" }}
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
              helperText={
                errors.password && touched.password ? errors.password : " "
              }
              error={!!errors.password && touched.password}
              variant="outlined"
              style={{ marginBottom: "1rem" }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              color="primary"
            >
              Entrar
            </Button>
          </Form>
          <LinksContainer>
            <Link href="#">Esqueci minha senha</Link>
            <Link href="#">Não tenho uma conta</Link>
          </LinksContainer>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};
