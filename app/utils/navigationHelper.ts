import { NAV_SCREENS } from "../constants/Routes";
import type { NavigationProp } from "@react-navigation/native";

type OpenNoticeItemModal = (
  navigation: NavigationProp<any, any>
) => (props?: { noticeId?: string }) => void;

type OpenJobPostDetailScreenProps = (
  navigation: NavigationProp<any, any>
) => (props?: { uuid?: string }) => void;

const openMainScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate("BottomTabNavigator", {
      screen: NAV_SCREENS.MainScreen,
      params: props,
    });
  };

const openNoticeItemModal: OpenNoticeItemModal =
  (navigation) =>
  (props = {}) => {
    navigation.navigate("ModalNavigator", {
      screen: NAV_SCREENS.NoticeItemScreen,
      params: props,
    });
  };

const openJobSearchScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate("SearchJobNavigator", props);
  };

const openJobPostDetailScreen: OpenJobPostDetailScreenProps =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate("SearchJobNavigator", {
      screen: NAV_SCREENS.JobPostDetailScreen,
      params: props,
    });
  };

const openVisaTestD101Screen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate("ModalNavigator", {
      screen: NAV_SCREENS.VisaTestD101,
      params: props,
    });
  };

const openVisaTestF27Screen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate("ModalNavigator", {
      screen: NAV_SCREENS.VisaTestF27,
      params: props,
    });
  };

const openMyApplyListScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate("ModalNavigator", {
      screen: NAV_SCREENS.MyApplyListScreen,
      params: props,
    });
  };

const openMyVisaEnrollScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate("ModalNavigator", {
      screen: NAV_SCREENS.MyVisaEnrollScreen,
      params: props,
    });
  };

const openMyVisaHistoryScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate("ModalNavigator", {
      screen: NAV_SCREENS.MyVisaHistoryScreen,
      params: props,
    });
  };

const openResumeEditBasicInfoScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate("ResumeEditNavigator", {
      screen: NAV_SCREENS.ResumeEditBasicInfoScreen,
      params: props,
    });
  };

const openResumeEditEduCareerScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate("ResumeEditNavigator", {
      screen: NAV_SCREENS.ResumeEditEduCareerScreen,
      params: props,
    });
  };

const openResumeEditLanguageScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate("ResumeEditNavigator", {
      screen: NAV_SCREENS.ResumeEditLanguageScreen,
      params: props,
    });
  };

const openHomeScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate("AuthNavigator", {
      screen: NAV_SCREENS.HomeScreen,
      param: props,
    });
  };

const openEmailSignInScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate("AuthNavigator", {
      screen: NAV_SCREENS.EmailSignInScreen,
      params: props,
    });
  };

const openEmailSignUpScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate("AuthNavigator", {
      screen: NAV_SCREENS.EmailSignUpScreen,
      params: props,
    });
  };

const openEmailCheckScreen =
  (navigation: NavigationProp<any, any>) => (props: { email: string }) => {
    navigation.navigate("AuthNavigator", {
      screen: NAV_SCREENS.EmailCheckScreen,
      params: props,
    });
  };

const openEmailCheckSuccessScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate("AuthNavigator", {
      screen: NAV_SCREENS.EmailCheckSuccessScreen,
      params: props,
    });
  };

const navigate = (
  navigation: NavigationProp<ReactNavigation.RootParamList>
) => ({
  openHomeScreen: openHomeScreen(navigation),
  openMainScreen: openMainScreen(navigation),
  openJobSearchScreen: openJobSearchScreen(navigation),
  openNoticeItemModal: openNoticeItemModal(navigation),
  openJobPostDetailScreen: openJobPostDetailScreen(navigation),
  openVisaTestD101Screen: openVisaTestD101Screen(navigation),
  openVisaTestF27Screen: openVisaTestF27Screen(navigation),
  openMyApplyListScreen: openMyApplyListScreen(navigation),
  openMyVisaHistoryScreen: openMyVisaHistoryScreen(navigation),
  openMyVisaEnrollScreen: openMyVisaEnrollScreen(navigation),
  openResumeEditBasicInfoScreen: openResumeEditBasicInfoScreen(navigation),
  openResumeEditEduCareerScreen: openResumeEditEduCareerScreen(navigation),
  openResumeEditLanguageScreen: openResumeEditLanguageScreen(navigation),
  openEmailSignInScreen: openEmailSignInScreen(navigation),
  openEmailSignUpScreen: openEmailSignUpScreen(navigation),
  openEmailCheckScreen: openEmailCheckScreen(navigation),
  openEmailCheckSuccessScreen: openEmailCheckSuccessScreen(navigation),
});

export default navigate;
