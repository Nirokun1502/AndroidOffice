import { imageLogo } from '@group4officesupplies/common/constants/imagePath';
import { Box, Image, Stack } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function LoginHeader() {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  return (
    <Stack
      margin="auto"
      style={{
        paddingTop: insets.top,
      }}>
      <Image
        source={imageLogo.LOGO}
        alt=""
        width={'273px'}
        height={'200px'}
        resizeMode="cover"
      />
    </Stack>
  );
}
