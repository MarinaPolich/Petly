import axios from "axios";
import SVG from "react-inlinesvg";
import Modal from "components/Modal/Modal";
import { useEffect, useState } from "react";
import {
  BoxImage,
  BoxTabl,
  BoxTitle,
  FavoriteBox,
  Category,
  Comments,
  Image,
  List,
  ListItem,
  Span,
  SpanComments,
  SpanData,
  Title,
  Wrapper,
  FavoriteLabel,
  ContactLink,
  ModalFooter,
  FavoriteCheck,
  NextBtn,
  BoxMob,
  Link,
} from "./ModalNotice.styled";
import { favoriteDefault, favorite } from "assets/icon";

const ModalNotice = ({
  activeModal,
  setActiveModal,
  idNotice,
  favoriteCheckbox,
  isCheck,
}) => {
  const [modalActive, setModalActive] = useState(activeModal);
  const [dataNotice, setDataNotice] = useState(null);
  const [user, setDataUser] = useState(null);

  const getNotice = async (id) => {
    const notices = await axios
      .get(`https://pet-ly.onrender.com/api/notices/${id}`)
      .then((res) => res.data.data);
    setDataNotice(notices[0]);
  };

  const closeModal = () => {
    setActiveModal(false);
  };

  useEffect(() => {
    if (modalActive === true) getNotice(idNotice);
  }, [idNotice, modalActive]);

  useEffect(() => {
    if (!dataNotice) return;
    const id = dataNotice.owner;
    const fetch = async () => {
      const user = await axios
        .get(`https://pet-ly.onrender.com/api/user/info/${id}`)
        .then((res) => res.data.data.user);

      setDataUser(user);
    };
    fetch();
  }, [dataNotice]);

  useEffect(() => {
    setModalActive(activeModal);
    if (modalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalActive, activeModal]);
  return (
    <Modal
      active={activeModal}
      setActive={setActiveModal}
      setModalClose={closeModal}
      width={"width"}
    >
      {dataNotice && user ? (
        <Wrapper>
          <BoxMob>
            <BoxTabl>
              <BoxImage>
                <Image src={dataNotice.avatarUrl} alt="" />
                {dataNotice.category === "in-good-hands" && (
                  <Category>in good hands</Category>
                )}
                {dataNotice.category === "lost-found" && (
                  <Category>lost/found</Category>
                )}
                {dataNotice.category === "sell" && <Category>sell</Category>}
              </BoxImage>
              <BoxTitle>
                <Title>{dataNotice.title}</Title>
                <List>
                  <ListItem>
                    <Span>Name: </Span>
                    <SpanData>{dataNotice.name}</SpanData>
                  </ListItem>
                  <ListItem>
                    <Span>Birthday: </Span>
                    <SpanData>{dataNotice.birthday}</SpanData>
                  </ListItem>
                  <ListItem>
                    <Span>Breed: </Span>
                    <SpanData>{dataNotice.breed}</SpanData>
                  </ListItem>
                  <ListItem>
                    <Span>Location: </Span>
                    {dataNotice.location}
                  </ListItem>
                  <ListItem>
                    <Span>The sex: </Span>
                    {dataNotice.sex}
                  </ListItem>
                  <ListItem>
                    <Span>Email: </Span>
                    <SpanData>
                      <Link href={`mailto:${user.email}`}>{user.email}</Link>
                    </SpanData>
                  </ListItem>
                  {user.phone ? (
                    <ListItem>
                      <Span>Phone: </Span>
                      <SpanData>
                        <Link href={`tel:${user.phone}`}>{user.phone}</Link>
                      </SpanData>
                    </ListItem>
                  ) : null}
                  {dataNotice.price ? (
                    <ListItem>
                      <Span>Price: </Span>
                      <SpanData>{dataNotice.price}</SpanData>
                    </ListItem>
                  ) : null}
                </List>
              </BoxTitle>
            </BoxTabl>

            <Comments>
              <SpanComments>Comments: </SpanComments>
              {dataNotice.comments}
            </Comments>
          </BoxMob>

          <ModalFooter>
            <FavoriteLabel>
              <FavoriteCheck
                type="checkbox"
                name="favorite-check"
                checked={isCheck}
                onChange={favoriteCheckbox}
              />
              <FavoriteBox>
                Add to
                {!isCheck ? (
                  <SVG src={favoriteDefault} width="28" height="28" />
                ) : (
                  <SVG src={favorite} width="28" height="28" />
                )}
              </FavoriteBox>
            </FavoriteLabel>
            <NextBtn type="button">
              {user.phone ? (
                <ContactLink href={`tel:${user.phone}`}>Contact</ContactLink>
              ) : (
                <ContactLink href={`mailto:${user.email}`}>Contact</ContactLink>
              )}
            </NextBtn>
          </ModalFooter>
        </Wrapper>
      ) : null}
    </Modal>
  );
};
export default ModalNotice;
