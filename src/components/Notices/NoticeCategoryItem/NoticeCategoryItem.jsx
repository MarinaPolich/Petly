import { useDispatch, useSelector } from "react-redux";
import SVG from "react-inlinesvg";
import { noticesSelector } from "redux/notices/notices-selector";
import {
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
} from "./NoticeCategoryItem.styled";

const NoticeCategoryItem = () => {
  const dispatch = useDispatch();
  const items = useSelector(noticesSelector);

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

  return (
    <>
      {items.map((item) => (
        <Notice key={item._id}>
          <BoxImage>
            <Image src={item.avatarURL} alt={item.title} />
            <Category>{item.category}</Category>
            <ButtonFavorite onClick={() => onToggle({ item })}>
              {/* {fav ? ( */}
              <SVG
                src={favoriteDefault}
                width="28"
                height="28"
                title="favorite default"
              />
              {/* ) : ( */}
              <SVG src={favorite} width="28" height="28" title="favorite" />
              {/* )} */}
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
    </>
  );
};

export default NoticeCategoryItem;
