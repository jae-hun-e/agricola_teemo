import { render, screen } from "@testing-library/react";
import UserSubBoard from "@components/Board/UserSubBoard";
import "@testing-library/jest-dom/extend-expect";
import { playDataInit } from "../../src/constants/demoData";

describe("UserSubBoard rendering test", () => {
  const { players } = playDataInit;
  it("UserSubBoard 가 안에 데이터와 화면에 알맞게 렌더링 되는지 테스트", () => {
    const userSubBoardLeft = render(
      <UserSubBoard direction="left" owner={players[1]} num={2} />
    );
    const userSubBoardRight = render(
      <UserSubBoard direction="right" owner={players[3]} num={4} />
    );
    const userSubBoardTop = render(
      <UserSubBoard direction="top" owner={players[2]} num={3} />
    );
    const userSubBoardBottom = render(
      <UserSubBoard direction="bottom" owner={players[0]} num={1} />
    );

    expect(userSubBoardLeft.container).toMatchSnapshot();
    expect(userSubBoardRight.container).toMatchSnapshot();
    expect(userSubBoardTop.container).toMatchSnapshot();
    expect(userSubBoardBottom.container).toMatchSnapshot();
  });
});
