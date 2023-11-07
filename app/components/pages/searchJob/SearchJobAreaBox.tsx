import React from "react";
import Chip from "app/components/blocks/Chip/Chip";
import { AREA_LIST } from "app/constants/JobCategory";
import { View, Button, TouchableOpacity } from "react-native";
import Stack from "app/components/blocks/Stack/Stack";

interface SearchJobAreaBoxProps {
  defaultArea: string[];
  onSaveBtnClick: (areaList: string[]) => void;
}

const SearchJobAreaBox: React.FC<SearchJobAreaBoxProps> = ({
  defaultArea,
  onSaveBtnClick,
}) => {
  const [selectedArea, setSelectedArea] = React.useState(defaultArea);

  return (
    <View>
      <Stack styles={"flex-wrap justify-center p-4"} rowGap={2} columnGap={2}>
        {AREA_LIST.map((area) => (
          <Chip
            label={area}
            variant="outlined"
            active={selectedArea.includes(area)}
            onPress={() => setSelectedArea((current) => [...current, area])}
          />
        ))}
      </Stack>
      <TouchableOpacity>
        <Button
          onPress={() => onSaveBtnClick(selectedArea)}
          title="필터 적용"
          accessibilityLabel="Apply area filter"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchJobAreaBox;
