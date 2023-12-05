import { Profile, ResidenceType, GenderType } from "../graphql/generated";

export interface ProfileType
  extends Pick<
    Profile,
    "country" | "gender" | "name" | "residence" | "birthDate" | "userType"
  > {}

export interface BasicProfileInfoFormType extends ProfileType {
  birthDate: string;
}

export interface ProfileFormType extends BasicProfileInfoFormType {
  visaStatus: string;
  visaIssueDate?: string;
  visaFinalEntryDate?: string;
}

export { ResidenceType, GenderType };
