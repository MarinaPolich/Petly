import axios from "axios";
import Modal from "components/Modal/Modal";
import { useEffect, useState } from "react";
import {
  BoxImage,
  CancelBtn,
  Category,
  Comments,
  Image,
  List,
  ListItem,
  ModalFooter,
  NextBtn,
  Span,
  SpanComments,
  SpanData,
  Title,
  Wrapper,
} from "./ModalNotice.styled";

const ModalNotice = ({ activeModal, setActiveModal, idNotice }) => {
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
    >
      {dataNotice && user ? (
        <Wrapper>
          <BoxImage>
            <Image src={dataNotice.avatarUrl} alt="" />
            <Category>{dataNotice.category}</Category>
          </BoxImage>
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
              <Span>Lovation: </Span>
              {dataNotice.location}
            </ListItem>
            <ListItem>
              <Span>The sex: </Span>
              {dataNotice.sex}
            </ListItem>
            <ListItem>
              <Span>Email: </Span>
              <SpanData>{user.email}</SpanData>
            </ListItem>
            <ListItem>
              <Span>Phone: </Span>
              <SpanData>{user.phone}</SpanData>
            </ListItem>
            <ListItem>
              <Span>Price: </Span>
              <SpanData>{dataNotice.price}</SpanData>
            </ListItem>
          </List>

          <Comments>
            <SpanComments>Comments: </SpanComments>
            {dataNotice.comments}
          </Comments>

          <ModalFooter>
            <CancelBtn type="button">Add to</CancelBtn>
            <NextBtn type="button">Contact</NextBtn>
          </ModalFooter>
        </Wrapper>
      ) : null}
    </Modal>
  );
};
export default ModalNotice;
