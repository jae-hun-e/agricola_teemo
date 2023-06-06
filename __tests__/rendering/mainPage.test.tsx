import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import Home from "../../src/pages";
import GameRuleButton from "@components/Button/GameRuleButton";
import LoginButton from "@components/Button/LoginButton";
import LinkButton from "@components/Button/LinkButton";
import "@testing-library/jest-dom/extend-expect";
import { ReactElement, useEffect } from "react";
import React from "react";
import { RecoilRoot } from "recoil";

describe("main page 렌더링 확인", () => {
  it("LoginButton 렌더링 확인", () => {
    render(
      <RecoilRoot>
        <LoginButton />
      </RecoilRoot>
    );
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
  });

  it("GameRuleButton 렌더링 확인", () => {
    render(<GameRuleButton />);
    const gameRuleDetail = screen.getByTestId("GameRuleDetail");
    expect(gameRuleDetail).toBeInTheDocument();
  });

  it("로그인 안됐을 때 ", () => {
    render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );
    const isNotAuth = screen.getByTestId("isNotAuth", { exact: false });
    expect(isNotAuth).toBeInTheDocument();
  });

  it("로그인 됐을 때", () => {
    render(<LinkButton className="" text="start" href="lobby" />);

    jest.mock(
      "next/link",
      () =>
        ({ children, ...rest }: { children: ReactElement }) =>
          children
    );

    const lobbyLink = screen.getByTestId("lobby_link");
    fireEvent.click(lobbyLink);

    expect(lobbyLink).toHaveAttribute("href", "/lobby");
  });
});
