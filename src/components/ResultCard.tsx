interface ResultCardProps {
  title: string;
  value: string | number;
  description: string;
  icon?: string;
  color?: string;
}

export default function ResultCard({ 
  title, 
  value, 
  description, 
  icon = "✦",
  color = "from-purple-600 to-indigo-600"
}: ResultCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-purple-300/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-full flex items-center justify-center shadow-lg mr-4`}>
          <span className="text-white font-bold text-xl">{icon}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="text-3xl font-bold text-golden">{value}</div>
        </div>
      </div>
      
      <p className="text-purple-200 leading-relaxed">{description}</p>
      
      <div className="mt-4 pt-4 border-t border-purple-300/20">
        <div className="flex items-center text-sm text-purple-300">
          <span className="mr-2">💫</span>
          <span>Khám phá thêm về ý nghĩa số này</span>
        </div>
      </div>
    </div>
  );
}
