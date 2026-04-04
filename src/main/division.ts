import { IOperation } from "./Ioperacion";

export class Division implements IOperation {
  execute(a: number, b: number): number {
    if (b === 0) {
      throw new Error('División por cero');
    }
    return a / b;
  }
}