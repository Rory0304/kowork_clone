import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { countries } from 'app/constants/Country.json';
import useDebounce from 'app/hooks/useDebounce';

import TextInput from '../../blocks/Form/TextInput';

interface CountrySelectBoxProps {
  onPress: (value: string) => void;
}

const CountrySelectBox: React.FC<CountrySelectBoxProps> = ({ onPress }) => {
  const [keyword, setKeyword] = React.useState('');
  const [searchedCountries, setSearchedCountries] = React.useState(countries);
  const [debouncedKeyword, setDebouncedKeyword] = React.useState('');

  useDebounce(() => setDebouncedKeyword(keyword), 300, [keyword]);

  React.useEffect(() => {
    const result = countries.filter(
      country =>
        country.ko.includes(debouncedKeyword) ||
        country.name.includes(debouncedKeyword)
    );

    setSearchedCountries(result);
  }, [debouncedKeyword]);

  return (
    <FlatList
      data={searchedCountries}
      keyExtractor={item => item.name}
      ListHeaderComponent={
        <View className="py-2 bg-white">
          <Text className="pb-2 text-neutral-500">
            You can type only korean or english
          </Text>
          <TextInput
            value={keyword}
            placeholder="국가 검색"
            onChangeText={value => setKeyword(value)}
          />
        </View>
      }
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPress(`${item.name}(${item.ko})`)}>
          <Text className="py-4 font-medium">
            {item.name}({item.ko})
          </Text>
        </TouchableOpacity>
      )}
      stickyHeaderIndices={[0]}
      className="px-4"
    />
  );
};

export default CountrySelectBox;
