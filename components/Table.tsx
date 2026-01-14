
import React, { useState } from 'react';
import { 
  ArrowUpDown, 
  MoreHorizontal, 
  ChevronLeft, 
  ChevronRight, 
  RefreshCw, 
  Filter, 
  ArrowUp, 
  Plus, 
  Upload, 
  Eye, 
  ChevronDown 
} from 'lucide-react';
import { CRMRecord, Status } from '../types';
import { COLORS } from '../constants';

export const Table: React.FC<{ 
  data: CRMRecord[]; 
  title?: string; 
  type?: string;
  onRowClick?: (record: CRMRecord) => void;
}> = ({ data, title, type = 'deals', onRowClick }) => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  const toggleSelectAll = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(data.map(r => r.id)));
    }
  };

  const toggleSelectRow = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) newSelected.delete(id);
    else newSelected.add(id);
    setSelectedRows(newSelected);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-white rounded-t-3xl border-t border-x border-slate-200">
      {/* Table Toolbar */}
      <div className="p-4 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-light text-slate-600 hover:bg-slate-50">
            <RefreshCw size={14} className="text-black" />
            Update
          </button>
          
          <div className="h-6 w-px bg-slate-200" />
          
          <span className="text-sm font-light text-slate-500">
            <span className="text-black font-medium">{selectedRows.size}</span> Selected
          </span>

          <div className="h-6 w-px bg-slate-200" />

          <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-light text-slate-600 hover:bg-slate-50">
            <Filter size={14} className="text-slate-400" />
            Filter <span className="bg-slate-100 px-1 rounded text-[10px] ml-1">4</span>
          </button>

          <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-light text-slate-600 hover:bg-slate-50">
            <ArrowUp size={14} className="text-slate-400" />
            Short <ChevronDown size={14} className="text-slate-400" />
          </button>

          <span className="text-sm text-slate-400 ml-4 font-light">{data.length} Results</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-black to-gray-700 text-white rounded-lg text-sm font-medium shadow-sm hover:opacity-90 transition-opacity">
            <Plus size={16} />
            Add New
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Upload size={16} />
            Import/Export
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Eye size={16} />
            View
          </button>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-white z-10 border-b border-slate-100">
            <tr>
              <th className="p-4 w-10">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-slate-300 text-black focus:ring-black" 
                  checked={selectedRows.size === data.length}
                  onChange={toggleSelectAll}
                />
              </th>
              <th className="p-4 w-10"></th>
              
              {/* Dynamic Headers */}
              {type === 'contacts' ? (
                <>
                  <TableHeader label="Contact Name" />
                  <TableHeader label="Company" />
                  <TableHeader label="Role" />
                  <TableHeader label="Email" />
                  <TableHeader label="Status" />
                  <TableHeader label="Last Contacted" />
                  <TableHeader label="Tags" />
                </>
              ) : type === 'meetings' ? (
                <>
                  <TableHeader label="Meeting Title" />
                  <TableHeader label="Company" />
                  <TableHeader label="Duration" />
                  <TableHeader label="Location" />
                  <TableHeader label="Status" />
                  <TableHeader label="Date" />
                  <TableHeader label="Type" />
                </>
              ) : type === 'tasks' ? (
                <>
                  <TableHeader label="Task Name" />
                  <TableHeader label="Related To" />
                  <TableHeader label="Priority" />
                  <TableHeader label="Assigned To" />
                  <TableHeader label="Status" />
                  <TableHeader label="Due Date" />
                  <TableHeader label="Type" />
                </>
              ) : type === 'storage' ? (
                <>
                  <TableHeader label="File Name" />
                  <TableHeader label="Folder" />
                  <TableHeader label="Size" />
                  <TableHeader label="Path" />
                  <TableHeader label="Status" />
                  <TableHeader label="Modified" />
                  <TableHeader label="Type" />
                </>
              ) : type === 'team' ? (
                <>
                  <TableHeader label="Rep Name" />
                  <TableHeader label="Role" />
                  <TableHeader label="Territory" />
                  <TableHeader label="Quota" />
                  <TableHeader label="Sales YTD" />
                  <TableHeader label="Status" />
                  <TableHeader label="Joined" />
                  <TableHeader label="Focus" />
                </>
              ) : type === 'reports' ? (
                <>
                  <TableHeader label="Report Name" />
                  <TableHeader label="Generated By" />
                  <TableHeader label="Type" />
                  <TableHeader label="Date" />
                  <TableHeader label="Status" />
                  <TableHeader label="Category" />
                </>
              ) : type === 'dashboard' ? (
                <>
                  <TableHeader label="Activity" />
                  <TableHeader label="Entity" />
                  <TableHeader label="Value" />
                  <TableHeader label="Status" />
                  <TableHeader label="Date" />
                  <TableHeader label="Type" />
                </>
              ) : (
                <>
                  <TableHeader label={title ? title : "Contact Name"} />
                  <TableHeader label="Company" />
                  <TableHeader label="Deal Value" />
                  <TableHeader label="Email" />
                  <TableHeader label="Status" />
                  <TableHeader label="Date" />
                  <TableHeader label="Categories" />
                </>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.map((record) => (
              <tr 
                key={record.id} 
                onClick={() => onRowClick && onRowClick(record)}
                className={`group hover:bg-slate-50/50 transition-colors ${selectedRows.has(record.id) ? 'bg-black/5' : ''} ${onRowClick ? 'cursor-pointer' : ''}`}
              >
                <td className="p-4" onClick={(e) => e.stopPropagation()}>
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-slate-300 text-black focus:ring-black"
                    checked={selectedRows.has(record.id)}
                    onChange={() => toggleSelectRow(record.id)}
                  />
                </td>
                <td className="p-4">
                  <span className="text-slate-300 group-hover:text-black cursor-pointer">★</span>
                </td>
                
                {/* Dynamic Cells */}
                {type === 'contacts' ? (
                  <>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-medium text-black border-2 border-white shadow-sm overflow-hidden">
                          <img src={`https://picsum.photos/seed/${record.contactName}/32/32`} alt="" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{record.contactName}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] bg-slate-800 text-white`}>
                          {record.company[0]}
                        </div>
                        <span className="text-sm font-light text-slate-600">{record.company}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-600">{record.role || '-'}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-500 whitespace-nowrap">{record.email}</span>
                    </td>
                    <td className="p-4">
                      <StatusBadge status={record.status} />
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-400 font-light">{record.date}</span>
                    </td>
                  </>
                ) : type === 'meetings' ? (
                  <>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-slate-700">{record.contactName}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-light text-slate-600">{record.company}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-600">{record.duration || '-'}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-500">{record.location || record.email}</span>
                    </td>
                    <td className="p-4">
                      <StatusBadge status={record.status} />
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-400 font-light">{record.date}</span>
                    </td>
                  </>
                ) : type === 'tasks' ? (
                  <>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${record.priority === 'High' ? 'bg-rose-500' : record.priority === 'Medium' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                        <span className="text-sm font-medium text-slate-700">{record.contactName}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-light text-slate-600">{record.company}</span>
                    </td>
                    <td className="p-4">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                        record.priority === 'High' ? 'bg-rose-50 text-rose-600' : 
                        record.priority === 'Medium' ? 'bg-amber-50 text-amber-600' : 
                        'bg-emerald-50 text-emerald-600'
                      }`}>
                        {record.priority || 'Normal'}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                         <img src={`https://picsum.photos/seed/${record.id}/32/32`} className="w-6 h-6 rounded-full" alt="" />
                         <span className="text-sm text-slate-500">You</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <StatusBadge status={record.status} />
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-400 font-light">{record.date}</span>
                    </td>
                  </>
                ) : type === 'storage' ? (
                  <>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-500">
                           {/* Simple icon based on extension would be better, but simplified here */}
                           <span className="text-[10px] font-bold uppercase">{record.categories[0] || 'FILE'}</span>
                        </div>
                        <span className="text-sm font-medium text-slate-700">{record.contactName}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-light text-slate-600">{record.company}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-400">2.4 MB</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-500">{record.email}</span>
                    </td>
                    <td className="p-4">
                      <StatusBadge status={record.status} />
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-400 font-light">{record.date}</span>
                    </td>
                  </>
                ) : type === 'team' ? (
                  <>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-medium text-black border-2 border-white shadow-sm overflow-hidden">
                          {record.contactName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm font-medium text-slate-700">{record.contactName}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-600">{record.role}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-500">{record.territory}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-medium text-slate-700">{formatPrice(record.quota || 0)}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-emerald-600">{formatPrice(record.sales || 0)}</span>
                        <div className="w-20 h-1 bg-slate-100 rounded-full mt-1 overflow-hidden">
                          <div 
                            className="h-full bg-emerald-500 rounded-full" 
                            style={{ width: `${Math.min(((record.sales || 0) / (record.quota || 1)) * 100, 100)}%` }} 
                          />
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <StatusBadge status={record.status} />
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-400 font-light">{record.date}</span>
                    </td>
                  </>
                ) : type === 'reports' ? (
                  <>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-50 rounded text-indigo-600">
                          <Eye size={14} />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{record.contactName}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-600">{record.company}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 uppercase">
                        {record.categories[0]}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-400 font-light">{record.date}</span>
                    </td>
                    <td className="p-4">
                      <StatusBadge status={record.status} />
                    </td>
                  </>
                ) : type === 'dashboard' ? (
                  <>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-slate-700">{record.contactName}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-600">{record.company}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-medium text-slate-900">{record.dealValue > 0 ? formatPrice(record.dealValue) : '-'}</span>
                    </td>
                    <td className="p-4">
                      <StatusBadge status={record.status} />
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-400 font-light">{record.date}</span>
                    </td>
                  </>
                ) : (
                  // Default Deals View
                  <>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-medium text-black border-2 border-white shadow-sm overflow-hidden">
                          <img src={`https://picsum.photos/seed/${record.contactName}/32/32`} alt="" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{record.contactName}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] bg-slate-800 text-white`}>
                          {record.company[0]}
                        </div>
                        <span className="text-sm font-light text-slate-600">{record.company}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-medium text-slate-800">{formatPrice(record.dealValue)}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-500 whitespace-nowrap">{record.email}</span>
                    </td>
                    <td className="p-4">
                      <StatusBadge status={record.status} />
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-400 font-light">{record.date}</span>
                    </td>
                  </>
                )}

                <td className="p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {record.categories.map((cat) => (
                      <span 
                        key={cat} 
                        className={`text-[10px] font-medium px-2 py-0.5 rounded uppercase tracking-wider ${
                          cat === 'Tech' ? 'bg-emerald-50 text-emerald-600' :
                          cat === 'Finance' ? 'bg-blue-50 text-blue-600' :
                          cat === 'B2B' ? 'bg-indigo-50 text-indigo-600' :
                          cat === 'Automation' ? 'bg-rose-50 text-rose-600' :
                          'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50 rounded-b-3xl">
        <span className="text-xs font-medium text-slate-500">1-20 of 300</span>
        
        <div className="flex items-center gap-1">
          <PaginationButton icon={<ChevronLeft size={16} />} disabled />
          <PaginationButton label="1" active />
          <PaginationButton label="2" />
          <PaginationButton label="3" />
          <PaginationButton label="4" />
          <PaginationButton label="5" />
          <PaginationButton label="6" />
          <span className="px-2 text-slate-300">...</span>
          <PaginationButton label="16" />
          <PaginationButton icon={<ChevronRight size={16} />} />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-slate-400">Row/Page:</span>
          <div className="flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded text-xs font-medium text-slate-700 cursor-pointer">
            7/12 <ChevronDown size={12} className="text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

const TableHeader: React.FC<{ label: string }> = ({ label }) => (
  <th className="p-4 text-xs font-medium text-slate-400 uppercase tracking-wider">
    <div className="flex items-center gap-2 cursor-pointer group">
      {label}
      <ArrowUpDown size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </th>
);

const StatusBadge: React.FC<{ status: Status }> = ({ status }) => {
  return (
    <div className={`flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium ${COLORS.status[status] || 'bg-slate-100 text-slate-600'}`}>
      <div className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
      {status}
    </div>
  );
};

const PaginationButton: React.FC<{ label?: string; icon?: React.ReactNode; active?: boolean; disabled?: boolean }> = ({ 
  label, icon, active, disabled 
}) => (
  <button 
    disabled={disabled}
    className={`
      w-8 h-8 flex items-center justify-center rounded-lg text-xs font-medium transition-colors
      ${active ? 'bg-gradient-to-r from-black to-gray-700 text-white' : 'text-slate-500 hover:bg-slate-200'}
      ${disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}
    `}
  >
    {label || icon}
  </button>
);
