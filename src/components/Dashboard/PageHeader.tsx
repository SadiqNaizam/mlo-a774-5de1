import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PageHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="px-6 py-4">
      <Tabs value={activeTab} onValueChange={onTabChange}>
        <TabsList>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PageHeader;
