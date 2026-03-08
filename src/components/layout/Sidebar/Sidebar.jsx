import React, { useState, useEffect } from 'react';
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Track screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMobileOpen(false); // Close mobile sidebar when switching to desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile sidebar when clicking outside and manage body scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileOpen && !event.target.closest('.nexa-sidebar') && !event.target.closest('.mobile-sidebar-toggle')) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      // Only reset overflow if sidebar is not open
      if (!mobileOpen) {
        document.body.style.overflow = '';
      }
    };
  }, [mobileOpen]);

  
  const handleNavigation = (path) => {
    if (path === '/logout') {
      logout();
      navigate('/auth/login');
      return;
    }
    navigate(path);
    setMobileOpen(false); // Close mobile sidebar after navigation
  };

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

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="mobile-overlay show"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
      
      {/* Mobile Toggle Button - Only show when sidebar is closed */}
      {isMobile && !mobileOpen && (
        <button 
          className="mobile-sidebar-toggle"
          onClick={() => setMobileOpen(true)}
          aria-label="Open mobile menu"
          style={{
            position: 'fixed',
            top: '1.25rem',
            left: '1.25rem',
            zIndex: 10000,
            background: 'rgba(15, 23, 42, 0.9)',
            border: '1px solid rgba(71, 85, 105, 0.3)',
            borderRadius: '8px',
            padding: '0.625rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.15s ease',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(30, 41, 59, 0.9)';
            e.target.style.borderColor = 'rgba(71, 85, 105, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(15, 23, 42, 0.9)';
            e.target.style.borderColor = 'rgba(71, 85, 105, 0.3)';
          }}
        >
          <Menu size={18} color="#94A3B8" />
        </button>
      )}

      {/* Sidebar */}
      <aside className={`nexa-sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
        {/* Logo Section */}
        <div className="sidebar-header">
          <div className="logo">
            {collapsed ? 'N' : 'NEXA'}
          </div>
          {!isMobile ? (
            <button 
              className="sidebar-toggle"
              onClick={() => setCollapsed(!collapsed)}
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              style={{
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(71, 85, 105, 0.3)',
                borderRadius: '6px',
                padding: '0.4375rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.15s ease',
                backdropFilter: 'blur(8px)',
                opacity: 0.7
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(30, 41, 59, 0.8)';
                e.target.style.borderColor = 'rgba(71, 85, 105, 0.5)';
                e.target.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(15, 23, 42, 0.7)';
                e.target.style.borderColor = 'rgba(71, 85, 105, 0.3)';
                e.target.style.opacity = '0.7';
              }}
            >
              {collapsed ? <Menu size={14} color="#94A3B8" /> : <X size={14} color="#94A3B8" />}
            </button>
          ) : (
            mobileOpen && (
              <button 
                className="sidebar-toggle"
                onClick={() => setMobileOpen(false)}
                aria-label="Close mobile menu"
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(71, 85, 105, 0.3)',
                  borderRadius: '6px',
                  padding: '0.4375rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.15s ease',
                  backdropFilter: 'blur(8px)',
                  opacity: 0.7
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(30, 41, 59, 0.8)';
                  e.target.style.borderColor = 'rgba(71, 85, 105, 0.5)';
                  e.target.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(15, 23, 42, 0.7)';
                  e.target.style.borderColor = 'rgba(71, 85, 105, 0.3)';
                  e.target.style.opacity = '0.7';
                }}
              >
                <X size={14} color="#94A3B8" />
              </button>
            )
          )}
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
    </>
  );
};

export default Sidebar;
