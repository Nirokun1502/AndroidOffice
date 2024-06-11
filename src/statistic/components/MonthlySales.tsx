import { getReportMonthly } from '@group4officesupplies/firebase/product';
import { Stack, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface IDataResponse {
  id: string;
  data: string;
}

const MonthlySales = ({ monthlyRevenue }: { monthlyRevenue: any }) => {
  // Lấy danh sách các tháng từ monthlyRevenue
  const labels = monthlyRevenue.map((item: any) => Object.keys(item)[0]);

  // Lấy danh sách doanh thu từ monthlyRevenue
  const revenueData = monthlyRevenue.map((item: any) => Object.values(item)[0]);

  const data = {
    labels: labels,
    datasets: [
      {
        data: revenueData,
      },
    ],
  };

  return (
    <Stack width={'100%'} justifyContent={'center'} alignItems={'center'}>
      <LineChart
        data={data}
        width={350}
        height={220}
        yAxisSuffix="đ"
        yAxisInterval={1}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
        withVerticalLabels={true}
      />
      <Text style={styles.caption}>Doanh thu hàng tháng</Text>
    </Stack>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  caption: {
    fontSize: 14,
    marginTop: 10,
    color: '#000',
  },
});

export default MonthlySales;
