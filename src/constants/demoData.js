export const playData = {
  turn: 0,
  round: 0,
  phase: 2,
  action_on_round: [
    {
      action: "CARD_01",
      player: "Player 1",
      is_kid: false,
    },
    {
      action: "CARD_02",
      player: "Player 2",
      is_kid: false,
    },
    {
      action: "CARD_05",
      player: "Player 3",
      is_kid: false,
    },
  ],
  common_resources: {
    wood: 0,
    clay: 0,
    stone: 0,
    reed: 0,
    grain: 0,
    vegetable: 0,
    sheep: 0,
    pig: 0,
    cow: 0,
    food: 0,
  },
  players: [
    {
      name: "Player 1",
      avatar: "",
      resources: {
        wood: 1,
        clay: 1,
        stone: 1,
        reed: 1,
        grain: 1,
        vegetable: 1,
        sheep: 1,
        pig: 1,
        cow: 1,
        food: 1,
        fence: 1,
        barn: 1,
        family: 1,
      },
      job_cards: [
        {
          number: "JOB_01",
          name: "CARD Name",
          image: "https://i.imgur.com/1Q2QXem.png",
          is_use: true,
        },
      ],
      main_facility_cards: [
        {
          number: "MAIN_FACILITY_01",
          name: "CARD Name",
          image: "https://i.imgur.com/1Q2QXem.png",
          is_use: false,
        },
      ],
      sub_facility_cards: [
        {
          number: "MAIN_FACILITY_01",
          name: "CARD Name",
          image: "https://i.imgur.com/1Q2QXem.png",
          is_use: false,
        },
      ],
      fields: [
        {
          type: "room",
          position: [0, 0],
          fences: [],
          in: {
            family: 1,
            kid: 0,
            sheep: 0,
            cattle: 0,
            boar: 0,
          },
        },
      ],
      fences: [
        [0, 0],
        [0, 1],
      ],
    },
    {
      name: "Player 2",
      resources: {
        wood: 2,
        clay: 2,
        stone: 2,
        reed: 2,
        grain: 2,
        vegetable: 2,
        sheep: 2,
        pig: 2,
        cow: 2,
        food: 2,
        fence: 2,
        barn: 2,
        family: 2,
      },
    },
    {
      name: "Player 3",
      resources: {
        wood: 3,
        clay: 3,
        stone: 3,
        reed: 3,
        grain: 3,
        vegetable: 3,
        sheep: 3,
        pig: 3,
        cow: 3,
        food: 3,
        fence: 3,
        barn: 3,
        family: 3,
      },
    },
    {
      name: "Player 4",
      resources: {
        wood: 4,
        clay: 4,
        stone: 4,
        reed: 4,
        grain: 4,
        vegetable: 4,
        sheep: 4,
        pig: 4,
        cow: 4,
        food: 4,
        fence: 4,
        barn: 4,
        family: 4,
      },
    },
  ],
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
