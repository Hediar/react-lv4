## 구현해야 할 것

- 공통
  UI, API 명세서 작성
  [https://velog.io/@keepcalm/API-기본-개념-패킷-헤더-바디-CRUD-URI-path-variable-명세서#3️⃣-restful-api](https://velog.io/@keepcalm/API-%EA%B8%B0%EB%B3%B8-%EA%B0%9C%EB%85%90-%ED%8C%A8%ED%82%B7-%ED%97%A4%EB%8D%94-%EB%B0%94%EB%94%94-CRUD-URI-path-variable-%EB%AA%85%EC%84%B8%EC%84%9C#3%EF%B8%8F%E2%83%A3-restful-api)
- CRUD
  본문 리스트 조회 - 메인 페이지 or 마이페이지
  본문 조회
  본문 추가
  본문 삭제
  본문 수정
- 배포
  json-server 배포
  리액트 프로젝트 배포 S3, vercel 등

## 요구사항

- **동적 라우팅을 사용**하세요.
- 1개 이상의 `Custom Hook`을 구현하세요.
- **Form에 유효성 검증 기능을 적용**하세요. _유효성 검증이란, 아래의 예시들을 의미합니다._
  - ex: 제목을 10글자 이상 기입하지 않으면, 글을 추가할 수 없도록 제한 → `Alert` 으로 안내
  - ex: Form에서 모든 input에 값을 입력하지 않으면, 버튼이 비활성화
- 버튼 **컴포넌트 1개로 모든 버튼을 구현**하세요. 모든 스타일과 기능을 버튼을 구현할 수 있는 **만능 버튼**을 만들어보는 것 입니다.
- `development` 환경에서만 `redux devtool`이 활성화 되도록 처리합니다.
  → 참고 : [https://velog.io/@roses16-dev/React-Redux-Dev-Tools-Development-server에서만-실행되게-설정하기](https://velog.io/@roses16-dev/React-Redux-Dev-Tools-Development-server%EC%97%90%EC%84%9C%EB%A7%8C-%EC%8B%A4%ED%96%89%EB%90%98%EA%B2%8C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
- 배포된 결과물에서는 `console.log()` 가 보이지 않도록 처리합니다.
  → 정리하고 배포하기
- `.env` 를 이용해서 API 서버의 URL 코드상에서 숨기도록 처리합니다.
  → api url 분리하기

## 기능

1. 전체보기
   todolist의 전체를 보여줍니다.
2. Mypost
   내가 작성한 글만 보여줍니다.
3. 진행중
   3-1. Mypost가 비활성화인 경우
   전체글 중에서 진행중만 보여줍니다.
   3-2. Mypost가 활성화인 경우
   Mypost 중에서 진행중만 보여줍니다.
4. 완료목록
   3-1. Mypost가 비활성화인 경우
   전체글 중에서 완료된 것만 보여줍니다.
   3-2. Mypost가 활성화인 경우
   Mypost 중에서 완료된 것만 보여줍니다.
5. 로그인
   로그인 페이지로 이동합니다.
6. 위 화살표
   가장 하단으로 내려가면 나타나는 버튼입니다.
   클릭 시 가장 상단으로 올라갑니다.
7. 작성하기
   클릭 시 작성하는 페이지로 이동합니다.
   항상 옆에 위치합니다.
