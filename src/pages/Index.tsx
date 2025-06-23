import React, { useState } from 'react';

// Layout
import MainAppLayout from '../components/layout/MainAppLayout';

// Page Sections/Organisms
import DataCardsGrid from '../components/Dashboard/DataCardsGrid';
import LeadsGraph from '../components/Dashboard/LeadsGraph';
import PageHeader from '../components/Dashboard/PageHeader';
import PieChartCard from '../components/Dashboard/PieChartCard';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';

/**
 * The main dashboard page for the Sales Dashboard Clone application.
 * This page assembles all the major UI organisms into a cohesive view,
 * managed by the MainAppLayout.
 *
 * It maintains the state for the top-level tabs ('Sales' and 'Leads')
 * and conditionally renders the appropriate content. The primary 'Leads'
 * view is fully implemented with all specified components.
 */
const IndexPage: React.FC = () => {
  // State to manage the active tab between 'Sales' and 'Leads'. Defaults to 'leads'.
  const [activeTab, setActiveTab] = useState<'sales' | 'leads'>('leads');

  /**
   * Handles the tab change event from the PageHeader component.
   * @param tab The new tab identifier ('sales' or 'leads').
   */
  const handleTabChange = (tab: string) => {
    // Type guard to ensure only valid tab values are set.
    if (tab === 'sales' || tab === 'leads') {
      setActiveTab(tab);
    }
  };

  return (
    <MainAppLayout>
      {/* Page header with navigation tabs */}
      <PageHeader activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Main content area, rendered conditionally based on the active tab */}
      <div className="mt-4">
        {activeTab === 'leads' ? (
          <div className="flex flex-col gap-6">
            {/* Top Row: A two-column grid for key metric cards */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <StatsCardGrid />
              <PieChartCard />
            </div>

            {/* Middle Row: Full-width graph for leads tracking */}
            <LeadsGraph />

            {/* Bottom Row: Full-width grid for additional data points */}
            <DataCardsGrid />
          </div>
        ) : (
          // Placeholder content for the 'Sales' tab
          <div className="flex h-96 items-center justify-center rounded-lg border border-dashed bg-card">
            <div className="text-center">
                <h3 className="text-2xl font-semibold">Sales View</h3>
                <p className="mt-2 text-muted-foreground">Sales-specific components and data would be displayed here.</p>
            </div>
          </div>
        )}
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
