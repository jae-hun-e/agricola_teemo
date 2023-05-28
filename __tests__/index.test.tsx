import { render, screen } from "@testing-library/react";
import UserSubBoard from "@components/Board/UserSubBoard";
import "@testing-library/jest-dom/extend-expect";

describe("UserSubBoard", () => {
  it("should render UserSubBoard", () => {
    const userSubBoard = render(<UserSubBoard direction="left" />);
    expect(userSubBoard.container).toMatchSnapshot();
  });
});
