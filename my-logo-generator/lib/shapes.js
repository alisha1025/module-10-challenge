// lib/shapes.js

// lib/shapes.js

export class Circle {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  export class Triangle {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `<polygon points="150,25 225,175 75,175" fill="${this.color}" />`;
    }
  }
  
  export class Square {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />`;
    }
  }
  