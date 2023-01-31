import { createPortal } from "react-dom";

const menuRoot = document.querySelector("#menu-root");

export const MobileMenu = ({ children }) => {
  return createPortal(<>{children}</>, menuRoot);
};
