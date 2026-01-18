import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: '풀스택 쇼핑몰 플랫폼. 결제 시스템, 장바구니, 관리자 대시보드 포함.',
    color: 'from-blue-500 to-purple-600',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: '팀 협업을 위한 태스크 관리 애플리케이션. 실시간 업데이트 지원.',
    color: 'from-green-500 to-teal-600',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: '날씨 정보 대시보드. 위치 기반 날씨 예보 및 시각화.',
    color: 'from-orange-500 to-red-600',
    tags: ['React', 'Chart.js', 'Weather API'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'Markdown 기반 블로그 플랫폼. SEO 최적화 및 댓글 시스템.',
    color: 'from-pink-500 to-rose-600',
    tags: ['Next.js', 'MDX', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 5,
    title: 'Social Media Clone',
    description: '소셜 미디어 클론. 게시물 작성, 좋아요, 팔로우 기능.',
    color: 'from-cyan-500 to-blue-600',
    tags: ['React', 'Firebase', 'Redux'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 6,
    title: 'Portfolio Template',
    description: '개발자를 위한 포트폴리오 템플릿. 반응형 디자인.',
    color: 'from-violet-500 to-purple-600',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Portfolio</span>
        </h2>
        <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
          다양한 프로젝트들을 통해 기술력과 창의성을 보여드립니다.
        </p>

        {/* 프로젝트 그리드 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* 프로젝트 이미지 (Placeholder) */}
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-white text-4xl font-bold opacity-30">
                  {project.id}
                </span>
                {/* 호버 오버레이 */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Live Demo"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* 프로젝트 정보 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
