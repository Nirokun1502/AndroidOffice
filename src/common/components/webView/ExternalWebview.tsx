import { useNavigation, useRoute } from '@react-navigation/native';
import { Box, Button, HStack, Icon, ScrollView, View } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const ExternalWebview = () => {
  // @ts-ignore
  const { link } = useRoute()?.params;

  const insets = useSafeAreaInsets();
  const ref = useRef();
  const [currentHref, setCurrentHref] = useState('');
  const [height, setHeight] = useState(
    Dimensions.get('window').height - insets.top,
  );

  const onMessage = (event: any) => {
    const data: string = event?.nativeEvent?.data?.toString() || '';
    if (data.includes('http://') || data.includes('https://')) {
      const dataDecodeUri = decodeURIComponent(data).replace(/ /g, '');
      setCurrentHref(dataDecodeUri);
    } else {
      setHeight(Number(event.nativeEvent.data));
    }
  };

  useEffect(() => {
    setHeight(Dimensions.get('window').height - insets.top);

    return () => {
      setHeight(0);
    };
  }, [link]);

  const runJavascript = `
  setTimeout(function () {
    window.ReactNativeWebView.postMessage(window.location.href)
}, 0) 
  `;

  return (
    <>
      <View
        width={'100%'}
        position={'relative'}
        overflow={'hidden'}
        borderBottomRadius={'35px'}
        minHeight={'140px'}
        height={'140px'}
        mb={'10px'}></View>
      <ScrollView mt="-142px">
        <WebView
          source={{ uri: link }}
          onMessage={onMessage}
          javaScriptEnabled={true}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          style={{ height }}
          allowsBackForwardNavigationGestures
          // @ts-ignore
          ref={ref}
          injectedJavaScript={runJavascript}
        />
      </ScrollView>
    </>
  );
};
