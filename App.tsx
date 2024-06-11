/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './src/common/navigation/RootNavigator';
import analytics from '@react-native-firebase/analytics';
import { QueryClient } from 'react-query';
import { theme } from './src/common/theme/theme';
import { store } from './src/common/redux/store';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  useEffect(() => {
    const enableAnalytics = async () =>
      await analytics().setAnalyticsCollectionEnabled(true);
    enableAnalytics();
  }, []);

  const queryClient = new QueryClient();

  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </NativeBaseProvider>
  );
}
