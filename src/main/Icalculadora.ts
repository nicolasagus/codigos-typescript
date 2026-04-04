export interface ICalculator {
  calculate(operation: string, a: number, b: number): number;
  getHistory(): string[];
  getLastResult(): number | undefined;
}