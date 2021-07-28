import Coupon from './Coupon';
import Order from './Order';
import PlaceOrder from './PlaceOrder';

test('should post an Order', () => {
  const input = {
    cpf: '778.278.412-36',
    items: [
      {
        description: 'Guitar',
        price: 1000,
        quantity: 2
      },
      {
        description: 'Amplifier',
        price: 5000,
        quantity: 1
      },
      {
        description: 'Cable',
        price: 30,
        quantity: 3
      }
    ],
    coupon: 'VALE20'
  };
  const placeOrder = new PlaceOrder();
  const output = placeOrder.execute(input);
  expect(output.total).toBe(5672);
});
