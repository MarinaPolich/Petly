import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/auth-selector";
import { List, ListItem, StyledLink } from "./NoticesCategoriesNav.styled";

const NoticesCategoriesNav = ({ onClick = () => {} }) => {
  const isLogin = useSelector(getIsLoggedIn);

  return (
    <List>
      <ListItem>
        <StyledLink to="/notices/lost-found" onClick={onClick}>
          lost/found
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/notices/for-free" onClick={onClick}>
          in good hands
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/notices/sell" onClick={onClick}>
          sell
        </StyledLink>
      </ListItem>
      {isLogin && (
        <>
          <ListItem>
            <StyledLink to="/notices/favorite" onClick={onClick}>
              favorite ads
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/notices/own" onClick={onClick}>
              my ads
            </StyledLink>
          </ListItem>
        </>
      )}
    </List>
  );
};

export default NoticesCategoriesNav;
