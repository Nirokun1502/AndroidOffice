import { Stack, Box, HStack, Image, Text } from 'native-base';
import { IOrderList } from '@group4officesupplies/common/interface/user.interface';

interface ChildComponentProps {
  orderItems: IOrderList; // Sử dụng kiểu OrderItem[] cho orders
}

const OrderDetails: React.FC<ChildComponentProps> = ({ orderItems }) => {
  const items = orderItems.orders;

  return (
    <Stack padding={'100px'} space={'10px'}>
      {items?.map((item, index) => (
        <Stack key={'ss' + index} margin={'20px'}>
          <Box flexDirection="row" alignItems="center" marginLeft={'-100px'}>
            <Image
              source={{
                uri: item?.image, // Sử dụng link hình ảnh từ sản phẩm
              }}
              width={'80px'}
              height={'80px'}
              marginLeft={'20px'}
              alt={'image product'}
            />
            <HStack width={'300px'}>
              <Text color={'#000'}>{item.title}</Text> <Text>hello</Text>
              {/* Hiển thị tên sản phẩm */}
            </HStack>
          </Box>
          {/* Separator */}
          <Box
            width={'100%'}
            borderWidth={'1px'}
            borderColor={'#eaeaea'}
            borderStyle={'dashed'}
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default OrderDetails;
