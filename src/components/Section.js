import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, des, left_bt, right_bt, bg_img }) {
  return (
    <Wrap bgImage={bg_img}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{des}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{left_bt}</LeftButton>
            {right_bt && <RightButton>{right_bt}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="https://i.ibb.co/9W7Jr0N/down-arrow.png" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

// ########## CSS section ########## //
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  //  background-image: ${(props) => `url(${props.bgImage})`} ;
  // background-image: url("https://i.ibb.co/F3hW3Rq/model-s.jpg");
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: -1 ;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 760px) {
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
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div`
  cursor: pointer;
`;

{
  /* 
<a href="https://ibb.co/B3fP30K"><img src="https://i.ibb.co/F3hW3Rq/model-s.jpg" alt="model-s" border="0"></a><br /><a target='_blank' href='https://the-crosswordsolver.com/relative-of-the-english-horn-4-letters'>relative of a musette crossword</a><br /> 

<a href="https://imgbb.com/"><img src="https://i.ibb.co/9W7Jr0N/down-arrow.png" alt="down-arrow" border="0"></a>

<a href="https://ibb.co/RPFJV2q"><img src="https://i.ibb.co/bL0G81k/model-3.jpg" alt="model-3" border="0"></a>

<a href="https://ibb.co/PZxs5pk"><img src="https://i.ibb.co/bg1jrht/model-y.jpg" alt="model-y" border="0"></a>

<a href="https://ibb.co/23WLhtB"><img src="https://i.ibb.co/9HcfgTj/model-x.jpg" alt="model-x" border="0"></a>

<a href="https://ibb.co/FnHfhsH"><img src="https://i.ibb.co/0QsWnBs/solar-panel.jpg" alt="solar-panel" border="0"></a>

<a href="https://ibb.co/NN2QwjF"><img src="https://i.ibb.co/Zgzty8f/solar-roof.jpg" alt="solar-roof" border="0"></a>

<a href="https://ibb.co/xzsvXWN"><img src="https://i.ibb.co/1RnV71k/accessories.jpg" alt="accessories" border="0"></a>

*/
}
