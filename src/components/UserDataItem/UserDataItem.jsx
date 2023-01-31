import { Formik, Form } from "formik";
import { useState } from "react";
// import * as yup from "yup";
import "flatpickr/dist/themes/dark.css";
import Flatpickr from "react-flatpickr";

import {
  UserInfoStats,
  InfoLabel,
  InfoInput,
  InfoHolder,
  EditBtn,
} from "./UserDataItem.styled";

const UserDataItem = ({ user }) => {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [birtsday, setBirtsday] = useState(false);
  const [phone, setPhone] = useState(false);
  const [city, setCity] = useState(false);
  const [isActiveBtn, setIsActiveBtn] = useState(false);

  const btnClick = (e) => {
    const click = e.target.id;

    switch (click) {
      case "name":
        setName(true);
        setIsActiveBtn(true);
        break;
      case "email":
        setEmail(true);
        setIsActiveBtn(true);
        break;
      case "birtsday":
        setBirtsday(true);
        setIsActiveBtn(true);
        break;
      case "phone":
        setPhone(true);
        setIsActiveBtn(true);
        break;
      case "city":
        setCity(true);
        setIsActiveBtn(true);
        break;

      default:
        break;
    }
  };
  const defaulSeating = () => {
    setName(false);

    setEmail(false);
    setBirtsday(false);
    setPhone(false);
    setCity(false);
    setIsActiveBtn(false);
  };
  const onSubmit = (value) => {
    console.log(value);
    defaulSeating();
  };

  const CustomInput = ({ value, defaultValue, inputRef, ...props }) => {
    return <InfoInput {...props} defaultValue={defaultValue} ref={inputRef} />;
  };

  return (
    <ul>
      <UserInfoStats>
        <InfoLabel htmlFor="nameInput">Name:</InfoLabel>
        {name ? (
          <>
            <Formik initialValues={{ name: user.name }} onSubmit={onSubmit}>
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <InfoInput
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <EditBtn type="submit">?</EditBtn>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <>
            <InfoHolder>{user.name}</InfoHolder>
            <EditBtn
              type="button"
              id="name"
              disabled={isActiveBtn}
              onClick={btnClick}
            >
              +
            </EditBtn>
          </>
        )}
      </UserInfoStats>
      <UserInfoStats>
        <InfoLabel>Email:</InfoLabel>
        {email ? (
          <>
            <Formik initialValues={{ email: user.email }} onSubmit={onSubmit}>
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <InfoInput
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <EditBtn type="submit">?</EditBtn>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <>
            <InfoHolder>{user.email}</InfoHolder>
            <EditBtn
              type="button"
              id="email"
              disabled={isActiveBtn}
              onClick={btnClick}
            >
              +
            </EditBtn>
          </>
        )}
      </UserInfoStats>{" "}
      <UserInfoStats>
        <InfoLabel>Birthday: </InfoLabel>
        {birtsday ? (
          <>
            <Formik
              initialValues={{ birtsday: user.birtsday }}
              onSubmit={onSubmit}
            >
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <Flatpickr
                    render={({ defaultValue, value, ...props }, ref) => {
                      return (
                        <CustomInput
                          defaultValue={values.birtsday ?? "00.00.0000"}
                          inputRef={ref}
                          name="birtsday"
                          value={values.birtsday}
                          onChange={handleChange}
                          dateFormat="dd.MM.yyyy"
                        />
                      );
                    }}
                  />

                  <EditBtn type="submit">?</EditBtn>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <>
            <InfoHolder>{user.birtsday ?? "00.00.0000"}</InfoHolder>
            <EditBtn
              type="button"
              id="birtsday"
              disabled={isActiveBtn}
              onClick={btnClick}
            >
              +
            </EditBtn>
          </>
        )}
      </UserInfoStats>{" "}
      <UserInfoStats>
        <InfoLabel>Phone:</InfoLabel>
        {phone ? (
          <>
            <Formik initialValues={{ phone: user.phone }} onSubmit={onSubmit}>
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <InfoInput
                    name="phone"
                    type="phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                  <EditBtn type="submit">?</EditBtn>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <>
            <InfoHolder>{user.phone}</InfoHolder>
            <EditBtn
              type="button"
              id="phone"
              disabled={isActiveBtn}
              onClick={btnClick}
            >
              +
            </EditBtn>
          </>
        )}
      </UserInfoStats>
      <UserInfoStats>
        <InfoLabel>City:</InfoLabel>
        {city ? (
          <>
            <Formik initialValues={{ city: user.city }} onSubmit={onSubmit}>
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <InfoInput
                    name="city"
                    type="text"
                    value={values.city}
                    onChange={handleChange}
                  />
                  <EditBtn type="submit">?</EditBtn>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <>
            <InfoHolder>{user.city}</InfoHolder>
            <EditBtn
              type="button"
              id="city"
              disabled={isActiveBtn}
              onClick={btnClick}
            >
              +
            </EditBtn>
          </>
        )}
      </UserInfoStats>
    </ul>
  );
};
export default UserDataItem;

/* <Formik
              initialValues={{ birtsday: user.birtsday }}
              onSubmit={onSubmit}
            >
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <InfoInput
                    name="birtsday"
                    type="email"
                    value={values.birtsday}
                    onChange={handleChange}
                  />

                  <EditBtn type="submit">?</EditBtn>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <>
            <InfoHolder>{user.birtsday ?? "00.00.0000"}</InfoHolder>
            <EditBtn
              type="button"
              id="birtsday"
              disabled={isActiveBtn}
              onClick={btnClick}
            >
              +
            </EditBtn>
          </> */
