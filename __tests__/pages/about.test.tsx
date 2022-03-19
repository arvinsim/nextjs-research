import { render } from "@testing-library/react";
import About from "../../pages/about";

describe("About Page", () => {
  const { getByText } = render(<About />);
  expect(getByText("About Page")).toBeTruthy();
});
