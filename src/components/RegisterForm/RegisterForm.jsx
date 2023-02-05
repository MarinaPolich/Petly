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
} from "./RegisterForm.styled";

import React from "react";
// import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const RegistrationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .matches(
      /^([a-zA-Z0-9]{1}[\w\-.]{0,}[a-zA-Z0-9]{1})+@([\w-]+.)+[\w]{2,4}$/,
      "Invalid email"
    )
    .min(10, "Email is too short, at least 10!")
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
  confirm: Yup.string()
    .required("Enter password")
    .oneOf(
      [Yup.ref("password"), null],
      "Your passwords are different, try harder!"
    ),
  name: Yup.string()
    .matches(/^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+$/, "Invalid name")
    .min(2, "Too Short, at least 2!")
    .max(16, "Too Long, at maximum 16!"),
  cityRegion: Yup.string().matches(
    /^([a-zA-Zа-яА-я]{1}[a-zA-Zа-яА-я\w-\s]{1,}[a-zа-я]{1})+,\s([a-zA-Zа-яА-я]{1}[a-zA-Zа-яА-я\w-\s]{1,}[a-zа-я]{1})$/,
    "Сity, region must be separated by commas"
  ),
  phone: Yup.string()
    .matches(/^\+380[0-9]{9}$/, "Phone number must be in the format +38...")
    .max(13, "Too Long, at maximum 13!"),
});

export const RegisterForm = () => {
  const [page, setPage] = useState(1);
  const [isRegistration, setIsRegistration] = useState(false);
  const [emailUser, setEmailUser] = useState("");

  const dispatch = useDispatch();
  const handelSubmit = async (
    { email, password, name, cityRegion, phone },
    { setErrors }
  ) => {
    const isRegister = await dispatch(
      registration({ email, password, name, cityRegion, phone })
    );
    if (isRegister.meta.requestStatus === "fulfilled") {
      setIsRegistration(true);
      setEmailUser(email);
    } else {
      const errors = isRegister.payload;
      if (errors) {
        if (errors.email || errors.password) setPage(1);
        setErrors(errors);
      }
    }
  };
  if (isRegistration) {
    return (
      <Container>
        <TitleForm>
          A verification link has been sent to your email{" "}
          <span>{emailUser}</span>
        </TitleForm>
      </Container>
    );
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirm: "",
        name: "",
        cityRegion: "",
        phone: "",
      }}
      validationSchema={RegistrationSchema}
      onSubmit={handelSubmit}
    >
      {({ handleChange, values, errors, touched, setFieldTouched }) => {
        return (
          <Container>
            <TitleForm>registration</TitleForm>
            {/* <GooglePlacesAutocomplete apiKey="" /> */}
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
                    className={errors.email && touched.email ? "error" : ""}
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
                    className={
                      errors.password && touched.password ? "error" : ""
                    }
                  />
                  {errors.password && touched.password ? (
                    <TextError>{errors.password}</TextError>
                  ) : null}
                  <InputForm
                    type="password"
                    name="confirm"
                    value={values.confirm}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className={errors.confirm && touched.confirm ? "error" : ""}
                  />
                  {errors.confirm && touched.confirm ? (
                    <TextError>{errors.confirm}</TextError>
                  ) : null}
                  <ButtonPrimaryMax
                    type="button"
                    marginTop="24"
                    onClick={async () => {
                      if (
                        !(touched.email && touched.password && touched.confirm)
                      ) {
                        setFieldTouched("email");
                        setFieldTouched("password");
                        setFieldTouched("confirm");
                        return;
                      }

                      if (errors.email || errors.password || errors.confirm)
                        return;
                      setPage(2);
                    }}
                    title="next"
                  />
                </>
              )}
              {page === 2 && (
                <>
                  <InputForm
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className={errors.name && touched.name ? "error" : ""}
                  />
                  {errors.name && touched.name ? (
                    <TextError>{errors.name}</TextError>
                  ) : null}
                  <InputForm
                    type="text"
                    name="cityRegion"
                    value={values.cityRegion}
                    onChange={handleChange}
                    placeholder="City, region"
                    className={
                      errors.cityRegion && touched.cityRegion ? "error" : ""
                    }
                  />
                  {errors.cityRegion && touched.cityRegion ? (
                    <TextError>{errors.cityRegion}</TextError>
                  ) : null}
                  <InputForm
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="Mobile phone"
                    className={errors.phone && touched.phone ? "error" : ""}
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
        );
      }}
    </Formik>
  );
};
