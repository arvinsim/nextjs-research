import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About, { getServerSideProps } from "../../pages/about";
import { sampleUtilityFunction } from "../../utilities";

jest.mock("../../utilities", () => {
  const originalModule = jest.requireActual("../../utilities");

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    sampleUtilityFunction: jest.fn(() => "foobar"),
  };
});

describe("About", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders text", () => {
    render(<About />);

    const aboutText = screen.getByText("About Page");
    expect(aboutText).toBeInTheDocument();
  });

  describe("getServerSideProps", () => {
    it("should set submessage", () => {
      const context = {};
      const result = getServerSideProps(context as GetServerSidePropsContext);

      expect(sampleUtilityFunction).toBeCalledWith("1", 2, true);
      expect(result).toEqual({
        props: {
          message: "A message from our sponsors",
          submessage: "foobar",
        },
      });
    });
  });
});
