import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../../src/pages";
import "@testing-library/jest-dom/extend-expect";
import { ReactElement } from "react";
import React from "react";

describe("main page 렌더링 확인", () => {
  it("should render Home", () => {
    const home = render(<Home />);

    expect(home.container).toBeInTheDocument();
  });
  it("login button should be in the document", () => {
    render(<Home />);
    const loginButton = screen.getByRole("button", {
      name: /Login/i,
    });
    expect(loginButton).toBeInTheDocument();
  });
  it("game rule button should be in the document", () => {
    render(<Home />);
    const gameRuleButton = screen.getByRole("button", {
      name: /Game Rule/i,
    });
    expect(gameRuleButton).toBeInTheDocument();
  });
  it("start button should be in the document", () => {
    render(<Home />);
    const startPelement = screen.getByText(/Start/i);

    expect(startPelement).toBeInTheDocument();
  });
});

describe("links", () => {
  jest.mock(
    "next/link",
    () =>
      ({ children, ...rest }: { children: ReactElement }) =>
        children
  );
  it("rounting test", () => {
    render(<Home />);

    const lobbyLink = screen.getByText(/Start/i);
    fireEvent.click(lobbyLink);
    expect(lobbyLink.closest("link")).toHaveAttribute("href", "/lobby");
  });
});
