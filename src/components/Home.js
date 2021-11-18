import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        des='Order Online for Touchless Delivery'
        bg_img="https://i.ibb.co/F3hW3Rq/model-s.jpg" 
        left_bt='Custom Order'
        right_bt='Existing Inventory'
      />

      <Section 
        title="Model Y"
        des='Order Online for Touchless Delivery'
        bg_img="https://i.ibb.co/bg1jrht/model-y.jpg"
        left_bt='Custom Order'
        right_bt='Existing Inventory'
      />

      <Section 
        title="Model 3"
        des='Order Online for Touchless Delivery'
        bg_img="https://i.ibb.co/bL0G81k/model-3.jpg"
        left_bt='Custom Order'
        right_bt='Existing Inventory'
      />

      <Section 
        title="Model X"
        des='Order Online for Touchless Delivery'
        bg_img="https://i.ibb.co/9HcfgTj/model-x.jpg" 
        left_bt='Custom Order'
        right_bt='Existing Inventory'
      />

      <Section 
        title="Lowest Cost Solar Panels in America"
        des='Money-Back Guarantee'
        bg_img="https://i.ibb.co/0QsWnBs/solar-panel.jpg"  
        left_bt='Order Now'
        right_bt='Learn More'
      />

      <Section 
        title="Solar for New Roofs"
        des='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
        bg_img="https://i.ibb.co/Zgzty8f/solar-roof.jpg"
        left_bt='Order Now'
        right_bt='Learn More'
      />

      <Section 
        title="Accessories"
        des=''
        bg_img="https://i.ibb.co/1RnV71k/accessories.jpg"
        left_bt='Shop Now'
      />
    </Container>
  );
}

export default Home;

// ########## CSS section ########## //

const Container = styled.div`
  height: 100vh;
`;
