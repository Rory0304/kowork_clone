import React from "react";
import { enableScreens } from "react-native-screens";
import AppNavigator from "./app/navigation/AppNavigator";
import AppProvider from "./app/contexts/AppProvider";

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
      <AppNavigator />
    </AppProvider>
  );
};

export default App;
