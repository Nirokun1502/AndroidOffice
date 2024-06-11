import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    basic: {
      1: '#FFFFFF',
      2: '#1A1A1A',
      3: '#E6E6E6',
      4: '#2B3A55',
      5: '#FF0032',
      6: '#E82629',
      7: '#737B7B',
      8: '#F1F1F1',
      9: '#22313F',
      10: '#C2C2C2',
      11: '#ebebeb',
      12: '#FF4842',
      16: '#637381',
      17: '#54D62C',
      18: '#98A1B3',
      19: '#666E80',
      20: '#EC3A81',
      21: '#98A1B3',
      22: '#666E80',
      23: '#000000',
    },
    button: {
      1: '#E82629',
    },
    background: {
      1: 'rgba(232, 38, 41, 0.1)',
      2: 'rgba(145, 158, 171, 0.12)',
      3: 'rgba(232, 38, 41, 0.1)',
      4: 'rgba(145, 158, 171, 0.24)',
      5: 'rgba(0, 0, 0, 0.25)',
      6: 'rgba(0, 0, 0, 0.596)',
      7: 'rgba(145, 158, 171, 0.32)',
      8: 'rgba(34, 49, 63, 0.3)',
      9: 'rgba(145, 158, 171, 0.8)',
      10: '#f8f6f6',
    },
    label: {
      success: {
        background: 'rgba(84, 214, 44, 0.16)',
        text: '#229A16',
      },
      error: {
        background: 'rgba(255,72,66, 0.16)',
        text: '#B72136',
      },
    },
  },
  config: {
    initialColorMode: 'light',
  },
});
