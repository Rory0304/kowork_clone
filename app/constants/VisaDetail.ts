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

export enum VisaCategory {
  Career = 'career',
  Education = 'education',
  Residence = 'residence',
  Travel = 'travel',
  Etc = 'etc',
}

export enum VisaCode {
  NA = 'N/A',
  C4 = 'c-4',
  D10 = 'd-10',
  E1 = 'e-1',
  E2 = 'e-2',
  E3 = 'e-3',
  E4 = 'e-4',
  E5 = 'e-5',
  E6 = 'e-6',
  E7 = 'e-7',
  E8 = 'e-8',
  E9 = 'e-9',
  E10 = 'e-10',
  H1 = 'h-1',
  H2 = 'h-2',
  D2 = 'd-2',
  D4 = 'd-4',
  F1 = 'f-1',
  F2 = 'f-2',
  F3 = 'f-3',
  F4 = 'f-4',
  F5 = 'f-5',
  F6 = 'f-6',
  B1 = 'b-1',
  B2 = 'b-2',
  C3 = 'c-3',
  A1 = 'a-1',
  C1 = 'c-1',
  D1 = 'd-1',
  D3 = 'd-3',
  D5 = 'd-5',
  D7 = 'd-7',
  D8 = 'd-8',
  D9 = 'd-9',
  G1 = 'g-1',
  A2 = 'a-2',
  A3 = 'a-3',
  D6 = 'd-6',
}

export const VisaInfo: Partial<
  Record<
    VisaCode,
    {
      title: string;
      category: VisaCategory;
      description: string;
      subject: string;
      document: string;
    }
  >
> = {
  [VisaCode.A1]: {
    title: '외교',
    category: VisaCategory.Etc,
    description: `- 대한민국정부가 접수한 외국정부의 외교사절단이 나 영사기관의 구성원, 조약 또는 국제관행에 따라 외교사절과 동등한 특권과 면제를 받는 자와 그 가
    족
    - 1회 부여할 수 있는 체류 기간 상한: 재임기간`,
    subject: `- 대한민국정부가 접수한 외국정부의 외교사절단이 나 영사기관의 구성원
    - 대한민국에 접수된 대사, 공사, 참사관, 서기관 등의 외교직원이 해당됨
    - 대한민국 정부에 접수된 총영사, 영사 등의 영사`,
    document: `- 사증발급신청서, 여권, 표준규격사진 1매, 수수료
    - 파견, 재직을 증명하는 서류 또는 해당국 외교부장 관의 협조공한
    - 외국정부의 외교사절단이나 영사기관의 구성원의 동반가족에 경우에는 본국에서 발급한 가족관계증 명서, 출생증명서 등 가족관계 입증서류
    - 체류자격외 활동 시
    - 여권, 통합신청서
    - 수수료(자격외 활동 12만원): 주한 미국 공관원`,
  },
  [VisaCode.A2]: {
    title: '공무',
    category: VisaCategory.Etc,
    description: `- 대한민국 정부가 승인한 외국정부 또는 국제기구의 공무를 수행하는 자와 그 가족
    - 1회 부여할 수 있는 체류 기간 상한: 공무수행기간`,
    subject: `- 외국 정부 또는 국제기구의 공무를 수행하는 자
    - 대한민국 정부가 승인한 외국정부 외교사절단의 사무직원 및 기술직원과 노무직원
    - 대한민국정부가 승인한 여사기관의 사무직원 및 기술직원과 노무직원
    - 대한민국에 본부를 둔 국제기구의 직원
    - 외국정부 또는 국제기구가 대한민국에 있는 지사`,
    document: `- 사증발급신청서, 여권, 표준규격사진 1매, 수수료
    - 파견, 재직을 증명하는 서류 또는 해당국 외교부장 관이나 소속부처 장관의 공한
    - 체류자격외 활동 시
    - 여권, 통합신청서
    - 수수료(자격외 활동 12만원): 주한 미국 공관원 의 동반가족은 상호주의에 따라 수수료 면제
    - 외교부(외교사절담당관)에서 받은 고용추천서
    (필수)
    - 해당 체류자격별 체류자격외 활동 필요서류(자 격요건 등 구비)`,
  },
  [VisaCode.A3]: {
    title: '협정',
    category: VisaCategory.Etc,
    description: `- 대한민국정부와 협정에 의하여 외국인등록이 면제 되거나 이를 면제할 필요가 있다고 인정되는 자와 그 가족
    - SOFA: 대한민국과 아메리카합중국간의 상호바 위조약 제4조에 의한 시설과 구역 및 대한민국에 서의 합중국 군대의 지위에 관한 협정
    - Fulbright 협정: 대한민국 정부와 미합중국 정부 간의 교육에 관한 양해각서
    - 1회 부여할 수 있는 체류 기간 상한: 신분존속기간 또는 협정상의 체류기간`,
    subject: `대한민국정부와 협정에 의하여 외국인등록이 면제 되거나 이를 면제할 필요가 있다고 인정되는 자와 그 가족`,
    document: `- 사증 발급 시 필요서류
    - 사증발급신청서, 여권, 표준규격사진 1매, 수수료
    - 파견, 재직을 증명하는 서류 또는 해당국 외교부 장관이나 소속부처 장관의 공한
    - 체류자격외 활동 시 필요서류
    - 시천서(별지24호) 여권 수수료`,
  },
  [VisaCode.B1]: {
    title: '사증면제',
    category: VisaCategory.Travel,
    description: `- 대한민국과 사증면제협정을 체결한 국가의 국민으 로서 그 협정에 의한 활동을 하려는 자
    - 1회 부여할 수 있는 체류 기간 상한: 협정상의 체류 기간`,
    subject: `- 재입국허가를 받은 사람 또는 재입국허가가 면제 된 사람으로서 그 허가 또는 면제받은 기간이 끝 나기 전에 입국하는 사람
- 대한민국과 사증면제협정을 체결한 국가의 국민 으로서 그 협정에 따라 면제대상이 되는 사람
- 국제친선, 관광 또는 대한민국의 이익 등을 위하여 외국하는 사람으로서 대통령령으로 정하는 바`,
    document: `신청서(34호 서식), 여권 원본, 수수료`,
  },
  [VisaCode.B2]: {
    title: '관광통과',
    category: VisaCategory.Travel,
    description: `- 관광, 통과비자
    - 1회 부여할 수 있는 체류 기간의 상한: 법무부장관 이 따로 정하는 기간`,
    subject: `- 관광, 통과 등의 목적으로 대한민국에 사증 없이 입 국하려는 자
    - 재입국 허가를 받은 사람 또는 재입국허가가 면 제된 사람으로서 그 허가 또는 면제받은 기간이 끝나기 전에 입국하는 사람
    - 대한민국과 사증면제협정을 체결한 국가의 국민 으로서 그 협정에 따라 면제대상이 되는 사람`,
    document: `신청서(34호 서식), 여권 원본, 수수료`,
  },
  [VisaCode.C1]: {
    title: '일시취재',
    category: VisaCategory.Etc,
    description: `- 일시취재, 보도
    - 외국언론사 지사 설치 준비
    - 1회 부여 체류 기간의 상한: 90일`,
    document: `- 사증발급인정신청서, 여권사본, 표준규격사진 1매
    - 소속회사의 파견증명서, 재직증명서 또는 외신보도`,
    subject: `- 외국의 신문, 방송, 잡지, 기타 보도기관으로부터 파견되어 단기간 취재, 보도활동을 하려는 자
    - 외국의 보도기관과의 계약에 의하여 단기간 취재, 보도활동을 하려는 자
    - 외국 언론사의 지사설치 준비를 위해 단기간 취재, 보도활동을 하려는 자
    - 외국의 신문, 방송, 잡지, 기타 보도기관으로부터 파견되어 단기간 취재, 보도활동을 하려는 자
    - 외국의 보도기관과의 계약에 의하여 단기간 취재, 보도활동을 하려는 자
    - 외국 언론사의 지사설치 준비를 위해 단기간 취재, 보도활동을 하려는 자`,
  },
  [VisaCode.C3]: {
    title: '단기방문',
    category: VisaCategory.Travel,
    description: `- 시장조사, 업무연락, 상담, 계약 등의 상용활동
    - 관광, 통과, 요양, 친지 방문, 친선경기, 각종 행사나 회의 참가 또는 참관, 문화예술, 일반연수, 강습, 종 교의식 참석, 학술자료 수집, 그 밖에 이와 유사한 목적으로 90일을 넘지 않는 기간 동안 체류하려는 사람
    - 1회 부여할 수 있는 체류 기간 상한: 90일`,
    subject: `- 관광, 통과, 요양, 친지방문, 친선경기, 각종 행사나 회의참가 또는 참관, 문화예술, 일반 연수, 강습, 종교의식 참석, 학술자료 수집, 기타 이와 유사한 목적으로 단기간 체류하려는 자 (영리를 목적으로 하는 자는 제외)`,
    document: `① 여권, 사증발급신청서, 사진 1장
    ② 재직증명서 및 3개월 월급명세서 또는 재학증명서,
    ③ 왕복 비행기표, 오스트리아 체류증원본 및 사본, 
    
    
    
    ㅇ 각종 행사, 회의 참석시,
    
    ④ 입국목적을 소명할 수 있는 자료
    ⑤ 회의관련 입증서류 및 소개자료
    ⑥ 회의개최관련 기관 설립관련서류(사업자등록증사본, 법인등기부등본 등)
    ⑦ 피초청자 관련서류(신분증, 재직증명서 등)
    ⑧ 국내기업에 산업연수 목적으로 입국하려는 자는 단기종합(C-3) 사증을 신청할 수 없고 반드시 산업연수(D-3) 사증발급인정서를 신청하여야 합니다.`,
  },
  [VisaCode.C4]: {
    title: '단기 취업',
    category: VisaCategory.Etc,
    description: `- 법무부장관이 관계 중앙행정기관의 장과 협의하여 정하는 농작물 재배 수확 및 수 산물 원시가공 분야에서 취업 활동을 하려 는 사람으로서 법무부장관이 인정하는 사 람 (C-4-1~4)
    - 일시흥행, 광고, 패션모델 강의 강연 연구 기술지도 등 수익을 목적으로 단기간 취업 활동을 하려는 자 (C-4-5)
    - 1회 부여할 수 있는 체류 기간 상한: 90일`,
    subject: ` - 수익이 따르는 음악, 미술, 문학 등의 예술활동을 하고자 하는 자 (국내체류기간이 90일 이내인 자) 
    - 창작활동을 하는 작곡가, 화가, 조각가, 공예가, 저술가 및 사진작가 등의 예술가
    - 음악, 미술, 문학, 사진, 연주, 무용, 영화, 체육, 기타의 예술상의 활동에 관한 지도를 하는 자 (예 프로팀감독, 오케스트라 지휘자 등)
    - 체류기간이 91일 이상인 경우는 체류자격이 예술흥행(E-6)에 해당됨
    - 수익을 목적으로 하는 연예, 연주, 연극, 운동경기, 광고, 패션모델 등으로 출연하고자 하는 자 (국내체류기간이 90일 이내인 자) 
    - 출연형태나 명목을 불문하고 수익을 위하여 개인 또는 단체로 연예, 연주, 연극 등을 하는 자 (예 프로복서, 프로축구선수, 프로골프선수 등)
    - 스스로 연예, 연주, 연극 등에 출연하려는 자 뿐만 아니라 분장사, 매니저 등 동행하는 자를 포함
   수익이 따르는 계약에 의하여 국내 공•사기관 등으로부터 초청되어 단기간 강연•강의활동을 하는 자 (국내체류기간이 90일 이내인 자)
    - 수익이 따르지 않는 경우는 단기종합(C-3)에 해당됨. 단, 교수(E-1) 자격 해당자 제외
    - 연구•기술지도 분야에 종사하려는 자 중 아래에 해당자 (국내체류기간이 90일 이내인 자)
   자연과학분야의 연구 또는 산업상 고도기술의 연구개발에 종사하려는 자 
    - 방위산업체에 관한 특별조치법의 규정에 의한 연구기관에서 연구활동에 종사하려는 과학기술자
   공•사기관에서 자연과학분야의 전문지식 또는 산업상의 특수 분야에 속하는 기술 제공하려는 자 등 
   공•사기관과의 계약에 의한 직업 활동을 하려는 자 중 국내체류기간이 90일 이내인 자 
    - 각종 용역제공 계약 등에 의하여 파견되어 국내 공•사기관으로부터 체재비 등 보수성 경비를 지급받고 근무하고자 하는 자 (국내체류기간이 90일 이내인 자) 
    - 국내기업의 정보기술(IT), 전자상거래 등 기업정보화(e-business), 생물산업(BT), 나노기술(NT), 신소재분야(금속,세라믹,화학), 수송기계, 디지털전자 및 환경에너지 분야에 종사하고자 하는 자(마켓팅 분야 포함)로서 소관부처 장관의 고용추천이 있는 자(국내체류기간이 90일 이내인 자)
   정보기술(IT) 분야 : 정보통신부장관의 추천
    - 전자상거래 등 기업정보화(E-Business), 생물산업(BT), 나노기술(NT), 신소재분야(금속,세라믹, 화학), 수송기계, 디지털전자 및 환경에너지 분야 : 산업자원부장관의 추천
   `,
    document: `① 여권, 사증발급신청서, 사진 1장
   ② 고용계약서 
   ③ 영상물등급위원회의 공연추천서 (콘서트 참가시)
   ④ 소관부처(문화관광부, 산업자원부) 장관의 고용추천서 • 협조공문 또는 고용의 필요성을 입증할 수 있는 서류 (광고 • 패션모델 활동)
   ⑤ 파견명령서, 재직증명서
    
   ㅇ 영어캠프 외국인 강사
   
   ① 학위관련 검증서류(아래사항중 택1)
   ② 학위증 원본
   ③ 학위증 사본(국내 공인 기관 '한국대학교육협의회'에서 발행한 학력검증 관련 문서 첨부 + 아포스티유확인)
   ④ 해당 대학에서 발행한 학위취득 증명서(아포스티유 확인 또는 국내 공인기관의 학력검증 관련 문서 첨부)
   ⑤ 학위취득 사실이 기재된 졸업증명서(아포스티유 확인 또는 국내 공인기관의 학력검증 관련 문서 첨부)
   ※ 아포스티유 협약 미가입 국가인 경우 자국 소재 대한민국공관의 영사 확인을 받거나 국내 공인기관의 학력검증 관련 문서 첨부 요
   ⑥ 범죄경력증명서
   ⑦ 고용계약서
   ⑧ 사업자등록증, 법인등기부등본 또는 교육기관 설립관계 서류
   ⑨ 평생교육시설등록증 등 평생교육시설 신고수리•지정관련 서류 
   ⑩ 영어캠프 운영일정표 및 강의시간표 (해당 외국인 참여시간 표기)`,
  },
  [VisaCode.D1]: {
    title: '문화예술',
    category: VisaCategory.Etc,
    description: `- 문화예술 비자
    - 1회 부여할 수 있는 체류 기간 상한: 2년`,
    subject: `- 수익을 목적으로 하지 아니하는 학술 또는 예술상 의 활동을 하려고 하는 자 (대한민국의 고유문화 또 는 예술에 대하여 전문적인 연구를 하거나 전문가 의 지도를 받으려는 자 포함)
    - 논문작성, 창작 활동을 하는 자
    - 비영리 학술활동, 예술단체의 초청으로 학술 또 는 순수 예술 활동에 종사하는 자
    - 대한민국의 고유 문화 또는 예술에 대하여 전문
    - 논문작성, 창작 활동을 하는 자
    - 비영리 학술활동, 예술단체의 초청으로 학술 또 는 순수 예술 활동에 종사하는 자
    - 대한민국의 고유 문화 또는 예술에 대하여 전문 적으로 연구하거나 전문가의 지도를 받으려는 자`,
    document: `- 사증발급인정신청서, 여권, 표준규격사진 1매
    - 초청장
    - 문화예술단체임을 입증하는 서류
    - 이력서 또는 경력증명서
    - 체류 중 일체의 경비지불능력을 증명하는 서류`,
  },
  [VisaCode.D2]: {
    title: '유학',
    category: VisaCategory.Education,
    description: `- 교육기관: 고등교육법 및 특별법에 따라 설립된 전 문대학 이상의 교육기관이나 학술 연구기관으로서 법무부장관이 정하는 요건을 갖춘 대학 또는 부설 어학원
    - 외국인 유학생: 위 교육기관에서 정규과정의 교육 을 받거나 특정 연구를 하고자 하는 외국인으로서 유학(D-2) 및 어학연수(D-4-1, D-4-7)
    - 1회 부여할 수 있는 체류 기간 상한: 2년`,
    subject: ` - 교육법의 규정에 의하여 설립된 전문대학, 대학, 대학원 또는 특별법의 규정에 의하여 설립된 전문대학 이상의 학술연구기관에서 정규과정(학사•석사•박사)의 교육을 받거나 특정의 연구를 하고자 하는 자`,
    document: `① 여권, 사진 1장, 사증발급신청서 
    ② 정규과정(학사•석사•박사)의 교육을 받는 경우
    ③ 표준입학허가서 (총•학장 발행)
    ④ 예금잔고증명서
    
    
    - 특정의 연구를 하고자 하는 경우
    
    
    
    ④ 연구활동임을 입증하는 서류
    ⑤ 최종 학력증명서
    ⑥ 신원보증서 또는 재정입증 관련서류`,
  },
  [VisaCode.D3]: {
    title: '기술연수',
    category: VisaCategory.Etc,
    description: `- 기술연수 비자
    - 1회 부여할 수 있는 체류 기간 상한: 2년`,
    subject: `- 법무부장관이 정하는 연수조건을 갖춘 자로서 국내 의 산업체에서 연수를 받고자 하는 자
    - 외국환거래법에 의거 외국에 직접 투자한 산업체 에서 연수를 받고자 하는 자
    - 외국에 기술을 수출하는 산업체로서 법무부장관 이 기술연수가 필요하다고 인정하는 산업체에서 연수를 받고자 하는 자
    - 대외무역법에 의거 외국에 산업설비를 수출하는 자`,
    document: `- 신청서(별지 34호 서식), 여권, 표준규격사진 1매
    - 현지 법인등록증 사본
    - 현지법인의 장이 발급한 피초청자 재직증명서 및
    여권 사본
    - 한국어능력 입증자료
    - 연수내용을 확인할 수 있는 연수 계획서
    - 초청자의 신원보증서
    - 초청업체가 연수허용대상 업체임을 입증할 수 있는 서류
    - 연수허용인원 산정에 필요한 초청업체의 내국인 상 시 근로자 수 입증 서류
    - 기타 자체 연수시설과 적정한 숙박시설 구비 등 연 수환경을 확인할 수 있는 자료`,
  },
  [VisaCode.D4]: {
    title: '일반연수(D-4)',
    category: VisaCategory.Education,
    description: `- 유학(D-2) 자격에 해당하는 교육기관 또는 학술연 구기관 외에 교육기관이나 기업체 단체 등에서 교 육 또는 연수를 받거나 연구하는 활동
    - 1회 부여할 수 있는 체류 기간 상한: 2년`,
    subject: `ㅇ 대학부설 어학원에서 한국어를 연수하는 자
    ㅇ 유학(D-2) 자격에 해당하는 교육기관 또는 학술연구기관이외의 교육기관에서 교육을 받는 자
    ㅇ 국•공립 또는 공공의 연구기관 등(연수원, 단체)에서 기술, 기능 등을 연수하는 자`,
    document: `① 여권, 사진 1장, 사증발급신청서
    ② 대학부설어학원에서 한국어를 배우는 학생 또는 대학간 학술교류 협정으로 산학연수를 위한 교환학생의 경우 ; 표준입학허가서(certificate of admission)
    ③ 은행잔고 증명서(해당대학에서 표준입학허가서상에 본인부담 경비 금액 명시)
    ④ 재학증명서 또는 최종학력증명서
    ⑤ 신원보증서(학비 등 체류 중 필요한 경비지불능력을 입증하지 못하거나 법무부장관이 특히 필요하다고 인정하는 경우에 한함)
    
    
    
    ㅇ 그 밖의 연수의 경우 : 반드시 사증발급인증서로 제출
    
    ④ 연수를 증명하는 서류
    ⑤ 연수기관의 설립 관련서류 
    ⑥ 재정입증 관련서류
    ⑦ 연수기관이 체류경비 등을 부담하는 경우는 경비부담확인서 
    ⑧ 그 밖의 경우는 국내 송금이나 환전증명서 (미화 3,000불 이상)
    ⑨ 신원보증서(학비 등 체류 중 필요한 경비지불능력을 입증하지 못하거나 법무부장관이 특히 필요하다고 인정하는 경우에 한함)`,
  },
  [VisaCode.D5]: {
    title: '취재',
    category: VisaCategory.Etc,
    description: `- 취재비자
    - 1회 부여할 수 있는 체류 기간 상한: 2년`,
    subject: `- 외국의 신문, 방송, 잡지, 기타 보도기관으로부터 파견되어 국내에 주재하면서 취재, 보도 활동을 하 는 자
    - 외국의 보도기관과의 계약에 의하여 국내에서 주재 하면서 취재,보도 활동을 하는 자
    - 국내에 지사나 지국이 이미 개설된 외국의 신문, 방 송, 잡지, 기타 보도 기관으로부터 파견되어 국내에 서 취재, 보도활동을 하는 자`,
    document: `- 신청서, 여권 원본, 표준 규격 사진 1장, 수수료
    - 파견 명령서 또는 재직 증명서
    - 국내지국, 지사 설치 허가증이나 국내 지국지사 운영자금 도입 실적 증빙 서류`,
  },
  [VisaCode.D7]: {
    title: '주재',
    category: VisaCategory.Etc,
    description: `- 외국기업 국내 지사 등에서 주재활동
    - 해외 진출 기업 근무 외국인력 국내 본사 주재활동
    - 1회 부여할 수 있는 체류 기간 상한: 3년`,
    subject: `- 외국의 공공기관, 단체 또는 회사의 본사, 지사, 기타 사업소 등에서 1년 이상 근무 한 자로서 대한민국에 있는 그 계열회사, 자회사, 지점 또는 사무소 등에 필수전문 인력으로 파견되어 근무하려는 자
    - 상장법인(코스닥상장법인 포함, 이하같 음) 또는 공공기관이 설립한 해외 현지법 인이나 해외지점에서 1년 이상 근무한 자 로서 대한민국에 있는 그 본사나 본점에 파견되어 전문적인 지식•기술 또는 기능 을 제공 하거나 전수받으려는 자`,
    document: `- 외국기업 국내 지사 등에서 주재활동
    - 사증발급 신청서, 여권, 표준규격사진 1 매, 수수료
    - 외국 소재 회사 등 재직증명서
    - 파견 명령서
    - 국내지점 등 설치 입증서류
    - 자사 또는 연락사무소가 정상적으로 운 영되고 있음을 입증하는 서류
    - 필수전무인력임을 입증하는 서류(이력 서, 경력증명서 등)
    - 해외진출 기업 근무 외국인력 국내 본사 주재활동
    - 사증발급 신청서, 여권, 표준규격사진 1 매, 수수료
    - 필수 전문인력임을 입증하는 서류 (이력서, 경력 증명서 등)`,
  },
  [VisaCode.D8]: {
    title: '기업투자',
    category: VisaCategory.Etc,
    description: `- D-8-1: 법인에 투자
    - D-8-2: 벤처 투자
    - D-8-3: 개인기업에 투자
    - D-8-4: 기술 창업
    - 1회 부여할 수 있는 체류 기간 상한
    - "D-8-1, D-8-3"에 해당하면 5년
    - "D-8-2, D-8-4"에 해당하면 2년`,
    subject: ` - 「외국인투자촉진법」의 규정에 의한 외국인 투자기업의 경영•관리 또는 생산•기술분야에 종사하려는 필수 전문인력(국내에서 채용하는 자는 제외)
    - 외국인 투자 (외국인투자촉진법 제2조 제1항)
    - 대한민국 법인 또는 대한민국 국민이 영위하는 기업의 경영활동에 참여하는 등 당해 법인 또는 기업과 지속적인 경제관계를 수립할 목적으로 당해 법인이나 기업의 주식 또는 지분을 소유하는 것
    - 외국인투자기업의 해외모기업 및 그 모기업과 자본출자관계가 있는 기업이 당해 외국인투자기업에 대부하는 5년이상의 차관`,
    document: `① 여권, 사진 1장, 사증발급신청서
    ② 파견명령서 또는 재직증명서
    ③ 외국인 투자신고서(등기부등본 또는 사업자등록증 사본) 또는 투자기업등록증 사본
    ④ 파견명령서 또는 재직증명서로 국내에서 채용되는 자가 아니어야 함
    ⑤ 투자기업의 경영•관리를 위한 투자자측 대표 및 기술적 지원이 불가피하여 파견되는 기술자외에 일반적인 행정업무 또는 국내에서 대체가 가능한 기술자 및 직접적인 용역서비스 제공자 등은 필수전문인력이 사증발급 억제됨
    ⑥ 필수전문인력의 범위
    ⑦ 임원(EXECUTIVE) : 조직내에서 조직관리를 제1차적으로 지휘하며 의사결정에 광범위한 권한을 행사하고 그 기업의 최고위 임원으로서 이사회, 주주로부터 일반적인 지휘•감독만을 받는 자 (임원은 서비스의 실질적인 공급 또는 조직의 서비스에 관련된 업무는 직접 수행할 수 없음)
    ⑧ 상급관리자(SENIOR MANAGER) : 기업 또는 부서단위 조직의 목표와 정책의 수립 및 시행에 책임을 지고 계획•지휘•감독에 관한 권한과 직원에 대한 고용 및 해고권 또는 이에 관한 추천권을 가지며, 다른 감독직•전문직•관리직 종사자의 업무를 결정•감독•통제하거나 일상업무에 재량권을 행사하는 자 (피감독자가 전문서비스 공급자가 아닌 일선감독자를 포함하지 않으며 직접적으로 서비스 공급행위에 종사하는 자도 포함되지 않음)
    ⑨ 전문가(SPECIALIST) : 해당기업 서비스의 연구•설계•기술•관리 등에 필수적인 고도의 전문적이고 독점적인 경험과 지식을 가진 자`,
  },
  [VisaCode.D9]: {
    title: '무역경영',
    category: VisaCategory.Etc,
    description: `- 회사 경영, 무역, 영리 사업
    - 수출 설비(기계)의 설치 / 운영 / 보수`,
    subject: ` - 회사경영, 무역, 영리사업
    - 대외무역법령 및 대외무역관리규정에 의하여 한국무역협회장으로부터 무역거래자별 무역업 고유번호를 부여받은 무역거래자
   `,
    document: `
   ① 여권, 사진 1장, 사증발급신청서
   ② 재직증명서, 파견명령서
   ③ 등기부등본 또는 사업자등록증 사본
   ④ 영업자금도입실적 증빙서류 또는 사업계획서 사본
   ⑤ 연간 납세사실증명서
   ⑥ 수주계약서 또는 설비도입계약서`,
  },
  [VisaCode.D10]: {
    title: '구직',
    category: VisaCategory.Career,
    description: `• (일반구직, D-10-7) 국내 기업, 단체 등에 서 행하는 구직 활동 뿐만 아니라 정식 취 업 전에 연수비를 받고 행하는 단기 인턴 과정을 포함
    • (기술창업준비, D-10-2) 창업이민교육프 로그램 참가, 지식재산권 등 특허출원 준 비 및 출원, 창업법인 설립 준비 등 창업 과 관련된 제반 준비활동(인턴활동 제한)
    • (첨단기술인턴, D-10-3) 법무부장관이 정한 요건을 갖춘 기업과의 인턴 근로계약 에 따른 첨단기술 분야 인턴 활동
    • 1회 부여할 수 있는 체류 기간 상한: 6개 월 (최대 4번까지 연장 가능)
    `,
    subject: `• 일반구직 (D-10-1)
    • (점수제 적용 대상자) 학사 국내 전문학 사 이상의 학위를 소지한 자로 구직, 점 수표에서 총 190점 중 기본항목이 20 점 이상으로 총 득점이 60점 이상인 자 (D-10-1 TEST 참고)
    • (점수제 면제 특례자) 국내 정규 대학에 서 전문 학사 이상 학위 취득 후 3년이 경과하지 아니한 자로 TOPIK 4급 이상 유효 성적표 소지자, 사회통합프로그램
    • 4단계 중간평가 합격자 또는 사전평가
    • 5단계 배정자
    • 창업준비 (D-10-2)
    • 학사 국내 전문 학사 이상의 학위를 소 지한 자로 아래 어느 하나에 해당하는 요건을 갖춘 자
    • 대한민국 지식재산권 중 특허권, 실용신 안권, 디자인권을 보유하고 있거나 출원 중인 자
    • OECD 지적재산권 보유자
    • 법무부 중소기업벤처부가 공동 지정한 글로벌창업이민센터에서 시행하는 창 업 이민종합지원시스템(OASIS)의 교 육과정에 참여 중이거나 최근 3년 이내 해당 교육과정 일부 또는 전부를 이수한 사실이 있는 자
    • 첨단기술인턴 (D-10-3)
    • 해외 우수 대학 (본교만 해당) 첨단기술 분야 학사과정 이상 재학생 또는 학위 취득일로부터 3년이 경과되지 않은 졸 업생 (학사 : 만 30세 미만, 석사 이상:
    만 35세 미만) 으로, 아래 어느 하나에 해당하는 국내기업 등과 인턴활동 계약 을 체결한 자
    • 첨단 기술분야 연구시설(연구전담 부서)을 갖춘 국내 상장기업
    • 기초연구법 제 14조의 2에 따른 기 업부설연구소 또는 연구개발 전담 부서를 갖춘 국내 기업
    • • 연구개발특구의 육성에 관한 특별 법제 9조에 따라 첨단기술기업으 로 지정받은 기업
    • 벤처기업육성에 관한 특별조치법 제 25조에 따라 중소 벤처기업부 의 확인을 받은 벤처기업
    • • 국공립 연구기관, 특정연구기관, 과 학기술분야 정부출연 연구기관`,
    document: `• ﻿﻿일반구직 D-10-1 : 점수제 적용 대상자
      - 공통서류 (신청서, 사진, 여권사본, 수수 료, 신분증 사본 등)
      구직활동 계획서
      학위증
      국내 전문대학 이상 졸업자 : 학력증명서
      세계 우수대학 대학 졸업자 학력증명서
      •근무경력 증빙서류 (해당자에 한함)﻿﻿ 근무기간, 장소, 직종 등이 포함된 경 력증명서 (재직증명서)﻿﻿ 국내 연수 활동 증빙서류 (해당자에 한 함)﻿﻿ 한국어 능력 입증서류 (해당자에 한함)﻿﻿• TOPIK(유효기간 이내) 또는 KIP 이수
      증빙서류
      `,
  },
  [VisaCode.E1]: {
    title: '교수',
    category: VisaCategory.Career,
    description: `- 고등교육법에 의한 자격요건을 갖춘 외국 인으로서 전문대 이상의 교육기관이나 이 에 준하는 기관에서 교육 또는 연구지도
    - 한국과학기술원 등 학술기관의 교수
    - 전문대학 이상의 교육기관에서 임용하 는 전임강사 이상의 교수
    - 대학 또는 대학부설연구소의 특수분야 연구교수 고급과학 기술인력
    - 고급과학 기술인력
    - 전문대학 이상의 교육과학기술분야의 교육.연구지도 활동에 종사하고 자 하는 자로서 교육부장관의 고용추천이 있는
    자
    - 1회 부여할 수 있는 체류 기간 상한: 5년`,
    subject: `한국과학기술원 등 학술기관 교수 전문대 학 이상의 교육기관에서 임용하는 조교수 이상의 교수 대학 또는 대학부설연구소의 특수분야 연구교수`,
    document: `- 사증발급인정신청서, 여권, 표준규격사진 1장, 수수료
    - 고용계약서 원본 및 사본 또는 (임용예정
    확인서)
    - 경력증명서(학위증 사본 첨부)
    - 회사설립관련서류 (사업자등록증,연구기관 입증서류`,
  },
  [VisaCode.E2]: {
    title: '회화지도',
    category: VisaCategory.Education,
    description: `- 법무부장관이 정하는 자격요건을 갖춘 외 국인으로서 외국어전문학원, 초등학교 이 상의 교육기관 및 부설어학연구소, 방송사 및 기업체부설 어학연수원 기타 이에 준하 는 기관 또는 단체에서 외국어 회화지도
    - 회화지도의 개념
    - 외국어전문학원, 교육기관, 기업, 단 체 등에서 수강생에게 외국어로 상호 의사소통하는 방법을 지도하는 활동
    - 따라서 외국어로 특정 어학이나 문학 또는 통/번역 기법 등을 지도하는 것 은 회화지도 활동에 해당하지 않음
    - 활동 장소
    - 외국어전문학원, 초등학교 이상의 교 육기관 및 부설어학연구소, 방송사 및 기업체부설 어학연수원 기타 이에 준 하는 기관 또는 단체
    - 1회 부여할 수 있는 체류 기간 상한: 2년`,
    subject: `- 외국어 학원 등의 강사
    - 해당 외국어를 모국어로 하는 국가의 국 민으로서 해당 외국어를 모국어로 하는 국가에서 대학 이상의 학교를 졸업하고, 학사이상의 학위를 소지한 자 또는 이와 동등 이상의 학력이 있는 자
    - 해당 외국어를 모국어로 하는 국가에서 고등학교 또는 전문대학을 졸업하고 국 내의 대학에서 학사 이상의 학위를 취득 한 경우 자격 인정
    - 교육부 또는 시 도교 육감 주관으로 모집
    선발된 자로서 초,중,고등학교에서 근무하 려는 자
    - 영어를 모국어로 하는 국가 국민으로서 출신국가에서 대학을 졸업하고 학사학 위 이상의 학위를 취득한 자
    - 영어 모국어 국기
    - 미국, 영국`,
    document: `- 사증발급인정신청서, 여권, 표준규격사진 1매
    - 공적확인을 받은 학력증명서 (학위증 사 본, 학위취득 증명서, 학위취득사실이 기 재된 졸업증명서 중 1종만 제출)
    - 공적확인을 받은 자국정부 발급 범죄경력 증명서 (자국 전역의 범죄경력이 포함되 어 있어야 함)
    - 공적확인을 받은 제 3국 범죄경력증명서:
    자국 이외의 국가에서 학위를 취득한 경우
    제출
    - 자국 범죄경력증명서 규정 준용
    - 자기건강확인서
    - 고용계약서 (최소 임금요건 : 당해연도 최 저임금 이상), 학원 또는 단체 설립관련 서류
    - 기타 심사에 필요한 참고자료 : 강사활용`,
  },
  [VisaCode.E3]: {
    title: '연구',
    category: VisaCategory.Education,
    description: `- 자연과학분야의 연구 또는 산업상 고도기 술의 연구개발 종사
    - 고급과학기술인력
    - 사회과학 인문학 예체능 분야의 연구 인력
    - 1회 부여할 수 있는 체류 기간 상한: 5년`,
    subject: `특정 연구기관 육성법, 정부출연 연구기관 등의 설립, 운영 및 육성에 관한 법률, 과 학기술분야 정부출연연구기관 등의 설립, 운영 및 육성에 관한 법률에 의한 연구기 관에서 자연과학, 사회과학, 인문학, 예체 능 분야의 연구 또는 산업상의 고도기술의 연구 개발에 종사하는자`,
    document: `- 사증발급인정신청서, 여권, 표준규격사진 1매
    - 고용기관 설립 관련 서류(사업자등록증
    또는 법인등기사항전부증명서 또는 연구 기관 입증서류 등)﻿﻿• 석사 학위 이상 학위증, 경력증명서 (해당 자)
    - 고용계약서 또는 임용예정확정자
    - 대학 대표자 명의로 발급된 졸업예정증명 서, 확인서 등과 학위수여 날짜를 확인할 수 있는 증명서 등 (해당자)`,
  },
  [VisaCode.E4]: {
    title: '기술지도',
    category: VisaCategory.Education,
    description: `- 공,사기관에서 자연과학분야의 전문지식 또는 산업상의 특수분야에 속하는 기술 제공
    - 1회 부여할 수 있는 체류 기간 상한: 5년`,
    subject: `- 국내에서 구할 수 없는 산업상의 고도기술 등을 국내 공사,기관에 제공하는 자
    - 외국의 용역발주업체에서 파견되어 산업 상의 특수분야에 속하는 기술을 제공하는 자
    - 국내 산업체에서 도입한 특수기술 등을 제 공하는 자`,
    document: `- 사증발급인정신청서, 여권, 표준규격사진 1매
    - 공사기관 설립관련 서류: 사업자등록증, 외국인투자기업등록증, 지사설치허가서 등
    - 기술 도입계약 신고수리서, 기술도입계약 서(또는 용역거래 계약서)또는 방산업체 지정서 사본
    - 파견명령서 (또는 재직증명서)`,
  },
  [VisaCode.E5]: {
    title: '전문직업',
    category: VisaCategory.Education,
    description: `- 대한민국의 법률에 의하여 인정된 외국의 국가공인자격증을 소지한 자로서 대한민 국의 법률에 의하여 행할 수 있도록 되어 있는 전문업무 종사
    - 1회 부여할 수 있는 체류 기간 상한: 5년`,
    subject: `- 대한민국의 법률에 의하여 인정된 외국의 국가공인자격증을 소지한 자로서 대한민 국 법률에 의하여 행할 수 있도록 되어 있 는 아래 해당자
    - 국토해양부장관의 추천을 받은 항공기 조종사`,
    document: `- 고용계약서
    - 소관 중앙행정기관 장의 고용추천서 (다 만, 경제자유구역 내에서 취업활동을 하려 는 자는 관할 특별시장, 광역시장, 도지사 의 고용추천서 또는 고용의 필요성을 입증 할 수 있는 서류) 또는 고용의 필요성을 입 증할 수 있는 서류
    - 학위증 및 자격증 (면허증) 사본
    - 초청사유서
    - 사증발급신청서, 여권, 표준규격사진 1매, 수수료`,
  },
  [VisaCode.E6]: {
    title: '예술흥행',
    category: VisaCategory.Education,
    description: `E-6(예술흥행)
    - 대상자
    - 수익이 따르는 음악 미술 문학 등의 예술 활동
    - 창작활동을 하는 작곡가 화가 조각가 공 예가 저술가 및 사진작가 등의 예술가
    - 음악, 미술, 문학, 사진, 연주, 무용, 영 화, 체육, 기타 예술상의 활동에 관한 지 도를 하는 자 (예: 프로 및 아마추어 스 포츠 감독, 오케스트라 지휘자 등)
    - 수익을 목적으로 하는 연예, 연주, 연극, 운동경기, 광고, 패션모델 등으로 출 연하 는 흥행활동
    - 출연형태나 명목을 불문하고 수익을 위 하여 개인 또는 단체로 연예, 연주, 연 극, 운동 등을 하는 자 (예 : 프로 및 아 마추어 스포츠 선수등`,
    subject: `- 수익이 따르는 음악 미술 문학 등의 예술 활동
    - 창작활동을 하는 작곡가 화가 조각가 공 예가 저술가 및 사진작가 등의 예술가
    - 음악, 미술, 문학, 사진, 연주, 무용, 영 화, 체육, 기타 예술상의 활동에 관한 지 도를 하는 자 (예: 프로 및 아마추어 스 포츠 감독, 오케스트라 지휘자 등)
    - 수익을 목적으로 하는 연예, 연주, 연극, 운동경기, 광고, 패션모델 등으로 출 연하 는 흥행활동
    - 출연형태나 명목을 불문하고 수익을 위 하여 개인 또는 단체로 연예, 연주, 연 극, 운동 등을 하는 자 (예 : 프로 및 아 마추어 스포츠 선수등`,
    document: `- 공연법 규정에 의한 공연을 하려는 경우
    - 사증발급인정신청서, 여권, 표준규격사진 1매
    - 사업자등록증 사본
    - 고용계약서 사본
    - 영상물등급위원회(제주특별자치도의 경우 제주특별자치도지사)의 공연추천 서 (추천제외대상공연은 면제)
    - 공연계획서
    - 피초청인이 미성년자인 경우, 법정대리 인의 동의서
    - 관광진흥법에 의한 호텔업시설 유흥업소
    등에서 공연 또는 연예활동에 종사하려는 경우
    - 사증발급인정신청서, 여권, 표준규격사진 1매`,
  },
  [VisaCode.E7]: {
    title: '특정활동',
    category: VisaCategory.Education,
    description: `- 대한민국 내의 공/사기관 등과의 계약에 따라 법무부장관이 특별히 지정하는 활동 에 종사하려고 하는 사람
    - '특정활동'이란 법무부장관이 국가경쟁력 강화 등을 위해 전문적인 지식 및 기술 또 는 기능을 가진 외국인력 도입이 특히 필 요하다고 지정한 분야에서의 활동을 의미
    - E-7-1: 전문인력 | 관리자 및 전문가 (67
    개 직종)
    - E-7-2: 준전문인력 | 사무 및 서비스종사 자 (9개 직종)
    - E-7-3: 일반기능인력 | 기능원 및 관련기 능종사자 (8개 직종)
    - E-7-4: 숙련기능인력(점수제) | 3개 직종
    - 1회 부여할 수 있는 체류 기간 상한: 3년`,
    subject: `- (일반 요건) 다음 요건 중 하나를 충족하 여야 함
    - 도입직종과 연관성이 있는 분야의 석사 이상 학위 소지
    - 도입직종과 연관성이 있는 학사학위 소 지 + 1년 이상의 해당분야 경력 (경력은 학위 자격증, 취득 이후의 경력만 인정 하되 첨단기술(IT), 바이오, 나노 등 분 야 종사자에 한하여 졸업 이전 해당 분 야 인턴 경력을 근무 경력으로 인정)
    - 산업발전법 제 5조에 따라 산업통상자 원부장관이 고시하는 첨단기술 분야
    - 도입직종과 연관성이 있는 분야에 5년 이상의 근무경력`,
    document: `외국인 준비 서류`,
  },
  [VisaCode.E8]: {
    title: '계절근로',
    category: VisaCategory.Education,
    description: `- 법무부장관이 관계 중앙행정기관의 장과 협의하여 정하는 농작물 재배, 수확 (재배, 수확과 연계된 원시가공 분야를 포함한 다) 및 수산물 원시가공 분야에서 취업 활 동을 하려는 사람으로서 법무부장관이 인 정하는 사람
    - 1회 부여할 수 있는 체류 기간 상한: 5개 월 (총 체류기간 8개월을 초과할 수 없음)`,
    subject: `- E-8-1: 국내 지자체와 외국 지자체가 MOU 방식으로 선정 (농업)
    - E-8-2: 결혼이민자가 해외 거주하는 4촌 이내 친척을 추천 능입`,
    document: `• 보험증서를 제출하지 못하는 사정이 있 을 경우 사증발급정서를 먼저 발급한 후 지자체를 통하여 추후 보완 제출`,
  },
  [VisaCode.E9]: {
    title: '비전문취업(E-9)',
    category: VisaCategory.Education,
    description: `고용허가제에 의거하여 사업주에게 외국 인근로자의 고용을 허가하고, 외국인 근로 자에게는 당해 사업주에게 고용되는 조건 으로 최장 4년 10개월간 취업을 허용하는 인력제도`,
    subject: `- 외국인 근로자의 고용에 관한 법률의 규정 에 의한 국내 취업요건을 갖춘 자
    - (태국, 필리핀, 스리랑카, 베트남, 인도 네시아, 몽골, 파키스탄, 우즈베키스탄, 캄보디아, 중국, 방글라데시, 네팔, 미얀 마, 키르기스스탄, 동티모르, 라오스)`,
    document: `자국 내의 모든 범죄경력이 포함되어 있 을 것, 다만 국적 내 범죄경력을 확인 하는 시스템이 미흡할 경우 거주지를 관 할하는 내무기관 등의 증명서로 대체 가능`,
  },
  [VisaCode.E10]: {
    title: '선원취업',
    category: VisaCategory.Education,
    description: `- 내항선원으로 국내취업
    - 20톤 이상의 어선원으로 국내취업
    - 2천톤 이상의 순항여객선원으로 국내취업
    - 1회 부여할 수 있는 체류 기간 상한: 3년`,
    subject: `- 내항선원 (E-10-7)
    - 해운법 제 3조제1호 (내정기여객운송사업), 제 2호 (내부정기여객운송사업) 및 제 23조제1호(내항화물운송)의 사업을 영위하는 자와 그 사 업체에서 6개월 이상 선원근로계약을 체결한 선 원법 제 3조제5호의 부원에 해당하는 자`,
    document: `- 사증발급인정신청서(별지 제 21호 서식), 여권, 사업자 등록증, 표준규격사진 1매
    - 표준근로계약서 사본
    - 신원보증서
    - 외국인선원고용신고수리서 (지방해양항만청
    발급)
    - 해운법에 따른 내항여객운송사업면허증, 내항화 물운송사업등록증 사본 (최초 신청 또는 등록사 항 변경 시에만 제출)
    - 외국인선원고용추천서 (지방해양수산청장 발급)
    - '승선정원증서' 또는 '500톤 미만 선박검사증서 등 기타 청 (사무소 출장소)장이 필요하다고 인 정하는 서류`,
  },
  [VisaCode.F1]: {
    title: '방문동거',
    category: VisaCategory.Residence,
    description: `- 친척방문 가족동거 피부양 가사정리 기타 이와 유 사한 목적의 체류
    - 1회 부여할 수 있는 체류 기간 상한: 2년`,
    subject: `- 친척방문, 가족동거, 피부양, 가사정리, 기타 이와 유사한 목적으로 체류하고자 하는 자
    - 외국국적을 취득한 동포로서 법무부장관이 특별히 국내체류를 허가한 자(재외동포(F-4)자격 해당자 제외)
    - 주한 외국공관원의 가사보조인
    - 미화 50만불 이상을 투자한 외국인투자가(투자한 기업체의 임직원 포함)로서 체류자격 기업투자(D-8)•거주(F-2)•영주(F-5)자격에 해당하는 자의 가사보조인
    - 외교(A-1), 공무(A-2), 협정(A-3) 자격에 해당하는 자와 외국인등록을 마친 자의 동거인으로서 그 세대에 속하지 않니한 자
    - 출생당시 대한민국국적을 보유하였던 해외입양인
    - 대한민국정부수립(1948.8.15) 이전 해외로 이주한 동포 1세
    - 체류자격 문화예술(D-1), 유학(D-2), 일반연수(D-4), 취재(D-5), 종교(D-6), 주재(D-7), 기업투자(D-8), 무역경영(D-9), 교수(E-1), 회화지도(E-2), 연구(E-3), 기술지도(E-4), 전문직업(E-5), 예술흥행(E-6), 특정활동(E-7)에 해당하는 자의 성년인 자녀
    - 거주(F-2) 자격을 가지고 있는 자의 배우자 또는 자녀
    - 대한민국에 주소를 둔 대한민국 국민으로 양육권을 가진 부 또는 모의 부양을 받을 필요가 있는 미성년자
   취업관리제 대상 외국국적동포
    - 그밖에 부득이한 사유로 직업활동에 종사하지 아니하고 대한민국내에 장기간 체류하여야 할 사정이 있다고 인정되는 자`,
    document: `① 여권, 사진 1장, 사증발급신청서

  - 국내에 거주하는 가족 또는 친족을 방문하는 경우
 ② 가족 또는 친족관계 입증서류(결혼증명서•호적등본 또는 출생증명서 등)
 ③ 신원보증서
 
 
 
 - 주한 외국공관원의 가사보조인
 
 
 
 ② 외국공관의 요청공문
 ③ 고용계약서
 ④ 고용인의 외교관 신분증명서 사본
 
 
 
 - 미화 50만불 이상을 투자한 외국인투자가(투자한 기업체의 임직원 포함)로서 체류자격 기업투자(D-8)•거주(F-2)•영주(F-5)자격에 해당하는 자의 가사보조인
 
 
 
 ② 외국인투자신고서(등기부등본 또는 사업자등록증사본) 또는 투자기업등록증사본 등 미화 50만불 이상을 투자한 자(기업체임직원)임을 입증하는 서류
 
 
 
 - 임직원인 경우 임직원임을 입증하는 재직증명서
 
 
 
 ② 초청자(가사보조인의 고용주)와 피초청자(가사보조인)간 고용계약서 사본
 ③ 초청자(가사보조인의 고용주)의 신원보증서
 
 
 
 - 체류자격 문화예술(D-1), 유학(D-2), 일반연수(D-4), 취재(D-5), 종교(D-6), 주재(D-7), 기업투자(D-8), 무역경영(D-9), 교수(E-1), 회화지도(E-2), 연구(E-3), 기술지도(E-4), 전문직업(E-5), 예술흥행(E-6), 특정활동(E-7)에 해당하는 자의 성년인 자녀
 
 
 
 ② 성년인 자녀임을 입증하는 서류(결혼증명서 • 호적등본 또는 출생증명서 등)
 체류비용 등 재정관계 입증서류(초청자의 재직(학)증명서, 납세사실증명서, 예금잔고증명서 등)
 
 
 
 - 거주(F-6) 자격을 가지고 있는 자의 배우자 또는 자녀
 
 
 
 ② 거주(F-6)자격 소지자의 배우자 또는 자녀임을 입증하는 서류
 ③ 동거의 목적임을 입증하는 서류
 ④ 초청자 및 그 배우자의 경제능력입증서류(재직증명서, 사업자등록증사본, 통장잔고증명 등)
 
 
 
 - 대한민국에 주소를 둔 대한민국 국민으로 양육권을 가진 부 또는 모의 부양을 받을 필요가 있는 미성년자
 
 
 
 ② 해당 자녀가 미성년자임을 입증하는 공적 서류
 ③ 대한민국 국민과 해당 미성년자와의 관계 및 양육권 보유관계를 입증할 수 있는 서류
 ④ 양육권 보유관계를 입증할 수 있는 서류가 없는 경우에는 해당 미성년자와 동일한 국적을 보유한 친권자 또는 후견인
 ⑤ 동의서(친권자•후견인이 없는 경우 친권자•후견인이 없다는 사실을 입증할 수 있는 관련국의 공적 서류 또는 공증증서)
 ⑥ 양육권을 가진 대한민국국민인 부 또는 모의 신원보증서(그 부 또는 모가 배우자가 있을 경우 그 배우자의 신원보증서도 필요)
 
 
 
 - 취업관리제(친척 방문)
 
 
 
 ② 초청사유서(상세경위기재)
 ③ 친족관계 입증서류(호적등본, 제적등본, 족보, 옛날사진, 장기간 왕래한 사진, KBS이산가족찾기 확인서 등)
 ④ 초청자의 주민등록증(앞,뒷면)사본 및 주민등록등본
 
 
 
 - 취업관리제(대한민국호적에 등재되어 있는 동포1세 및 그의 직계비속)
 
 
 
 ② 호적등본 또는 제적등본
 ③ 가족관계등록서류 등 본인 및 가족임을 확인할 수 있는 서류
 
 
 
 - 취업관리제(독립유공자 직계혈족)
 
  
 
 ② 직계혈족임을 소명할 수 있는 서류
 ③ 훈장증 또는 유공자증 등 증빙자료`,
  },
  [VisaCode.F2]: {
    title: '거주',
    category: VisaCategory.Residence,
    description: `- 영주자격을 부여받기 위하여 국내 장기체류하려는
    자
    - 1회 부여할 수 있는 체류 기간 상한: 5년`,
    subject: `- 국민의 배우자
    - 영주(F-5) 자격 소지자의 배우자`,
    document: `① 여권, 사진 1장, 사증발급신청서
    ② 가족관계 입증서류(결혼증명서•호적등본 등 혼인입증 서류)
    ③ 재정입증 관련서류
    ④ 국내 배우자의 신원보증서 
    
    ※ 단, 사증발급인정서 신청시에는 수수료가 부과되지 않습니다.`,
  },
  [VisaCode.F3]: {
    title: '동반',
    category: VisaCategory.Residence,
    description: `- 동반가족
    - 1회 부여할 수 있는 체류 기간 상한: 동반하는 본인 에 정하여진 기간`,
    subject: `-체류자격 문화예술(D-1), 유학(D-2), 일반연수(D-4), 취재(D-5), 종교(D-6), 주재(D-7), 기업투자(D-8), 무역경영(D-9), 교수(E-1), 회화지도(E-2), 연구(E-3), 기술지도(E-4), 전문직업(E-5), 예술흥행(E-6), 특정활동(E-7)에 해당하는 자의 배우자 및 20세미만의 자녀로서 배우자가 없는 자
    - 취재(D-5)자격 해당자의 동반 입국자에 대한 동반(F-3) 사증발급은 국내 지사(국)이 개설되어 있어야 함
    ※ 비전문취업(E-9) 자격〔산업연수(D-3), 연수취업(E-8) 자격 포함〕체류자의 질병이나 산재등 부득이한 사유로 인하여 그 가족이 일시적으로 방문하여야 할 필요성이 인정되는 경우 단기종합(C-3) 사증발급`,
    document: `① 여권, 사진 1장, 사증발급신청서
    ② 가족관계 입증서류 (결혼증명서•호적등본 또는 출생증명서)
    ③ 초청자의 재직증명서 및 납세증명서
    ※ 단, 사증발급인정서 신청시에는 수수료가 부과되지 않습니다.
    `,
  },
  [VisaCode.F4]: {
    title: '재외동포',
    category: VisaCategory.Residence,
    description: `1회 부여할 수 있는 체류 기간 상한: 원칙적으로 3 년 이내`,
    subject: `- 재외동포의출입국과법적지위에관한법률 제2조제2호에 해당하는 자(단순노무행위 등 영 제23조 제3항 각호에서 규정한 취업활동에 종사하려고 하는 자는 제외)
    - 대한민국의 국적을 보유하였던 자로서 외국국적을 취득한 자
    - 부모의 일방 또는 조부모의 일방이 대한민국의 국적을 보유하였던 자로서 외국 국적을 취득한 자
    `,
    document: `① 여권, 사진 1장, 사증발급신청서



    - 대한민국의 국적을 보유하였던 자로서 외국국적을 취득한 자
    
     
    
    ② 호적등본, 제적등본 기타 본인이 대한민국의 국민이었던 사실을 증명하는 서류
    ③ 외국국적을 취득한 원인 및 그 연월일을 증명하는 서류
    ④ 연간 납세사실증명서, 소득증명서류 등 체류기간 중 단순노무행위 등 출입국관리법 시행령 제23조제3항 각 호에서 규정한 취업활동에 종사하지 아니할 것을 소명하는 서류(법무부장관이 고시하는 불법체류가 많이 발생하는 국가의 외국국적동포에 한
    ⑤ 그 밖에 법무부장관이 필요하다고 인정하는 서류
    
    
    
    - 부모의 일방 또는 조부모의 일방이 대한민국의 국적을 보유하였던 자로 외국 국적을 취득한 자
    
    
    
    ② 직계존속이 대한민국의 국민이었던 사실을 증명하는 서류
    ③ 본인과 직계존속이 외국국적을 취득한 원인 및 그 연월일을 증명하는 서류
    ④ 직계존비속의 관계임을 증명하는 서류(출생증명서 등)
    ⑤ 연간 납세사실증명서, 소득증명서류 등 체류기간 중 단순노무행위 등 출입국관리법 시행령 제23조제3항 각 호에서 규정한 취업활동에 종사하지 아니할 것을 소명하는 서류(법무부장관이 고시하는 불법체류가 많이 발생하는 국가의 외국국적동포에 한함
    ⑥ 그 밖에 법무부장관이 필요하다고 인정하는 서류
    ⑦ 재외동포(F-4)의 자격에 해당하는 자는 다음에 해당하는 경우를 제외하고는 체류자격의 구분에 따른 활동의 제한을 받지 않으나, 허용되는 취업활동이라도 국내 법령에 의하여 일정한 자격을 요하는 때에는 그 자격을 갖추어야 함.
     
    - 단순노무행위를 하는 경우
    
    
    
    ② 단순하고 일상적인 육체노동을 요하는 업무로 한국표준직업분류(통계청 고시)상의 단순노무직근로자의 취업분야
    ③ 사행행위 등 선량한 풍속 기타 사회질서에 위반되는 행위를 하는 경우
    ④ 사행행위 등 규제 및 처벌특례법 제1조제1항 제1호 및 동법 시행령 제1조의2 등에서 규정하고 있는 사행행위 영업장소 등에의 취업
    ⑤ 식품위생법 제21조제2항 및 동법 시행령 제7조제8호 등에서 규정하고 있는 유흥주점 등에서 유흥종사자로 근무하는 행위
    ⑥ 풍속영업의 규제에 관한 법률 제2조 및 동법 시행령 제2조 등에서 규정하고 있는 풍속영업 중 선량한 풍속 기타 사회질서에 반하는 영업장소 등에의 취업 등
    ⑦ 기타 공공의 이익이나 국내 취업질서 등의 유지를 위하여 그 취업을 제한할 필요가 있다고 인정되는 경우`,
  },
  [VisaCode.F5]: {
    title: '영주',
    category: VisaCategory.Residence,
    description: `- 체류자격의 구분에 따른 활동의 제한을 받지 않음
    - 1회 부여할 수 있는 체류 기간 상한: 상한 없음`,
    subject: `- F-5-1: 5년 이상 대한민국에 체류하고 있는 사람
    - F-5-4 : 영주자역 소지자의 배우자 또는 미성년 자녀
    - F-5-5: 50만 달러 이상 투자자로 국민 5인 이상 고용한 사람
    - F-5-8: 대한민국 출생 재한화교
    - F-5-9: 첨단산업 분야 박사학위 소지하고 국내기 업에 고용된 사람`,
    document: `- 공통 제출 서류
    - 통합신청서
    - 여권
    - 외국인등록증
    - 체류지 입증서류
    - 해외범죄경력증명서
    - 신원보증서
    - 소득금액증명
    - 종합소득세
    - 한국이미영주저격시험`,
  },
  [VisaCode.F6]: {
    title: '결혼이민',
    category: VisaCategory.Residence,
    description: `- 결혼가족 및 이혼가족
    - 1회 부여할 수 있는 체류 기간 상한: 3년`,
    subject: `- F-6-1: 한국에서 혼인이 유효하게 성립되어 있고 우리 국민과 결혼생활을 지속하기 위해 국내 체류 를 하고자 하는 사람
    - F-6-2: 국민과 혼인관계 (사실상의 혼인관계를 포 함한다)에서 출생한 미성년 자녀를 혼인관계 단절 후 국내에서 양육하거나 양육하려는 부 또는 모
    - F-6-3: 국민인 배우자와 혼인한 상태로 국내에 체 류하던 중 그 배우자의 사망이나 실종 그 밖에 자신 에게 책임이 없는 사유로 정상적인 혼인관계를 유지`,
    document: `- 기본 서류
    - 비자 신청서(사증발급 신청서)
    - 여권용 사진 1매
    - 신청인 (외국인 배우자) 여권 원본
    - 신청인 여권 사본 1부
    - 비자 신청 수수료
    - 외국인 배우자 초청장 (한국인 배우자가 한글로 작성)
    - 신원보증서 (한국인 배우자가 한글로 작성)
    - 외국인 배우자의 결혼배경진술서(외국인 배우 자가 영어로 작성)`,
  },
  [VisaCode.G1]: {
    title: '기타',
    category: VisaCategory.Etc,
    description: `외교(A-1)부터 결혼이민(F-6)까지, 관광 취업(H-1) or 방문취업(H-2) 체류 자격에 해당하지 않는 사람으로서 법무부장관이 인정하는 사람`,
    subject: `- 산업재해 청구 및 치료 중인 사람과 그 가족`,
    document: `- 국내 출생 난민 신청자 (G-1-5)`,
  },
  [VisaCode.H1]: {
    title: '관광취업',
    category: VisaCategory.Career,
    description:
      '- 18세～30세 양국 청소년․청년이 관광을 목적으로 타방국에 체류하며 이에 수반되는 경비 충당을 위해 취업을 허용하는 특별 비자',
    subject: `
      ① 체류기간 1년의 복수비자 발급
      ② 1인 1회에 한하여 발급
      ③ 만 18세이상 30세이하
      ④ 피부양인 미동반
      ⑤ 초기 체재비용 소지`,
    document: `① 여권, 사진1장
      ② 비자신청서
      ③ 왕복항공권 또는 항공권구매를 입증할 수 있는 재정서류
      ④ 재정입증서류 (2500유로 이상)
      ⑤ 여행계획서 또는 동기서
      ⑥ 여행자 의료보험증서
      ⑦ 무범죄 서약서
      ⑧ 수수료: 67.20 유로
      `,
  },
  [VisaCode.H2]: {
    title: '방문취업',
    category: VisaCategory.Career,
    description: `출생에 의하여 대한민국의 국적을 보유하였던 사람 (대한민국 정부 수립 이전에 국외로 이주한 동포를 포함) 또는 그 직계 비속으로서 외국 국적을 취득한 사람`,
    subject: `출생에 의하여 대한민국의 국적을 보유하였던 사람 (대한민국 정부 수립 이전에 국외로 이주한 동포를 포함) 또는 그 직계 비속으로서 외국 국적을 취득한 사람`,
    document: `공통 제출 서류`,
  },
};

export const VisaStatus: Record<VisaCode, string> = {
  [VisaCode.NA]: 'N/A(비자없음)',
  [VisaCode.A1]: '외교(A-1)',
  [VisaCode.A2]: '공무(A-1)',
  [VisaCode.A3]: '협정(A-3)',
  [VisaCode.B1]: '사증면제(B-1)',
  [VisaCode.B2]: '관광통과(B-2)',
  [VisaCode.C1]: '일시취재(C-1)',
  [VisaCode.C3]: '단기방문(C-3)',
  [VisaCode.C4]: '외교(C-4)',
  [VisaCode.D1]: '문화예술(D-1)',
  [VisaCode.D2]: '유학(D-2)',
  [VisaCode.D3]: '기술연수(D-3)',
  [VisaCode.D4]: '일반연수(D-4)',
  [VisaCode.D5]: '취재(D-5)',
  [VisaCode.D6]: '종교(D-6)',
  [VisaCode.D7]: '주재(D-7)',
  [VisaCode.D8]: '기업투자(D-8)',
  [VisaCode.D9]: '무역경영(D-9)',
  [VisaCode.D10]: '구직(D-10)',
  [VisaCode.E1]: '교수(E-1)',
  [VisaCode.E2]: '회화지도(E-2)',
  [VisaCode.E3]: '연구(E-3)',
  [VisaCode.E4]: '기술지도(E-4)',
  [VisaCode.E5]: '전문직업(E-5)',
  [VisaCode.E6]: '예술흥행(E-6)',
  [VisaCode.E7]: '특정활동(E-7)',
  [VisaCode.E8]: '계절근로(E-8)',
  [VisaCode.E9]: '비전문취업(E-9)',
  [VisaCode.E10]: '선원취업(E-10)',
  [VisaCode.F1]: '방문동거(F-1)',
  [VisaCode.F2]: '거주(F-2)',
  [VisaCode.F3]: '동반(F-3)',
  [VisaCode.F4]: '재외동포(F-4)',
  [VisaCode.F5]: '영주(F-5)',
  [VisaCode.F6]: '결혼이민(F-6)',
  [VisaCode.G1]: '기타(G-1)',
  [VisaCode.H1]: '관광취업(H-1)',
  [VisaCode.H2]: '방문취업(H-2)',
};

const jobVisa = {
  C4: {
    type: 'C-4',
    title: '단기취업',
    description: [
      '법무부장관이 관계 중앙행정기관의 장과 협의하여 정하는 농작물 재배 수확 및 수산물 원시가공 분야에서 취업활동을 하려는 사람으로서 법무부장관이 인정하는 사람 (C-4-1~4)',
      '일시흥행, 광고․패션모델, 강의․강연, 연구, 기술지도 등 수익을 목적으로 단기간 취업활동을 하려는 자(C-4-5)',
      '1회에 부여할 수 있는 체류기간 상한 90일',
    ],
    subject: ['계절근로 단기취업(C-4-1, C-4-2, C-4-3, C-4-4)', ''],
  },
};
