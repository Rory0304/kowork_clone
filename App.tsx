import React from "react";
import { KeyboardAvoidingView, Platform, StatusBar } from "react-native";
import { enableScreens } from "react-native-screens";
import AppNavigator from "./app/navigation/AppNavigator";
import QueryProvider from "./app/contexts/QueryProvider";
import { ProfileProvider } from "./app/contexts/ProfileProvider";
import { AuthProvider } from "./app/contexts/AuthProvider";
import { SupabaseClientProvider } from "./app/contexts/SupabaseClientProvider";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { RecoilRoot } from "recoil";
import Snackbars from "app/components/pages/global/Snackbars/Snackbars";
import Modals from "app/components/pages/global/Modals/Modals";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App: React.FC = () => {
  enableScreens();

  return (
    <AuthProvider>
      <ProfileProvider>
        <QueryProvider>
          <SupabaseClientProvider>
            <RecoilRoot>
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
                        <Modals />
                        <Snackbars />
                      </KeyboardAvoidingView>
                    </BottomSheetModalProvider>
                  </PaperProvider>
                </ActionSheetProvider>
              </GestureHandlerRootView>
            </RecoilRoot>
          </SupabaseClientProvider>
        </QueryProvider>
      </ProfileProvider>
    </AuthProvider>
  );
};

export default App;
