export const playData = {
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
      },
      fields: [
        {
          filed_type: "room",
          position: 1,
          is_in: {
            familly: 1,
          },
        },
        {
          filed_type: "room",
          position: 2,
          is_in: {
            familly: 1,
          },
        },
      ],
      fences: { 1: [1, 2, 3, 4] },
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
      },
      fields: [
        {
          filed_type: "room",
          position: [0, 1],
          is_in: {
            familly: 1,
          },
        },
        {
          filed_type: "room",
          position: [0, 2],
          is_in: {
            familly: 1,
          },
        },
      ],
      fences: { 1: [1, 2, 3, 4] },
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
      },
      fields: [
        {
          filed_type: "room",
          position: [0, 1],
          is_in: {
            familly: 1,
          },
        },
        {
          filed_type: "room",
          position: [0, 2],
          is_in: {
            familly: 1,
          },
        },
      ],
      fences: { 1: [1, 2, 3, 4] },
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
      },
      fields: [
        {
          filed_type: "room",
          position: [0, 1],
          is_in: {
            familly: 1,
          },
        },
        {
          filed_type: "room",
          position: [0, 2],
          is_in: {
            familly: 1,
          },
        },
      ],
      fences: { 1: [1, 2, 3, 4] },
    },
  ],
  action_on_round: [],
  common_resources: {
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
  },
};

export const roomList = {
  room_list: [
    {
      room_id: 1,
      host: "Player 1",
      option: {
        title: "Room 1",
        mode: "public",
        password: null,
      },
      participant_num: 4,
    },
    {
      room_id: 2,
      host: "Player 2",
      option: {
        title: "일해라 노예야",
        mode: "private",
        password: "1234",
      },
      participant_num: 2,
    },
  ],
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
