
import React from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Database, 
  Calendar, 
  Briefcase, 
  Users, 
  UserPlus, 
  HardDrive, 
  CreditCard, 
  LayoutGrid,
  HelpCircle,
  Settings,
  Target,
  BarChart3
} from 'lucide-react';
import { CRMRecord, SidebarItem } from './types';

export const COLORS = {
  primary: '#000000',
  secondary: '#64748b',
  border: '#e2e8f0',
  background: '#f8fafc',
  status: {
    'Lead': 'bg-slate-100 text-slate-600',
    'Qualified': 'bg-indigo-100 text-indigo-600',
    'Proposal': 'bg-amber-100 text-amber-600',
    'Negotiation': 'bg-orange-100 text-orange-600',
    'Closed Won': 'bg-emerald-100 text-emerald-600',
    'Closed Lost': 'bg-rose-100 text-rose-600',
  }
};

export const DEALS_DATA: CRMRecord[] = [
  {
    id: '1',
    contactName: 'Nisha Kumari',
    company: 'Hyperlink',
    dealValue: 159000,
    email: 'nisha@hyperlink.com',
    status: 'Negotiation',
    date: '12/03/2024',
    categories: ['Enterprise', 'Q4']
  },
  {
    id: '2',
    contactName: 'Sophia',
    company: 'Kritrim',
    dealValue: 245000,
    email: 'sophia@kritrim.ai',
    status: 'Closed Lost',
    date: '12/01/2024',
    categories: ['AI', 'Startup']
  },
  {
    id: '3',
    contactName: 'Rudra Pratap',
    company: 'AroLink',
    dealValue: 85000,
    email: 'rudra@arolink.io',
    status: 'Qualified',
    date: '12/05/2024',
    categories: ['SMB', 'Inbound']
  },
  {
    id: '4',
    contactName: 'Trisha Norton',
    company: 'Firelog',
    dealValue: 450000,
    email: 'trisha@firelog.net',
    status: 'Closed Won',
    date: '11/28/2024',
    categories: ['Enterprise', 'Renewals']
  },
  {
    id: '5',
    contactName: 'Jolene Orr',
    company: 'SassSystem',
    dealValue: 12000,
    email: 'jolene@sass.sys',
    status: 'Lead',
    date: '12/06/2024',
    categories: ['Trial', 'SMB']
  },
  {
    id: '6',
    contactName: 'Aryan Roy',
    company: 'KalkiYoga',
    dealValue: 35000,
    email: 'aryan@kalki.yoga',
    status: 'Proposal',
    date: '12/04/2024',
    categories: ['Wellness', 'B2B']
  },
  {
    id: '7',
    contactName: 'Elvin Bond',
    company: 'Middesk',
    dealValue: 180000,
    email: 'elvin@middesk.com',
    status: 'Negotiation',
    date: '12/02/2024',
    categories: ['Fintech', 'Outbound']
  },
  {
    id: '8',
    contactName: 'Huzaifa Anas',
    company: 'Kritrim',
    dealValue: 55000,
    email: 'h.anas@kritrim.ai',
    status: 'Qualified',
    date: '12/07/2024',
    categories: ['AI', 'Expansion']
  },
  {
    id: '9',
    contactName: 'Ella Zhou',
    company: 'Bright AI',
    dealValue: 92000,
    email: 'ella@bright.ai',
    status: 'Proposal',
    date: '12/06/2024',
    categories: ['AI', 'SaaS']
  },
  {
    id: '10',
    contactName: 'Ben Carter',
    company: 'FlowOps',
    dealValue: 28000,
    email: 'ben@flowops.io',
    status: 'Lead',
    date: '12/08/2024',
    categories: ['DevTools']
  }
];

export const CONTACTS_DATA: CRMRecord[] = [
  { id: 'c1', contactName: 'Alice Meyer', company: 'NordPay', dealValue: 0, role: 'CTO', email: 'alice@nordpay.com', status: 'Closed Won', date: '01/09/2025', categories: ['Champion', 'Finance'] },
  { id: 'c2', contactName: 'Ben Carter', company: 'FlowOps', dealValue: 0, role: 'VP Engineering', email: 'ben@flowops.io', status: 'Qualified', date: '12/18/2024', categories: ['Influencer', 'Tech'] },
  { id: 'c3', contactName: 'Clara Singh', company: 'Zensoft', dealValue: 0, role: 'Product Manager', email: 'clara@zensoft.com', status: 'Lead', date: '11/03/2024', categories: ['Decision Maker'] },
  { id: 'c4', contactName: 'Dmitri Volkov', company: 'LedgerX', dealValue: 0, role: 'CFO', email: 'dmitri@ledgerx.com', status: 'Negotiation', date: '02/01/2025', categories: ['Finance'] },
  { id: 'c5', contactName: 'Ella Zhou', company: 'Bright AI', dealValue: 0, role: 'Founder', email: 'ella@bright.ai', status: 'Closed Lost', date: '10/22/2024', categories: ['Tech'] },
  { id: 'c6', contactName: 'Felix Chen', company: 'CloudScale', dealValue: 0, role: 'Director of IT', email: 'felix@cloudscale.io', status: 'Proposal', date: '01/05/2025', categories: ['Gatekeeper'] },
  { id: 'c7', contactName: 'Gina Davis', company: 'MarketMakers', dealValue: 0, role: 'CMO', email: 'gina@marketmakers.com', status: 'Lead', date: '12/12/2024', categories: ['Marketing'] },
  { id: 'c8', contactName: 'Hank Miller', company: 'BuildRight', dealValue: 0, role: 'CEO', email: 'hank@buildright.com', status: 'Qualified', date: '01/11/2025', categories: ['Construction'] },
];

export const MEETINGS_DATA: CRMRecord[] = [
  { id: 's1', contactName: 'Quarterly Review', company: 'DreamLaunch HQ', dealValue: 0, location: 'Board Room 3', duration: '1h 30m', status: 'Qualified', date: '01/15/2025', categories: ['Strategy'], email: 'calendar@dreamlaunch.com' },
  { id: 's2', contactName: 'Demo Call', company: 'Hyperlink', dealValue: 0, location: 'Zoom', duration: '45m', status: 'Proposal', date: '01/20/2025', categories: ['Sales'], email: 'sales@hyperlink.com' },
  { id: 's3', contactName: 'Contract Review', company: 'Middesk', dealValue: 0, location: 'Ops Center', duration: '1h', status: 'Negotiation', date: '01/23/2025', categories: ['Legal'], email: 'legal@middesk.com' },
  { id: 's4', contactName: 'Intro Sync', company: 'SassSystem', dealValue: 0, location: 'Google Meet', duration: '30m', status: 'Lead', date: '01/25/2025', categories: ['Discovery'], email: 'meet@sass.sys' },
  { id: 's5', contactName: 'Technical Deep Dive', company: 'Kritrim', dealValue: 0, location: 'Zoom', duration: '2h', status: 'Qualified', date: '01/26/2025', categories: ['Technical'], email: 'tech@kritrim.ai' },
  { id: 's6', contactName: 'Pricing Negotiation', company: 'NordPay', dealValue: 0, location: 'Phone', duration: '15m', status: 'Negotiation', date: '01/28/2025', categories: ['Finance'], email: 'billing@nordpay.com' },
];

export const TASKS_DATA: CRMRecord[] = [
  { id: 't1', contactName: 'Send Proposal', company: 'AroLink', dealValue: 0, priority: 'High', email: '', status: 'Qualified', date: '01/14/2025', categories: ['Email'] },
  { id: 't2', contactName: 'Update Pricing', company: 'Firelog', dealValue: 0, priority: 'Medium', email: '', status: 'Proposal', date: '01/18/2025', categories: ['Admin'] },
  { id: 't3', contactName: 'Follow up', company: 'SassSystem', dealValue: 0, priority: 'Low', email: '', status: 'Lead', date: '01/19/2025', categories: ['Call'] },
  { id: 't4', contactName: 'Prepare Deck', company: 'Kritrim', dealValue: 0, priority: 'High', email: '', status: 'Qualified', date: '01/21/2025', categories: ['Presentation'] },
  { id: 't5', contactName: 'Schedule Demo', company: 'CloudScale', dealValue: 0, priority: 'Medium', email: '', status: 'Lead', date: '01/22/2025', categories: ['Scheduling'] },
];

export const STORAGE_DATA: CRMRecord[] = [
  { id: 'st1', contactName: 'Q4_Report.pdf', company: 'Internal', dealValue: 0, email: '/reports/', status: 'Closed Won', date: '12/30/2024', categories: ['PDF'] },
  { id: 'st2', contactName: 'Pricing_2025.xlsx', company: 'Internal', dealValue: 0, email: '/pricing/', status: 'Qualified', date: '12/28/2024', categories: ['Excel'] },
  { id: 'st3', contactName: 'Product_Roadmap.pptx', company: 'Product', dealValue: 0, email: '/strategy/', status: 'Proposal', date: '01/05/2025', categories: ['PPT'] },
  { id: 'st4', contactName: 'Client_List.csv', company: 'Sales', dealValue: 0, email: '/data/', status: 'Lead', date: '01/10/2025', categories: ['CSV'] },
];

export const TEAM_DATA: CRMRecord[] = [
  { id: 'tm1', contactName: 'Sarah Jenkins', company: 'DreamLaunch', dealValue: 0, role: 'VP Sales', email: 'sarah.j@dreamlaunch.com', status: 'Qualified', date: 'Joined 2020', categories: ['Management'], quota: 5000000, sales: 4200000, territory: 'North America' },
  { id: 'tm2', contactName: 'Mike Ross', company: 'DreamLaunch', dealValue: 0, role: 'Senior AE', email: 'mike.r@dreamlaunch.com', status: 'Proposal', date: 'Joined 2022', categories: ['Enterprise'], quota: 1200000, sales: 950000, territory: 'East Coast' },
  { id: 'tm3', contactName: 'Jessica Pearson', company: 'DreamLaunch', dealValue: 0, role: 'Director', email: 'jessica.p@dreamlaunch.com', status: 'Negotiation', date: 'Joined 2019', categories: ['Strategic'], quota: 8000000, sales: 7800000, territory: 'Global' },
  { id: 'tm4', contactName: 'Harvey Specter', company: 'DreamLaunch', dealValue: 0, role: 'Senior AE', email: 'harvey.s@dreamlaunch.com', status: 'Closed Won', date: 'Joined 2021', categories: ['Closer'], quota: 2000000, sales: 2500000, territory: 'New York' },
  { id: 'tm5', contactName: 'Louis Litt', company: 'DreamLaunch', dealValue: 0, role: 'Sales Manager', email: 'louis.l@dreamlaunch.com', status: 'Lead', date: 'Joined 2023', categories: ['Training'], quota: 1000000, sales: 850000, territory: 'Internal' },
  { id: 'tm6', contactName: 'Warren Daniel', company: 'DreamLaunch', dealValue: 0, role: 'Account Manager', email: 'warren.d@dreamlaunch.com', status: 'Qualified', date: 'Joined 2021', categories: ['Retention'], quota: 1500000, sales: 1200000, territory: 'West Coast', avatar: 'https://picsum.photos/seed/warren/128/128' },
  { id: 'tm7', contactName: 'Selma Knight', company: 'DreamLaunch', dealValue: 0, role: 'Solutions Engineer', email: 'selma.k@dreamlaunch.com', status: 'Proposal', date: 'Joined 2022', categories: ['Technical'], quota: 1000000, sales: 950000, territory: 'EMEA', avatar: 'https://picsum.photos/seed/selma/128/128' },
  { id: 'tm8', contactName: 'Richard Joseph', company: 'DreamLaunch', dealValue: 0, role: 'Sales Development', email: 'richard.j@dreamlaunch.com', status: 'Lead', date: 'Joined 2024', categories: ['Outbound'], quota: 800000, sales: 300000, territory: 'APAC', avatar: 'https://picsum.photos/seed/richard/128/128' },
];

export const REPORTS_DATA: CRMRecord[] = [
  { id: 'rp1', contactName: 'Q4 Revenue Analysis', company: 'Finance Team', dealValue: 0, email: 'finance@dreamlaunch.com', status: 'Closed Won', date: '01/02/2025', categories: ['Financial', 'Q4'] },
  { id: 'rp2', contactName: 'Sales Performance 2024', company: 'Sales Ops', dealValue: 0, email: 'ops@dreamlaunch.com', status: 'Qualified', date: '01/05/2025', categories: ['Performance', 'Annual'] },
  { id: 'rp3', contactName: 'Pipeline Forecast Q1', company: 'Sarah Jenkins', dealValue: 0, email: 'sarah.j@dreamlaunch.com', status: 'Proposal', date: '01/10/2025', categories: ['Forecast', 'Q1'] },
  { id: 'rp4', contactName: 'Churn Analysis', company: 'Customer Success', dealValue: 0, email: 'cs@dreamlaunch.com', status: 'Lead', date: '01/12/2025', categories: ['Retention'] },
  { id: 'rp5', contactName: 'Market Trends 2025', company: 'Marketing', dealValue: 0, email: 'marketing@dreamlaunch.com', status: 'Negotiation', date: '01/15/2025', categories: ['Strategy'] },
];

export const DASHBOARD_DATA: CRMRecord[] = [
  { id: 'db1', contactName: 'Urgent: Contract Review', company: 'Middesk', dealValue: 180000, email: 'Priority Action', status: 'Negotiation', date: 'Today', categories: ['Action Required'] },
  { id: 'db2', contactName: 'New Lead: TechCorp', company: 'TechCorp Inc.', dealValue: 50000, email: 'Inbound', status: 'Lead', date: '2h ago', categories: ['New Lead'] },
  { id: 'db3', contactName: 'Closed Won: Firelog', company: 'Firelog', dealValue: 450000, email: 'Celebration', status: 'Closed Won', date: 'Yesterday', categories: ['Win'] },
  { id: 'db4', contactName: 'Meeting: Q1 Planning', company: 'Internal', dealValue: 0, email: 'Board Room', status: 'Qualified', date: 'Tomorrow', categories: ['Meeting'] },
];

export const DATASETS: Record<string, CRMRecord[]> = {
  'deals': DEALS_DATA,
  'contacts': CONTACTS_DATA,
  'meetings': MEETINGS_DATA,
  'tasks': TASKS_DATA,
  'storage': STORAGE_DATA,
  'team': TEAM_DATA,
  'reports': REPORTS_DATA,
  'dashboard': DASHBOARD_DATA,
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: 'dashboard', label: 'Overview', icon: <LayoutDashboard size={18} /> },
  { id: 'tasks', label: 'Tasks', icon: <CheckSquare size={18} />, count: 5 },
  { 
    id: 'crm', 
    label: 'Sales CRM', 
    icon: <Target size={18} />, 
    count: 12,
    subItems: [
      { id: 'deals', label: 'Deals Pipeline', icon: <BarChart3 size={18} /> },
      { id: 'contacts', label: 'Contacts', icon: <Users size={18} /> },
      { id: 'meetings', label: 'Meetings', icon: <Calendar size={18} /> },
    ]
  },
  { id: 'reports', label: 'Reports', icon: <LayoutGrid size={18} /> },
  { id: 'storage', label: 'Documents', icon: <HardDrive size={18} /> },
  { id: 'team', label: 'Sales Team', icon: <Users size={18} /> },
  { id: 'settings', label: 'Settings', icon: <Settings size={18} /> },
];

export const BOTTOM_ITEMS: SidebarItem[] = [
  { id: 'help', label: 'Help & Support', icon: <HelpCircle size={18} /> },
];
