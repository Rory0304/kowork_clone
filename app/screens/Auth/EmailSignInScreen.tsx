import React from "react";
import {
  FormInputBox,
  TextInput,
  Button,
  OverlaySpinner,
} from "app/components/blocks";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";
import { supabaseClient } from "app/utils/supabase";
import { useForm, Controller } from "react-hook-form";
import { getProfileByUserId } from "app/api/profile";
import { Snackbar, Portal } from "react-native-paper";
import { authSchemaResolver } from "app/constants/validation/User";
import { AuthTokenResponse } from "@supabase/supabase-js";
import { useAuth } from "app/contexts/AuthProvider";
import * as Linking from "expo-linking";

enum SupabaseAuthErrorMessageType {
  InvalidLoginCredentials = "Invalid login credentials",
  EmailNotConfirmed = "Email not confirmed",
}

const EmailSignInScreen: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [snackBarInfo, setSnackbarInfo] = React.useState<{
    message: string;
    variant: "error" | "success";
  } | null>(null);

  const {
    control,
    watch,
    formState: { isValid },
  } = useForm<{ email: string; password: string }>({
    resolver: authSchemaResolver,
    mode: "onChange",
  });

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const watchedEmail = watch("email");
  const watchedPassword = watch("password");

  const prefix = Linking.createURL("/");

  const { signUp } = useAuth();

  //
  //
  //
  const getUserProfile = async (userId: string) => {
    const { profile } = await getProfileByUserId({
      userId: userId,
    });
    return profile;
  };

  const handleSignUp = async (email: string, password: string) => {
    try {
      if (typeof signUp === "function") {
        await signUp(email, password, prefix).then((res) => {
          if (res.data) {
            return navigator.openEmailCheckScreen({ email });
          }
          if (res.error) {
            throw new Error("fail to singup");
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  //
  //
  //
  const resolveAuthTokenResponse = async (
    email: string,
    password: string,
    authToken: AuthTokenResponse
  ) => {
    const { data, error } = authToken;

    if (error) {
      console.log(error.message);
      // 이메일 컨펌이 되지 않았다면 해당 계정으로 가입 이메일 재전송
      if (error.message === SupabaseAuthErrorMessageType.EmailNotConfirmed) {
        console.log("handle siingup");
        return handleSignUp(email, password);
      }
      // 그 외의 경우에 대해서는 로그인 실패 처리
      throw new Error(error?.message);
    } else {
      const profile = await getUserProfile(data.user.id);
      console.log(profile);

      return profile
        ? navigator.openMainScreen()
        : navigator.openProfileEnrollAlertScreen();
    }
  };

  //
  //
  //
  const handleSignIn = async (email: string, password: string) => {
    try {
      setLoading(true);

      await supabaseClient.auth
        .signInWithPassword({
          email,
          password,
        })
        .then(async (res) => resolveAuthTokenResponse(email, password, res));
    } catch (err) {
      setSnackbarInfo({
        message: "해당되는 계정이 없어요",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="px-4 pt-4 bg-white">
      <FormInputBox
        title="이메일"
        InputComponent={
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <TextInput
                  {...field}
                  onChange={(e) => field.onChange(e.nativeEvent.text)}
                  placeholder="이메일을 입력해주세요"
                  error={Boolean(error?.message)}
                />
                {Boolean(error?.message) ? (
                  <Text className="mt-1 text-sm text-danger">
                    {error?.message}
                  </Text>
                ) : null}
              </>
            )}
          />
        }
      />
      <FormInputBox
        title="비밀번호"
        InputComponent={
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <TextInput
                  {...field}
                  onChange={(e) => field.onChange(e.nativeEvent.text)}
                  secureTextEntry={true}
                  placeholder="비밀번호를 입력해주세요"
                  error={Boolean(error?.message)}
                />
                {Boolean(error?.message) ? (
                  <Text className="mt-1 text-sm text-danger">
                    {error?.message}
                  </Text>
                ) : null}
              </>
            )}
          />
        }
      />
      <Button
        disabeld={!isValid}
        label="로그인"
        variant="filled"
        color="primary"
        size="large"
        onPress={() => handleSignIn(watchedEmail, watchedPassword)}
      />
      <View className="flex flex-row items-center justify-center gap-4 mt-2">
        <TouchableOpacity onPress={() => navigator.openEmailSignUpScreen()}>
          <Text className="text-base font-medium text-neutral-500">
            회원가입
          </Text>
        </TouchableOpacity>
        <View className="h-3.5 border border-neutral-300" />
        <TouchableOpacity>
          <Text className="text-base font-medium text-neutral-500">
            비밀번호 찾기
          </Text>
        </TouchableOpacity>
      </View>
      <Portal>
        <Snackbar
          visible={Boolean(snackBarInfo?.message)}
          onDismiss={() => setSnackbarInfo(null)}
        >
          <Text>{snackBarInfo?.message}</Text>
        </Snackbar>
      </Portal>
      {loading ? <OverlaySpinner /> : null}
    </ScrollView>
  );
};

export default EmailSignInScreen;
