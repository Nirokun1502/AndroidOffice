import Config from 'react-native-config';

const envData = {
  webClientId: Config.WEB_CLIENT_ID,
  youtubeApiKey: Config.YOUTUBE_API_KEY,
  adsUnitIdBanner: Config.ADS_UNIT_ID_BANNER,
  adsUnitIdRewarded: Config.ADS_UNIT_ID_REWARDED,
  BASE_URL: Config.BASE_URL,
};

export { envData };
