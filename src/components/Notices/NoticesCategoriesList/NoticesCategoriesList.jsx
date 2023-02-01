import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SVG from "react-inlinesvg";
import {
  noticesSelector,
  favoriteSelector,
} from "redux/notices/notices-selector";
import {
  getNoticesByCategories,
  addFavoriteNotice,
  deleteFavoriteNotice,
  // deleteNotice,
} from "redux/notices/notices-operations";
import {
  // del,
  favoriteDefault,
  favorite,
} from "assets/icon";
import {
  BoxList,
  Notice,
  BoxImage,
  Image,
  Category,
  ButtonFavorite,
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
} from "./NoticesCategoriesList.styled";

const NoticesCategoriesList = () => {
  const dispatch = useDispatch();
  const items = useSelector(noticesSelector);
  const fav = useSelector(favoriteSelector);
  console.log(fav);

  function birthDateToAge(birthDate) {
    birthDate = new Date(birthDate);
    const now = new Date();
    const age = now.getFullYear() - birthDate.getFullYear();
    return now.setFullYear(1972) < birthDate.setFullYear(1972) ? age - 1 : age;
  }

  const onToggle = (item) => {
    dispatch(addFavoriteNotice({ _id: item._id }));
    dispatch(deleteFavoriteNotice({ _id: item._id }));
  };

  // const onDeleteNotice = (item) => {
  //   dispatch(deleteNotice({ _id: item._id }));
  // };

  useEffect(() => {
    dispatch(getNoticesByCategories());
  }, [dispatch]);

  return (
    <BoxList>
      {" "}
      {items.map((item) => (
        <Notice key={item._id}>
          <BoxImage>
            <Image src={item.avatarURL} alt={item.title} />
            <Category>{item.category}</Category>
            <ButtonFavorite onClick={() => onToggle({ item })}>
              {fav ? (
                <SVG
                  src={favoriteDefault}
                  width="28"
                  height="28"
                  title="favorite default"
                />
              ) : (
                <SVG src={favorite} width="28" height="28" title="favorite" />
              )}
            </ButtonFavorite>
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
              Delete{" "}
              <SvgDelete src={del} width="20" height="20" title="delete" />
            </ButtonDelete> */}
          </DescriptionBox>
        </Notice>
      ))}
    </BoxList>
  );
};

export default NoticesCategoriesList;
