import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyOrderHeader from './components/MyOrderHeader';
import { ScrollView, Stack } from 'native-base';
import MyOrderItem from './components/MyOrderItem';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const MyOrderContainer = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const jwt = await AsyncStorage.getItem('jwt');

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      };
      const response = await axios.get(
        'http://10.0.2.2:5454/api/orders/user',
        config,
      );
      setOrders(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  useCallback(() => {
    fetchOrders();
  }, []);
  useFocusEffect(
    useCallback(() => {
      fetchOrders();
    }, []),
  );
  return (
    <SafeAreaView>
      <MyOrderHeader title={'Đơn hàng của tôi'} />
      <ScrollView>
        <Stack
          space={'12px'}
          paddingTop={'16px'}
          paddingLeft={'16px'}
          paddingRight={'16px'}
          paddingBottom={'175px'}>
          <ScrollView>
            {!!orders &&
              orders.map((order, index) => (
                <MyOrderItem key={`order#${index}`} item={order} />
              ))}
          </ScrollView>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyOrderContainer;
