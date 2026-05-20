// 인터페이스 다중 상속
// 부모와 자식 관계가 아니어도 적절하게 인터페이스를 조합하여 새로운 인터페이스를 정의할 때 사용.
// interface Identifier sxtends Other1, Other2, ...OtherN{}
// 콤마를 이용하여 여러개를 상속.

interface User {
  name: string;
  age: number;
}
interface Log {
  log(message: string): void;
}
// 두 인터페이스를 묶어주는 다중상속 인터페이스.
interface UserWithLogging extends User, Log {}

// 다중 상속 인터페이스를 사용.
const User: UserWithLogging = {
  name: "민수",
  age: 20,
  log(message: string) {
    console.log(message);
  },
};
