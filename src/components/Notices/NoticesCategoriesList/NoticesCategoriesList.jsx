import { useDispatch, useSelector } from "react-redux";
import SVG from "react-inlinesvg";
import { noticesSelector } from "redux/notices/notices-selector";
import { getNotices } from "redux/notices/notices-operations";
import { del, favoriteDefault, favorite } from "assets/icon";
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
  ButtonDelete,
  SvgDelete,
} from "./NoticesCategoriesList.styled";
import { useEffect } from "react";

const NoticesCategoriesList = () => {
  const dispatch = useDispatch();
  const items = useSelector(noticesSelector);
  console.log(items);

  function birthDateToAge(birthDate) {
    birthDate = new Date(birthDate);
    const now = new Date();
    const age = now.getFullYear() - birthDate.getFullYear();
    return now.setFullYear(1972) < birthDate.setFullYear(1972) ? age - 1 : age;
  }

  useEffect(() => {
    dispatch(getNotices());
  }, [dispatch]);

  return (
    <BoxList>
      {" "}
      {items.map((item) => (
        <Notice key={item._id}>
          <BoxImage>
            <Image src={item.avatarURL} alt={item.title} />
            <Category>{item.category}</Category>
            <ButtonFavorite>
              {/* <SVG
              src={favoriteDefault}
              width="28"
              height="28"
              title="favoriteDefault"
            /> */}
              <SVG src={favorite} width="28" height="28" title="favorite" />
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
            {/* <ButtonDelete type="submit">
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
