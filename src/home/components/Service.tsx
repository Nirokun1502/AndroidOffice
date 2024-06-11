import React from 'react';
import { IServiceItem } from '../interface';
import { FlatList, Stack } from 'native-base';
import ServiceItem from './ServiceItem';

const Service = ({ data }: { data: IServiceItem[] }) => {
  return (
    <Stack
      mt={'8px'}
      ml={'16px'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => {
          return <ServiceItem data={item} />;
        }}
      />
    </Stack>
  );
};

export default Service;
