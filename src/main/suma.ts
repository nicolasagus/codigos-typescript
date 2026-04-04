interface IOperacion {
  execute(a: number, b: number): number;
}

export class Addition implements IOperacion {
  execute(a: number, b: number): number {
    return a + b;
  }
}