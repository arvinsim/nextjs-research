import { useState } from "react";
import styled from "styled-components";

enum PageTypes {
  HorizontalSquare = "horizontalSquare",
  mergeDrop = "mergeDrop",
}

const Container = styled.div`
  width: 100%;
  height: 500px;
`;

const HorizontalAnimation = styled.div`
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

function Animations() {
  const [page, setPage] = useState<PageTypes>(PageTypes.HorizontalSquare);

  return (
    <div>
      <h1 className={"text-4xl mb-8"}>Animations</h1>
      <div className={"mb-10"}>
        {Object.values(PageTypes).map((pageType) => {
          return (
            <button className={"mx-8"} onClick={() => setPage(pageType)}>
              {pageType}
            </button>
          );
        })}
      </div>

      <Container>
        {page === PageTypes.HorizontalSquare && (
          <HorizontalAnimation>
            <div>Wee</div>
          </HorizontalAnimation>
        )}
      </Container>
    </div>
  );
}

export default Animations;
