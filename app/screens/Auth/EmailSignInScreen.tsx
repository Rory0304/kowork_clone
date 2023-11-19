import React from "react";
import { FormInputBox, TextInput, Button } from "app/components/blocks";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";
import { supabaseClient } from "app/utils/supabase";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import Snackbar from "react-native-snackbar";

const AUTH_FORM_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, "이메일 형식이어야 합니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "8자 이상의 영문, 숫자 조합이어야 합니다."
    )
    .required(),
});

const EmailSignInScreen: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  const {
    control,
    watch,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(AUTH_FORM_SCHEMA),
    mode: "onChange",
  });

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const watchedEmail = watch("email");
  const watchedPassword = watch("password");

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
        .then((res) => {
          if (res.data.session) {
            navigator.openMainScreen();
            return;
          }
          if (!!res.error?.name) {
            throw new Error();
          }
        });
    } catch (err) {
      // Snackbar.show({
      //   text: "Hello world",
      // });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="px-4 pt-4">
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
              <TextInput
                {...field}
                onChange={(e) => field.onChange(e.nativeEvent.text)}
                secureTextEntry={true}
                placeholder="비밀번호를 입력해주세요"
                error={Boolean(error?.message)}
              />
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
    </ScrollView>
  );
};

export default EmailSignInScreen;
