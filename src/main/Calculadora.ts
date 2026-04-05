

import { ICalculator } from './Icalculadora';

export class Calculadora implements ICalculator {
  private operations: Map<string, (a: number, b: number) => number>;
  private history: string[];
  private lastResult: number | undefined;

  constructor() {
    this.operations = new Map();
    this.history = [];
    this.lastResult = undefined;
  }

 
  calculate(operation: string, a: number, b: number): number;
  calculate(operation: string, a: number): number;
  calculate(operation: string, a: number, b?: number): number {
    if (!this.operations.has(operation)) {
      throw new Error(`Operación no disponible: ${operation}`);
    }

    let result: number;
    if (b !== undefined) {
      result = this.operations.get(operation)!(a, b);
    } else {
     
      throw new Error('Operación no soportada');
    }

   
    const historyEntry = `${operation}(${a}, ${b}) = ${result}`;
    this.history.push(historyEntry);
    this.lastResult = result;

    return result;
  }

  addOperation(name: string, operation: (a: number, b: number) => number): void {
    this.operations.set(name, operation);
  }


  getHistory(): string[] {
    return [...this.history];
  }

  getLastResult(): number | undefined {
    return this.lastResult;
  }

  setLastResult(value: number): void {
    this.lastResult = value;
  }

  getAvailableOperations(): string[] {
    return Array.from(this.operations.keys());
  }
}
