import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

/**
 * Header component for the main application layout.
 * It wraps the `TopHeader` element, which contains the page title and global actions.
 *
 * The `TopHeader` component encapsulates its own styling (height, background, border).
 * This `Header` component serves as a semantic container, occupying the header slot
 * in the `MainAppLayout`.
 */
const Header: React.FC = () => {
  return <TopHeader />;
};

export default Header;
