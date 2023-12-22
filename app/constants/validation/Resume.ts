import * as yup from "yup";
import {
  GenderType,
  ResidenceType,
  LanguageLevel,
  DegreeType,
  FormDataType,
  AttatchmentFileType,
  ProfileImageType,
} from "app/types/Resume";

import { yupResolver } from "@hookform/resolvers/yup";

const RESUME_FORM_SCHEMA: yup.ObjectSchema<FormDataType> = yup.object().shape({
  uuid: yup.string().required(),
  name: yup.string().required("필수 입력 사항입니다."),
  gender: yup.string().oneOf(Object.values(GenderType)).required(),
  country: yup.string().required("필수 입력 사항입니다."),
  residence: yup.string().oneOf(Object.values(ResidenceType)).required(),
  address: yup.string().required("필수 입력 사항입니다."),
  detailAddress: yup.string().required("필수 입력 사항입니다."),
  email: yup.string().required("필수 입력 사항입니다."),
  phoneNumber: yup.string().required("필수 입력 사항입니다."),
  birthDate: yup
    .string()
    .checkIsFullDateFormat("올바르지 않은 날짜 형식입니다.")
    .required("필수 입력 사항입니다."),
  education: yup
    .array()
    .of(
      yup.object().shape({
        degree: yup.string().oneOf(Object.values(DegreeType)).required(),
        isGraduate: yup.boolean().required(),
        univName: yup.string().required(),
        major: yup.string().required(),
        enterDate: yup
          .string()
          .checkIsYearMonthDateFormat("올바르지 않은 날짜 형식입니다.")
          .required(),
        graduateDate: yup
          .string()
          .checkIsYearMonthDateFormat("올바르지 않은 날짜 형식입니다.")
          .required(),
      })
    )
    .required(),
  career: yup
    .array()
    .of(
      yup.object().shape({
        company: yup.string().required(),
        task: yup.string().required(),
        joinDate: yup.string().required(),
        resignDate: yup.string().required(),
        isResigned: yup.boolean(),
      })
    )
    .required(),
  language: yup
    .object()
    .shape({
      ko: yup.object().shape({
        level: yup.string().oneOf(Object.values(LanguageLevel)).required(),
      }),
      en: yup.object().shape({
        level: yup.string().oneOf(Object.values(LanguageLevel)).required(),
      }),
      etc: yup.array().of(
        yup.object().shape({
          name: yup.string().required(),
          level: yup.string().oneOf(Object.values(LanguageLevel)).required(),
        })
      ),
    })
    .required(),
  etc: yup
    .object()
    .shape({
      image: yup.mixed<ProfileImageType>(),
      attatchmentFile: yup.mixed<AttatchmentFileType>(),
      portfolioLink: yup.string().url("올바르지 앟은 URL 형식입니다."),
    })
    .required(),
});

export const resumeSchemaResolver = yupResolver(RESUME_FORM_SCHEMA);
