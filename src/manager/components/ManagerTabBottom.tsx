import { Box, HStack, Image, Pressable, Text } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface TabButtonProps {
  sourceImage: string;
  title: string;
  isLastChild?: boolean;
  onPress: () => void;
}

const ManagerTabBottom = ({
  onPress,
  sourceImage,
  title,
  isLastChild,
}: TabButtonProps) => {
  const { t } = useTranslation();
  return (
    <Box
      borderBottomWidth={isLastChild ? '0px' : '1px'}
      borderColor={'#F1F1F1'}
      bgColor={'#FFF'}>
      <Pressable
        width={'100%'}
        _pressed={{
          bgColor: 'gray.200',
        }}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        pt={'15px'}
        pb={'5px'}
        borderRadius={5}
        bgColor={'#FFF'}
        onPress={onPress}>
        <HStack alignItems={'center'} space={2} pb={'11px'}>
          <Box
            bgColor={'#E826291A'}
            padding={'10px'}
            borderRadius={'100px'}
            mr={'16px'}>
            <Image
              //@ts-ignore
              source={sourceImage !== undefined ? sourceImage : ''}
              alt=""
            />
          </Box>
          <Text fontSize={'sm'} color={'#22313F'} fontFamily={'Averta'}>
            {t(title)}
          </Text>
        </HStack>
      </Pressable>
    </Box>
  );
};

export default ManagerTabBottom;
