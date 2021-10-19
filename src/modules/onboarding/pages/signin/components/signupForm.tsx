import { Button, TextField, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import styled from "styled-components";
import * as yup from "yup";
import { OnboardRoutes } from "../../../onboardRoutes";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Favor insira um email válido")
    .required("Favor informe o email da sua conta."),
  password: yup
    .string()
    .required("Favor insira a senha")
    .min(4, "A senha deve conter no minimo 4 characteres."),
});

export const SigninForm: React.FC = () => {
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
  const { push } = useHistory();

  return (
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
        <Link>Esqueci minha senha</Link>
        <Link onClick={() => push(OnboardRoutes.SIGNUP)}>
          Não tenho uma conta
        </Link>
      </LinksContainer>
    </FormContainer>
  );
};

export const FormContainer = styled.div`
  padding: ${({ theme }) => theme.paddingMd};
  width: 400px;
`;

export const Form = styled.form``;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

export const Link = styled.a`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  cursor: pointer;
`;
