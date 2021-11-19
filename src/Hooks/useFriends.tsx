import { useState } from "react";

export default function useFriends(
  friendsArray: {
    id: number;
    photo: string;
    name: string;
    profileText: string;
  }[]
) {
  const [friends, setFriends] = useState(
    (friendsArray = [
      {
        id: 0,
        photo:
          "https://mblogthumb-phinf.pstatic.net/MjAxNzA3MzBfMjg2/MDAxNTAxMzQ1ODMyOTA5.k7YVeM9Z7srFguRFLbrHVCcHtJ-2wDbLfiFHD5wN4v4g.kCtwhcsXSV5kIk4o4qQNK61Wbcnr5QdrZbGPWpvbaNcg.PNG.lastmistake/%EC%96%B4%ED%94%BC%EC%B9%986.png?type=w800",
        name: "어피치",
        profileText: "나는 어피치!",
      },
      {
        id: 1,
        photo: "https://t1.daumcdn.net/cfile/blog/260CA94D57CC186328",
        name: "네오",
        profileText: "집가고싶네오",
      },
      {
        id: 2,
        photo:
          "https://item.kakaocdn.net/do/d97f27efd1d10d84215842e2e12752939f5287469802eca457586a25a096fd31",
        name: "튜브",
        profileText: "교수님 미워요",
      },
      {
        id: 3,
        photo:
          "https://i.pinimg.com/originals/78/a2/4e/78a24e8c7ee392147864fd1059cf74da.jpg",
        name: "무지",
        profileText: "무지 졸려",
      },
    ])
  );

  return { friends, setFriends, friendsArray };
}
