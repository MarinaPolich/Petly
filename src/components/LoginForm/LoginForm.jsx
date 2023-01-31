import * as Yup from "yup";
import { Formik } from "formik";
import {
  BoxLink,
  Container,
  FormBox,
  InputForm,
  StyledLink,
  TextError,
  TextLink,
  TitleForm,
} from "components/RegisterForm/RegisterForm.styled";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/auth-operations";
import { ButtonPrimaryMax } from "components/Button/Button";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required("Enter email"),
  password: Yup.string()
    .matches()
    .min(7, "Password is too short, at least 7!")
    .max(32, "Password is too long, at maximum 32!")
    .required("Enter password"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handelSubmit = async ({ email, password }) => {
    await dispatch(logIn({ email, password }));
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={handelSubmit}
    >
      {({ handleChange, values, errors, touched }) => (
        <Container>
          <TitleForm>login</TitleForm>
          <FormBox>
            <InputForm
              type="email"
              name="email"
              autoComplete="username"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
            />
            {errors.email && touched.email ? (
              <TextError>{errors.email}</TextError>
            ) : null}
            <InputForm
              type="password"
              name="password"
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
            />
            {errors.password && touched.password ? (
              <TextError>{errors.password}</TextError>
            ) : null}
            <ButtonPrimaryMax type="submit" marginTop="24" title="login" />
          </FormBox>
          <BoxLink>
            <TextLink>Don't have an account?</TextLink>
            <StyledLink to="/register">register</StyledLink>
          </BoxLink>
        </Container>
      )}
    </Formik>
  );
};
