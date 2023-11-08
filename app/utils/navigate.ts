import { NAV_SCREENS } from "../constants/Routes";
import type { NavigationProp } from "@react-navigation/native";

type OpenNoticeItemModal = (
  navigation: NavigationProp<any, any>
) => (props?: { noticeId?: string }) => void;

type OpenJobPostDetailScreenProps = (
  navigation: NavigationProp<any, any>
) => (props?: { id?: string }) => void;

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


const navigate = (
  navigation: NavigationProp<ReactNavigation.RootParamList>
) => ({
  openJobSearchScreen: openJobSearchScreen(navigation),
  openNoticeItemModal: openNoticeItemModal(navigation),
  openJobPostDetailScreen: openJobPostDetailScreen(navigation),
  openVisaTestD101Screen: openVisaTestD101Screen(navigation),
  openVisaTestF27Screen: openVisaTestF27Screen(navigation),
});

export default navigate;
