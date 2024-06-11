import { Button, HStack, Text } from 'native-base';
import React from 'react';

interface IHeaderSection {
  title: string;
  handleNavigate: () => void;
}

const HeaderSection = ({ title, handleNavigate }: IHeaderSection) => {
  return (
    <HStack px={'16px'} alignItems={'center'} justifyContent={'space-between'}>
      <Text
        color={'#000'}
        fontSize={'18px'}
        fontWeight={700}
        lineHeight={'25px'}>
        {title}
      </Text>
      <Button
        onPress={handleNavigate}
        variant={'link'}
        pr={0}
        _text={{ color: 'rgba(61, 155, 224, 1)', fontSize: '12px' }}>
        Xem tất cả
      </Button>
    </HStack>
  );
};

export default HeaderSection;
