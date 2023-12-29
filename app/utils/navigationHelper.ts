import type { NavigationProp } from '@react-navigation/native';

import { NAV_SCREENS } from '../constants/Routes';

type OpenNoticeItemModal = (
  navigation: NavigationProp<any, any>
) => (props?: { noticeId?: string }) => void;

type OpenJobPostDetailScreenProps = (
  navigation: NavigationProp<any, any>
) => (props?: { uuid?: string }) => void;

const openMainScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('BottomTabNavigator', {
      screen: NAV_SCREENS.MainScreen,
      params: props,
    });
  };

const openNoticeItemModal: OpenNoticeItemModal =
  navigation =>
  (props = {}) => {
    navigation.navigate('ModalNavigator', {
      screen: NAV_SCREENS.NoticeItemScreen,
      params: props,
    });
  };

const openJobSearchScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('SearchJobNavigator', props);
  };

const openJobPostDetailScreen: OpenJobPostDetailScreenProps =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('ModalNavigator', {
      screen: NAV_SCREENS.JobPostDetailScreen,
      params: props,
    });
  };

const openSearchJobPostScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('ModalNavigator', {
      screen: NAV_SCREENS.SearchJobPostScreen,
      params: props,
    });
  };

const openVisaTestD101Screen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('ModalNavigator', {
      screen: NAV_SCREENS.VisaTestD101,
      params: props,
    });
  };

const openVisaTestF27Screen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('ModalNavigator', {
      screen: NAV_SCREENS.VisaTestF27,
      params: props,
    });
  };

const openVisaInfoScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('ModalNavigator', {
      screen: NAV_SCREENS.VisaInfoScreen,
      params: props,
    });
  };

const openMyApplyListScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('ModalNavigator', {
      screen: NAV_SCREENS.MyApplyListScreen,
      params: props,
    });
  };

const openMyVisaEnrollScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('ModalNavigator', {
      screen: NAV_SCREENS.MyVisaEnrollScreen,
      params: props,
    });
  };

const openMyVisaHistoryScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('ModalNavigator', {
      screen: NAV_SCREENS.MyVisaHistoryScreen,
      params: props,
    });
  };

const openResumeEditBasicInfoScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('ResumeEditNavigator', {
      screen: NAV_SCREENS.ResumeEditBasicInfoScreen,
      params: props,
    });
  };

const openResumeEditEduCareerScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('ResumeEditNavigator', {
      screen: NAV_SCREENS.ResumeEditEduCareerScreen,
      params: props,
    });
  };

const openResumeEditLanguageScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('ResumeEditNavigator', {
      screen: NAV_SCREENS.ResumeEditLanguageScreen,
      params: props,
    });
  };

const openResumeEditEtcInfoScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('ResumeEditNavigator', {
      screen: NAV_SCREENS.ResumeEditEtcInfoScreen,
      params: props,
    });
  };

const openHomeScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.reset({
      routes: [{ name: 'AuthNavigator' }],
    });
  };

const openEmailSignInScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('AuthNavigator', {
      screen: NAV_SCREENS.EmailSignInScreen,
      params: props,
    });
  };

const openEmailSignUpScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('AuthNavigator', {
      screen: NAV_SCREENS.EmailSignUpScreen,
      params: props,
    });
  };

const openEmailCheckScreen =
  (navigation: NavigationProp<any, any>) => (props: { email: string }) => {
    navigation.navigate('AuthNavigator', {
      screen: NAV_SCREENS.EmailCheckScreen,
      params: props,
    });
  };

const openEmailCheckSuccessScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('AuthNavigator', {
      screen: NAV_SCREENS.EmailCheckSuccessScreen,
      params: props,
    });
  };

const openProfileEnrollAlertScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('AuthNavigator', {
      screen: NAV_SCREENS.ProfileEnrollAlertScreen,
      params: props,
    });
  };

const openProfileEnrollUserTypeScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('ProfileNavigator', {
      screen: NAV_SCREENS.ProfileEnrollUserTypeScreen,
      params: props,
    });
  };

const openProfileEnrollBasicInfoScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('ProfileNavigator', {
      screen: NAV_SCREENS.ProfileEnrollBasicInfoScreen,
      params: props,
    });
  };

const openProfileEnrollVisaInfoScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('ProfileNavigator', {
      screen: NAV_SCREENS.ProfileEnrollVisaInfoScreen,
      params: props,
    });
  };

const openMyPageScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('BottomTabNavigator', {
      screen: NAV_SCREENS.MyPageScreen,
      params: props,
    });
  };

const openMyBookmarkScreen =
  (navigation: NavigationProp<any, any>) =>
  (props = {}) => {
    navigation.navigate('MyBookmarkNavigator', {
      screen: NAV_SCREENS.MyBookMarkScreen,
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
  openSearchJobPostScreen: openSearchJobPostScreen(navigation),
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
  openProfileEnrollAlertScreen: openProfileEnrollAlertScreen(navigation),
  openProfileEnrollUserTypeScreen: openProfileEnrollUserTypeScreen(navigation),
  openProfileEnrollBasicInfoScreen:
    openProfileEnrollBasicInfoScreen(navigation),
  openProfileEnrollVisaInfoScreen: openProfileEnrollVisaInfoScreen(navigation),
  openMyPageScreen: openMyPageScreen(navigation),
  openResumeEditEtcInfoScreen: openResumeEditEtcInfoScreen(navigation),
  openVisaInfoScreen: openVisaInfoScreen(navigation),
  openMyBookmarkScreen: openMyBookmarkScreen(navigation),
});

export default navigate;
