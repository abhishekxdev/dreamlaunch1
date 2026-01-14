import React from 'react';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Award, 
  Briefcase,
  Building2,
  Download
} from 'lucide-react';
import { CRMRecord } from '../types';

interface ProfileViewProps {
  record: CRMRecord;
  onBack: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ record, onBack }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const progress = record.sales && record.quota 
    ? Math.min((record.sales / record.quota) * 100, 100) 
    : 0;

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#f1f5f9] overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-slate-50 rounded-lg text-slate-500 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Team Profile</h1>
          <p className="text-sm text-slate-500">View and manage team member details</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center text-3xl font-bold text-slate-400 border-4 border-white shadow-lg overflow-hidden">
                {record.avatar ? (
                  <img src={record.avatar} alt={record.contactName} className="w-full h-full object-cover" />
                ) : (
                  <span>{getInitials(record.contactName)}</span>
                )}
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{record.contactName}</h2>
                  <p className="text-lg text-slate-600 font-medium">{record.role}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                    <Building2 size={16} />
                    <span>{record.company}</span>
                    <span className="mx-1">•</span>
                    <MapPin size={16} />
                    <span>{record.territory || 'No Territory'}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                    Edit Profile
                  </button>
                  <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50">
                    <Download size={20} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500 mb-1">
                    <Mail size={16} />
                    <span className="text-xs font-medium uppercase tracking-wider">Email</span>
                  </div>
                  <p className="text-sm font-medium text-slate-900 truncate">{record.email}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500 mb-1">
                    <Phone size={16} />
                    <span className="text-xs font-medium uppercase tracking-wider">Status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${record.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                    <p className="text-sm font-medium text-slate-900">{record.status}</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500 mb-1">
                    <Calendar size={16} />
                    <span className="text-xs font-medium uppercase tracking-wider">Joined</span>
                  </div>
                  <p className="text-sm font-medium text-slate-900">{record.date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900">Performance</h3>
                <TrendingUp className="text-emerald-500" size={20} />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500">Sales Progress</span>
                    <span className="font-medium text-slate-900">{progress.toFixed(0)}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full" 
                      style={{ width: `${progress}%` }} 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <p className="text-xs text-slate-500">Sales YTD</p>
                    <p className="text-lg font-bold text-slate-900">{formatPrice(record.sales || 0)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Annual Quota</p>
                    <p className="text-lg font-bold text-slate-400">{formatPrice(record.quota || 0)}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900">Focus Areas</h3>
                <Briefcase className="text-blue-500" size={20} />
              </div>
              <div className="flex flex-wrap gap-2">
                {record.categories?.map((cat, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {cat}
                  </span>
                )) || <span className="text-slate-400 text-sm">No focus areas listed</span>}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900">Achievements</h3>
                <Award className="text-amber-500" size={20} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                    <Award size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Top Performer Q4</p>
                    <p className="text-xs text-slate-500">Exceeded quota by 150%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Deal Closer</p>
                    <p className="text-xs text-slate-500">Closed 5 enterprise deals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
