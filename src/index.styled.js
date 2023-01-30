import { createGlobalStyle } from "styled-components"; /* bring in normalize.css styles */
import { device } from "stylesheet/breakpoints";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0 auto;
  background-color: var(--bg-body);
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.57;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media ${device.tabDesk} {
    font-size: 16px;
    line-height: 1.375;
  }
}

code {
  font-family: "Manrope", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
