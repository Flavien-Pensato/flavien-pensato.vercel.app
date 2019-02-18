export class Sprite {
  constructor(options) {
    this.canvasContext = options.canvasContext;
    this.image = options.image;
    this.sourceX = options.sourceX || 0;
    this.sourceY = options.sourceY || 0;
    this.sourceWidth = options.sourceWidth;
    this.sourceHeight = options.sourceHeight;
    this.destinationX = options.destinationX || 0;
    this.destinationY = options.destinationY || 0;
    this.height = options.height;
    this.width = options.width;

    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 0;
    this.loop = options.loop || false;
    this.numberOfFrames = options.numberOfFrames || 1;
  }

  update = () => {
    this.tickCount += 1;

    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;

      // Go to the next frame
      if (this.frameIndex < this.numberOfFrames - 1) {
        // Go to the next frame
        this.frameIndex += 1;
      } else if (this.loop) {
        this.frameIndex = 0;
      }
    }
  }

  render = () => {
    this.canvasContext.clearRect(0, 0, this.width, this.height);
    this.canvasContext.drawImage(
      this.image,
      this.frameIndex * this.sourceY / this.numberOfFrames,
      this.sourceX,
      this.sourceHeight / this.numberOfFrames,
      this.sourceWidth,
      this.destinationY,
      this.destinationX,
      this.width / this.numberOfFrames,
      this.height,
    );
  }
}
