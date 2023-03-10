import React from "react";
import {
  ImageBox,
  InfoWrapper,
  MainWrapper,
  StyledHeader,
  StyledImg,
  StyledLi,
  StyledNoText,
  StyledText,
} from "./FriendsItem.styled";

export default function FriendsItem({ item, onShowTime }) {
  const onHoverAndFocus = ({ target }) => {
    const positions = target.getBoundingClientRect();
    onShowTime({
      isShow: true,
      position: {
        top: positions.bottom + window.scrollY,
        left: positions.left + window.scrollX,
      },
    });
  };

  const outOfFocusAndHover = () => {
    onShowTime({ isShow: false });
  };
  return (
    <StyledLi>
      <StyledHeader>
        <a href={`${item.url}`} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      </StyledHeader>
      <MainWrapper>
        <ImageBox>
          <StyledImg
            src={
              item._id === "63d3f885a36bb03c27db886f"
                ? "https://animals-city.org/wp-content/themes/animals-city/img/logo.svg"
                : item.imageUrl
            }
            alt="Company Logo"
          />
        </ImageBox>
        <InfoWrapper>
          {item.workDays?.length > 0 ? (
            <StyledText
              onMouseEnter={onHoverAndFocus}
              onMouseLeave={outOfFocusAndHover}
            >
              Time:
              <br />
              <time>
                {
                  item.workDays
                    .map(({ isOpen, from, to }) => ({
                      isOpen,
                      time: `${from}-${to}`,
                    }))
                    .find((item) => item.isOpen === true)?.time
                }
              </time>
            </StyledText>
          ) : (
            <StyledNoText>
              Time:
              <br />
              <time>--------------</time>
            </StyledNoText>
          )}
          {item.address ? (
            <StyledText>
              Address:
              <br />
              <address>
                <a href={`${item.addressUrl}`} target="_blank" rel="noreferrer">
                  {item.address}
                </a>
              </address>
            </StyledText>
          ) : (
            <StyledNoText>
              Address:
              <br />
              <address>--------------</address>
            </StyledNoText>
          )}
          {item.email ? (
            <StyledText>
              Email:
              <br />
              <a href={`mailto:${item.email}`}>{item.email}</a>
            </StyledText>
          ) : (
            <StyledNoText>
              Email:
              <br />
              <a href={`mailto:""`}>--------------</a>
            </StyledNoText>
          )}
          {item.phone ? (
            <StyledText>
              Phone:
              <br />
              <a href={`tel:${item.phone}`}>{item.phone}</a>
            </StyledText>
          ) : (
            <StyledNoText>
              Phone:
              <br />
              <a href={`tel:""`}>--------------</a>
            </StyledNoText>
          )}
        </InfoWrapper>
      </MainWrapper>
    </StyledLi>
  );
}
