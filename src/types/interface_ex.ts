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
const greet:Greet = (name)=>`Hello, ${name}`
