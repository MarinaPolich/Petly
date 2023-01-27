import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "components/Header/Header";
import { Box, Container } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Box>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  );
};
