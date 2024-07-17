/* eslint-disabled */

export default class Airport {
    constructor(name, code) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
  
      this._name = name;
      this._code = code;
    }
  
    // getter
    get [Symbol.toStringTag]() {
      return this._code;
    }
  }