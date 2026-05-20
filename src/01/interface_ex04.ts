// 인터페이스 선택적 상속
interface Vehicle {
  brand: string;
  year?: number;
}
interface Car extends Vehicle {
  wheels: number;
}

// 옵셔널로 없어도 에러 없음.
const car1:Car={
    brand:"BMW",
    // year:1999,
    wheels:4,
}