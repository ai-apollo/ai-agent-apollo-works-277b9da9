
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="block text-2xl sm:text-3xl md:text-4xl">吸って吐いたら</span>
              <span className="text-apollo-primary block">コンテンツまで</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl tracking-wider leading-relaxed">
              クリエイティブな自動化で、あなたのアイデアを瞬時に現実に。
              効率と創造性の融合、新しい価値の創造へ。
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
              <div className="absolute inset-0 w-full h-full bg-apollo-primary rounded-full transform translate-x-4 translate-y-4 opacity-50"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-5/6 h-5/6 rounded-full overflow-hidden grid grid-cols-2 gap-2">
                  <img 
                    src="/lovable-uploads/0d1ac4c7-4c77-4d2f-9e7b-b3a0ba0bb6b2.png" 
                    alt="イラスト1" 
                    className="w-full h-full object-cover"
                  />
                  <img 
                    src="/lovable-uploads/photo-1582562124811-c09040d0a901.jpeg" 
                    alt="猫の画像" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
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
