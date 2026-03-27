# initial-repo

To-do-list
Phase 1: 백엔드 기초 공사 (서버 띄우기)
가장 먼저 내 컴퓨터를 "서버"로 만드는 작업입니다.

[x] Express 서버 기본 설정: index.js 파일 생성 및 3000번 포트 리스닝 설정

[x] 미들웨어 주입: express.json() (JSON 파싱)과 cors() (프론트 통신 허용) 적용

[x] DB 연결 통합: URI 주소를 .env에 넣고 mongoose.connect() 연결

[x] 학습 키워드: Express Middleware, CORS, app.use()

Phase 2: 데이터 설계 (Schema & Model)
MongoDB에 저장될 데이터의 "설계도"를 그리는 단계입니다.

[x] Todo 스키마 정의: content (String, 필수), done (Boolean, 기본값 false) 설정

[x] 모델 생성: mongoose.model('Todo', todoSchema)로 데이터 조작 준비

[x] 학습 키워드: Mongoose Schema, Model, Data Types

Phase 3: RESTful API 구현 (CRUD)
프론트엔드에서 호출할 "전화번호부(Endpoint)"를 만드는 핵심 단계입니다.

[x] GET /todos: DB의 모든 데이터를 찾아 배열로 응답 (Todo.find())

[x] POST /todos: 프론트에서 보낸 content를 받아 새 문서 저장 (new Todo().save())

[x] PATCH /todos/:id: 특정 ID의 done 상태를 반전시켜 업데이트 (findByIdAndUpdate)

[x] DELETE /todos/:id: 특정 ID의 데이터를 삭제 (findByIdAndDelete)

[x] 학습 키워드: REST API, HTTP Methods, Path Parameters (:id), Async/Await

Phase 4: 프론트엔드 연동 (Vite)
기존에 만든 화면에서 "가짜 데이터"를 지우고 "내가 만든 서버"를 부르게 합니다.

[x] API 주소 변경: fetch() 또는 axios 호출 대상을 http://localhost:3000/todos로 변경

[x] 상태 동기화: 데이터를 추가/삭제한 후 화면이 즉시 업데이트되도록 로직 수정

[x] 학습 키워드: Fetch API, Client-Server Communication
