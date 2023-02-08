import FriendsItem from "components/FriendsItem/FriendsItem";
import { FriendsContainer } from "components/FriendsItem/FriendsItem.styled";
import TimeTable from "components/TimeTable/TimeTable";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { friendsOperation } from "redux/friends/friends-operations";
import { selectFriends } from "redux/friends/friends-selector";
import { FriendsWraper, Title } from "./OurFriends.styled";

const OurFriends = () => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState();
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
          <FriendsItem
            item={item}
            key={item._id}
            onShowTime={({ isShow, position }) => {
              setVisible(isShow);
              setSelected({ data: item.workDays, position });
            }}
          />
        ))}
      </FriendsWraper>
      {visible && (
        <TimeTable style={selected.position} workDays={selected.data} />
      )}
    </FriendsContainer>
  );
};

export default OurFriends;
