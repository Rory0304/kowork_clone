import { yupResolver } from "@hookform/resolvers/yup";
import yup from "app/utils/yup";

const AUTH_FORM_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, "이메일 형식이어야 합니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}|:;"'<>,.?/~`\\[\]\-=/]{8,}$/,
      "8자 이상의 영문, 숫자 조합이어야 합니다."
    )
    .required(),
});

export const authSchemaResolver = yupResolver(AUTH_FORM_SCHEMA);
