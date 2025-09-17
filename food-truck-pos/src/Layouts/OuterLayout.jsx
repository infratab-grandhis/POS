import React from "react";
import { styled } from "@mui/material/styles"; // use MUI styled, not styled-components

const LayoutContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "50px 1fr",
  gridTemplateAreas: `
        "navbar"
        "mainContent"
    `,
  height: "100vh",
});

const NavBar = styled("nav")(({ theme }) => ({
  gridArea: "navbar",
  position: "sticky",
  top: 0,
  zIndex: 2,
  padding: "10px",
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  textAlign: 'center'
}));

const MainContent = styled("main")(({ theme }) => ({
  gridArea: "mainContent",
  overflowY: "auto",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.secondary.contrastText, 
}));

const OuterLayout = (props) => {
  return (
    <LayoutContainer>
      <NavBar>Food-Truck-Pos</NavBar>
      <MainContent>{props.children}</MainContent>
    </LayoutContainer>
  );
};

export default OuterLayout;
