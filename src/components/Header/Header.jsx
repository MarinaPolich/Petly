import SVG from "react-inlinesvg";
import { Mobile } from "components/Container/Mobile";
import { burger, close, petly, petly_m } from "assets/icon";
import { Tablet } from "components/Container/Tablet";
import { ButtonBox, ButtonNav, HeaderBox, NavMobBox } from "./Header.styled";
import { Desktop } from "components/Container/Desktop";
import { Navigation } from "components/Navigation/Navigation";
import { useState } from "react";
import { AuthorizationBlock } from "components/AuthorizationBlock/AuthorizationBlock";
import { MobileMenu } from "components/MobileMenu/MobileMenu";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderBox>
      <Mobile>
        <SVG src={petly_m} width={82} height={42} title="logo" />
        <ButtonNav type="button" onClick={() => setOpenMenu(!openMenu)}>
          {!openMenu ? (
            <SVG src={burger} width={40} height={40} title="menu" />
          ) : (
            <SVG src={close} width={40} height={40} title="menu" />
          )}
        </ButtonNav>
        {openMenu && (
          <MobileMenu>
            <NavMobBox>
              <AuthorizationBlock onClick={() => setOpenMenu(false)} />
              <Navigation onClick={() => setOpenMenu(false)} />
            </NavMobBox>
          </MobileMenu>
        )}
      </Mobile>

      <Tablet>
        <SVG src={petly} width={94} height={48} title="logo" />
        <ButtonBox>
          {!openMenu && (
            <AuthorizationBlock onClick={() => setOpenMenu(false)} />
          )}
          <ButtonNav type="button" onClick={() => setOpenMenu(!openMenu)}>
            {!openMenu ? (
              <SVG src={burger} width={40} height={40} title="menu" />
            ) : (
              <SVG src={close} width={40} height={40} title="menu" />
            )}
          </ButtonNav>
          {openMenu && (
            <MobileMenu>
              <NavMobBox>
                <Navigation onClick={() => setOpenMenu(false)} />
              </NavMobBox>
            </MobileMenu>
          )}
        </ButtonBox>
      </Tablet>

      <Desktop>
        <ButtonBox>
          <SVG src={petly} width={94} height={48} title="logo" />
          <Navigation />
        </ButtonBox>
        <AuthorizationBlock />
      </Desktop>
    </HeaderBox>
  );
};
