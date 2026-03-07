import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../services/modules/auth';
import { 
  Menu, 
  X, 
  Home,
  Package,
  Users,
  FolderOpen,
  CreditCard,
  BarChart3,
  Shield,
  Key,
  Plug,
  UserCircle,
  Building,
  LogOut,
  Mail
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const navigationItems = [
    {
      section: 'Main',
      items: [
        { icon: Home, label: 'Home', path: '/dashboard/home' },
        { icon: Package, label: 'Products', path: '/dashboard/products' },
        { icon: Users, label: 'Clients', path: '/dashboard/clients' },
        { icon: FolderOpen, label: 'Projects', path: '/dashboard/projects' },
        { icon: CreditCard, label: 'Billing', path: '/dashboard/billing' },
        { icon: BarChart3, label: 'Analytics', path: '/dashboard/analytics' },
        { icon: Mail, label: 'Inbox', path: '/dashboard/inbox' }
      ]
    },
    {
      section: 'Management',
      items: [
        { icon: UserCircle, label: 'Users', path: '/dashboard/users' },
        { icon: Shield, label: 'Roles & Permissions', path: '/dashboard/roles' },
        { icon: Plug, label: 'Integrations', path: '/dashboard/integrations' },
        { icon: Key, label: 'API Keys', path: '/dashboard/api-keys' }
      ]
    },
    {
      section: 'Account',
      items: [
        { icon: UserCircle, label: 'My Profile', path: '/dashboard/profile' },
        { icon: Building, label: 'Company Settings', path: '/dashboard/company-settings' },
        { icon: LogOut, label: 'Logout', path: '/logout' }
      ]
    }
  ];

  const handleNavigation = (path) => {
    if (path === '/logout') {
      logout();
      navigate('/auth/login');
      return;
    }
    navigate(path);
  };

  return (
    <aside className={`nexa-sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* Logo Section */}
      <div className="sidebar-header">
        <div className="logo">
          {collapsed ? 'N' : 'NEXA'}
        </div>
        <button 
          className="sidebar-toggle"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle sidebar"
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {navigationItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="nav-section">
            {!collapsed && (
              <div className="nav-section-title">{section.section}</div>
            )}
            {section.items.map((item, itemIndex) => (
              <button 
                key={itemIndex} 
                className={`nav-item ${item.active ? 'active' : ''}`}
                title={collapsed ? item.label : ''}
                onClick={() => handleNavigation(item.path)}
              >
                <item.icon className="nav-item-icon" size={20} />
                {!collapsed && (
                  <span className="nav-item-text">{item.label}</span>
                )}
              </button>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
