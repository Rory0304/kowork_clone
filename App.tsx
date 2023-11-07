import React from "react";
import { enableScreens } from "react-native-screens";
import AppNavigator from "./app/navigation/AppNavigator";
import AppProvider from "./app/contexts/AppProvider";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const supportedLanguages: string[] = [
  "en",
  "fr",
  "de",
  "sv",
  "da",
  "ru",
  "pt",
  "pl",
  "zh",
  "ms",
  "es",
  "it",
];

const defaultLanguage = "en";
const defaultLocale = "en-us";

const App: React.FC = () => {
  enableScreens();

  return (
    <AppProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <AppNavigator />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </AppProvider>
  );
};

export default App;
