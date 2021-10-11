import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order Online for a Touchless Delivery"
        bgImg="https://tesla-cdn.thron.com/delivery/public/thumbnail/tesla/9c6b5f01-494b-4764-9d64-364ff3749711/bvlatuR/std/1540x866/ModelSPlaid-2?lcid=2b084dd2-ade1-49ec-a470-45363112146c&v=33&dpr=125"
        leftbtntext="Custom Order"
        rightBtntext="Existing Inventory"
      />
      <Section
        title="Model 3"
        desc="Order Online for a Touchless Delivery"
        bgImg="https://tesla-cdn.thron.com/delivery/public/thumbnail/tesla/88b6defb-6573-4de8-b280-9f65b5d9269b/bvlatuR/std/1540x866/Model3_01?lcid=1e84026d-2319-4378-b5bd-22fa4c980c22&v=19&dpr=125"
        leftbtntext="Custom Order"
        rightBtntext="Existing Inventory"
      />
      <Section
        title="Model X"
        desc="Order Online for a Touchless Delivery"
        bgImg="https://tesla-cdn.thron.com/delivery/public/thumbnail/tesla/cf86e6da-f04f-47de-bba5-bcfcd93710ce/bvlatuR/std/570x502/ModelX_01?lcid=9511c1b4-08d9-4f10-a6a0-83734ffd00f1&v=34&dpr=325"
        leftbtntext="Custom Order"
        rightBtntext="Existing Inventory"
      />
      <Section
        title="Model Y"
        desc="Order Online for a Touchless Delivery"
        bgImg="https://tesla-cdn.thron.com/delivery/public/thumbnail/tesla/cd7a5e6c-8f8f-434f-b3c3-619b0f914aa1/bvlatuR/std/1540x866/Model_Y_16?lcid=6092d5ae-105b-46f0-9422-6cfd2a72a328&v=29&dpr=125"
        leftbtntext="Custom Order"
        rightBtntext="Existing Inventory"
      />
      <Section
        title="Accessories"
        desc=""
        leftbtntext="Shop Now"
        bgImg="https://tesla-cdn.thron.com/delivery/public/thumbnail/tesla/e36cbe40-92e2-49cb-b991-92b6c7245677/bvlatuR/std/550x507/WallConnector_03?lcid=ad5c97cb-dd55-4343-a8d7-b0660a1be424&v=70&dpr=325"
      ></Section>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
