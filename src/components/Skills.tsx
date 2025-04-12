import { CheckCircle2 } from 'lucide-react';

type SkillCategory = {
  title: string;
  skills: {
    name: string;
    level?: number; // 1-5 for proficiency level
  }[];
};

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "AIモデル",
      skills: [
        { name: "Mastra", level: 5 },
        { name: "Devin", level: 4 },
        { name: "Cuesor", level: 4 },
        { name: "Manus", level: 3 },
        { name: "Dify", level: 4 },
        { name: "ChatGPT", level: 5 },
        { name: "Claude", level: 4 },
        { name: "Gemini", level: 3 },
        { name: "Lovabel", level: 3 },
        { name: "Midjourny", level: 3 }
      ]
    },
    {
      title: "その他",
      skills: [
        { name: "ChatGPT", level: 5 },
        { name: "Claude", level: 4 },
        { name: "Gemini", level: 3 },
        { name: "Google Apps script", level: 4 },
        { name: "vercel", level: 3 },
        { name: "slack", level: 4 },
        { name: "line", level: 4 },
        { name: "Discord", level: 4 },
        { name: "swegger", level: 3 },
        { name: "Github", level: 4 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-200">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="flex items-center">
                      <CheckCircle2 size={18} className="text-apollo-primary mr-2" />
                      <span className="text-gray-800">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">提供できる価値｜ビジネスの"再設計"を仕組みから</h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 text-left">
              <h4 className="text-xl font-semibold mb-3 text-apollo-primary">1. 業務効率の最大化</h4>
              <p className="text-gray-700">
                ──"やらなくていいこと"を仕組みに任せる<br />
                あなたの時間を奪っていた業務を仕組みに引き渡し、 本来集中すべき判断・戦略・創造に時間を取り戻す設計を提供します。
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 text-left">
              <h4 className="text-xl font-semibold mb-3 text-apollo-primary">2. コンテンツ制作フローの一新</h4>
              <p className="text-gray-700">
                ──スピードと質の両立<br />
                AIを用いたコンテンツ制作の"思考から実装まで"の一連フローを最適化。 発想から実装まで「気づけば完成している」仕組みをご提案できます。
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 text-left">
              <h4 className="text-xl font-semibold mb-3 text-apollo-primary">3. 誰でもすぐ使える</h4>
              <p className="text-gray-700">
                ──AI導入の"最初の一歩"を設計<br />
                難しい知識や複雑なツールは不要です。 「まず何から始めればいいのか？」という段階から、具体的な導線・実装まで伴走します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
