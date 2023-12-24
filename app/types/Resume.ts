import {
  GenderType,
  ResidenceType,
  DegreeType,
  LanguageLevel,
} from "app/graphql/generated";

export { GenderType, ResidenceType, DegreeType, LanguageLevel };

export interface BasicInfoFormData {
  name: string;
  gender: GenderType;
  country: string;
  birthDate: string;
  residence: ResidenceType;
  address: string;
  detailAddress: string;
  email: string;
  phoneNumber: string;
}

export interface EducationInfoType {
  degree: DegreeType;
  isGraduate: boolean;
  univName: string;
  major: string;
  enterDate: string;
  graduateDate: string | null;
}

export interface CareerInfoType {
  company: string;
  task: string;
  joinDate: string;
  resignDate: string | null;
  isResigned?: boolean;
}

export interface EduCareerFormData {
  education: EducationInfoType[];
  career: CareerInfoType[];
}

export interface LanguageType {
  name: string;
  level: LanguageLevel;
}

export interface LanguageFormDataType {
  language: {
    ko: {
      level: LanguageLevel;
    };
    en: {
      level: LanguageLevel;
    };
    etc?: LanguageType[];
  };
}

export interface ProfileImageType {
  name: string;
  type: string;
  uri: string;
  base64?: string;
}

export interface AttatchmentFileType {
  name: string;
  type: string;
  uri: string;
  file?: File;
}

export interface EtcFormDataType {
  etc: {
    profileImage?: ProfileImageType;
    attatchmentFile?: AttatchmentFileType;
    portfolioLink?: string;
  };
}

export interface FormDataType
  extends BasicInfoFormData,
    EduCareerFormData,
    LanguageFormDataType,
    EtcFormDataType {
  uuid: string;
}
