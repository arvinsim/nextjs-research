import { fireEvent, render, screen } from "@testing-library/react";
import LoginPage from "../../../app/log-in/page";

describe("LoginPage", () => {
  it("should update the username state when the username input changes", () => {
    render(<LoginPage />);
    const usernameInput = screen.getByLabelText("Username:");
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    expect(usernameInput.value).toBe("testuser");
  });

  it("should update the password state when the password input changes", () => {
    render(<LoginPage />);
    const passwordInput = screen.getByLabelText("Password:");
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    expect(passwordInput.value).toBe("testpassword");
  });

  it("should call handleSubmit when the form is submitted", () => {
    const handleSubmit = jest.fn();
    render(<LoginPage />);
    const form = screen.getByTestId("login-form");
    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
