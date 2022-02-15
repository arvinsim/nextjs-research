import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShowMessage from "../pages/show-message";

describe("Show Message", () => {
  it("shows message if it is not yet displayed", () => {
    const { getByText } = render(<ShowMessage />);
    fireEvent.click(getByText(/Show Message!/));
    const message = getByText("Hello World!");
    expect(message).toBeTruthy();
  });
  it.skip("hides message if it is already displayed", () => {
    const { getByText } = render(<ShowMessage />);
    fireEvent.click(getByText(/Show Message!/));
    fireEvent.click(getByText(/Show Message!/));
    const message = getByText("Hello World!");
    expect(message).toBeFalsy();
  });
});
