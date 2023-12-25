import { FormDataType, LanguageLevel } from 'app/types/Resume';

export const resumeProgress = [
  {
    name: '기본정보',
  },
  {
    name: '학력/경력',
  },
  {
    name: '언어',
  },
  {
    name: '기타정보',
  },
];

export const DEFAULT_RESUME_FORM_DATA: Partial<FormDataType> = {
  education: [],
  career: [],
  language: {
    ko: { level: LanguageLevel.Basic },
    en: { level: LanguageLevel.Basic },
  },
  etc: {},
};
