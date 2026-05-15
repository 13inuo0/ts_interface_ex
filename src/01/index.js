"use strict";
// 인터페이스 작성.
// interface User {
//   name: string;
//   age: number;
//   gender: "male" | "female";
// }
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    name: "철수",
    age: 20,
    gender: "male",
};
const user2 = {
    name: "유리",
    age: 22,
    gender: "female",
};
const user3 = {
    name: "훈이",
    age: 25,
    gender: "male",
};
// 타입유형이 동일. 중복으로 작성되어 가독성이 떨어진다.
// 객체의 속성이 변경되면 타입 객체의 속성명도 같이 변경해줘야 하기때문에 유지보수면에 불리.
// 때문에 확장성을 고려하여 타입을 정의하는 방법인 인터페이스를 사용
//# sourceMappingURL=index.js.map