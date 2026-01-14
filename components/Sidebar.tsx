
import React from 'react';
import { ChevronDown, Plus, Search, ChevronRight, LayoutGrid } from 'lucide-react';
import { SIDEBAR_ITEMS, BOTTOM_ITEMS, COLORS } from '../constants';
import { SidebarItem } from '../types';

export const Sidebar: React.FC<{ 
  currentSection: string; 
  onSelect: (id: string) => void;
  onTeamMemberClick?: (name: string) => void;
}> = ({ currentSection, onSelect, onTeamMemberClick }) => {
  return (
    <div className="w-[260px] h-full bg-white border-r border-slate-200 flex flex-col overflow-hidden">
      {/* Brand Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2 px-1">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-black to-gray-700 flex items-center justify-center text-white font-medium text-xl">
            D
          </div>
          <span className="font-medium text-slate-800 text-lg">DreamLaunch</span>
          <ChevronDown size={16} className="text-slate-400" />
        </div>
        <button className="text-slate-400 p-1 hover:bg-slate-50 rounded">
          <LayoutGrid size={16} />
        </button>
      </div>

      {/* Add New Button */}
      <div className="px-4 py-2">
        <button className="w-full h-10 rounded-lg flex items-center justify-between px-3 bg-gradient-to-r from-black to-gray-700 text-white shadow-sm hover:opacity-90 transition-opacity">
          <div className="flex items-center gap-2">
            <Plus size={18} className="text-white" />
            <span className="text-sm font-medium">Add New</span>
          </div>
          <Search size={16} className="text-white/80" />
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
        {SIDEBAR_ITEMS.map((item) => (
          <div key={item.id}>
            <SidebarNavItem item={item} active={item.id === currentSection} onClick={() => onSelect(item.id)} />
            {item.subItems && (
              <div className="ml-4 mt-1 space-y-1">
                {item.subItems.map((subItem) => (
                  <SidebarNavItem key={subItem.id} item={subItem} isSubItem active={subItem.id === currentSection} onClick={() => onSelect(subItem.id)} />
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Team Section */}
        <div className="pt-6 px-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Team</span>
            <Plus size={14} className="text-slate-400 cursor-pointer" />
          </div>
          <div className="space-y-3">
            <TeamMember 
              name="Warren Daniel" 
              avatar="https://picsum.photos/seed/warren/32/32" 
              onClick={() => onTeamMemberClick && onTeamMemberClick('Warren Daniel')}
            />
            <TeamMember 
              name="Selma Knight" 
              avatar="https://picsum.photos/seed/selma/32/32" 
              onClick={() => onTeamMemberClick && onTeamMemberClick('Selma Knight')}
            />
            <TeamMember 
              name="Richard Joseph" 
              avatar="https://picsum.photos/seed/richard/32/32" 
              onClick={() => onTeamMemberClick && onTeamMemberClick('Richard Joseph')}
            />
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-2 border-t border-slate-100 bg-slate-50/30">
        {BOTTOM_ITEMS.map((item) => (
          <SidebarNavItem key={item.id} item={item} onClick={() => onSelect(item.id)} active={item.id === currentSection} />
        ))}
        
        {/* Profile Card */}
        <div className="mt-4 p-2 bg-white border border-slate-100 rounded-xl flex items-center gap-3 shadow-sm mx-2">
          <img 
            src="https://picsum.photos/seed/me/40/40" 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-slate-800 truncate">Rudra Pratap</span>
              <span className="bg-black/10 text-black text-[10px] px-1.5 rounded font-medium">Pro</span>
            </div>
            <p className="text-[11px] text-slate-500 truncate">pratap@brixui.com</p>
          </div>
          <div className="flex flex-col gap-0.5 text-slate-400">
            <ChevronRight size={14} className="-rotate-90" />
            <ChevronRight size={14} className="rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarNavItem: React.FC<{ item: SidebarItem; isSubItem?: boolean; active?: boolean; onClick?: () => void }> = ({ item, isSubItem, active, onClick }) => {
  return (
    <div 
      className={`
        group flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors
        ${active ? 'bg-black/5 text-black' : 'text-slate-600 hover:bg-slate-100'}
        ${isSubItem ? 'pl-8' : ''}
      `}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <span className={active ? 'text-black' : 'text-slate-400 group-hover:text-slate-600'}>
          {item.icon}
        </span>
        <span className={`text-sm ${active ? 'font-medium' : 'font-light'}`}>{item.label}</span>
      </div>
      {item.count && (
        <span className="text-[10px] font-medium bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full">
          {item.count}
        </span>
      )}
      {item.id === 'data' && !isSubItem && (
        <Plus size={14} className="text-slate-300" />
      )}
    </div>
  );
};

const TeamMember: React.FC<{ name: string; avatar: string; onClick?: () => void }> = ({ name, avatar, onClick }) => (
  <div onClick={onClick} className="flex items-center gap-3 group cursor-pointer">
    <img src={avatar} alt={name} className="w-6 h-6 rounded-full grayscale group-hover:grayscale-0 transition-all" />
    <span className="text-sm font-light text-slate-500 group-hover:text-slate-800 transition-colors">{name}</span>
  </div>
);
