## 실행 방법
1. 터미널을 열어 원하는 디렉토리로 간다 -> git clone https://github.com/Bigone0617/patient-health-client.git
2. npm install
  - 주의할점 :  node version 16 이상.
3. npm run start
  - 주의할점 : 다른곳에서 port:3000 사용중이면 안된다.


## 사용 모듈

**style**
- react-icons
- styled-components

**HTTP Client**
- axios

**caching**
- @tanstack/react-query

**state manage**
- zustand


**validation**
- lodash
- @types/lodash 


## 디스플레이 구조
**Header**
- 검색 컴퍼넌트

**Body**
- 환자 리스트
- 환자 생성, 수정, 삭제 모달


## 문제풀이
- axios를 이용해서 서버와 통신을 함.
- react-query를 이용해서 서버에서 받아온 데이터들을 캐싱함.
- axios를 통해 리스트 데이터를 받아 올 시, 성공하면 zustand를 통해서 글로벌 상태에 리스트를 주입.
- 검색 시, "이름, 기저질환, 통증부위"를 기준으로 검색할 수 있도록 작업.
- 브라우저에서 다른 탭을 갔다가 돌아 왔을 시, 리스트 refetch 되도록 작업.
- 환자 리스트 및 환자의 정보는 zustand를 통해서 글로벌로 관리.