export enum JobType {
  All = 'All',
  Manufacture = 'Manufacture',
  Office = 'Office',
  PartTime = 'PartTime',
  Language = 'Language',
  Etc = 'Etc',
}

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

export const JobTypeCategory: Record<JobType, string> = {
  [JobType.All]: '전체',
  [JobType.Manufacture]: '생산·제조',
  [JobType.Office]: '사무직',
  [JobType.PartTime]: '파트타임',
  [JobType.Language]: '언어',
  [JobType.Etc]: '기타',
};
