import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <Container>
      <a>
        <img
          src="https://o.remove.bg/downloads/6f0e9392-1946-4a3c-9d55-091e831f60da/24-245028_tesla-logo-tesla-motors-hd-png-download-removebg-preview.png"
          alt=""
          height="45"
        />
      </a>
      <Menu>
        <a href="">Model S</a>

        <a href="">Model 3</a>

        <a href="">Model X</a>

        <a href="">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="">Shop</a> <a href="">Tesla Account</a>
        <CustomMenu></CustomMenu>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
`;

const CustomMenu = styled(MenuIcon)``;
