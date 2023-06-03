export const playDataInit = {
  first: 0,
  turn: 0,
  round: 0,
  phase: 0,
  players: [
    {
      name: "1",
      resource: {
        wood: 0,
        clay: 0,
        reed: 0,
        stone: 0,
        grain: 0,
        vegetable: 0,
        sheep: 0,
        boar: 0,
        cattle: 0,
        food: 0,
        family: 0,
        room: 0,
        fence: 0,
        barn: 0,
      },
      fields: [
        { field_type: "room", position: 6, is_in: { familly: 1 } },
        { field_type: "room", position: 11, is_in: { familly: 1 } },
      ],
      room_type: "wood_room",
      fences: {},
      cards: [],
    },
    {
      name: "2",
      resource: {
        wood: 0,
        clay: 0,
        reed: 0,
        stone: 0,
        grain: 0,
        vegetable: 0,
        sheep: 0,
        boar: 0,
        cattle: 0,
        food: 0,
        family: 0,
        room: 0,
        fence: 0,
        barn: 0,
      },
      fields: [
        { field_type: "room", position: 6, is_in: { familly: 1 } },
        { field_type: "room", position: 11, is_in: { familly: 1 } },
      ],
      room_type: "wood_room",
      fences: {},
      cards: [],
    },
    {
      name: "3",
      resource: {
        wood: 0,
        clay: 0,
        reed: 0,
        stone: 0,
        grain: 0,
        vegetable: 0,
        sheep: 0,
        boar: 0,
        cattle: 0,
        food: 0,
        family: 0,
        room: 0,
        fence: 0,
        barn: 0,
      },
      fields: [
        { field_type: "room", position: 6, is_in: { familly: 1 } },
        { field_type: "room", position: 11, is_in: { familly: 1 } },
      ],
      room_type: "wood_room",
      fences: {},
      cards: [],
    },
    {
      name: "4",
      resource: {
        wood: 0,
        clay: 0,
        reed: 0,
        stone: 0,
        grain: 0,
        vegetable: 0,
        sheep: 0,
        boar: 0,
        cattle: 0,
        food: 0,
        family: 0,
        room: 0,
        fence: 0,
        barn: 0,
      },
      fields: [
        { field_type: "room", position: 6, is_in: { familly: 1 } },
        { field_type: "room", position: 11, is_in: { familly: 1 } },
      ],
      room_type: "wood_room",
      fences: {},
      cards: [],
    },
  ],
  actions: [],
  base_cards: [
    {
      card_number: "BASE_01",
      is_stacked: true,
      count: 1,
      resource: { wood: 1 },
      additional_action: null,
    },
    {
      card_number: "BASE_02",
      is_stacked: true,
      count: 2,
      resource: { wood: 2 },
      additional_action: null,
    },
    {
      card_number: "BASE_03",
      is_stacked: false,
      count: 0,
      resource: { reed: 1, food: 1, stone: 1 },
      additional_action: null,
    },
    {
      card_number: "BASE_04",
      is_stacked: true,
      count: 2,
      resource: { clay: 2 },
      additional_action: null,
    },
    {
      card_number: "BASE_05",
      is_stacked: false,
      count: 0,
      resource: null,
      additional_action: null,
    },
    {
      card_number: "BASE_06",
      is_stacked: true,
      count: 1,
      resource: { food: 1 },
      additional_action: null,
    },
    {
      card_number: "BASE_07",
      is_stacked: false,
      count: 0,
      resource: null,
      additional_action: null,
    },
    {
      card_number: "BASE_08",
      is_stacked: false,
      count: 0,
      resource: null,
      additional_action: null,
    },
    {
      card_number: "BASE_09",
      is_stacked: false,
      count: 0,
      resource: { grain: 1 },
      additional_action: null,
    },
    {
      card_number: "BASE_10",
      is_stacked: false,
      count: 0,
      resource: null,
      additional_action: null,
    },
    {
      card_number: "BASE_11",
      is_stacked: false,
      count: 0,
      resource: null,
      additional_action: null,
    },
    {
      card_number: "BASE_12",
      is_stacked: false,
      count: 0,
      resource: { food: 2 },
      additional_action: null,
    },
    {
      card_number: "BASE_13",
      is_stacked: true,
      count: 3,
      resource: { wood: 3 },
      additional_action: null,
    },
    {
      card_number: "BASE_14",
      is_stacked: true,
      count: 1,
      resource: { clay: 1 },
      additional_action: null,
    },
    {
      card_number: "BASE_15",
      is_stacked: true,
      count: 1,
      resource: { reed: 1 },
      additional_action: null,
    },
    {
      card_number: "BASE_16",
      is_stacked: true,
      count: 1,
      resource: { food: 1 },
      additional_action: null,
    },
  ],
  round_cards: [
    {
      card_number: "ACTION_02",
      is_stacked: false,
      count: 0,
      resource: null,
      additional_action: null,
    },
    {
      card_number: "ACTION_04",
      is_stacked: true,
      count: 1,
      resource: { sheep: 0 },
      additional_action: null,
    },
    {
      card_number: "ACTION_03",
      is_stacked: false,
      count: 0,
      resource: null,
      additional_action: null,
    },
    {
      card_number: "ACTION_01",
      is_stacked: false,
      count: 0,
      resource: null,
      additional_action: null,
    },
    {
      card_number: "ACTION_05",
      is_stacked: true,
      count: 1,
      resource: { stone: 0 },
      additional_action: null,
    },
    {
      card_number: "ACTION_06",
      is_stacked: false,
      count: 0,
      resource: null,
      additional_action: null,
    },
    {
      card_number: "ACTION_07",
      is_stacked: false,
      count: 0,
      resource: null,
      additional_action: null,
    },
    {
      card_number: "ACTION_09",
      is_stacked: false,
      count: 0,
      resource: { vegetable: 1 },
      additional_action: null,
    },
    {
      card_number: "ACTION_08",
      is_stacked: true,
      count: 1,
      resource: { boar: 0 },
      additional_action: null,
    },
    {
      card_number: "ACTION_10",
      is_stacked: true,
      count: 1,
      resource: { stone: 0 },
      additional_action: null,
    },
    {
      card_number: "ACTION_11",
      is_stacked: true,
      count: 1,
      resource: { cattle: 0 },
      additional_action: null,
    },
    {
      card_number: "ACTION_13",
      is_stacked: false,
      count: 0,
      resource: null,
      additional_action: null,
    },
    {
      card_number: "ACTION_12",
      is_stacked: false,
      count: 0,
      resource: null,
      additional_action: null,
    },
    {
      card_number: "ACTION_14",
      is_stacked: false,
      count: 0,
      resource: null,
      additional_action: null,
    },
  ],
  common_resources: {
    wood: 24,
    clay: 21,
    reed: 13,
    stone: 16,
    grain: 24,
    vegetable: 16,
    sheep: 18,
    boar: 15,
    cattle: 13,
    food: 74,
  },
};

export const createRoom = {
  room_id: 0,
  host: "User",
  option: {
    title: " ",
    is_chat: null,
    mode: null,
    time: null,
    password: null,
  },
  participant: [],
};

export const RoomData1 = {
  room_id: 1,
  host: "Player 1",
  option: {
    title: "Room 1",
    is_chat: false,
    mode: "public",
    time: 30,
    password: "1234",
  },
  participant: [
    {
      name: "Player 1",
      img: "https://i.imgur.com/1Q2QXem.png",
      user_detail: "rest_endPoint2",
    },
    {
      name: "Player 2",
      img: "https://i.imgur.com/1Q2QXem.png",
      user_detail: "rest_endPoint2",
    },
    {
      name: "Player 3",
      img: "https://i.imgur.com/1Q2QXem.png",
      user_detail: "rest_endPoint3",
    },
    {
      name: "Player 4",
      img: "https://i.imgur.com/1Q2QXem.png",
      user_detail: "rest_endPoint4",
    },
  ],
};

export const RoomData2 = {
  room_id: 2,
  host: "윤호",
  option: {
    title: "일해라 노예야",
    is_chat: true,
    mode: "private",
    time: 30,
    password: "1234",
  },
  participant: [
    {
      name: "재훈",
      img: "https://i.imgur.com/1Q2QXem.png",
      user_detail: "rest_endPoint2",
    },
    {
      name: "준수",
      img: "https://i.imgur.com/1Q2QXem.png",
      user_detail: "rest_endPoint2",
    },
    {
      name: "윤호",
      img: "https://i.imgur.com/1Q2QXem.png",
      user_detail: "rest_endPoint3",
    },
  ],
};

// TODO : socket 통신 시에는 각 방의 정보만 받아옴
export const detailRoomData = {
  data: [createRoom, RoomData1, RoomData2],
};

export const lobbyData = {
  room_list: [
    {
      room_id: 1,
      host: "Player 1",
      option: {
        title: "Room 1",
        is_chat: true,
        mode: "public",
        time: 30,
        password: null,
      },
      participant: [
        {
          name: "Player 1",
          img: "https://i.imgur.com/1Q2QXem.png",
          user_detail: "rest_endPoint2",
        },
        {
          name: "Player 2",
          img: "https://i.imgur.com/1Q2QXem.png",
          user_detail: "rest_endPoint2",
        },
        {
          name: "Player 3",
          img: "https://i.imgur.com/1Q2QXem.png",
          user_detail: "rest_endPoint3",
        },
        {
          name: "Player 4",
          img: "https://i.imgur.com/1Q2QXem.png",
          user_detail: "rest_endPoint4",
        },
      ],
    },
    {
      room_id: 2,
      host: "재훈",
      option: {
        title: "일해라 노예야",
        is_chat: true,
        mode: "private",
        time: 30,
        password: "1234",
      },
      participant: [
        {
          name: "재훈",
          img: "https://i.imgur.com/1Q2QXem.png",
          user_detail: "rest_endPoint2",
        },
        {
          name: "Player 2",
          img: "https://i.imgur.com/1Q2QXem.png",
          user_detail: "rest_endPoint2",
        },
        {
          name: "Player 3",
          img: "https://i.imgur.com/1Q2QXem.png",
          user_detail: "rest_endPoint3",
        },
      ],
    },
  ],
};
