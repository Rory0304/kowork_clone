import { yupResolver } from "@hookform/resolvers/yup";
import yup from "app/utils/yup";
import { VisaCode } from "app/constants/VisaDetail";

const VISA_ENROLL_FORM_SCHEMA = yup.object().shape({
  visaStatus: yup.string().oneOf(Object.values(VisaCode)).required("체류 자격을 선택해주세요"),
  visaIssueDate: yup
    .string()
    .required()
    .checkIsFullDateFormat("올바르지 않은 날짜 형식입니다."),
  visaFinalEntryDate: yup
    .string()
    .required()
    .checkIsFullDateFormat("올바르지 않은 날짜 형식입니다."),
});

export const visaEnrollSchemaResolver = yupResolver(
    VISA_ENROLL_FORM_SCHEMA
);
