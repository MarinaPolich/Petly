import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SVG from "react-inlinesvg";
import {
  addFavoriteNotice,
  deleteFavoriteNotice,
  deleteNotice,
} from "redux/notices/notices-operations";
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

export default function NoticeCategoryItem({ item }) {
  const [isCheck, setIsCheck] = useState(false);
  const dispatch = useDispatch();
  const isLogin = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    if (user?.favorite) {
      setIsFavorite(user?.favorite?.includes(item._id));
    }
  }, [dispatch, item._id, user?.favorite]);

  function birthDateToAge(birthDate) {
    birthDate = new Date(birthDate);
    const now = new Date();
    const age = now.getFullYear() - birthDate.getFullYear();
    return now.setFullYear(1972) < birthDate.setFullYear(1972) ? age - 1 : age;
  }
  const favoriteCheckbox = ({ target: { checked } }) => {
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
  };

  const onClick = () => {
    setActiveModal(true);
  };

  return (
    <Notice>
      <BoxImage>
        <Image src={item.avatarUrl} alt={item.title} />
        <Category>{item.category}</Category>
        <FavoriteLabel>
          <FavoriteCheck
            type="checkbox"
            name="favorite-check"
            checked={isCheck}
            onChange={favoriteCheckbox}
          />
          <FavoriteBox>
            {!isFavorite ? (
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
          <ButtonMore onClick={onClick} type="button">
            Learn more
          </ButtonMore>
          {item.category === "own" && (
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
      />
    </Notice>
  );
}
