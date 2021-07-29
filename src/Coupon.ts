export default class Coupon {
  code: string;
  percentage: number;
  expireDate: Date | undefined;
  constructor(code: string, percentage: number, expireDate?: Date) {
    if (expireDate && !this.isActive(expireDate)) throw new Error('Expired coupon');
    this.code = code;
    this.percentage = percentage;
    this.expireDate = expireDate;
  }

  isActive(expireDate: Date) {
    const currentDate = new Date();
    return expireDate.setHours(0, 0, 0, 0) >= currentDate.setHours(0, 0, 0, 0) ? true : false;
  }
}
