import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

type TRightAction = "back" | "close";

export interface ScreenHeaderProps {
  headerTitle: string;
  rightAction?: TRightAction;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  headerTitle,
  rightAction,
}) => {
  const navigation = useNavigation();

  const onPressBackHandle = () => navigation.goBack();

  const renderLeftAction = () => {
    if (rightAction === "back") {
      return (
        <View style={styles.leftAction}>
          {/* <BackArrowButton onPress={onPressBackHandle} /> */}
        </View>
      );
    }

    if (rightAction === "close") {
      return (
        <View style={styles.leftAction}>
          {/* <CrossButton onPress={onPressBackHandle} /> */}
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.header}>
      {renderLeftAction()}
      <Text style={styles.title}>{headerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 50,
  },
  leftAction: {
    position: "absolute",
    left: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default ScreenHeader;
