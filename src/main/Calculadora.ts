

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

  // Método sobrecargado para diferentes tipos de operaciones
  calculate(operation: string, a: number, b: number): number;
  calculate(operation: string, a: number): number; // Sobrecarga para operaciones unarias
  calculate(operation: string, a: number, b?: number): number {
    if (!this.operations.has(operation)) {
      throw new Error(`Operación no disponible: ${operation}`);
    }

    let result: number;
    if (b !== undefined) {
      result = this.operations.get(operation)!(a, b);
    } else {
      // Para operaciones unarias, asumimos que se usa una operación especial
      throw new Error('Operación no soportada');
    }

    // Registrar en historial
    const historyEntry = `${operation}(${a}, ${b}) = ${result}`;
    this.history.push(historyEntry);
    this.lastResult = result;

    return result;
  }

  addOperation(name: string, operation: (a: number, b: number) => number): void {
    this.operations.set(name, operation);
  }

  // Getters y setters con encapsulamiento doble
  getHistory(): string[] {
    return [...this.history];
  }

  getLastResult(): number | undefined {
    return this.lastResult;
  }

  setLastResult(value: number): void {
    this.lastResult = value;
  }

  // Método para obtener todas las operaciones disponibles
  getAvailableOperations(): string[] {
    return Array.from(this.operations.keys());
  }
}
