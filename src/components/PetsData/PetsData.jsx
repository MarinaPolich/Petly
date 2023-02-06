import { useDispatch } from "react-redux";
import moment from "moment";
import { deletePet } from "redux/auth/auth-operations";
import SVG from "react-inlinesvg";
import { trash } from "assets/icon";
import {
  PetsCard,
  PetPhoto,
  DeleteBtn,
  PetsInfoItem,
  PetsInfoSpan,
  PetsList,
  OrEmptyTextHolder,
} from "./PetsData.styled";

const PetsData = ({ user }) => {
  const pets = user.pets;
  const dispatch = useDispatch();

  return pets && pets.length > 0 ? (
    <PetsList>
      {pets.map((pet) => {
        return (
          <PetsCard key={pet._id}>
            <PetPhoto src={pet.photoURL} alt={pet.name}></PetPhoto>
            <ul>
              <PetsInfoItem>
                <PetsInfoSpan>Name: </PetsInfoSpan>
                {pet.name}
              </PetsInfoItem>
              <PetsInfoItem>
                <PetsInfoSpan>Date of birth: </PetsInfoSpan>
                {moment(pet.dateOfBirth).format("DD.MM.YYYY")}
              </PetsInfoItem>
              <PetsInfoItem>
                <PetsInfoSpan>Breed: </PetsInfoSpan>
                {pet.breed}
              </PetsInfoItem>
              <PetsInfoItem>
                <PetsInfoSpan>Comments: </PetsInfoSpan>
                {pet.comments}
              </PetsInfoItem>
            </ul>
            <DeleteBtn
              type="button"
              onClick={() => {
                dispatch(deletePet(pet._id));
              }}
            >
              <SVG src={trash} width={22} height={22} />
            </DeleteBtn>
          </PetsCard>
        );
      })}
    </PetsList>
  ) : (
    <OrEmptyTextHolder>Add your first pet</OrEmptyTextHolder>
  );
};
export default PetsData;
