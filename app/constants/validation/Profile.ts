import { yupResolver } from '@hookform/resolvers/yup';

import { GenderType, ResidenceType } from 'app/types/Profile';
import yup from 'app/utils/yup';

const PROFILE_BASIC_INFO_FORM_SCHEMA = yup.object().shape({
  userType: yup.string().required(),
  name: yup.string().required('이름을 입력해주세요'),
  gender: yup
    .string()
    .oneOf(Object.values(GenderType))
    .required('성별을 선택해주세요'),
  country: yup.string().required('국적을 선택해주세요'),
  birthDate: yup
    .string()
    .required('생년월일을 입력해주세요')
    .checkIsFullDateFormat('올바르지 않은 날짜 형식입니다.'),
  residence: yup
    .string()
    .oneOf(Object.values(ResidenceType))
    .required('거주지를 선택해주세요'),
  visaStatus: yup.string().required('체류 자격을 선택해주세요'),
  visaFinalEntryDate: yup
    .string()
    .checkIsFullDateFormat('올바르지 않은 날짜 형식입니다.'),
  visaIssueDate: yup
    .string()
    .checkIsFullDateFormat('올바르지 않은 날짜 형식입니다.'),
});

export const profileSchemaResolver = yupResolver(
  PROFILE_BASIC_INFO_FORM_SCHEMA
);
