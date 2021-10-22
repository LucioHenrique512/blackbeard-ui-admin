import { Button, TextField, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import { useCallback } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import * as yup from "yup";
import { OnboardRoutes } from "../../../onboardRoutes";
import { isStrongPassword } from "../../../utils/password";

const validationSchema = yup.object().shape({
  fullName: yup.string().required("Favor informe o seu nome."),
  email: yup
    .string()
    .email("Favor insira um email válido")
    .required("Favor informe o email da sua conta."),
  phoneNumber: yup.string().min(11, "Favor informe um telefone válido."),
  password: yup
    .string()
    .required("Favor insira a senha")
    .test(
      "passwordForce",
      "A senha deve conter pelo menos 8 caracteres, uma letra e um número.",
      (value) => {
        return isStrongPassword(value);
      }
    ),
  passwordConfirmation: yup
    .string()
    .required("Favor confirme a sua senha.")
    .test("passwordMatch", "As senhas não coincidem.", (value, context) => {
      const { password } = context.parent;
      if (!!value && !!password) return password === value;
      else return false;
    }),
});

export const SignupForm: React.FC = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        passwordConfirmation: "",
      },
      validateOnChange: true,
      validateOnBlur: true,
      validationSchema,
      onSubmit: (value) => {
        //todo - send value as payload to authentication endpoint
        console.log(value);
      },
    });
  const hasErrors = useCallback(
    () => Object.keys(errors).length === 0,
    [errors]
  );
  const { push } = useHistory();

  return (
    <FormContainer>
      <Typography style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>
        Cadastro
      </Typography>
      <Form onSubmit={handleSubmit}>
        <TextField
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          name="fullName"
          label="Nome Completo"
          type="fullName"
          fullWidth
          helperText={
            errors.fullName && touched.fullName ? errors.fullName : " "
          }
          error={!!errors.fullName && touched.fullName}
          variant="outlined"
          style={{ marginBottom: "1rem" }}
        />

        <TextField
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          label="E-mail"
          type="email"
          fullWidth
          helperText={errors.email && touched.email ? errors.email : " "}
          error={!!errors.email && touched.email}
          variant="outlined"
          style={{ marginBottom: "1rem" }}
        />

        <TextField
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          name="phoneNumber"
          label="Telefone"
          type="text"
          fullWidth
          helperText={
            errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : " "
          }
          error={!!errors.phoneNumber && touched.phoneNumber}
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
          helperText={
            errors.password && touched.password ? errors.password : " "
          }
          error={!!errors.password && touched.password}
          variant="outlined"
          style={{ marginBottom: "1rem" }}
        />

        <TextField
          value={values.passwordConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          name="passwordConfirmation"
          label="Confirmação de senha"
          type="password"
          fullWidth
          helperText={
            errors.passwordConfirmation && touched.passwordConfirmation
              ? errors.passwordConfirmation
              : " "
          }
          error={!!errors.passwordConfirmation && touched.passwordConfirmation}
          variant="outlined"
          style={{ marginBottom: "1rem" }}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          color="primary"
          disabled={!hasErrors()}
        >
          Continuar
        </Button>
      </Form>
      <LinksContainer>
        <Link onClick={() => push(OnboardRoutes.SIGNIN)}>
          Já tenho uma conta
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
  font-size: 0.85rem;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  cursor: pointer;
`;
