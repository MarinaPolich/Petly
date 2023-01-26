import { createGlobalStyle } from "styled-components"; /* bring in normalize.css styles */

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0 auto;
  background-color: var(--bg-body);
  font-family: "Manrope", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
