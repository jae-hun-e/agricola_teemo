<h1 align="center">
    Agricola_TeeMo
  <br>
  <img src="./public/images/main/bg2.png">
  <br>
</h1>

<hr>


<h2 align="center"> 기술 스택 </h2>

| JavaScript | TypeScript |  Next   |  websocket  | react-query  |  recoil | react-hook-form  | tailWindCSS   |  Jest   |
| :--------: | :--------: |:-------:| :---------: | :---------:  | :-----: | :-------------:  |   :------:    | :-----: |
|   ![js]    |   ![ts]    | ![next] |![websocket] |![react_query]|![recoil]|![react_hook_form]|![tailwindcss] | ![jest] |

<br>

<hr>

<h2 align="center"> 주요 구현 기능 </h2>

[//]: # (todo : 각 기능에 대한 영상 첨부 &#40;https://doing7.tistory.com/38&#41;)

<div>
    <h3> login && main -> lobby -> play </h3>
    <ol>
      <li>카카오 소셜 로그인</li>
      <li>lobby page로 이동</li>
      <li>방 생성 및 다른 방 참여</li>
      <li>게임 시작</li>
    </ol>
    <br>
    <h3> chatting service </h3>
    <ol>
      <li>채팅창 연결</li>
      <li>채팅 하기</li>
      <li>새로운 채팅 알림</li>
      <li>마지막으로 읽은 채틱화면으로 보여주기</li>
    </ol>
    <br>
    <h3> agricola game play </h3>
    <ol>
      <li>자신 턴 표시</li>
      <li>선 플레이어 표시</li>
      <li>갖고있는 자원은 항시 보임</li>
      <li>자신 보드, 카드는 아래에서 바로 확인 상대방 보드, 카드는 상대방 클릭 후 보기 가능</li>
    </ol>
</div>

<hr>

<h2> Next 디렉토리 구조 </h2>

```
.
└── agricola_teemo

    ├── __mocks__
    │   ├── fileMock.js
    │   └── styleMock.js
    ├── __tests__
    │   ├── function
    │   │   └── fenceValidation.test.tsx
    │   └── rendering
    │       ├── __snapshots__
    │       │   └── userSubBoard.test.tsx.snap
    │       ├── mainPage.test.tsx
    │       └── userSubBoard.test.tsx
    ├── public
    │   ├── assets
    │   ├── favicon.ico
    │   ├── icon
    │   │   └── kakaoLogin.tsx
    │   ├── images
    │   │   ├── facility
    │   │   │   └── main
    │   │   ├── lobby
    │   │   ├── main
    │   │   │   └── bg.jpeg
    │   │   └── mainboard
    │   └── logo
    ├── src
    │   ├── apis
    │   │   ├── api.tsx
    │   │   └── socket.tsx
    │   ├── atoms
    │   │   ├── auth.tsx
    │   │   ├── gamePlayData.tsx
    │   │   ├── lobbyToPlay.tsx
    │   │   └── sendUserBoardChangeData.tsx
    │   ├── components
    │   │   ├── Board
    │   │   │   ├── MainMapBoard.tsx
    │   │   │   ├── ScoreBoard.tsx
    │   │   │   ├── UserBoard.tsx
    │   │   │   └── UserSubBoard.tsx
    │   │   ├── Box
    │   │   │   ├── AccumlatedBox.tsx
    │   │   │   ├── ActionBox.tsx
    │   │   │   ├── ChatBox.tsx
    │   │   │   ├── DescriptionCard.tsx
    │   │   │   ├── FenceBox.tsx
    │   │   │   ├── LandBox.tsx
    │   │   │   └── RoomBox.tsx
    │   │   ├── Button
    │   │   │   ├── ActionModalButton.tsx
    │   │   │   ├── AdditionallModalButton.tsx
    │   │   │   ├── GameRuleButton.tsx
    │   │   │   ├── LinkButton.tsx
    │   │   │   ├── LoginButton.tsx
    │   │   │   ├── ModalButton.tsx
    │   │   │   └── PlayerButton.tsx
    │   │   ├── Card
    │   │   │   ├── FacilityCard.tsx
    │   │   │   ├── JobCard.tsx
    │   │   │   ├── MainFacilityCard.tsx
    │   │   │   ├── RoundCard.tsx
    │   │   │   └── SubFacilityCard.tsx
    │   │   ├── CardAction
    │   │   │   ├── BuildHouseCard.tsx
    │   │   │   ├── CardViewer.tsx
    │   │   │   ├── PlumFarm.tsx
    │   │   │   └── UseGrain.tsx
    │   │   ├── Share
    │   │   │   ├── Header.tsx
    │   │   │   ├── Layout.tsx
    │   │   │   ├── Login.tsx
    │   │   │   ├── Logout.tsx
    │   │   │   ├── Modal.tsx
    │   │   │   └── Timer.tsx
    │   │   └── Socket
    │   │       ├── CreateRoom.tsx
    │   │       ├── DetailRoom.tsx
    │   │       └── WaitingRoomList.tsx
    │   ├── constants
    │   │   ├── cardCase.ts
    │   │   └── demoData.ts
    │   ├── pages
    │   │   ├── _app.tsx
    │   │   ├── _document.tsx
    │   │   ├── api
    │   │   │   └── hello.ts
    │   │   ├── index.tsx
    │   │   ├── lobby.tsx
    │   │   ├── oauth.tsx
    │   │   └── play
    │   │       └── [...roomId].tsx
    │   ├── styles
    │   │   └── globals.css
    │   ├── types
    │   │   ├── lobby.ts
    │   │   └── play.ts
    │   └── utils
    │       ├── fence.tsx
    │       └── util.tsx
    ├── README.md
    ├── app.yaml
    ├── jest.config.js
    ├── next-env.d.ts
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.json
    └── yarn.lock

```
<hr>

## Conventions
#### apis : api 관련 로직은 api 폴더에 넣는다. 
#### atom : 상태관리는 atom으로 모은다
#### components
- 컴포넌트명은 카멜케이스로 한다.
- 컴포넌트의 레이아웃 관련 스타일을 외부 주입으로 한다
- 최소기능 단위로 Box, Card 에 만든 후 결합하여 Board, Button, Card, CardAction, Share, Socket 폴더에 넣는다.
#### constants : 상수를 모아둔다.
#### pages : next.js의 pages 폴더에 해당한다.
#### styles : tailwindcss 관련 스타일을 모아둔다.
#### types : 타입스크립트 타입을 모아둔다.
#### utils : 자주쓰는 함수는 utils에 넣는다.


## Contributor
|     | name | main               | github address                        | contact                 |
| --- |------| ------------------ | ------------------------------------- |-------------------------|
|     | 조재훈  | Frontend Developer| https://github.com/jae-hun-e  | wognskec@hanyang.ac.kr  |
|     | 조재영  | Frontend Developer | https://github.com/jaeyoung0110     | whwodud231@gmail.com   |
|     | 민준수  | Frontend Developer | https://github.com/MinJunsu       | sunsuking@gmail.com |



[js]: ./public/logo/js.png
[ts]: ./public/logo/ts.png
[next]: ./public/logo/next.png
[recoil]: ./public/logo/recoil.png
[websocket]: ./public/logo/websocket.png
[react_query]: ./public/logo/react_query.png
[react_hook_form]: ./public/logo/react_hook_form.png
[tailwindcss]: ./public/logo/tailwindcss.png
[jest]: ./public/logo/jest.png