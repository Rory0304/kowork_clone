export enum GenderType {
  Male = "Male",
  Female = "Femail",
}

export enum ResidenceType {
  Domestic = "Domestic",
  Abroad = "Abroad",
}

export enum DegreeType {
  ProBachelor = "ProBachelor",
  Bachelor = "Bachelor",
  Master = "Master",
  Doctorate = "Doctorate",
}

export enum LanguageLevel {
  Basic = "Basic",
  Intermediate = "Intermediate",
  Fluent = "Fluent",
  Native = "Native",
}

export interface BasciInfoFormData {
  name: string;
  gender: GenderType | string;
  country: string;
  birthDate: string;
  visa: string;
  residence: ResidenceType | string;
  address: string;
  detailAddress: string;
  email: string;
  phoneNumber: string;
}

export interface EducationInfoType {
  degree: DegreeType | string;
  isGraduate: boolean;
  univName: string;
  major: string;
  enterDate: string;
  graduateDate: string;
}

export interface CareerInfoType {
  company: string;
  task: string;
  joinDate: string;
  resignDate: string;
  isResigned?: boolean;
}

export interface EduCareerFormData {
  education: EducationInfoType[];
  career: CareerInfoType[];
}

export interface LanguageType {
  name: string;
  level: LanguageLevel | string;
}

export interface LanguageFormDataType {
  language: {
    ko: {
      level?: LanguageLevel | string;
    };
    en: {
      level?: LanguageLevel | string;
    };
    etc: LanguageType[];
  };
}

export interface FormDataType
  extends BasciInfoFormData,
    EduCareerFormData,
    LanguageFormDataType {}
