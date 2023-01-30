import {
  ButtonPrimaryMax,
  ButtonWithBorderMax,
} from "components/Button/Button";
import { Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registration } from "redux/auth/auth-operations";
import * as Yup from "yup";
import "yup-phone";
import {
  BoxLink,
  Container,
  FormBox,
  InputForm,
  StyledLink,
  TextError,
  TextLink,
  TitleForm,
} from "./AuthForm.styled";

const RegistrationSchema = Yup.object().shape({
  email: Yup.string().email().required("Enter email"),
  password: Yup.string()
    .matches()
    .min(7, "Password is too short, at least 7!")
    .max(32, "Password is too long, at maximum 32!")
    .required("Enter password"),
  confirm: Yup.string()
    .required("Enter password")
    .oneOf(
      [Yup.ref("password"), null],
      "Your passwords are different, try harder!"
    ),
  username: Yup.string()
    .min(2, "Too Short, at least 2!")
    .max(16, "Too Long, at maximum 16!")
    .required("Enter name"),
  location: Yup.string(),
  // .matches(/^w+,sw+$/, "Enter city, region"),
  phone: Yup.string()
    // .phone("IN", true, "Phone must be a valid phone number for region +38...")
    .required("Phone must be a valid phone number for region +38..."),
});

export const AuthForm = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const handelSubmit = async ({
    email,
    password,
    username,
    location,
    phone,
  }) => {
    console.log({
      email,
      password,
      username,
      location,
      phone,
    });
    const isRegister = await dispatch(
      registration({ email, password, name: username, city: location, phone })
    );
    if (!isRegister.error)
      //redirect ....
      console.log("isRegister", isRegister);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirm: "",
        username: "",
        location: "",
        phone: "",
      }}
      validationSchema={RegistrationSchema}
      onSubmit={handelSubmit}
    >
      {({ handleChange, values, errors, touched }) => (
        <Container>
          <TitleForm>registration</TitleForm>
          <FormBox>
            {page === 1 && (
              <>
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
                <InputForm
                  type="confirm"
                  name="confirm"
                  value={values.confirm}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
                {errors.confirm && touched.confirm ? (
                  <TextError>{errors.confirm}</TextError>
                ) : null}
                <ButtonPrimaryMax
                  type="button"
                  marginTop="24"
                  onClick={() => setPage(2)}
                  title="next"
                />
              </>
            )}
            {page === 2 && (
              <>
                <InputForm
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  placeholder="Name"
                />
                {errors.username && touched.username ? (
                  <TextError>{errors.username}</TextError>
                ) : null}
                <InputForm
                  type="text"
                  name="location"
                  value={values.location}
                  onChange={handleChange}
                  placeholder="City, region"
                />
                {errors.location && touched.location ? (
                  <TextError>{errors.location}</TextError>
                ) : null}
                <InputForm
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="Mobile phone"
                />
                {errors.phone && touched.phone ? (
                  <TextError>{errors.phone}</TextError>
                ) : null}
                <ButtonPrimaryMax
                  marginBottom={16}
                  marginTop="24"
                  type="submit"
                  title="register"
                />
                <ButtonWithBorderMax
                  type="button"
                  onClick={() => setPage(1)}
                  title="back"
                />
              </>
            )}
          </FormBox>
          <BoxLink>
            <TextLink>Already have an account?</TextLink>
            <StyledLink to="/login">login</StyledLink>
          </BoxLink>
        </Container>
      )}
    </Formik>
  );
};
