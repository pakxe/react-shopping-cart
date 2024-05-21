import { useRecoilValue, useSetRecoilState } from 'recoil';
import { requestCartItemList, requestDeleteCartItem } from '../../apis/cartItemList/cartItemList';
import { cartItemListState, cartItemListStateQuery } from './cartItemListState';
import { selectedCartItemIdListState } from '../selectedCartItemIdList/selectedCartItemIdListState';

export const useCartItemList = () => {
  const setCartItemList = useSetRecoilState(cartItemListStateQuery);
  const cartItemList = useRecoilValue(cartItemListState);
  const setSelectedCartItemIdList = useSetRecoilState(selectedCartItemIdListState);

  const updateCartItemList = async () => {
    const updatedCartItemList = await requestCartItemList();

    setCartItemList(updatedCartItemList);
  };

  const deleteCartItem = async (cartItemId: number) => {
    await requestDeleteCartItem(cartItemId);

    const newCartItemList = cartItemList.filter((cartItem) => cartItem.cartItemId !== cartItemId);

    setSelectedCartItemIdList((prev) => prev.filter((id) => id !== cartItemId)); // 아이템을 삭제하면 선택 목록에서도 삭제되는 사이드 이펙트
    setCartItemList(newCartItemList);
  };

  return { updateCartItemList, deleteCartItem };
};