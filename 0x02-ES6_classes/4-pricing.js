/* eslint-disabled */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // setter
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount be must a number');
    }
    this._amount = newAmount;
  }

  set currency(currency) {
    this._currency = new Currency(currency);
  }

  // displayFullPrice method
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // convertPrice method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}