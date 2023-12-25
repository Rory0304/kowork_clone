import { yupResolver } from '@hookform/resolvers/yup';

import { VisaCode } from 'app/constants/VisaDetail';
import yup from 'app/utils/yup';

const VISA_ENROLL_FORM_SCHEMA = yup.object().shape({
  visaStatus: yup
    .string()
    .oneOf(Object.values(VisaCode))
    .required('체류 자격을 선택해주세요'),
  visaIssueDate: yup
    .string()
    .required('필수 입력 사항입니다.')
    .checkIsFullDateFormat('올바르지 않은 날짜 형식입니다.'),
  visaFinalEntryDate: yup
    .string()
    .required('필수 입력 사항입니다.')
    .checkIsFullDateFormat('올바르지 않은 날짜 형식입니다.')
    .checkIsDateAfterThreshold(
      yup.ref('visaIssueDate'),
      '입국 만료일은 발급일 이후여야 합니다.'
    ),
});

export const visaEnrollSchemaResolver = yupResolver(VISA_ENROLL_FORM_SCHEMA);
