// 구조적 타이핑 structural typing
// 객체의 형태에 기반하여 타입을 검사하는 시스템
// 객체의 구조로 판단

interface User {
  name: string;
  age: number;
}

interface Person {
  name: string;
//   읽기 전용으로 바꿀 분 형태는 같기 때문에 문제없다.
  readonly age: number;
}

let user: User = {
  name: "철수",
  age: 20,
};

let person: Person = {
  name: "영희",
  age: 24,
};

user = person;
person = user;
// 구조적 타입 사용 가능.
// 키와 값의 타입이 완전히 일치해야한다.
// 지정된 타입의 출처가 달라도 정상적으로 타입체크.

// 만약 객체의 키는 같지만 값의 타입이 다르다면 X
// 하나만 옵셔널 속성이 붙는 경우도 X 다른 형태로 인식.

// let num: number = 10
// let str:string="A";
// num = str; // 타입 불일치, 에러
// str = num; // 타입 불일치, 에러
