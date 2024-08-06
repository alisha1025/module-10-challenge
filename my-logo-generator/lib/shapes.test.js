// lib/shapes.test.js

const { Circle, Triangle, Square } = require('./shapes');

describe('Shape classes', () => {
  test('Circle renders correctly', () => {
    const circle = new Circle('red');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  test('Triangle renders correctly', () => {
    const triangle = new Triangle('blue');
    expect(triangle.render()).toBe('<polygon points="150,20 280,180 20,180" fill="blue" />');
  });

  test('Square renders correctly', () => {
    const square = new Square('green');
    expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="green" />');
  });
});
