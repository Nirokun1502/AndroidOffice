import React, { useEffect, useRef } from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import RootStack from './RootStack';
import analytics from '@react-native-firebase/analytics';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../redux/store';

const RootNavigator = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();
  const queryClient = new QueryClient();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={async () => {
        // @ts-ignore
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        // @ts-ignore
        const currentRouteName: string =
          // @ts-ignore
          navigationRef.getCurrentRoute().name;
        const trackScreenView = async (routeName: string) => {
          await analytics().logScreenView({
            screen_name: routeName,
            screen_class: routeName,
          });
        };

        if (previousRouteName !== currentRouteName) {
          // @ts-ignore
          routeNameRef.current = currentRouteName;
          await trackScreenView(currentRouteName);
        }
      }}>
      <QueryClientProvider client={queryClient}>
        <PersistGate persistor={persistor}>
          <RootStack />
        </PersistGate>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default RootNavigator;
