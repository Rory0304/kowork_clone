import React from "react";
import { KeyboardAvoidingView, Platform, StatusBar } from "react-native";
import { enableScreens } from "react-native-screens";
import AppNavigator from "./app/navigation/AppNavigator";
import AppProvider from "./app/contexts/AppProvider";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

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
          <StatusBar barStyle="dark-content" />
          <KeyboardAvoidingView
            behavior={Platform.select({ ios: "padding", android: undefined })}
            keyboardVerticalOffset={16}
            style={{ flex: 1 }}
          >
            <AppNavigator />
          </KeyboardAvoidingView>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </AppProvider>
  );
};

export default App;
