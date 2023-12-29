import AsyncStorage from '@react-native-async-storage/async-storage';

interface AsyncStorageItem {
  name: string;
  item: string;
}

const LocalStorage = {
  setItem: async ({ name, item }: AsyncStorageItem) => {
    return await AsyncStorage.setItem(name, item);
  },

  getItem: async (name: AsyncStorageItem['name']) => {
    const result = await AsyncStorage.getItem(name);
    return result ? JSON.parse(result) : '';
  },
};

export default LocalStorage;
