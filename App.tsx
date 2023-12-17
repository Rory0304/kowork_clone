import React from "react";
import { KeyboardAvoidingView, Platform, StatusBar } from "react-native";
import { enableScreens } from "react-native-screens";
import AppNavigator from "./app/navigation/AppNavigator";
import AppProvider from "./app/contexts/AppProvider";
import { ProfileProvider } from "./app/contexts/ProfileProvider";
import { AuthProvider } from "./app/contexts/AuthProvider";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App: React.FC = () => {
  enableScreens();

  return (
    <AuthProvider>
      <ProfileProvider>
        <AppProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <ActionSheetProvider>
              <PaperProvider>
                <BottomSheetModalProvider>
                  <StatusBar barStyle="dark-content" />
                  <KeyboardAvoidingView
                    behavior={Platform.select({
                      ios: "padding",
                      android: undefined,
                    })}
                    style={{ flex: 1 }}
                  >
                    <AppNavigator />
                  </KeyboardAvoidingView>
                </BottomSheetModalProvider>
              </PaperProvider>
            </ActionSheetProvider>
          </GestureHandlerRootView>
        </AppProvider>
      </ProfileProvider>
    </AuthProvider>
  );
};

export default App;
