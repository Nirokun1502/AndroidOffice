import { Image, Stack, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IServiceItem } from '../interface';
import { useNavigation } from '@react-navigation/native';

const ServiceItem = ({ data }: { data: IServiceItem }) => {
  const { id, image, title, deep_link, route } = data;
  const navigator = useNavigation();
  const handleNavigateService = () => {
    if (route) {
      // @ts-ignore
      // navigator.navigate(link as never, {} as never);
    } else if (deep_link) {
      // @ts-ignore
      // navigator.navigate(deep_link as never, {} as never);
    }
  };
  return (
    <TouchableOpacity
      onPress={handleNavigateService}
      style={{ marginRight: 30 }}>
      <Stack justifyContent={'center'} alignItems={'center'} space={1}>
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          overflow={'hidden'}
          borderRadius={'200px'}
          width={'60px'}
          height={'60px'}>
          <Image
            source={{ uri: image }}
            alt="icon"
            width={'100%'}
            height={'100%'}
          />
        </Stack>
        <Text
          fontWeight={400}
          fontSize={'12px'}
          color={'#000'}
          lineHeight={'16px'}
          bgColor={'red'}
          isTruncated>
          {title}
        </Text>
      </Stack>
    </TouchableOpacity>
  );
};

export default ServiceItem;
