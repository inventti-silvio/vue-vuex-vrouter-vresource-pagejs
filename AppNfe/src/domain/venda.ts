export default class Hello {
  constructor(public name?: string) {}
  hello() {
    return "hello " + this.name;
  }
}

let hi = new Hello();
