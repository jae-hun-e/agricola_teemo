# Agricola_TeeMo

## FE라이브러리

## JS
- next.js
- react-query
- recoil
- react-hook-form
- websocket
- next-auth

## CSS
- tailwindcss
- framer-motion

## test
- jest
- jest-environment-jsdom
- @testing-library/react
- @testing-library/jest-dom
- babel-jest
- ts-jest
- ts-loader
- jest-websocket-mock
- supertest

## Next 디렉토리 구조

Atomic design pattern 을 따른다
(참고 : https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)

- src
  - apis
    - api
    - socket
  - atom
    - components끼리 공유해야 할 데이터
  - components
    - button
    - input
    - ...
  - constants
    - 
  - hooks
    - 
  - pages
    - 라우팅된 페이지들
  - styles
  - types
  - utils

- public
  - static 파일들

- __tests__
  - test 파일들


# 컨밴션

## 디렉토리 구조

### apis

- api 관련 로직은 는 api 폴더에 넣는다.

### atom

- 상태관리는 atom으로 모은다 

### components
- 컴포넌트명은 대문자로 시작한다.
- 컴포넌트명은 카멜케이스로 한다.
- 컴포넌트의 레이아웃 관련 스타일을 외부 주입으로 한다 

### constants

- 상수를 모아둔다.

### hooks

- 커스텀 훅을 모아둔다.

### pages

- next.js의 pages 폴더에 해당한다.

### styles

- tailwindcss 관련 스타일을 모아둔다.

### types

- 타입스크립트 타입을 모아둔다.

### utils

- 자주쓰는 함수는 utils에 넣는다.


## 우리의 약속

### 커밋 메시지

### 라이브러리 정리

- 새로운 라이브러리를 사용시 README.md에 정리한다.