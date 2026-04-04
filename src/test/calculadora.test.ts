import { Calculadora } from '../main/Calculadora';
import { Division } from '../main/division';

describe('Calculadora', () => {
  let calc: Calculadora;

  beforeEach(() => {
    calc = new Calculadora();
  });

  it('debe lanzar un error cuando se usa una operación no disponible', () => {
    expect(() => calc.calculate('suma', 5, 3)).toThrow('Operación no disponible: suma');
  });

  it('debe realizar una operación válida y registrarla en el historial', () => {
    const division = new Division();
    calc.addOperation('dividir', division.execute);

    const result = calc.calculate('dividir', 10, 2);
    expect(result).toBe(5);
    expect(calc.getHistory()).toContain('dividir(10, 2) = 5');
    expect(calc.getLastResult()).toBe(5);
  });

  it('debe devolver el historial actualizado', () => {
    const division = new Division();
    calc.addOperation('dividir', division.execute);

    calc.calculate('dividir', 10, 2);
    const history = calc.getHistory();

    expect(history).toHaveLength(1);
    expect(history[0]).toBe('dividir(10, 2) = 5');
  });

  it('debe permitir obtener las operaciones disponibles', () => {
    const division = new Division();
    calc.addOperation('dividir', division.execute);

    const operations = calc.getAvailableOperations();
    expect(operations).toContain('dividir');
    expect(operations).toHaveLength(1);
  });

  it('debe permitir establecer un nuevo resultado final', () => {
    calc.setLastResult(42);
    expect(calc.getLastResult()).toBe(42);
  });
});


