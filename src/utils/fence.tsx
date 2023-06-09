export function fenceAddValidation(prevFenceList: number[][]) {
  const fenceList = [...prevFenceList];

  // console.log("add 전", fenceList);

  // 가로 체크 : 1234 678 101112
  for (let i = 1; i < 13; i++) {
    if (i === 5 || i === 9) continue;
    if (fenceList[i]?.length !== 0) {
      // 왼쪽 겹침
      if (fenceList[i - 1]?.includes(3)) {
        fenceList[i - 1] = fenceList[i - 1].filter((idx) => idx !== 3);
        fenceList[i] = fenceList[i].filter((idx) => idx !== 1);
      }
    }
  }

  // 세로 체크 :6789
  for (let i = 5; i <= 12; i++) {
    if (fenceList[i].length !== 0) {
      // 위쪽 겹침
      if (fenceList[i - 4]?.includes(4)) {
        fenceList[i - 4] = fenceList[i - 4].filter((idx) => idx !== 4);
        fenceList[i] = fenceList[i].filter((idx) => idx !== 2);
      }
    }
  }
  // console.log("add 후", fenceList);

  return fenceList;
}

// 진짜 마음에 안든다...
// fence 취소하기
export function fenceDelValidation(
  prevFenceList: number[][],
  idx: number,
  isChecked: boolean[]
) {
  const fenceList = [...prevFenceList];
  // console.log("del 전", fenceList);
  function checkingFence(idx: number, addFenceNum: number) {
    if (isChecked[idx] && !fenceList[idx].includes(addFenceNum))
      fenceList[idx].push(addFenceNum);
  }

  const left = () => checkingFence(idx - 1, 3);
  const top = () => checkingFence(idx - 4, 4);
  const right = () => checkingFence(idx + 1, 1);
  const bottom = () => checkingFence(idx + 4, 2);

  if (idx === 0) {
    right();
  } else if (idx < 4) {
    left();
    if (idx !== 4) right();
    if (idx !== 5) bottom();
  } else if (idx < 8) {
    if (idx !== 5) left();
    top();
    right();
    if (idx !== 8) bottom();
  } else {
    left();
    top();
    if (idx !== 12) right();
  }
  // console.log("del 전", fenceList);
  return fenceList;
}
