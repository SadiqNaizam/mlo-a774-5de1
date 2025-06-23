import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

/**
 * MainAppLayout defines the primary grid structure for the application,
 * creating the standard dashboard view with a sidebar, header, and content area.
 * It uses a CSS Grid layout as specified in the project requirements.
 *
 * The layout is defined as a grid with the following structure:
 * - `grid-cols-[auto_1fr]`: An `auto`-width column for the sidebar and a flexible `1fr` column for content.
 * - `grid-rows-[auto_1fr]`: An `auto`-height row for the header and a flexible `1fr` row for the main content.
 *
 * @param {MainAppLayoutProps} props The props for the component.
 * @param {React.ReactNode} props.children The main content to be rendered inside the layout.
 * @returns {JSX.Element} The rendered main application layout.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-background">
      {/*
        Sidebar is placed in the first grid column and is set to span two rows.
        The underlying `SidebarNav` component is responsive and hides on smaller screens,
        allowing the `auto` column to collapse gracefully.
      */}
      <div className="row-span-2">
        <Sidebar />
      </div>

      {/*
        Header is placed in the second grid column and first grid row.
        Its height (`h-16`) dictates the height of the `auto` sized row.
      */}
      <Header />

      {/*
        Main content is placed in the second grid column and second grid row.
        The `1fr` row height ensures it fills all remaining vertical space.
        `overflow-y-auto` enables scrolling for this area only, keeping the
        header and sidebar static.
      */}
      <main className="overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
