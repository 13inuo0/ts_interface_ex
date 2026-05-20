// 인터페이스 상속
interface Person {
  name: string;
  age: number;
//   age: string; // 만약 스트링 타입으로 지정하게되면 아래 age 속성값들도 모두 ""로 문자열로 변경해줘야한다. 
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
