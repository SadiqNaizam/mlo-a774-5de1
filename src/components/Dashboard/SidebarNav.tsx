import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  User,
  FileText,
  FileStack,
  ShoppingBasket,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  CircleUserRound,
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href, isActive = false }) => {
  return (
    <li>
      <a
        href={href}
        className={cn(
          'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted',
          isActive && 'bg-primary/10 text-primary'
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </a>
    </li>
  );
};

const SidebarNav: React.FC = () => {
  const mainNavItems = [
    { icon: LayoutGrid, label: 'Dashboard', href: '#', isActive: true },
    { icon: Users, label: 'Leads', href: '#' },
    { icon: User, label: 'Customers', href: '#' },
    { icon: FileText, label: 'Proposals', href: '#' },
    { icon: FileStack, label: 'Invoices', href: '#' },
    { icon: ShoppingBasket, label: 'Items', href: '#' },
    { icon: Mail, label: 'Mail', href: '#' },
    { icon: Archive, label: 'Shoebox', href: '#' },
    { icon: CalendarDays, label: 'Calendar', href: '#' },
  ];

  const secondaryNavItems = [
    { icon: HelpCircle, label: 'Help', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' },
  ];

  return (
    <aside className="w-64 flex-col border-r bg-secondary/50 p-4 hidden md:flex">
      <div className="mb-8 flex items-center gap-2 px-3">
        <div className="p-2 rounded-full bg-black text-white">
          <CircleUserRound className="h-6 w-6" />
        </div>
        <h1 className="text-xl font-bold">Company</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {mainNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <ul className="space-y-2">
          {secondaryNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarNav;
