import Header from '@group4officesupplies/exercise/common/components/Header';
import { Box, Stack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MonthlySales from './components/MonthlySales';
import MostSalesPieChart from './components/MostSalesPieChart';
import firestore from '@react-native-firebase/firestore';

const StatisticScreen = () => {
  const [orders, setOrders] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [monthlyRevenue, setMonthlyRevenue] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersSnapshot = await firestore().collection('orders').get();
        const ordersList = ordersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersList);
        calculateRevenue(ordersList);
        calculateMonthlyRevenue(ordersList);
        calculateBestSellingProducts(ordersList);
      } catch (error) {
        console.error('Error fetching orders: ', error);
      }
    };

    fetchOrders();
  }, []);

  const calculateRevenue = ordersList => {
    let totalRevenue = 0;
    ordersList.forEach(order => {
      order.items.forEach(item => {
        totalRevenue += item.price * item.quantity;
      });
    });
    setRevenue(totalRevenue);
  };

  const parseDate = dateString => {
    const parts = dateString.split(' ');
    const monthMap = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12',
    };
    const day = parts[1].replace(',', '');
    const month = monthMap[parts[0]];
    const year = parts[2];
    return new Date(`${year}-${month}-${day}`);
  };

  const calculateMonthlyRevenue = ordersList => {
    const revenue = [];

    ordersList.forEach(order => {
      const createdAt = parseDate(order.createdAt);
      const month = `${createdAt.getFullYear()}-${(createdAt.getMonth() + 1)
        .toString()
        .padStart(2, '0')}`;
      const itemRevenue = order.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );

      const monthlyObject = {
        [month]: itemRevenue,
      };

      revenue.push(monthlyObject);
    });

    setMonthlyRevenue(revenue);
  };

  console.log('order', orders);
  console.log('revenue', revenue);
  console.log('monthlyRevenue', monthlyRevenue);

  const calculateBestSellingProducts = async ordersList => {
    const productMap = new Map();

    // Tính toán số lượng bán của từng sản phẩm
    ordersList.forEach(order => {
      order.items.forEach(item => {
        const { productID, quantity } = item;
        if (productMap.has(productID)) {
          productMap.set(productID, productMap.get(productID) + quantity);
        } else {
          productMap.set(productID, quantity);
        }
      });
    });

    // Chuyển Map thành mảng và sắp xếp theo số lượng bán giảm dần
    const sortedProducts = [...productMap.entries()].sort(
      (a, b) => b[1] - a[1],
    );

    // Lấy danh sách sản phẩm bán chạy (ở đây là 5 sản phẩm đầu tiên)
    const topProducts = sortedProducts.slice(0, 5);

    // Lấy thông tin chi tiết của từng sản phẩm từ Firestore
    const productsPromises = topProducts.map(async ([productId, quantity]) => {
      const productDoc = await firestore()
        .collection('products')
        .doc(productId.trim().replace(/['"]+/g, ''))
        .get();
      const productName = productDoc.exists
        ? productDoc.data().title
        : 'Unknown';
      return {
        productId,
        productName,
        quantity,
      };
    });

    // Chờ tất cả các Promise hoàn thành
    const products = await Promise.all(productsPromises);

    setBestSellingProducts(products);
  };

  console.log('bestSellingProducts', bestSellingProducts);

  return (
    <SafeAreaView>
      <Header title="Thống kê" />
      <Stack
        alignItems={'center'}
        justifyContent={'center'}
        space={'16px'}
        px={'16px'}
        mt={'16px'}>
        <MonthlySales monthlyRevenue={[{ '2023-05': 10 }, { '2023-06': 20 }]} />
        <Box width={'100%'} bgColor={'#000'} height={'1px'} />
        <MostSalesPieChart data={bestSellingProducts} />
        {/* <MostSalesPieChart /> */}
      </Stack>
    </SafeAreaView>
  );
};

export default StatisticScreen;
