import { TestSheetType } from "app/types/VisaTestSheet";

export const D101Test: TestSheetType = {
  required: {
    title: "기본항목",
    description: "기본항목 점수는 최소 20점 이상이여야 합니다.",
    items: [
      {
        name: "age",
        title: "나이",
        description: "생일을 기준으로 나이를 체크해주세요.",
        total: 0,
        layout: "grid",
        options: [
          {
            title: "해당없음",
            score: 0,
          },
          {
            title: "20-24세",
            score: 10,
          },
          {
            title: "25-29세",
            score: 15,
          },
          {
            title: "30-34세",
            score: 20,
          },
          {
            title: "35-39세",
            score: 15,
          },
          {
            title: "40-49세",
            score: 5,
          },
        ],
      },
      {
        name: "education",
        title: "최종학력",
        description: "학위증만 인정, 해외 전문학사는 대상에서 제외",
        total: 0,
        options: [
          {
            title: "해당없음",
            score: 0,
          },
          {
            title: "국내 전문학사",
            score: 15,
          },
          {
            title: "국내/국외 학사",
            score: 15,
          },
          {
            title: "국내/국외 석사",
            score: 20,
          },
          {
            title: "국내/국외 박사",
            score: 30,
          },
        ],
      },
    ],
  },
  optional: {
    title: "선택항목",
    description: "선택항목은 최대 70점입니다.",
    items: [
      {
        name: "workExperience",
        title: "근무경력",
        isMulti: true,
        description:
          "- 최근 10년 이내의 근무경력만 해당돼요.\n - 전공 관련 유사 분야 경력에 한정돼요. \n - 최대 점수는 15점이에요.",
        total: 0,
        optionVariant: "checkbox",
        options: [
          {
            title: "해당없음",
            score: 0,
          },
          {
            title: "국내 1-2년",
            score: 5,
          },
          {
            title: "국내 3-4년",
            score: 10,
          },
          {
            title: "국내 5년 이상",
            score: 15,
          },
          {
            title: "국외 3-4년",
            score: 5,
          },
          {
            title: "국외 5-6년",
            score: 10,
          },
          {
            title: "국외 7년 이상",
            score: 15,
          },
        ],
      },
      {
        name: "eduAbroad",
        title: "국내 유학(2년 이상)경력",
        total: 0,
        options: [
          {
            title: "해당없음",
            score: 0,
          },
          {
            title: "전문학사 졸업 후 3년 이내",
            score: 30,
          },
          {
            title: "전문 학사 졸업 후 3년 이후",
            score: 5,
          },
          {
            title: "학사 졸업 후 3년 이내",
            score: 30,
          },
          {
            title: "학사 졸업 후 3년 이후",
            score: 10,
          },
          {
            title: "석사 졸업 후 3년 이내",
            score: 30,
          },
          {
            title: "석사 졸업 후 3년 이후",
            score: 15,
          },
          {
            title: "박사 졸업 후 3년 이내",
            score: 30,
          },
          {
            title: "박사 졸업 후 3년 이후",
            score: 20,
          },
        ],
      },
      {
        name: "etcEdu",
        title: "기타 연수 및 교육 경력",
        description: "최대 점수는 5점이에요.",
        total: 0,
        subItems: [
          {
            name: "d-2-5",
            title: "대학 연구생 경험 (D-2-5)",
            layout: "horiztonal",
            options: [
              {
                title: "해당없음",
                score: 0,
              },
              {
                title: "12-18개월",
                score: 3,
              },
              {
                title: "18개월 초과",
                score: 5,
              },
            ],
          },
          {
            name: "d-2-6",
            title: "교환학생 (D-2-6)",
            layout: "horiztonal",
            options: [
              {
                title: "해당없음",
                score: 0,
              },
              {
                title: "12-18개월",
                score: 3,
              },
              {
                title: "18개월 초과",
                score: 5,
              },
            ],
          },
          {
            name: "d-4-2",
            title: "국공립기관 연수 (D-4-2)",
            layout: "horiztonal",
            options: [
              {
                title: "해당없음",
                score: 0,
              },
              {
                title: "12-18개월",
                score: 3,
              },
              {
                title: "18개월 초과",
                score: 5,
              },
            ],
          },
          {
            name: "d-4-6",
            title: "사설 기관 연수 (D-4-6)",
            layout: "horiztonal",
            options: [
              {
                title: "해당없음",
                score: 0,
              },
              {
                title: "12-18개월",
                score: 3,
              },
              {
                title: "18개월 초과",
                score: 5,
              },
            ],
          },
          {
            name: "d-4-1",
            title: "어학연수 (D-4-1)",
            layout: "horiztonal",
            description: "18개월을 초과하면 9점이에요.",
            options: [
              {
                title: "해당없음",
                score: 0,
              },
              {
                title: "12-18개월",
                score: 3,
              },
              {
                title: "18개월 초과",
                score: 0,
              },
            ],
          },
        ],
      },
      {
        name: "topik-kiip",
        title: "토픽(TOPIK) 사회통합프로그램(KIIP)",
        description:
          "토픽은 공식점수표 유효기간 내의 것만 인정합니다.\n단, 국내 유학 졸업자는 기간이 지나도 인정돼요.",
        total: 0,
        options: [
          {
            title: "해당 없음",
            score: 0,
          },
          {
            title: "LV. 2. 이상",
            score: 5,
          },
          {
            title: "LV. 3. 이상",
            score: 10,
          },
          {
            title: "LV. 4. 이상",
            score: 15,
          },
          {
            title: "LV. 5. 이상",
            score: 20,
          },
        ],
      },
      {
        name: "add-score",
        title: "추가 점수",
        optionVariant: "checkbox",
        isMulti: true,
        total: 0,
        options: [
          {
            title: "해당 없음",
            score: 0,
          },
          {
            title: "관계 중앙행정기관장 및 재외공관장의 구직비자 발급 추천",
            score: 20,
          },
          {
            title:
              "글로벌 기업 근무 경력자(최근 3년 이내의 포춘 선정 500대 기업에서 최근 10년 이내 1년 이상 근무한 자)",
            score: 20,
          },
          {
            title:
              "세계 우수대학 졸업자(최근 3년 이내 타임지 선정 200대 외국대학의 졸업생, 최근 3년 이내 QS 세계 대학 500위 이내 외국 대학의 졸업생)",
            score: 20,
          },
          {
            title: "이공계 학사 학위 이상(국내 전문학사 포함) 소지자",
            score: 5,
          },
          {
            title:
              "고소득 전문직 종사 경력자(직전 근무처의 연봉이 5만 달러(US) 이상)",
            score: 5,
          },
        ],
      },
      {
        name: "violationImmigration",
        title: "출입국관리법 위반",
        total: 0,
        options: [
          {
            title: "해당 없음",
            score: 0,
          },
          {
            title: "1번",
            score: -5,
          },
          {
            title: "2번",
            score: -10,
          },
          {
            title: "3번 이상",
            score: -30,
          },
        ],
      },
      {
        name: "violationEtc",
        title: "기타 국내 법령 위반",
        total: 0,
        options: [
          {
            title: "해당 없음",
            score: 0,
          },
          {
            title: "1번",
            score: -5,
          },
          {
            title: "2번",
            score: -10,
          },
          {
            title: "3번 이상",
            score: -30,
          },
        ],
      },
    ],
  },
};
