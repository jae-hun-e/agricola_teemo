interface Props {
  fenceList: number[][];
}

export function fenceValidation(fencelist: Props) {
  let answer: boolean = false;

  const row: number[][] = [
      [-1, 0, -1, 0],
      [1, 0, 1, 0],
      [0, -1, -1, 0],
      [0, 0, -1, 1],
      [1, -1, 0, 0],
      [1, 0, 0, 1],
    ],
    col: number[][] = [
      [0, -1, 0, -1],
      [0, 1, 0, 1],
      [-1, 0, 0, -1],
      [0, 0, 1, -1],
      [-1, 1, 0, 0],
      [0, 1, 1, 0],
    ];

  function dfs(dep: number, cur: number[], list: number[][]) {
    /* TODO : 종료 로직 변경
    다 돌고나면
    1. y1===y2인 값들(가로)
      1. x1,x2 동일하고 y1,y2차이가 동일한 fence가 존재하면 list에서 제거
    2. x1===x2인 값들(세로)
      1. y1,y2 동일하고 x1,x2차이가 동일한 fence가 존재하면 list에서 제거
    3. list.length === 0 이면 true
    */
    if (list.length === 0) {
      // console.log("cur", cur);
      // console.log("=========끝=========");
      if (cur[1] === cur[3]) {
        const checkList: number[][] = [];
        creatCheckedList(checkList, cur, row);

        // @ts-ignore
        if (checkList.find((list) => list.join("") === fencelist[0].join(""))) {
          answer = true;
          return;
        } else return;
      } else {
        const checkList: number[][] = [];
        creatCheckedList(checkList, cur, col);
        // @ts-ignore
        if (checkList.find((list) => list.join("") === fencelist[0].join(""))) {
          answer = true;
          return;
        } else return;
      }
    }
    // 가능 여부

    // 가로
    if (cur[1] === cur[3]) {
      for (const [dx1, dy1, dx2, dy2] of row) {
        let [x1, y1, x2, y2] = cur;

        x1 += dx1;
        y1 += dy1;
        x2 += dx2;
        y2 += dy2;

        // 범위 검사
        if (range([x1, y1, x2, y2])) continue;

        // list에 다음 갈곳 존재?
        const next = list.find(
          (item) => item.join("") === [x1, y1, x2, y2].join("")
        );

        // 존재하면 list에서 없애주고 dfs
        if (next) {
          list = list.filter((item) => item.join("") !== next.join(""));

          dfs(dep + 1, [x1, y1, x2, y2], list);
        }
      }
    }
    // 세로
    else {
      for (const [dx1, dy1, dx2, dy2] of col) {
        let [x1, y1, x2, y2] = cur;

        x1 += dx1;
        y1 += dy1;
        x2 += dx2;
        y2 += dy2;

        // 범위 검사
        if (range([x1, y1, x2, y2])) continue;

        // list에 다음 갈곳 존재?
        const next = list.find(
          (item) => item.join("") === [x1, y1, x2, y2].join("")
        );

        // 존재하면 list에서 없애주고 dfs
        if (next) {
          list = list.filter((item) => item.join("") !== next.join(""));

          dfs(dep + 1, [x1, y1, x2, y2], list);
        }
      }
    }
  }
  // @ts-ignore
  dfs(0, fencelist[0], fencelist.slice(1));

  return answer;
}

function range([x1, y1, x2, y2]: number[]) {
  if (
    x1 < 0 ||
    x1 > 5 ||
    x2 < 0 ||
    x2 > 5 ||
    y1 < 0 ||
    y1 > 3 ||
    y2 < 0 ||
    y2 > 3
  )
    return true;
}

function creatCheckedList(
  checkList: number[][],
  cur: number[],
  direction: number[][]
) {
  for (const [dx1, dy1, dx2, dy2] of direction) {
    let [x1, y1, x2, y2] = cur;

    x1 += dx1;
    y1 += dy1;
    x2 += dx2;
    y2 += dy2;
    // 범위 검사
    if (range([x1, y1, x2, y2])) continue;
    checkList.push([x1, y1, x2, y2]);
  }
}
