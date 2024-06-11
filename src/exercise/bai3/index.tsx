import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  HStack,
  Icon,
  Input,
  Radio,
  ScrollView,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../common/components/Header';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

const ExerciseThreeScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('university');
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
    getValues,
    reset,
  } = useForm();
  const onSubmit = (data: any) => {
    console.log('submiting with ', data);
  };
  const handleReset = () => {
    reset();
  };
  return (
    <SafeAreaView>
      <Header title="Bài tập 3" />
      <ScrollView mt={'20px'}>
        <Stack space={'26px'} mb={'100px'}>
          <Stack space={'20px'} px={'16px'}>
            <Text fontSize={'16px'} color={'#000'} fontWeight={600}>
              Thông tin cá nhân
            </Text>
            <FormControl isRequired isInvalid={'fullName' in errors}>
              <Controller
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                  <Input
                    onBlur={onBlur}
                    placeholder="Họ và tên"
                    onChangeText={val => onChange(val)}
                    value={value}
                    color={'#000'}
                    fontSize={'16px'}
                  />
                )}
                name="fullName"
                rules={{ required: 'Tên không được để trống' }}
                defaultValue=""
              />
              <FormControl.ErrorMessage>
                {errors.lastName?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={'definition' in errors}>
              <Controller
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                  <Input
                    onBlur={onBlur}
                    placeholder="Căn cước công dân"
                    onChangeText={val => onChange(val)}
                    value={value}
                    color={'#000'}
                    fontSize={'16px'}
                  />
                )}
                name="definition"
                rules={{ required: 'Căn cước không được để trống' }}
                defaultValue=""
              />
              <FormControl.ErrorMessage>
                {errors.lastName?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          </Stack>
          <Stack space={'20px'} px={'16px'}>
            <Box bgColor={'amber.200'} py={'8px'}>
              <Text
                textAlign={'center'}
                fontSize={'16px'}
                color={'#000'}
                fontWeight={600}>
                Bằng cấp
              </Text>
            </Box>
            <Radio.Group
              name="myRadioGroup"
              value={value}
              onChange={nextValue => {
                setValue(nextValue);
              }}>
              <HStack
                alignItems={'center'}
                justifyContent={'space-between'}
                px={'20px'}
                width={'100%'}>
                <Radio value="university" my="1">
                  <Text color={'#000'}>Đại học</Text>
                </Radio>
                <Radio value="college" my="1">
                  <Text color={'#000'}>Cao đẳng</Text>
                </Radio>
                <Radio value="intermediate" my="1">
                  <Text color={'#000'}>Trung cấp</Text>
                </Radio>
              </HStack>
            </Radio.Group>
          </Stack>
          <Stack space={'20px'} px={'16px'}>
            <Box bgColor={'amber.200'} py={'8px'}>
              <Text
                textAlign={'center'}
                fontSize={'16px'}
                color={'#000'}
                fontWeight={600}>
                Sở thích
              </Text>
            </Box>
            <VStack
              width="100%"
              space={4}
              justifyContent={'center'}
              alignItems={'center'}>
              <FormControl isRequired isInvalid={'hobbies' in errors}>
                <Controller
                  control={control}
                  render={({ field }) => (
                    <Checkbox.Group
                      onChange={values => {
                        field.onChange(values);
                      }}
                      value={field.value}
                      flexDirection="row">
                      <HStack
                        width={'100%'}
                        alignItems={'center'}
                        justifyContent={'space-between'}>
                        <Checkbox value="play game" colorScheme="blue">
                          <Text color={'#000'} mx={2}>
                            Chơi game
                          </Text>
                        </Checkbox>
                        <Checkbox colorScheme="blue" value="reading">
                          <Text color={'#000'} mx={2}>
                            Đọc sách
                          </Text>
                        </Checkbox>
                        <Checkbox value="news" colorScheme="blue">
                          <Text color={'#000'} mx={2}>
                            Đọc báo
                          </Text>
                        </Checkbox>
                      </HStack>
                    </Checkbox.Group>
                  )}
                  rules={{ required: 'Phải có ít nhất một sở thích' }}
                  name="hobbies"
                  defaultValue=""
                />
                <FormControl.ErrorMessage>
                  {errors.hobbies?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            </VStack>
          </Stack>
          <Center width={'100%'} px={'16px'}>
            <HStack alignItems={'center'} space={'16px'}>
              <Button
                borderRadius={'8px'}
                _text={{
                  fontWeight: 600,
                  fontSize: '16px',
                }}
                onPress={handleSubmit(onSubmit)}>
                Đăng ký
              </Button>
              <Button
                borderRadius={'8px'}
                _text={{
                  fontWeight: 600,
                  fontSize: '16px',
                }}
                onPress={handleReset}>
                Nhập lại
              </Button>
              <Button
                borderRadius={'8px'}
                _text={{
                  fontWeight: 600,
                  fontSize: '16px',
                }}
                onPress={() => {
                  navigation.goBack();
                }}>
                Thoát
              </Button>
            </HStack>
          </Center>
          {isSubmitted && isValid && (
            <Stack space={'20px'} bgColor={'green.100'} px={'16px'} py={'16px'}>
              <Text color={'#000'}>Thông tin</Text>
              <Text color={'#000'}>
                Họ và tên: <Text color={'#000'}>{getValues('fullName')}</Text>
              </Text>
              <Text color={'#000'}>
                Căn cước công dân:{' '}
                <Text color={'#000'}>{getValues('definition')}</Text>
              </Text>
              <Text color={'#000'}>
                Bằng cấp: <Text color={'#000'}>{value}</Text>
              </Text>
              <Text color={'#000'}>
                Sở thích: <Text color={'#000'}>{getValues('hobbies')}</Text>
              </Text>
            </Stack>
          )}
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExerciseThreeScreen;
