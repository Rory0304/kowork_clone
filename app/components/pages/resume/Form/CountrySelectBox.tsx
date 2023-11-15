import React from "react";
import { ScrollView, Text, View, FlatList, Pressable } from "react-native";
import { countries } from "app/constants/Country.json";
import TextInput from "./TextInput";

interface CountrySelectBoxProps {
  onPress: (value: string) => void;
}

const CountrySelectBox: React.FC<CountrySelectBoxProps> = ({ onPress }) => {
  const [keyword, setKeyword] = React.useState("");
  const [searchedCountries, setSearchedCountries] = React.useState(countries);

  React.useEffect(() => {
    const result = searchedCountries.filter(
      (country) =>
        country.ko.includes(keyword) || country.name.includes(keyword)
    );

    setSearchedCountries(result);
  }, [keyword]);

  return (
    <FlatList
      data={searchedCountries}
      keyExtractor={(item) => item.name}
      ListHeaderComponent={
        <View className="py-2 bg-white">
          <Text className="pb-2 text-neutral-500">
            You can type only korean or english
          </Text>
          <TextInput
            value={keyword}
            placeholder="국가 검색"
            onChangeText={(value) => setKeyword(value)}
          />
        </View>
      }
      renderItem={({ item }) => (
        <Pressable onPress={() => onPress(`${item.name}(${item.ko})`)}>
          <Text className="py-4 font-medium">
            {item.name}({item.ko})
          </Text>
        </Pressable>
      )}
      stickyHeaderIndices={[0]}
      className="px-4"
    />
  );
};

export default CountrySelectBox;
