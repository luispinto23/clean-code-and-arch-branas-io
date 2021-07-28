import Coupon from './Coupon';
import Order from './Order';

test('should not create an order with invalid cpf', () => {
  const cpf = '111.111.111-11';
  expect(() => new Order(cpf)).toThrow(new Error('Invalid CPF'));
});

test('should create an order with 3 itens', () => {
  const cpf = '778.278.412-36';
  const order = new Order(cpf);
  order.addItem('Guitar', 1000, 2);
  order.addItem('Amplifier', 5000, 1);
  order.addItem('Cable', 30, 3);
  const total = order.getTotal();
  expect(total).toBe(7090);
});

test('should create an order with discount code', () => {
  const cpf = '778.278.412-36';
  const order = new Order(cpf);
  order.addItem('Guitar', 1000, 2);
  order.addItem('Amplifier', 5000, 1);
  order.addItem('Cable', 30, 3);
  order.addCoupon(new Coupon('VALE20', 20));
  const total = order.getTotal();
  expect(total).toBe(5672);
});
