import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../../pages/about";

describe("About", () => {
  it("renders text", () => {
    render(<About />);

    const aboutText = screen.getByText("About Page");
    expect(aboutText).toBeInTheDocument();
  });
});
