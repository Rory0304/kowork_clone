import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ScreenHeader, { ScreenHeaderProps } from "./ScreenHeader";

interface ScreenProps extends ScreenHeaderProps {
  children: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ children, ...headerProps }) => {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
        <ScreenHeader {...headerProps} />
        <View style={[styles.screen, { paddingBottom: safeAreaInsets.bottom }]}>
          {children}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: Colors.lighter,
  },
});

export default Screen;
