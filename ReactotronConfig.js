// import Reactotron, {ReactotronReactNative} from 'reactotron-react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Reactotron as ReactotronType} from 'reactotron-core-client';

// declare global {
//   interface Console {
//     tron: ReactotronType<ReactotronReactNative> & ReactotronReactNative;
//   }
// }

// Reactotron?.setAsyncStorageHandler?.(AsyncStorage)
//   ?.configure()
//   ?.useReactNative()
//   ?.connect();
// console.tron = Reactotron;

import Reactotron, { networking } from 'reactotron-react-native';
import { NativeModules, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const isIOS = Platform.OS === 'ios';
let scriptHostname;
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

const yeOldeConsoleLog = console.log;

// make a new one
console.log = (...args) => {
  // always call the old one, because React Native does magic swizzling too
  yeOldeConsoleLog(...args);

  // send this off to Reactotron.
  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
    important: true,
  });
};

if (isIOS) {
  Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: scriptHostname }) //controls connection & communication settings
    .useReactNative({
      networking: {
        ignoreUrls: /localhost/,
      },
    }) // add all built-in react native plugins
    .connect(); // let's connect!
} else {
  Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure() // { host: scriptHostname } controls connection & communication settings
    .useReactNative({
      asyncStorage: false,
      networking: {
        ignoreUrls: /localhost/,
      },
    }) // add all built-in react native plugins
    .connect(); // let's connect!
}

Reactotron.clear();
