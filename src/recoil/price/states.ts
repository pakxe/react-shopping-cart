import { selector } from 'recoil';
import { cartItemListAtom } from '../cartItemList/states';
import { selectedCartItemIdListAtom } from '../selectedCartItemIdList/states';
import { cartItemQuantityAtomFamily } from '../cartItem/states';
import { DELIVERY_FEE } from '../../constants/price';

export const totalCartPriceSelector = selector<number>({
  key: 'totalCartPriceSelector',
  get: ({ get }) => {
    const cartItemList = get(cartItemListAtom);
    const selectedCartItemIdList = get(selectedCartItemIdListAtom);
    const selectedCartItem = cartItemList.filter(({ cartItemId }) => selectedCartItemIdList.includes(cartItemId));

    const totalCartPrice = selectedCartItem.reduce((totalCartPrice, { product, cartItemId }) => {
      const quantity = get(cartItemQuantityAtomFamily(cartItemId));
      const price = product.price;

      return totalCartPrice + quantity * price;
    }, 0);

    return totalCartPrice;
  },
});

export const cartDeliveryFeeSelector = selector<number>({
  key: 'cartDeliveryFeeSelector',
  get: ({ get }) => {
    const totalCartPrice = get(totalCartPriceSelector);

    return totalCartPrice >= DELIVERY_FEE.FREE_THRESHOLD ? 0 : DELIVERY_FEE.DEFAULT;
  },
});
