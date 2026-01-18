const experiences = [
  {
    id: 1,
    company: 'Tech Company A',
    role: '시니어 프론트엔드 개발자',
    period: '2022.03 - 현재',
    description: [
      'React 기반 대규모 SPA 개발 및 유지보수',
      '성능 최적화를 통해 페이지 로딩 시간 40% 개선',
      '주니어 개발자 멘토링 및 코드 리뷰 담당',
      '디자인 시스템 구축 및 컴포넌트 라이브러리 개발',
    ],
  },
  {
    id: 2,
    company: 'Startup B',
    role: '풀스택 개발자',
    period: '2020.01 - 2022.02',
    description: [
      'Next.js, Node.js를 활용한 웹 서비스 개발',
      'RESTful API 설계 및 구현',
      'MongoDB, PostgreSQL 데이터베이스 설계',
      'AWS 인프라 구축 및 CI/CD 파이프라인 구성',
    ],
  },
  {
    id: 3,
    company: 'Agency C',
    role: '주니어 개발자',
    period: '2018.06 - 2019.12',
    description: [
      '다양한 클라이언트 웹사이트 개발',
      '반응형 웹 디자인 구현',
      'JavaScript, jQuery를 활용한 인터랙티브 기능 개발',
      '워드프레스 커스텀 테마 개발',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-neutral-light/50">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Experience</span>
        </h2>

        {/* 타임라인 */}
        <div className="relative">
          {/* 타임라인 선 */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* 타임라인 점 */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow" />

                {/* 컨텐츠 */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-foreground/70 text-sm flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 빈 공간 (반대편) */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
