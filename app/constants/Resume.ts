import * as yup from "yup";
import {
  GenderType,
  ResidenceType,
  LanguageLevel,
  DegreeType,
} from "app/types/Resume";
import { checkIsValidDate } from "app/utils/date";

declare module "yup" {
  interface StringSchema<TType, TContext, TDefault, TFlags> {
    checkIsFullDateFormat(date: string): this;
    checkIsYearMonthDateFormat(date: string): this;
  }
}

export const resumeProgress = [
  {
    name: "기본정보",
  },
  {
    name: "학력/경력",
  },
  {
    name: "언어",
  },
  {
    name: "기타정보",
  },
];

yup.addMethod(
  yup.string,
  "checkIsYearMonthDateFormat",
  function (errorMessage) {
    return this.test(`YYYY/MM`, errorMessage, function (value) {
      const { path, createError } = this;

      const formattedDate = value?.replace(/\D/g, "");

      const year = Number(formattedDate?.substring(0, 4));
      const month = Number(formattedDate?.substring(4, 6));

      return (
        checkIsValidDate(year, month) ||
        createError({ path, message: errorMessage })
      );
    });
  }
);

yup.addMethod(yup.string, "checkIsFullDateFormat", function (errorMessage) {
  return this.test(`YYYY/MM/DD`, errorMessage, function (value) {
    const { path, createError } = this;

    const formattedDate = value?.replace(/\D/g, "");

    const year = Number(formattedDate?.substring(0, 4));
    const month = Number(formattedDate?.substring(4, 6));
    const day = Number(formattedDate?.substring(6, 8));

    return (
      checkIsValidDate(year, month, day) ||
      createError({ path, message: errorMessage })
    );
  });
});

export const RESUME_FORM_SCHEMA = yup.object().shape({
  name: yup.string().required(),
  gender: yup.string().oneOf(Object.values(GenderType)).required(),
  country: yup.string().required(),
  birthDate: yup
    .string()
    .required()
    .checkIsFullDateFormat("올바르지 않은 날짜 형식입니다."),
  visa: yup.string(),
  residence: yup.string().oneOf(Object.values(ResidenceType)).required(),
  address: yup.string().required(),
  phoneNumber: yup.string().required(),
  education: yup.array().of(
    yup.object().shape({
      degree: yup.string().oneOf(Object.values(DegreeType)).required(),
      isGraduate: yup.boolean(),
      univName: yup.string().required(),
      major: yup.string().required(),
      enterDate: yup
        .string()
        .checkIsYearMonthDateFormat("올바르지 않은 날짜 형식입니다."),
      graduateDate: yup
        .string()
        .checkIsYearMonthDateFormat("올바르지 않은 날짜 형식입니다."),
    })
  ),
  career: yup.array().of(
    yup.object().shape({
      company: yup.string().required(),
      task: yup.string().required(),
      joinDate: yup.string().required(),
      isResigned: yup.boolean(),
    })
  ),
  language: yup.object().shape({
    ko: yup.object().shape({
      level: yup.string().oneOf(Object.values(LanguageLevel)).required(),
    }),
    en: yup.object().shape({
      level: yup.string().oneOf(Object.values(LanguageLevel)).required(),
    }),
    etc: yup.array().of(
      yup.object().shape({
        name: yup.string().required(),
        level: yup.string().oneOf(Object.values(LanguageLevel)),
      })
    ),
  }),
});
