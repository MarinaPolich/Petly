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
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "redux/auth/auth-operations";
import { ButtonPrimaryMax } from "components/Button/Button";
import { getIsLoading } from "redux/auth/auth-selector";
import { Loader } from "components/Loader/Loader";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .min(10, "Email is too short, at least 10!")
    .matches(
      /^([a-zA-Z0-9]{1}[\w\-.]{0,}[a-zA-Z0-9]{1})+@([\w-]+.)+[\w]{2,4}$/,
      "Invalid email"
    )
    .max(63, "Email is too long, at maximum 63!")
    .required("Enter email"),
  password: Yup.string()
    .min(7, "Password is too short, at least 7!")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Invalid password, it must contain only letters and numbers!"
    )
    .max(32, "Password is too long, at maximum 32!")
    .required("Enter password"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const handelSubmit = async ({ email, password }) => {
    await dispatch(logIn({ email, password }));
  };

  return (
    <>
      {isLoading && <Loader />}
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
              <TextLink>Don't have an account? </TextLink>
              <StyledLink to="/register">register</StyledLink>
            </BoxLink>
          </Container>
        )}
      </Formik>
    </>
  );
};
