import React from "react";
import styled from "styled-components";

const StyledHorizontalAnimation = styled.div`
  position: relative;  
  height: 100px;
  width: 100px;
  color: white;
  background: red;
  display: flex
  align-items: center;
  justify-content: center;
  animation-name: goRight;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  @keyframes goRight {
    0%   {background-color: red; left: 0}
    100% {background-color: green; left: 80%; border-radius: 50%}
  }
`;

export function HorizontalAnimation() {
  return (
    <StyledHorizontalAnimation>
      <div>Wee</div>
    </StyledHorizontalAnimation>
  );
}
