import Coupon from './Coupon';
import Order from './Order';

export default class PlaceOrder {
  coupons: any[];
  orders: Order[];
  constructor() {
    this.coupons = [
      {code: 'VALE20', percentage: 20, expireDate: new Date(2021, 11, 31)},
      {code: 'VALE25', percentage: 20, expireDate: new Date(2021, 0, 5)}
    ];
    this.orders = [];
  }

  execute(input: any) {
    const order = new Order(input.cpf);
    for (const item of input.items) {
      order.addItem(item.description, item.price, item.quantity);
    }
    if (input.coupon) {
      const coupon = this.coupons.find((coupon) => coupon.code === input.coupon);
      if (coupon) {
        const orderCoupon = new Coupon(coupon.code, coupon.percentage, coupon.expireDate);
        order.addCoupon(orderCoupon);
      }
    }
    const total = order.getTotal();
    this.orders.push(order);
    return {
      total
    };
  }
}
