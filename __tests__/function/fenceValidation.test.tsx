import { fenceAddValidation, fenceDelValidation } from "@utils/fence";

describe("fence add/del validation test", () => {
  // fence add Validation
  it("인접하지 않게 울타리를 치는 경우", () => {
    const testFence: number[][] = Array.from({ length: 13 }, () => []);
    testFence[0] = [1, 2, 3, 4];
    testFence[2] = [1, 2, 3, 4];
    testFence[4] = [1, 2, 3, 4];
    expect(fenceAddValidation(testFence)).toStrictEqual(testFence);
  });

  it("인접하게 울타리를 치는 경우", () => {
    const testFence: number[][] = Array.from({ length: 13 }, () => []);
    testFence[0] = [1, 2, 3, 4];
    // 1개 넣었을 때
    const first = fenceAddValidation(testFence);
    const answerFence1 = [...testFence];
    answerFence1[0] = [1, 2, 3, 4];
    expect(first).toStrictEqual(answerFence1);

    // 2개 넣었을 때 사이에 있는 fence 삭제
    first[1] = [1, 2, 3, 4];
    const second = fenceAddValidation(first);
    const answerFence2 = [...testFence];
    answerFence2[0] = [1, 2, 4];
    answerFence2[1] = [2, 3, 4];
    expect(second).toStrictEqual(answerFence2);

    // 3개 넣었을 때 각 사이에 있는 fence 삭제
    second[2] = [1, 2, 3, 4];
    const third = fenceAddValidation(second);
    const answerFence3 = [...testFence];
    answerFence3[0] = [1, 2, 4];
    answerFence3[1] = [2, 4];
    answerFence3[2] = [2, 3, 4];

    expect(third).toStrictEqual(answerFence3);
  });

  // fence del Validation
  it("인접하지 않은 울타리 삭제", () => {
    const testFence: number[][] = Array.from({ length: 13 }, () => []);
    const isChecked: boolean[] = Array.from({ length: 13 }, () => false);
    testFence[0] = [1, 2, 3, 4];
    isChecked[0] = true;
    testFence[2] = [1, 2, 3, 4];
    isChecked[2] = true;

    testFence[2] = [];
    isChecked[2] = false;

    const answer: number[][] = Array.from({ length: 13 }, () => []);
    answer[0] = [1, 2, 3, 4];
    expect(fenceDelValidation(testFence, 2, isChecked)).toStrictEqual(answer);
  });

  it("인접한 울타리 삭제", () => {
    const testFence: number[][] = Array.from({ length: 13 }, () => []);
    const isChecked: boolean[] = Array.from({ length: 13 }, () => false);
    testFence[0] = [1, 2, 4];
    isChecked[0] = true;
    testFence[1] = [2, 3, 4];
    isChecked[1] = true;

    testFence[1] = [];

    const answer: number[][] = Array.from({ length: 13 }, () => []);
    answer[0] = [1, 2, 4, 3];
    expect(fenceDelValidation(testFence, 1, isChecked)).toStrictEqual(answer);
  });
});
