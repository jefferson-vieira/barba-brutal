export default class TelUtils {
  static format(phoneNumber: string): string {
    if (!phoneNumber) {
      return '';
    }

    return this.onlyNumbers(phoneNumber)
      .replace(/^(\d)/, '($1')
      .replace(/^(\(\d{2})(\d)/, '$1) $2')
      .replace(/(\d{4})(\d{1,5})/, '$1-$2')
      .replace(/-(\d{1})(\d{4})\d*?$/, '$1-$2');
  }

  static onlyNumbers(phoneNumber: string): string {
    if (!phoneNumber) {
      return '';
    }

    return phoneNumber.replace(/\D/g, '').slice(0, 11);
  }
}
