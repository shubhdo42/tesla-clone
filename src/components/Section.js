import React from "react";
import styled, { keyframes } from "styled-components";

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>
          Order Online for <a href="">Touchless Delivery</a>
        </p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>
        <DownArrow src="https://cdn-user-icons.flaticon.com/54660/54660659/1633863864506.svg?token=exp=1633864779~hmac=0618a94ce86743fcca0aab2a2f0b64b2" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100v;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(https://tesla-cdn.thron.com/delivery/public/thumbnail/tesla/9c6b5f01-494b-4764-9d64-364ff3749711/bvlatuR/std/1540x866/ModelSPlaid-2?lcid=2b084dd2-ade1-49ec-a470-45363112146c&v=33&dpr=125);
`;

const ItemText = styled.div`
  padding-top: 15vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 5px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  margin-top: 20px;
  overflow-x: hidden;
  animation: animationDown infinite 1.5s;
`;

const Buttons = styled.div``;
