
import React from 'react';

export type Status = 'Lead' | 'Qualified' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost';

export interface CRMRecord {
  id: string;
  contactName: string;
  avatar?: string;
  company: string;
  companyIcon?: string;
  dealValue: number;
  email: string;
  status: Status;
  date: string; // Last Contacted or Close Date
  categories: string[]; // Tags like "Enterprise", "Q1", etc.
  
  // Extended fields for other views
  role?: string;      // For Contacts
  location?: string;  // For Meetings
  duration?: string;  // For Meetings
  priority?: string;  // For Tasks
  quota?: number;     // For Sales Team
  sales?: number;     // For Sales Team
  territory?: string; // For Sales Team
}

export interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  count?: number;
  subItems?: SidebarItem[];
  isActive?: boolean;
}
