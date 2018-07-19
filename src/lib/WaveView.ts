export default class WaveView {
  private context: CanvasRenderingContext2D;
  private audio: any;

  constructor(canvas: HTMLCanvasElement, audio: Float32Array) {
    this.context = canvas.getContext('2d');
    this.audio = audio;

    this.clear();
  }

  public draw(): void {
    this.clear();
  }

  public clear(): void {
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.width);
  }
}
