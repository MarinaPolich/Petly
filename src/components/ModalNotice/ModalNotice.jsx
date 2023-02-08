import axios from "axios";
import Modal from "components/Modal/Modal";
import { useEffect, useState } from "react";
import {
  BoxImage,
  BoxList,
  CancelBtn,
  Category,
  Comments,
  Image,
  List,
  ListItem,
  ModalFooter,
  NextBtn,
  // SpanBirthday,
  // SpanBreed,
  SpanComments,
  // SpanEmail,
  // SpanName,
  // SpanPhone,
  // SpanPlace,
  // SpanPrice,
  // SpanTheSex,
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
          <BoxList>
            <List>
              <ListItem>Name:</ListItem>
              <ListItem>Birthday:</ListItem>
              <ListItem>Breed:</ListItem>
              <ListItem>Lovation:</ListItem>
              <ListItem>The sex:</ListItem>
              <ListItem>Email:</ListItem>
              <ListItem>Phone:</ListItem>
              <ListItem>Price:</ListItem>
            </List>
            <List>
              <ListItem>{dataNotice.name}</ListItem>
              <ListItem>{dataNotice.birthday}</ListItem>
              <ListItem>{dataNotice.breed}</ListItem>
              <ListItem>{dataNotice.location}</ListItem>
              <ListItem>{dataNotice.sex}</ListItem>
              <ListItem>{user.email}</ListItem>
              <ListItem>{user.phone}</ListItem>
              <ListItem>{dataNotice.price}</ListItem>
            </List>
          </BoxList>
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
