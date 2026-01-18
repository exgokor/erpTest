import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* 프로필 이미지 (Placeholder) */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-6xl md:text-8xl text-white font-bold">홍</span>
            </div>
          </div>

          {/* 텍스트 컨텐츠 */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              안녕하세요,{' '}
              <span className="text-primary">홍길동</span>입니다
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-2">
              풀스택 개발자 | 웹 디자이너
            </p>
            <p className="text-lg text-foreground/60 mb-8 max-w-xl">
              사용자 경험을 중시하는 개발자로서, 아름답고 기능적인 웹
              애플리케이션을 만들어갑니다.
            </p>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#portfolio"
                className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 text-center"
              >
                프로젝트 보기
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200 text-center"
              >
                연락하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
