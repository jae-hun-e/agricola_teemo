// TODO 예외경우 : 그리고/또는, 둘 중하나 선택
// Additional info 선택
export const openJobAdditional = {
  BASE_05: "교습1 : 직업선택",
  BASE_11: "교습2 : 직업선택",
};

export const openBuildRoomAdditional = {
  // 방짓기
  BASE_07: "농장 확장",
}

export const openSubFacilityAdditional = {
  BASE_08: "화합장소 : 보조설비",
  ACTION_03: "주요설비",
  ACTION_06: "집 개조",
  ACTION_07: "기본 가족 늘리기",
};

export const openMainFacilityAdditional = {
  ACTION_03: "주요설비",
  ACTION_06: "집 개조",
};

export const openPlumFarmAdditional = {
  ACTION_12: "밭 농사",
};

export const openUserBoardAdditional = {
  // 울타리
  ACTION_02: "울타리",

  // 밭
  BASE_10: "농지",

  // 동물놓기
  ACTION_04: "양 시장",
  ACTION_08: "돼지 시장",
  ACTION_11: "소 시장",
};

export const openUseGrainAdditional = {
  ACTION_01: "곡식 활용",
}

export const openCageAdditional = {
  ACTION_14: "농장 개조",
}

// base additional card 리스트
export const baseAdditionalCardOpen = [
  "BASE_05",
  "BASE_07",
  "BASE_08",
  "BASE_10",
  "BASE_11",
];

// round additional card 리스트
export const roundAdditionalCardOpen = [
  "ACTION_01",
  "ACTION_02",
  "ACTION_03",
  "ACTION_04",
  "ACTION_06",
  "ACTION_07",
  "ACTION_08",
  "ACTION_11",
  "ACTION_12",
  "ACTION_14",
];

// 어디서 온 액션인지 판별 리스트
export const fenceType = ["ACTION_02", "ACTION_14"],
  fieldType = ["BASE_10"],
  roomType = ["BASE_07"],
  animalsType = ["ACTION_04", "ACTION_08", "ACTION_11"],
  seedType = ["ACTION_01", "ACTION_12"],
  barnType = ["BARN"];
