export enum VisaDetailCategory {
  JobVisa,
  Education,
  Residence,
  Travel,
  Etc,
}

export enum PreferredVisa {
  StudentVisa,
  JobSeekingVisa,
  EmploymentVisa,
  Residence,
  OverseasKorean,
  PermanentResidence,
  InternationalMarriage,
}

export enum VisaCode {
  C4,
  D10,
  E1,
  E2,
  E3,
  E4,
  E5,
  E6,
  E7,
  E8,
  E9,
  E10,
  H1,
  H2,
  D2,
  D4,
  F1,
  F2,
  F27,
  F3,
  F4,
  F5,
  F6,
  B1,
  B2,
  C3,
  A1,
  C1,
  D1,
  D3,
  D5,
  D7,
  D8,
  D9,
  G1,
}

const jobVisa = {
  C4: {
    type: "C-4",
    title: "단기취업",
    description: [
      "법무부장관이 관계 중앙행정기관의 장과 협의하여 정하는 농작물 재배 수확 및 수산물 원시가공 분야에서 취업활동을 하려는 사람으로서 법무부장관이 인정하는 사람 (C-4-1~4)",
      "일시흥행, 광고․패션모델, 강의․강연, 연구, 기술지도 등 수익을 목적으로 단기간 취업활동을 하려는 자(C-4-5)",
      "1회에 부여할 수 있는 체류기간 상한 90일",
    ],
    subject: ["계절근로 단기취업(C-4-1, C-4-2, C-4-3, C-4-4)", ""],
  },
};
