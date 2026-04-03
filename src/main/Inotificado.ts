export interface INotificador {
  enviar(mensaje: string): void;
  obtenerMensajes(): string[];
}