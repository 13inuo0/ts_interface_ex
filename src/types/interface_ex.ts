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
  [key: string]: string;
}
