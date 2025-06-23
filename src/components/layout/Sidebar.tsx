import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

/**
 * Sidebar component for the main application layout.
 * It wraps the primary navigation element, `SidebarNav`.
 *
 * The actual styling and content of the sidebar (width, background, navigation items)
 * are defined within the `SidebarNav` component, as per the provided context code.
 * This component acts as a semantic wrapper and a designated slot for the sidebar
 * within the `MainAppLayout`.
 */
const Sidebar: React.FC = () => {
  return <SidebarNav />;
};

export default Sidebar;
