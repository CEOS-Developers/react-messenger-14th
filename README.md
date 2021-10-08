# 🙌 Introduction

이 저장소는 IT창업동아리 CEOS(https://www.ceos.or.kr/) 프론트엔드 팀에서 스터디를 하며 수행한 미션의 결과를 공유합니다.

# 🚩 미션 원문 링크

https://github.com/CEOS-Developers/react-messenger-14th

# 🚩 결과물 링크(vercel로 배포)

https://react-messenger-14th-one.vercel.app/friends

# 🚩 미션 목표

- [x] useState로 컴포넌트의 상태를 관리할 수 있게된다.
- [x] useEffect의 사용법을 이해한다.
- [x] Styled-Components를 통한 CSS-in-JS 및 CSS Preprocessor의 사용법을 익힙니다.

# ✔ 필수 요건

- [x] 함수형 컴포넌트를 사용한다.
- [x] tyled-component를 이용하여 스타일링 한다. 스타일링은 자유롭게! 기존에 있는 메신저를 가져오셔도 되고 완전히 독창적인걸 만드셔도 됩니다. 다만 기본 구성요소들은 지켜주세요! 그리고 색도 다양하게 넣어보시구요
- [x] 상단바에 메시지를 보내는 사람의 프로필을 띄운다. + 상단바의 프로필로 메시지 발신자를 바꿀 수 있게 한다.
- [x] 공백메시지는 입력되지 않도록 핸들링 한다. + alert 메세지 띄우기
- [x] 메시지 전송후 입력칸을 비워준다.
- [x] 메시지 전송후 스크롤을 밑으로 내려준다. (Hint : useEffect + scrollBy 이용)
- [x] 컴포넌트 이름을 역할이 잘 드러나게 짓는다.
- [x] 개발자도구에서 Style을 복사하지말고, 직접 styled-components를 사용하여 만드는 연습을 한다ㅠㅠ.
- [x] 결과 화면을 구현한다.

# ✔ 참고사항

- 아직 프로필 전환과 관련하여 버그가 있습니다.ㅠㅠ
- router-dom을 이용하여 여러 페이지를 만들어보려고 했습니다.
- input태그를 사용하는 대신 textarea태그를 활용하여 조금 더 카카오톡과 같은 UI를 나타내고자 했습니다.abs
- 미션의 결과화면과 다르게 친구 목록에서 바로 채팅방으로 이동할 수 있도록 했습니다. 후에 구현될 채팅방 목록 탭에서는 조금 다른 식으로 구현해보는 것이 목표입니다.
- css는 카카오톡과 최대한 비슷한 느낌을 내도록 만들었습니다.색상이나 위치를 뽑을 때 다른 레퍼런스를 참고하지는 않았습니다.

## 🤔 Key Questions

- 이번 주는 Key Question이 없군요! 음하핫

## 😀 로컬 실행방법

`npm start` : 로컬에서 react application을 자동으로 리로드하여 실행시켜줍니다.

## 😀 겪었던 문제들 & 해결 방법:

- vercel로 배포시 빌드 설정 오류:
  https://github.com/vercel/vercel/discussions/5566

- 데이터가 오지 않았을 때 : 옵셔널 체이닝 활용

- 프로필 전환 관련 오류: 준비 중입니다.
