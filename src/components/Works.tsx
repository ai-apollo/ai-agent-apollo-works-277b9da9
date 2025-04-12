import { useState } from 'react';
import { Play, ExternalLink, Tag } from 'lucide-react';

type WorkCategory = 'all' | 'automation' | 'content' | 'community';

type Work = {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  category: WorkCategory[];
  tools: string[];
};

export default function Works() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('all');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  // Sample works - replace with actual data
  const works: Work[] = [
    {
      id: 1,
      title: "対話内容を\"そのまま可視化・解析\"するAIアプリの開発",
      description: "クライアントの音声ファイルをアップロードするだけで、AIが一瞬でテキスト化し、会話の傾向・強み・改善点までを自動で分析。「言葉の流れ」を構造として捉えることで、サービス改善に直結する\"実用型フィードバックループ\"を構築しました。",
      videoUrl: "https://www.youtube.com/embed/XwVqLWnerFo",
      thumbnail: "https://img.youtube.com/vi/XwVqLWnerFo/maxresdefault.jpg",
      category: ['automation'],
      tools: ['GPT-4o', 'claude3.7sonnet', 'cursor']
    },
    {
      id: 2,
      title: "SNS投稿を\"動く流れ\"として設計するブラウザ自動化ツール",
      description: "複数のSNSにまたがる投稿・管理作業を、ブラウザ操作とスクレイピング技術で完全自動化。GPTで生成された原稿を自動で最適化し、投稿予約・タグ分析・反応収集までを\"思考ゼロ\"で実行。投稿者は、ただVIBEを流し込むだけでいい──そんな未来の情報発信構造を実装しました。",
      videoUrl: "https://www.youtube.com/embed/fwmRZenEd8k",
      thumbnail: "https://img.youtube.com/vi/fwmRZenEd8k/maxresdefault.jpg",
      category: ['automation', 'content'],
      tools: ['Playwright', 'GPT-4', 'Python']
    }
  ];

  const filteredWorks = activeCategory === 'all' 
    ? works 
    : works.filter(work => work.category.includes(activeCategory));

  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'automation', name: '自動化' },
    { id: 'content', name: 'コンテンツ' },
    { id: 'community', name: 'コミュニティ' },
  ];

  return (
    <section id="works" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            プロジェクト事例をご紹介します。
          </p>
          <div className="w-20 h-1 bg-apollo-primary mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as WorkCategory)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-apollo-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredWorks.map((work) => (
            <div 
              key={work.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md card-hover"
            >
              <div 
                className="relative h-64 w-full cursor-pointer group"
                onClick={() => setSelectedWork(work)}
              >
                <img 
                  src={work.thumbnail} 
                  alt={work.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-apollo-primary rounded-full p-4">
                    <Play className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{work.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{work.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.category.map((cat) => (
                    <span 
                      key={cat} 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      <Tag size={12} className="mr-1" />
                      {cat === 'automation' ? '自動化' : cat === 'content' ? 'コンテンツ' : 'コミュニティ'}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {work.tools.map((tool) => (
                    <span 
                      key={tool} 
                      className="inline-block px-2 py-1 rounded text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Video Modal */}
      {selectedWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80" onClick={() => setSelectedWork(null)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute -top-12 right-0 text-white hover:text-apollo-primary"
            >
              ✕ 閉じる
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={selectedWork.videoUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold mb-2">{selectedWork.title}</h3>
                  <a 
                    href="#" 
                    className="text-apollo-primary hover:underline flex items-center text-sm"
                    onClick={(e) => e.preventDefault()}
                  >
                    <ExternalLink size={14} className="mr-1" /> YouTube で見る
                  </a>
                </div>
                <p className="text-gray-600 mb-4">{selectedWork.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedWork.tools.map((tool) => (
                    <span 
                      key={tool} 
                      className="inline-block px-2 py-1 rounded text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
