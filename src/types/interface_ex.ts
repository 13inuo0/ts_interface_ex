export interface User {
  name: string;
  age: number;
  gender: "male" | "female";
}

interface User2 {
  (n1: number, n2: number): number;
}

interface Greet {
  (name: string): string;
}
const greet: Greet = (name) => `Hello, ${name}`;

// 키와 값이 모두 문자열인 경우 인덱스 시그니처 사용가능.
export interface User4 {
  // name: string;
  // gender: string;
  // address: string;
  [key: string]: string | number;
}

// 인터페이스 병합
// 같은 이름의 인터페이스는 자동으로 합쳐진다.
interface Same {
  name: string;
}
interface Same {
  age: number;
}

let user5: Same = {
  name: "철수",
  age: 20,
}; //오류 없음
