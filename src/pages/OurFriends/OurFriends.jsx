import FriendsItem from "components/FriendsItem/FriendsItem";
import { FriendsContainer } from "components/FriendsItem/FriendsItem.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { friendsOperation } from "redux/friends/friends-operations";
import { selectFriends } from "redux/friends/friends-selector";
import { FriendsWraper, Title } from "./OurFriends.styled";

const OurFriends = () => {
  const dispatch = useDispatch();

  const friends = useSelector(selectFriends);

  useEffect(() => {
    dispatch(friendsOperation());
  }, [dispatch]);

  return (
    <FriendsContainer>
      <Title>Our friends</Title>
      <FriendsWraper>
        {friends.map((item) => (
          <FriendsItem item={item} key={item._id} />
        ))}
      </FriendsWraper>
    </FriendsContainer>
  );
};

export default OurFriends;
