import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import React from "react";
// import * as yup from 'yup';

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

const UserDataItem = ({ user }) => {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [birtsday, setBirtsday] = useState(false);
  const [phone, setPhone] = useState(false);
  const [city, setCity] = useState(false);
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const [newData, setNewData] = useState(null);
  const [fieldValue, setFieldValue] = useState(user.birtsday ?? new Date());

  const dispatch = useDispatch();
  const confirmIcon = <SVG src={confirm} width={15} height={15} />;
  const editIcon = <SVG src={pencil} width={15} height={15} />;

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
    setNewData(value);
    defaulSeating();
  };
  useEffect(() => {
    if (newData) {
      dispatch(patchData(newData));
      console.log(newData);
    }
  }, [newData, dispatch]);

  const ExampleCustomInput = React.forwardRef(
    ({ value, onClick, onChange }, ref) => {
      // console.log(moment(fieldValue).format("DD.MM.YYYY"));
      return (
        <InfoInput
          onClick={onClick}
          onChange={
            () => {}
            // console.log(moment(fieldValue).format("DD.MM.YYYY"))
            // console.log(onChange)
            // console.log(value)
          }
          ref={ref}
          selected={value}
          defaultValue={value}
        ></InfoInput>
      );
    }
  );

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
            <Formik initialValues={{ email: user.email }} onSubmit={onSubmit}>
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <InfoInput
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    pattern="[/^([a-zA-Z0-9]{1}[\w-\.]{0,}[a-zA-Z0-9]{1})+@([\w-]+\.)+[\w-]{2,4}$/]"
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
        {birtsday ? (
          <>
            <Formik
              initialValues={{ birtsday: fieldValue }}
              onSubmit={onSubmit}
            >
              {({ values, errors, handleChange, handleSubmit }) => {
                return (
                  <FormBox onSubmit={handleSubmit}>
                    <DatePicker
                      selected={fieldValue}
                      value={values.birtsday}
                      type="date"
                      name="birtsday"
                      onChange={(e) => {
                        setFieldValue(e);
                        handleChange(fieldValue.toString());
                      }}
                      dateFormat="dd.MM.yyyy"
                      customInput={
                        <ExampleCustomInput onChange={handleChange} />
                      }
                      required
                    />
                    <EditBtn type="submit">{confirmIcon}</EditBtn>
                  </FormBox>
                );
              }}
            </Formik>
          </>
        ) : (
          <>
            <InfoHolder>
              {user.birtsday ?? moment(fieldValue).format("DD.MM.YYYY")}
            </InfoHolder>
            <EditBtn
              type="button"
              id="birtsday"
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
            <Formik initialValues={{ phone: user.phone }} onSubmit={onSubmit}>
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
