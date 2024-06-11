import { Box, Text } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';

// create toast without using hooks
export const toastMessageConfig = {
  expriredSessionToast: () => {
    const { t } = useTranslation();
    return (
      <Box bgColor="popup.error" padding="10px" borderRadius="10px">
        <Text fontWeight={500}>{t('expiredSession')}</Text>
      </Box>
    );
  },
};
