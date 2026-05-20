// 인터페이스 상속
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  //   name: string;
  //   age: number; //Person 인터페이스를 상속 받아 없어도 에러발생이 없다.
  skill: string;
}

const person: Person = {
  name: "John",
  age: 20,
};

const developer: Developer = {
  name: "Sucooding",
  age: 30,
  skill: "Front Developer",
};
