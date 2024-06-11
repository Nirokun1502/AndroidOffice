import { Stack, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const MostSalesPieChart = ({ data }) => {
  const chartData = data.map((item, index) => ({
    name: item.productName,
    sales: item.quantity,
    color: generateColor(index),
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  }));

  return (
    <Stack width={'100%'} justifyContent={'center'} alignItems={'center'}>
      <PieChart
        data={chartData}
        width={350}
        height={220}
        chartConfig={chartConfig}
        accessor="sales"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      <Text style={styles.title}>Sản phẩm bán chạy</Text>
    </Stack>
  );
};

const generateColor = index => {
  const colors = [
    'rgba(131, 167, 234, 1)',
    '#F00',
    'red',
    '#ffffff',
    'rgb(0, 0, 255)',
  ];
  return colors[index % colors.length];
};

const chartConfig = {
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 14,
    marginTop: 10,
    color: '#000',
  },
});

export default MostSalesPieChart;
