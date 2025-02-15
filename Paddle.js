const SPEED = .02

export class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem;
    this.reset()
  }

  get position() {
    return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue('--position'))
  }

  set position(value) {
    this.paddleElem.style.setProperty('--position', value)
  }

  rect() {
    return this.paddleElem.getBoundingClientRect()
  }

  reset() {
    this.position = 50;
  }

  update(timeDifference, ballPosition) {
    this.position += SPEED * timeDifference * (ballPosition - this.position)
  }
}
