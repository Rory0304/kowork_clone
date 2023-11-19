import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { FormInputBox, TextInput, Button, Stack } from "app/components/blocks";
import { ScrollView, Text } from "react-native";
import CheckIcon from "react-native-heroicons/solid/CheckIcon";
import { supabaseClient } from "app/utils/supabase";
import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";
import * as Linking from "expo-linking";

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
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const prefix = Linking.createURL("/");

  const {
    control,
    watch,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(AUTH_FORM_SCHEMA),
    mode: "onChange",
  });

  const watchedEmail = watch("email");
  const watchedPassword = watch("password");

  const handleSignUp = async (email: string, password: string) => {
    try {
      await supabaseClient.auth
        .signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${prefix}email-check:${email}`,
          },
        })
        .then((res) => {
          if (res.data) {
            navigator.openEmailCheckScreen({email});
          }
          if (res.error) {
            console.log(res.error)
            throw new Error("fail to singup");
          }
        });
    } catch (err) {
      console.error(err);
      // show snackbar
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
              <>
                <TextInput
                  {...field}
                  onChange={(e) => field.onChange(e.nativeEvent.text)}
                  secureTextEntry={true}
                  placeholder="비밀번호를 입력해주세요"
                  error={Boolean(error?.message)}
                />
                <Stack styles="items-center mt-2">
                  <CheckIcon
                    width={18}
                    height={18}
                    color={
                      Boolean(error?.message) || !field.value ? "gray" : "green"
                    }
                  />
                  <Text
                    className={`${
                      Boolean(error?.message) || !field.value
                        ? "text-neutral-500"
                        : "text-black"
                    }`}
                  >
                    8자 이상의 영문, 숫자 조합
                  </Text>
                </Stack>
              </>
            )}
          />
        }
      />
      <Button
        disabeld={!isValid}
        label="다음"
        variant="filled"
        color="primary"
        size="large"
        onPress={() => handleSignUp(watchedEmail, watchedPassword)}
      />
    </ScrollView>
  );
};

export default EmailSignInScreen;
