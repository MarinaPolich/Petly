import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import React from "react";
import * as Yup from "yup";

import moment from "moment";
import SVG from "react-inlinesvg";
import { confirm, pencil } from "assets/icon";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  UserInfoStats,
  InfoLabel,
  InfoInput,
  InfoHolder,
  EditBtn,
  FormBox,
} from "./UserDataItem.styled";
import { useDispatch } from "react-redux";
import { patchData } from "redux/auth/auth-operations";

const NameValidation = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+$/, "Invalid name")
    .min(2, "Too Short, at least 2!")
    .max(16, "Too Long, at maximum 16!"),
});
const EmailValidation = Yup.object().shape({
  email: Yup.string()
    .email()
    .matches(
      /^([a-zA-Z0-9]{1}[\w\-.]{0,}[a-zA-Z0-9]{1})+@([\w-]+.)+[\w]{2,4}$/,
      "Invalid email"
    )
    .min(10, "Email is too short, at least 10!")
    .max(63, "Email is too long, at maximum 63!")
    .required("Enter email"),
});
const PhoneValidation = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\+380[0-9]{9}$/, "Phone number must be in the format +38...")
    .max(13, "Too Long, at maximum 13!"),
});
const CityValidation = Yup.object().shape({
  cityRegion: Yup.string().matches(
    /^([a-zA-Zа-яА-я]{1}[a-zA-Zа-яА-я\w-\s]{1,}[a-zа-я]{1})+,\s([a-zA-Zа-яА-я]{1}[a-zA-Zа-яА-я\w-\s]{1,}[a-zа-я]{1})$/,
    "Сity, region must be capitalized and separated by commas"
  ),
});
const confirmIcon = <SVG src={confirm} width={15} height={15} />;
const editIcon = <SVG src={pencil} width={15} height={15} />;

const UserDataItem = ({ user }) => {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [birthday, setbirthday] = useState(false);
  const [phone, setPhone] = useState(false);
  const [city, setCity] = useState(false);
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const [customInput, setCustomInput] = useState("");

  useEffect(() => {
    setCustomInput(user.birthday ? new Date(user.birthday) : new Date());
  }, [user.birthday]);

  const dispatch = useDispatch();

  const btnClick = (e) => {
    const click = e.currentTarget.id;

    switch (click) {
      case "name":
        setName(true);
        setIsActiveBtn(true);
        break;
      case "email":
        setEmail(true);
        setIsActiveBtn(true);
        break;
      case "birthday":
        setbirthday(true);
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
    setbirthday(false);
    setPhone(false);
    setCity(false);
    setIsActiveBtn(false);
  };
  const onSubmit = (value) => {
    dispatch(patchData(value));

    defaulSeating();
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    return (
      <InfoInput
        onClick={onClick}
        ref={ref}
        selected={value}
        defaultValue={value}
      ></InfoInput>
    );
  });

  return (
    <ul>
      <UserInfoStats>
        <InfoLabel htmlFor="nameInput">Name:</InfoLabel>
        {name ? (
          <>
            <Formik
              initialValues={{ name: user.name }}
              onSubmit={onSubmit}
              validationSchema={NameValidation}
            >
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <InfoInput
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <EditBtn type="submit">{confirmIcon}</EditBtn>
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
              {editIcon}
            </EditBtn>
          </>
        )}
      </UserInfoStats>
      <UserInfoStats>
        <InfoLabel>Email:</InfoLabel>
        {email ? (
          <>
            <Formik
              initialValues={{ email: user.email }}
              onSubmit={onSubmit}
              validationSchema={EmailValidation}
            >
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <InfoInput
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <EditBtn type="submit">{confirmIcon}</EditBtn>
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
              {editIcon}
            </EditBtn>
          </>
        )}
      </UserInfoStats>
      <UserInfoStats>
        <InfoLabel>Birthday:</InfoLabel>
        {birthday ? (
          <>
            <Formik
              initialValues={{ birthday: customInput }}
              onSubmit={onSubmit}
            >
              {({ handleSubmit, setFieldValue }) => {
                return (
                  <FormBox onSubmit={handleSubmit}>
                    <DatePicker
                      selected={customInput}
                      type="date"
                      name="birthday"
                      onChange={(date) => {
                        setCustomInput(date);
                        return setFieldValue("birthday", date);
                      }}
                      dateFormat="dd.MM.yyyy"
                      customInput={<CustomInput />}
                      showYearDropdown
                      dateFormatCalendar="MMMM"
                      yearDropdownItemNumber={100}
                      scrollableYearDropdown
                    />
                    <EditBtn type="submit">{confirmIcon}</EditBtn>
                  </FormBox>
                );
              }}
            </Formik>
          </>
        ) : (
          <>
            <InfoHolder>{moment(customInput).format("DD.MM.YYYY")}</InfoHolder>
            <EditBtn
              type="button"
              id="birthday"
              disabled={isActiveBtn}
              onClick={btnClick}
            >
              {editIcon}
            </EditBtn>
          </>
        )}
      </UserInfoStats>{" "}
      <UserInfoStats>
        <InfoLabel>Phone:</InfoLabel>
        {phone ? (
          <>
            <Formik
              initialValues={{ phone: user.phone }}
              onSubmit={onSubmit}
              validationSchema={PhoneValidation}
            >
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <InfoInput
                    name="phone"
                    type="phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                  <EditBtn type="submit">{confirmIcon}</EditBtn>
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
              {editIcon}
            </EditBtn>
          </>
        )}
      </UserInfoStats>
      <UserInfoStats>
        <InfoLabel>City:</InfoLabel>
        {city ? (
          <>
            <Formik
              initialValues={{ cityRegion: user.cityRegion }}
              onSubmit={onSubmit}
              validationSchema={CityValidation}
            >
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <InfoInput
                    name="cityRegion"
                    type="text"
                    value={values.cityRegion}
                    onChange={handleChange}
                  />
                  <EditBtn type="submit">{confirmIcon}</EditBtn>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <>
            <InfoHolder>{user.cityRegion}</InfoHolder>
            <EditBtn
              type="button"
              id="city"
              disabled={isActiveBtn}
              onClick={btnClick}
            >
              {editIcon}
            </EditBtn>
          </>
        )}
      </UserInfoStats>
    </ul>
  );
};
export default UserDataItem;
