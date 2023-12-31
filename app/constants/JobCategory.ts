import { JobCategoryType } from 'app/types/JobPost';

export const AREA_LIST = [
  '서울특별시',
  '경기도',
  '인천광역시',
  '부산광역시',
  '대전광역시',
  '대구광역시',
  '울산광역시',
  '광주광역시',
  '강원도',
  '세종특별시',
  '충청남도',
  '충청북도',
  '경상남도',
  '경상북도',
  '전라남도',
  '전라북도',
  '제주도',
];

export const JobCategoryList: Record<JobCategoryType, string> = {
  [JobCategoryType.Design]: '디자인',
  [JobCategoryType.Architecture]: '건설',
  [JobCategoryType.Manufacture]: '생산·제조',
  [JobCategoryType.It]: 'IT',
  [JobCategoryType.Management]: '경영/사무',
  [JobCategoryType.Marketing]: '마케팅/광고',
  [JobCategoryType.Education]: '교육',
  [JobCategoryType.Trade]: '무역/물류',
  [JobCategoryType.Cs]: '영업/CS',
  [JobCategoryType.Service]: '서비스',
  [JobCategoryType.Model]: '모델',
  [JobCategoryType.Translate]: '번역',
  [JobCategoryType.Office]: '사무직',
  [JobCategoryType.PartTime]: '파트타임',
  [JobCategoryType.Language]: '언어',
  [JobCategoryType.Etc]: '기타',
};
