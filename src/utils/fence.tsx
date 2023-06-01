// prevFenceList: number[][]
export function fenceValidation(landInfo: object, limit: number) {
  const fenceList = landInfo.map((land: any) => land.fence);
  console.log("전", landInfo);
  // const fenceList = [...prevFenceList];

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
  console.log("후", fenceList);

  return fenceList;
}

export function limitFenceNum() {}
