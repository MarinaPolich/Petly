import FriendsItem from "components/FriendsItem/FriendsItem";
import { FriendsContainer } from "components/FriendsItem/FriendsItem.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { friendsOperation } from "redux/friends/friends-operations";
import { selectFriends } from "redux/friends/friends-selector";

const OurFriends = () => {
  const dispatch = useDispatch();

  const friends = useSelector(selectFriends);

  useEffect(() => {
    dispatch(friendsOperation());
  }, [dispatch]);

  return (
    <FriendsContainer>
    <ul>
      {friends.map((item) => (
        <FriendsItem item={item} key={item._id} />
      ))}
    </ul>
    </FriendsContainer>
  );
};

export default OurFriends;
