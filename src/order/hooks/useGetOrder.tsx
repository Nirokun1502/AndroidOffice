import { QUERY_KEYS } from '../../common/constants/querykeys.constants';
import { getOrdersByUserID } from '../../common/services/order.service';
import { useQuery } from 'react-query';

export const useGetOrders = (userID: string) => {
  return useQuery([QUERY_KEYS.ORDER, userID], () => getOrdersByUserID(userID));
};
