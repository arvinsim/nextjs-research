import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/legacy/image";

const Chevron: React.FC = () => {
  const [direction, setDirection] = useState("down");

  return (
    <StyledDiv
      onClick={() => {
        setDirection(direction === "down" ? "up" : "down");
      }}
    >
      <span>Categories</span>
      <StyledImg
        src={"/chevron.svg"}
        width={22}
        height={15}
        alt="categories"
        direction={direction}
      />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
`;

const StyledImg = styled(Image)<{ direction?: string }>`
  ${(props) =>
    props.direction === "up"
      ? "transform: rotate(180deg);"
      : "transform: rotate(0deg);"}
  transition: transform 200ms ease-in;
`;

export default Chevron;
