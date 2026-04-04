import { IOperation } from "./Ioperacion";

export class Subtraction implements IOperation {
  execute(a: number, b: number): number {
    return a - b;
  }
}