import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ReactElement } from "react";
import LinkButton from "@components/Button/LinkButton";
import { RecoilRoot } from "recoil";
import Header from "@components/Share/Header";

describe("header의 rendering test", () => {
  it("logo 렌더링 확인", () => {
    render(<LinkButton className={""} text={"logo"} href={""} />);

    jest.mock(
      "next/link",
      () =>
        ({ children, ...rest }: { children: ReactElement }) =>
          children
    );

    const logoButton = screen.getByTestId("logo_link");
    fireEvent.click(logoButton);

    expect(logoButton).toHaveAttribute("href", "/");
  });

  it("myPage 모달창 확인", () => {
    render(
      <RecoilRoot>
        <Header />
      </RecoilRoot>
    );

    const myPageModal = screen.getByTestId("ModalButton");
    expect(myPageModal).toBeInTheDocument();
  });
});
