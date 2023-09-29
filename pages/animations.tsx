import { useState } from "react";
import styled from "styled-components";
import { HorizontalAnimation } from "../components/animations/HorizontalBox";

enum PageTypes {
  HorizontalSquare = "horizontalSquare",
  mergeDrop = "mergeDrop",
}

const Container = styled.div`
  width: 600px;
  height: 600px;
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
        {page === PageTypes.HorizontalSquare && <HorizontalAnimation />}
      </Container>
    </div>
  );
}

export default Animations;
