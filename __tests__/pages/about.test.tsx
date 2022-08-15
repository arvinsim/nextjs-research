import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About, { getServerSideProps } from "../../pages/about";
import * as utilities from "../../utilities";

describe("About", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders text", () => {
    const title= "This is the about page title";
    const description = "This is the about page description";
    render(<About title={title} description={description}/>);

    const aboutText = screen.getByText("About Page");
    expect(aboutText).toBeInTheDocument();

    const titleText = screen.getByText(title);
    expect(titleText).toBeInTheDocument();

    const descriptionText = screen.getByText(description);
    expect(descriptionText).toBeInTheDocument();
  });

  describe("getServerSideProps", () => {
    it("should set props", async () => {
      jest.spyOn(utilities, 'getRandomlyGeneratedNumbers').mockImplementation(() => [4,5,6]);
      const context = {};
      const result = await getServerSideProps(context as GetServerSidePropsContext);

      expect(result).toEqual({
        props: {
          title: "This is the about page title",
          sum: 15
        },
      });
    });
  });
});
