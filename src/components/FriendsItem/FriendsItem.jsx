import TimeTable from "components/TimeTable/TimeTable";
import React, { useState } from "react";
import {
  ImageBox,
  InfoWrapper,
  MainWrapper,
  StyledAddress,
  StyledEmail,
  StyledHeader,
  StyledImg,
  StyledLi,
  StyledPhone,
} from "./FriendsItem.styled";

export default function FriendsItem({ item }) {
  const [visible, setVisible] = useState(false);

  const onHoverAndFocus = () => {
    setVisible(true);
  };

  const outOfFocusAndHover = () => {
    setVisible(false);
  };

  return (
    <StyledLi>
      <StyledHeader>{item.title}</StyledHeader>
      <MainWrapper>
        <ImageBox>
          <StyledImg src={item._id === '63afa181d5fafaa0a7f2300c' ? "https://animals-city.org/wp-content/themes/animals-city/img/logo.svg" : item.imageUrl} alt="Company Logo" />
        </ImageBox>
        <InfoWrapper>
          {item.workDays?.length > 0 && (
            <p onMouseEnter={onHoverAndFocus} onMouseLeave={outOfFocusAndHover}>
              Time:<br/>8:00-19:00
            </p>
          )}
          {visible && <TimeTable workDays={item.workDays} />}
          <StyledAddress>Address:<br/>{item.address}</StyledAddress>
          { item.email && <StyledEmail>Email:<br/>{item.email}</StyledEmail>}
          {item.phone && <StyledPhone>Phone:<br/>{item.phone}</StyledPhone>}
        </InfoWrapper>
      </MainWrapper>
    </StyledLi>
  );
}
