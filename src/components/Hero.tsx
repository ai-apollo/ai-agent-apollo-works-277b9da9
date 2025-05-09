import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <h1 className="font-bold leading-tight mb-8 tracking-tighter">
              <span className="block text-3xl sm:text-4xl md:text-5xl mb-2">AIであなたの<span className="text-apollo-primary">「面倒」</span>を</span>
              <span className="block text-3xl sm:text-4xl md:text-5xl">自動化します</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl tracking-tight">
              考えるだけで実行できる仕組みを実現。<br />
              <span className="text-apollo-primary font-bold">面倒</span>はエージェントに、あなたは<span className="text-apollo-primary font-bold">構想</span>だけすればいい<br />
              初心者でも実装できる仕組みを設計｜「AIの社」運営<br />
              技術より"感覚" 才能より"<span className="highlight-text">構造</span>"が作り出す。
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#works" 
                className="px-6 py-3 bg-apollo-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-all hover:shadow-lg"
              >
                実績を見る
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white text-apollo-secondary border border-gray-300 rounded-full font-medium hover:border-apollo-primary hover:text-apollo-primary transition-all"
              >
                お問い合わせ
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <img 
                src="/lovable-uploads/edb915ba-c310-422e-b583-293b0ec72539.png" 
                alt="あぽろ" 
                className="absolute inset-0 w-full h-full object-cover rounded-full shadow-xl z-10 transition-all duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 w-full h-full bg-apollo-primary rounded-full transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-500 hover:text-apollo-primary transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}

