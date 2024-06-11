import AsyncStorage from '@react-native-async-storage/async-storage';

export const formatTimePlayer = (duration: number) => {
  if (duration < 0) return;
  const hours = Math.floor(duration / 3600);
  const mins = Math.floor((duration % 3600) / 60);
  const secs = Math.floor(duration % 60);

  let timePlayer = '';

  if (hours > 0) {
    timePlayer += '' + hours + ':' + (mins < 10 ? '0' : '');
  }

  timePlayer += '' + mins + ':' + (secs < 10 ? '0' : '');
  timePlayer += '' + secs;
  return timePlayer;
};

export const saveToAsyncStorage = async (
  key: string,
  value: any,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error('Failed to save data to AsyncStorage');
  }
};

export const getFromAsyncStorage = async <T>(
  key: string,
): Promise<T | null> => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data) as T;
    }
    return null;
  } catch (error) {
    throw new Error('Failed to retrieve data from AsyncStorage');
  }
};

export const removeFromAsyncStorage = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    throw new Error('Failed to remove data from AsyncStorage');
  }
};

export const getBlobFroUri = async (uri: string) => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  return blob;
};
