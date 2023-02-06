import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SVG from "react-inlinesvg";
// import { getUser } from "redux/auth/auth-selector";
// import { noticesSelector } from "redux/notices/notices-selector";
import {
  addFavoriteNotice,
  deleteFavoriteNotice,
  // deleteNotice,
} from "redux/notices/notices-operations";
import { getIsLoggedIn } from "redux/auth/auth-selector";
import {
  // del,
  favoriteDefault,
  favorite,
} from "assets/icon";
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
  ButtonMore,
  // ButtonDelete,
  // SvgDelete,
} from "./NoticeCategoryItem.styled";

export default function NoticeCategoryItem({ item }) {
  const [isCheck, setIsCheck] = useState(false);
  const dispatch = useDispatch();
  // const user = useSelector(getUser);
  const isLogin = useSelector(getIsLoggedIn);

  function birthDateToAge(birthDate) {
    birthDate = new Date(birthDate);
    const now = new Date();
    const age = now.getFullYear() - birthDate.getFullYear();
    return now.setFullYear(1972) < birthDate.setFullYear(1972) ? age - 1 : age;
  }
  const favoriteCheckbox = ({ target: { checked } }) => {
    if (!isLogin) {
      console.log("Login false");
      return;
    }

    if (checked) {
      dispatch(addFavoriteNotice(item._id));
      // user.favorite.push();
    } else {
      dispatch(deleteFavoriteNotice(item._id));
      // user.favorite.unshift();
    }
    setIsCheck(checked);
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
        <ButtonMore type="submit">Learn more</ButtonMore>
        {/* <ButtonDelete type="submit" onClick={() => onDeleteNotice(item)}>
=======
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
        <ButtonMore type="submit">Learn more</ButtonMore>
        {/* <ButtonDelete type="submit" onClick={() => onDeleteNotice(item)}>
>>>>>>> Stashed changes
              Delete{" "}
              <SvgDelete src={del} width="20" height="20" title="delete" />
            </ButtonDelete> */}
      </DescriptionBox>
    </Notice>
  );
}
