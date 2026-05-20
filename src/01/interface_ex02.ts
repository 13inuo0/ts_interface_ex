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

// 가독성 면에서 의미상 관련된 것 끼리 상속해주는 것이 안정적인 타입 시스템을 구축할 수 있다.
// ex )) person - developer, Car - BMW
