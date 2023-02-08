import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SVG from "react-inlinesvg";
import { deleteNotice } from "redux/notices/notices-operations";

import { del, favoriteDefault, favorite } from "assets/icon";
import { getIsLoggedIn, getUser } from "redux/auth/auth-selector";

import {
  Notice,
  BoxImage,
  Image,
  Category,
  FavoriteLabel,
  FavoriteCheck,
  FavoriteBox,
  DescriptionBox,
  Title,
  List,
  ListItem,
  SpanBreed,
  SpanPlace,
  SpanAge,
  BtnBox,
  ButtonMore,
  ButtonDelete,
  SvgDelete,
} from "./NoticeCategoryItem.styled";
import { Notify } from "notiflix";
import ModalNotice from "components/ModalNotice/ModalNotice";
import {
  addFavoriteNotice,
  deleteFavoriteNotice,
} from "redux/auth/auth-operations";

export default function NoticeCategoryItem({
  item,
  onChangeFavorite = () => {},
}) {
  const dispatch = useDispatch();
  const isLogin = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const [isCheck, setIsCheck] = useState(user?.favorite?.includes(item._id));
  const [activeModal, setActiveModal] = useState(false);

  function birthDateToAge(dateString) {
    const today = new Date();
    const birthDate = new Date(
      dateString[6] + dateString[7] + dateString[8] + dateString[9],
      dateString[3] + dateString[4] - 1,
      dateString[0] + dateString[1]
    );
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const favoriteCheckbox = async ({ target: { checked } }) => {
    if (!isLogin) {
      Notify.failure("You need to login");
      return;
    }

    if (checked) {
      dispatch(addFavoriteNotice(item._id));
    } else {
      dispatch(deleteFavoriteNotice(item._id));
    }
    setIsCheck(checked);
    onChangeFavorite(checked);
  };

  const onClick = () => {
    setActiveModal(true);
  };

  return (
    <Notice>
      <BoxImage>
        <Image src={item.avatarUrl} alt={item.title} />
        {item.category === "in-good-hands" && (
          <Category>in good hands</Category>
        )}
        {item.category === "lost-found" && <Category>lost/found</Category>}
        {item.category === "sell" && <Category>sell</Category>}
        <FavoriteLabel>
          <FavoriteCheck
            type="checkbox"
            name="favorite-check"
            checked={isCheck}
            onChange={favoriteCheckbox}
          />
          <FavoriteBox>
            {!isCheck ? (
              <SVG src={favoriteDefault} width="28" height="28" />
            ) : (
              <SVG src={favorite} width="28" height="28" />
            )}
          </FavoriteBox>
        </FavoriteLabel>
      </BoxImage>
      <DescriptionBox>
        <Title>{item.title}</Title>
        <List>
          <ListItem>
            Breed: <SpanBreed>{item.breed}</SpanBreed>
          </ListItem>
          <ListItem>
            Place: <SpanPlace>{item.location}</SpanPlace>
          </ListItem>
          <ListItem>
            Age: <SpanAge>{birthDateToAge(item.birthday)} year</SpanAge>
          </ListItem>
        </List>
        <BtnBox>
          <ButtonMore type="submit" onClick={onClick}>
            Learn more
          </ButtonMore>
          {item.owner === user?._id && (
            <ButtonDelete
              type="submit"
              onClick={() => dispatch(deleteNotice(item._id))}
            >
              Delete
              <SvgDelete src={del} width="20" height="20" title="delete" />
            </ButtonDelete>
          )}
        </BtnBox>
      </DescriptionBox>
      <ModalNotice
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        idNotice={item._id}
        favoriteCheckbox={favoriteCheckbox}
        isCheck={isCheck}
      />
    </Notice>
  );
}
