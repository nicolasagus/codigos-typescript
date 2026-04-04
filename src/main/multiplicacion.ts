import { IOperation } from "./Ioperacion";

export class Multiplication implements IOperation {
  execute(a: number, b: number): number {
    return a * b;
  }
}