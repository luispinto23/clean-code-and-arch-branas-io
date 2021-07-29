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

test('should not allow an Order with an expired coupon', () => {
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
    coupon: 'VALE25'
  };
  const placeOrder = new PlaceOrder();

  expect(() => placeOrder.execute(input)).toThrow(new Error('Expired coupon'));
});
