import { Loader } from "components/Loader/Loader";
import { ContainerReg } from "pages/Registration/Registration.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { verificationToken } from "redux/auth/auth-operations";
import { getError, getIsLoading } from "redux/auth/auth-selector";
import { StyledLink, Title, TitleError } from "./VerificationEmail.styled";

const VerificationEmail = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const { token } = useParams();

  useEffect(() => {
    dispatch(verificationToken(token));
  }, [dispatch, token]);

  return (
    <ContainerReg>
      {(() => {
        if (isLoading) return <Loader />;
        console.log("error", error);
        if (error) return <TitleError>Something went wrong</TitleError>;
        return (
          <Title>
            Thank you for confirming your email, you can
            <StyledLink to="/login">login</StyledLink>
          </Title>
        );
      })()}
    </ContainerReg>
  );
};
export default VerificationEmail;
