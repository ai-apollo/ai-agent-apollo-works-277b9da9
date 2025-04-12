import { Book, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-apollo-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg text-gray-700 mb-6 tracking-tight">
              はじめまして。<span className="text-apollo-primary font-bold">あぽろ</span>と申します。
            </p>
            <p className="text-lg text-gray-700 mb-6 tracking-tight">
              私は、構想や思考の断片が『そのまま仕組みとして動き出す』状態を設計しています。AIエージェントは、それを自動で動かすパートナーとして位置づけし
              <strong className="text-apollo-primary">【仕組みを持っていない企業】</strong>と、すでに<strong className="text-apollo-primary">【考えずに動く構造で回している企業】</strong>のあいだには、見えないレイヤーの差があると考えており、その見えない<strong className="text-apollo-primary">圧倒的な差</strong>を取り除きます。
            </p>
            
            <ul className="list-none list-inside text-lg text-gray-700 mb-6 pl-4 tracking-tight">
              <li className="mb-2">✅ 思考を即プロトタイプ化する「AIエージェント設計」</li>
              <li className="mb-2">✅ 面倒をゼロにする、完全自動化ワークフローの構築</li>
              <li className="mb-2">✅ ノーコード・非技術者にも扱える導線のUX設計</li>
              <li className="mb-2">✅ プロダクトやサービスの動線全体の再設計と高速化</li>
            </ul>
            
            <p className="text-lg text-gray-700 mb-6 tracking-tight">
              それは『業務改善』ではなく思考や判断に集中できるように、実行・運用・繰り返しを『仕組みが代行する』設計だからこそ意思決定のスピードが上がります。プロジェクトの立ち上げ段階から、既存業務の仕組み化、収益導線の再設計まで<br />
              ──まずは、あなたの「やりたいこと」を聞かせてください。
            </p>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-1 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
              <div className="flex items-start">
                <div className="mr-4 bg-apollo-primary bg-opacity-10 p-3 rounded-full">
                  <Zap className="text-apollo-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-apollo-primary">自動化の力</h3>
                  <p className="text-gray-600 tracking-tight">
                    エンジニアでなくても、AIツールを活用することで複雑なタスクを自動化。時間と労力を大幅に節約し、本当に重要なことに集中できる環境を構築します。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
              <div className="flex items-start">
                <div className="mr-4 bg-apollo-primary bg-opacity-10 p-3 rounded-full">
                  <Book className="text-apollo-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-apollo-primary">コンテンツ創造</h3>
                  <p className="text-gray-600 tracking-tight">
                    AIと人間の強みを組み合わせた独自のコンテンツ制作フロー。情報収集から制作、配信まで、効率的かつ質の高いアウトプットを実現します。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
              <div className="flex items-start">
                <div className="mr-4 bg-apollo-primary bg-opacity-10 p-3 rounded-full">
                  <Users className="text-apollo-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-apollo-primary">コミュニティ育成</h3>
                  <p className="text-gray-600 tracking-tight">
                    「AIの社」運営を通じて培った、技術と人をつなぐ視点。AIの可能性を最大限に引き出しながら、人々にとって意味のある価値を提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
