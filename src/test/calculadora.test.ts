import { Calculator } from '../calculadora/calculadora';
import { Addition, Subtraction, Multiplication, Division, Power } from '../operations';
describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
    calculator.addOperation("Suma", new Addition().execute);
    calculator.addOperation("Resta", new Subtraction().execute);
    calculator.addOperation("Multiplicación", new Multiplication().execute);
    calculator.addOperation("División", new Division().execute);
    calculator.addOperation("Potencia", new Power().execute);
  });

  test('should perform addition correctly', () => {
    const result = calculator.calculate("Suma", 5, 3);
    expect(result).toBe(8);
  });

  test('should perform subtraction correctly', () => {
    const result = calculator.calculate("Resta", 10, 4);
    expect(result).toBe(6);
  });

  test('should perform multiplication correctly', () => {
    const result = calculator.calculate("Multiplicación", 7, 8);
    expect(result).toBe(56);
  });

  test('should perform division correctly', () => {
    const result = calculator.calculate("División", 20, 4);
    expect(result).toBe(5);
  });

  test('should perform power correctly', () => {
    const result = calculator.calculate("Potencia", 2, 3);
    expect(result).toBe(8);
  });

  test('should handle division by zero', () => {
    expect(() => {
      calculator.calculate("División", 10, 0);
    }).toThrow('División por cero');
  });

  test('should maintain history', () => {
    calculator.calculate("Suma", 5, 3);
    const history = calculator.getHistory();
    expect(history.length).toBe(1);
    expect(history[0]).toContain('Suma');
  });

  test('should throw error for non-existent operation', () => {
    expect(() => {
      calculator.calculate("Operación no existente", 5, 3);
    }).toThrow('Operación no existente no está registrada');
  });

  test('should return correct history after multiple operations', () => {
    calculator.calculate("Suma", 5, 3);
    calculator.calculate("Resta", 10, 4);
    calculator.calculate("Multiplicación", 7, 8);
    
    const history = calculator.getHistory();
    expect(history.length).toBe(3);
    expect(history[0]).toContain('Suma');
    expect(history[1]).toContain('Resta');
    expect(history[2]).toContain('Multiplicación');
  });

  test('should clear history correctly', () => {
    calculator.calculate("Suma", 5, 3);
    const initialHistory = calculator.getHistory();
    expect(initialHistory.length).toBe(1);
    
    calculator.clearHistory();
    const clearedHistory = calculator.getHistory();
    expect(clearedHistory.length).toBe(0);
  });
});

Copy
typescript
