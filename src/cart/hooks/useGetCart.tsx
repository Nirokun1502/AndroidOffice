import { QUERY_KEYS } from '../../common/constants/querykeys.constants';
import { getCartItemByUserID } from '../../common/services/cart.service';
import { useQuery } from 'react-query';

export const useGetCart = (userID: string) => {
  return useQuery([QUERY_KEYS.CART, userID], () => getCartItemByUserID(userID));
};
