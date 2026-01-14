import React, { useState } from 'react';
import { 
  ChevronRight, 
  Search, 
  Bell, 
  X, 
  Sparkles,
  Loader2,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  ChevronLeft,
  ChevronDown,
  LayoutGrid
} from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Table } from './components/Table';
import { ProfileView } from './components/ProfileView';
import { analyzeCRMData } from './services/geminiService';
import { DATASETS, SIDEBAR_ITEMS } from './constants';
import { CRMRecord } from './types';

const App: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiInsights, setAiInsights] = useState<any>(null);
  const [selectedSection, setSelectedSection] = useState<string>('deals');
  const [selectedRecord, setSelectedRecord] = useState<CRMRecord | null>(null);

  const currentLabel = (() => {
    const allItems = [
      ...SIDEBAR_ITEMS.flatMap(i => i.subItems ? [i, ...i.subItems] : [i]),
      ...SIDEBAR_ITEMS.filter(i => i.subItems).flatMap(i => i.subItems || [])
    ];
    const found = allItems.find(i => i.id === selectedSection);
    return found?.label || 'Deals';
  })();

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    const dataset = DATASETS['deals'] || [];
    const results = await analyzeCRMData(dataset);
    setAiInsights(results);
    setIsAnalyzing(false);
  };

  return (
    <div className="flex h-screen w-full bg-[#f1f5f9] overflow-hidden text-slate-800">
      <Sidebar 
        currentSection={selectedSection} 
        onSelect={(section) => {
          setSelectedSection(section);
          setSelectedRecord(null);
        }}
        onTeamMemberClick={(name) => {
          const teamData = DATASETS['team'] || [];
          const record = teamData.find(r => r.contactName === name);
          if (record) {
            setSelectedSection('team');
            setSelectedRecord(record);
          }
        }}
      />

      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[13px] text-slate-400 font-extralight">
            <span className="hover:text-slate-600 cursor-pointer">Dashboard</span>
            <ChevronRight size={14} />
            <span className="hover:text-slate-600 cursor-pointer">Data</span>
            <ChevronRight size={14} />
            <div className="flex items-center gap-1.5 text-slate-800 font-normal bg-white px-2 py-1 rounded-md shadow-sm border border-slate-200">
              {currentLabel}
              <ChevronDown size={14} className="text-slate-400" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={16} className="text-slate-400 group-focus-within:text-black transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-[300px] h-10 pl-10 pr-10 rounded-full border border-slate-200 bg-white shadow-sm focus:ring-2 focus:ring-black/20 focus:border-black outline-none transition-all text-sm font-extralight"
              />
              <div className="absolute inset-y-0 right-3 flex items-center gap-2">
                <X size={14} className="text-slate-300 cursor-pointer hover:text-slate-500" />
                <div className="w-px h-4 bg-slate-200" />
                <TrendingUp size={14} className="text-slate-300" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/${i + 10}/32/32`} 
                    alt="" 
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-normal text-slate-500">
                  +4
                </div>
              </div>
              <button className="h-9 px-4 border border-slate-200 rounded-lg text-sm font-normal text-slate-700 hover:bg-white shadow-sm transition-all">Add</button>
              <button className="h-9 px-4 border border-slate-200 rounded-lg text-sm font-normal text-slate-700 hover:bg-white shadow-sm transition-all flex items-center gap-2">
                <TrendingUp size={16} className="text-black" />
                Share
              </button>
              <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-white shadow-sm">
                <LayoutGrid size={18} />
              </button>
            </div>
          </div>
        </header>

        {/* Content Area Header */}
        <div className="px-6 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="p-1.5 border border-slate-200 rounded-md text-slate-400 hover:bg-white shadow-sm">
              <ChevronLeft size={16} />
            </button>
            <h1 className="text-xl font-normal text-slate-900 tracking-tight flex items-center gap-2">
              {currentLabel}
              <span className="text-xs font-normal text-slate-400 bg-slate-200 px-1.5 py-0.5 rounded ml-1">New Data</span>
            </h1>
          </div>

          <button 
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-black to-gray-700 text-white rounded-xl text-sm font-normal shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {isAnalyzing ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Sparkles size={16} />
            )}
            {isAnalyzing ? "AI Analyzing..." : "Gemini AI Insights"}
          </button>
        </div>

        {/* AI Insights Panel (Conditional) */}
        {aiInsights && (
          <div className="mx-6 mb-6 p-4 bg-white border border-black/20 rounded-2xl shadow-xl shadow-black/20 animate-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-black">
                <Sparkles size={18} />
                <h3 className="font-normal text-lg">AI Strategic Insights</h3>
              </div>
              <button onClick={() => setAiInsights(null)} className="text-slate-400 hover:text-slate-600 p-1">
                <X size={18} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {aiInsights.insights.map((insight: any, idx: number) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-all group">
                  <div className="flex items-center gap-2 mb-2">
                    {insight.type === 'positive' ? <TrendingUp className="text-emerald-500" size={16} /> : 
                     insight.type === 'negative' ? <AlertCircle className="text-rose-500" size={16} /> :
                     <Lightbulb className="text-amber-500" size={16} />}
                    <span className="font-normal text-sm text-slate-700">{insight.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-600">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Table Container or Profile View */}
        <div className="flex-1 px-6 pb-6 overflow-hidden">
          {selectedRecord ? (
            <ProfileView 
              record={selectedRecord} 
              onBack={() => setSelectedRecord(null)} 
            />
          ) : (
            <Table 
              data={DATASETS[selectedSection] || DATASETS['deals']} 
              type={selectedSection}
              onRowClick={(record) => {
                if (selectedSection === 'team') {
                  setSelectedRecord(record);
                }
              }}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
