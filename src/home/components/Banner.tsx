import React, { useRef } from 'react';
import { IBannerItem } from '../interface';
import { Image, View } from 'native-base';
import Carousel from 'react-native-reanimated-carousel';
import { Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Banner = ({ bannerData }: { bannerData: IBannerItem[] }) => {
  const navigator = useNavigation();
  const ref = useRef(null);
  const width = Dimensions.get('window').width;
  const RATIO_BANNER = 343 / 178;
  const QUANTITY_ITEM_RENDER_IN_NEED = 10;
  const isAutoPlay = true;
  const image = bannerData.map(item => item?.image);
  const handleNavigateBanner = () => {
    //   navigator.navigate( as never);
  };
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        ref={ref}
        width={width}
        height={width / RATIO_BANNER}
        windowSize={QUANTITY_ITEM_RENDER_IN_NEED}
        autoPlay={isAutoPlay}
        pagingEnabled={true}
        loop={image?.length > 1}
        snapEnabled={true}
        scrollAnimationDuration={300}
        autoPlayInterval={3000}
        data={[...image]}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigator} key={item}>
              <Image
                source={{ uri: `${item}?${new Date()}`, cache: 'reload' }}
                width={width}
                height={'100%'}
                resizeMode={'cover'}
                alt={'image'}
              />
            </TouchableOpacity>
          );
        }}></Carousel>
    </View>
  );
};

export default Banner;
