const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'CSS/Tailwind', level: 85 },
];

const techStack = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Figma',
  'Tailwind CSS',
];

export default function About() {
  return (
    <section id="about" className="bg-neutral-light/50">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 자기소개 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">소개</h3>
            <p className="text-foreground/70 leading-relaxed mb-6">
              안녕하세요! 저는 5년차 풀스택 개발자 홍길동입니다. 웹 개발에
              대한 열정을 가지고 사용자 중심의 서비스를 만들어가고
              있습니다.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-6">
              깔끔한 코드와 직관적인 UI/UX를 추구하며, 최신 기술 트렌드를
              꾸준히 학습하고 있습니다. 협업을 중시하며, 팀원들과의 원활한
              커뮤니케이션을 통해 더 나은 결과물을 만들어냅니다.
            </p>

            {/* 기술 스택 태그 */}
            <h3 className="text-xl font-semibold mb-4">기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 스킬 바 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">핵심 스킬</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-foreground/60">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
