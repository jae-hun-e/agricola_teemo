import { render, screen } from "@testing-library/react";
import UserSubBoard from "@components/Board/UserSubBoard";
import "@testing-library/jest-dom/extend-expect";

describe("UserSubBoard", () => {
  it("should render UserSubBoard", () => {
    const userSubBoardLeft = render(<UserSubBoard direction="left" />);
    const userSubBoardRight = render(<UserSubBoard direction="right" />);
    const userSubBoardTop = render(<UserSubBoard direction="top" />);
    const userSubBoardBottom = render(<UserSubBoard direction="bottom" />);

    expect(userSubBoardLeft.container).toMatchSnapshot();
    expect(userSubBoardRight.container).toMatchSnapshot();
    expect(userSubBoardTop.container).toMatchSnapshot();
    expect(userSubBoardBottom.container).toMatchSnapshot();
  });
});
