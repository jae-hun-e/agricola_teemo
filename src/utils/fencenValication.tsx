interface Props {
  fenceList: number[][];
}

export function fenceValidation(fencelist: Props) {
  const n = fencelist.length;

  let answer = false;

  const row = [
      [-1, 0, -1, 0],
      [1, 0, 1, 0],
      [0, -1, -1, 0],
      [0, 0, -1, 1],
      [1, -1, 0, 0],
      [1, 0, 0, 1],
    ],
    col = [
      [0, -1, 0, -1],
      [0, 1, 0, 1],
      [-1, 0, 0, -1],
      [0, 0, 1, -1],
      [-1, 1, 0, 0],
      [0, 1, 1, 0],
    ];

  function dfs(dep: number, cur: number[], list: number[][]) {
    // dep = n+1 일 때 처음것과 동일 하다면
    if (list.length === 0) {
      // console.log("cur", cur);
      // console.log("=========끝=========");
      if (cur[1] === cur[3]) {
        const checkList = [];
        for (const [dx1, dy1, dx2, dy2] of row) {
          let [x1, y1, x2, y2] = cur;

          x1 += dx1;
          y1 += dy1;
          x2 += dx2;
          y2 += dy2;
          // 범위 검사
          if (range([x1, y1, x2, y2])) continue;
          checkList.push([x1, y1, x2, y2]);
        }

        if (checkList.find((list) => list.join("") === fencelist[0].join(""))) {
          answer = true;
          return;
        } else return;
      } else {
        const checkList = [];
        for (const [dx1, dy1, dx2, dy2] of col) {
          let [x1, y1, x2, y2] = cur;

          x1 += dx1;
          y1 += dy1;
          x2 += dx2;
          y2 += dy2;
          // 범위 검사
          if (range([x1, y1, x2, y2])) continue;
          checkList.push([x1, y1, x2, y2]);
        }

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
          // console.log("cur", cur);
          // console.log("next", next);
          // console.log("[x1, y1, x2, y2]", [x1, y1, x2, y2]);
          // console.log("list1", list);
          list = list.filter((item) => item.join("") !== next.join(""));

          // console.log("list2", list);
          // console.log("============================");
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
          // console.log("cur", cur);
          // console.log("next", next);
          // console.log("[x1, y1, x2, y2]", [x1, y1, x2, y2]);
          // console.log("list1", list);
          list = list.filter((item) => item.join("") !== next.join(""));

          // console.log("list2", list);
          // console.log("============================");
          dfs(dep + 1, [x1, y1, x2, y2], list);
        }
      }
    }
  }

  dfs(0, fencelist[0], fencelist.slice(1));

  return answer;
}

function range([x1, y1, x2, y2]: number[]) {
  if (
    x1 < 0 ||
    x1 > 3 ||
    x2 < 0 ||
    x2 > 3 ||
    y1 < 0 ||
    y1 > 3 ||
    y2 < 0 ||
    y2 > 3
  )
    return true;
}
