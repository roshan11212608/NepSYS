import React, { useState } from 'react';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import styles from './Inbox.module.css';
import { Mail, MessageSquare, Clock, User, ExternalLink, Trash2, Archive, Star } from 'lucide-react';

const Inbox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      subject: 'Inquiry about NEXA Cloud Services',
      message: 'Hi, I\'m interested in learning more about your cloud services. Can you provide pricing information?',
      date: '2024-03-05',
      time: '10:30 AM',
      status: 'unread',
      source: 'website',
      priority: 'high'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@techcorp.com',
      subject: 'Partnership Opportunity',
      message: 'We are looking for a reliable SaaS partner for our upcoming project. Would love to discuss collaboration.',
      date: '2024-03-05',
      time: '9:15 AM',
      status: 'read',
      source: 'contact form',
      priority: 'medium'
    },
    {
      id: 3,
      name: 'Mike Wilson',
      email: 'mike.w@startup.io',
      subject: 'API Integration Question',
      message: 'We need help integrating your API with our existing system. Do you provide technical support?',
      date: '2024-03-04',
      time: '4:45 PM',
      status: 'unread',
      source: 'website',
      priority: 'low'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily@enterprise.com',
      subject: 'Enterprise Solution Demo',
      message: 'Our team would like to schedule a demo for your enterprise solutions. What are your availability?',
      date: '2024-03-04',
      time: '2:30 PM',
      status: 'read',
      source: 'email',
      priority: 'high'
    }
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredMessages = messages.filter(msg => {
    if (filter === 'all') return true;
    if (filter === 'unread') return msg.status === 'unread';
    if (filter === 'read') return msg.status === 'read';
    return true;
  });

  const markAsRead = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, status: 'read' } : msg
    ));
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }
  };

  const archiveMessage = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, status: 'archived' } : msg
    ));
    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }
  };

  const starMessage = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, starred: !msg.starred } : msg
    ));
  };

  return (
    <div className={styles.inboxContainer}>
      <Sidebar />
      <main className={styles.inboxMain}>
        <div className={styles.inboxContent}>
          {/* Header */}
          <div className={styles.inboxHeader}>
            <div>
              <h1 className={styles.inboxTitle}>
                <Mail size={32} style={{ color: '#00A67E' }} />
                Inbox
              </h1>
              <p className={styles.inboxSubtitle}>
                Manage messages and inquiries from website visitors
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{
                  background: '#1E293B',
                  border: '1px solid #334155',
                  color: '#F8FAFC',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem'
                }}
              >
                <option value="all">All Messages</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
              </select>
            </div>
          </div>

          {/* Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{
              background: '#1E293B',
              border: '1px solid #334155',
              borderRadius: '12px',
              padding: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(0, 166, 126, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={20} style={{ color: '#00A67E' }} />
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{messages.length}</div>
                  <div style={{ color: '#64748B', fontSize: '0.875rem' }}>Total Messages</div>
                </div>
              </div>
            </div>
            
            <div style={{
              background: '#1E293B',
              border: '1px solid #334155',
              borderRadius: '12px',
              padding: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(220, 38, 38, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageSquare size={20} style={{ color: '#DC2626' }} />
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{messages.filter(m => m.status === 'unread').length}</div>
                  <div style={{ color: '#64748B', fontSize: '0.875rem' }}>Unread</div>
                </div>
              </div>
            </div>
          </div>

          {/* Messages List */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Messages List */}
            <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid #334155' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Messages</h2>
              </div>
              <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
                {filteredMessages.length === 0 ? (
                  <div style={{ padding: '2rem', textAlign: 'center', color: '#64748B' }}>
                    No messages found
                  </div>
                ) : (
                  filteredMessages.map(message => (
                    <div
                      key={message.id}
                      onClick={() => {
                        setSelectedMessage(message);
                        markAsRead(message.id);
                      }}
                      style={{
                        padding: '1.5rem',
                        borderBottom: '1px solid #334155',
                        cursor: 'pointer',
                        background: selectedMessage?.id === message.id ? '#0F172A' : 'transparent',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedMessage?.id !== message.id) {
                          e.currentTarget.style.background = '#334155';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedMessage?.id !== message.id) {
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                            <span style={{ fontWeight: '600', color: message.status === 'unread' ? '#F8FAFC' : '#CBD5E1' }}>
                              {message.name}
                            </span>
                            {message.status === 'unread' && (
                              <span style={{ 
                                width: '8px', 
                                height: '8px', 
                                background: '#00A67E', 
                                borderRadius: '50%' 
                              }} />
                            )}
                            {message.priority === 'high' && (
                              <span style={{ 
                                padding: '2px 6px', 
                                background: 'rgba(220, 38, 38, 0.1)', 
                                color: '#DC2626', 
                                borderRadius: '4px', 
                                fontSize: '0.75rem' 
                              }}>
                                High
                              </span>
                            )}
                          </div>
                          <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '0.25rem' }}>
                            {message.email}
                          </div>
                          <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>
                            {message.subject}
                          </div>
                          <div style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.4' }}>
                            {message.message.substring(0, 100)}...
                          </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem', marginLeft: '1rem' }}>
                          <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                            {message.date}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                            {message.time}
                          </div>
                          <div style={{ display: 'flex', gap: '0.25rem' }}>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                starMessage(message.id);
                              }}
                              style={{ 
                                background: 'none', 
                                border: 'none', 
                                color: message.starred ? '#F59E0B' : '#64748B', 
                                cursor: 'pointer',
                                padding: '0.25rem'
                              }}
                            >
                              <Star size={14} fill={message.starred ? 'currentColor' : 'none'} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Message Detail */}
            <div style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '16px', overflow: 'hidden' }}>
              {selectedMessage ? (
                <>
                  <div style={{ padding: '1.5rem', borderBottom: '1px solid #334155' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h2 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Message Details</h2>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                          onClick={() => archiveMessage(selectedMessage.id)}
                          style={{ 
                            background: 'none', 
                            border: '1px solid #334155', 
                            color: '#CBD5E1', 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem'
                          }}
                        >
                          <Archive size={14} />
                        </button>
                        <button
                          onClick={() => deleteMessage(selectedMessage.id)}
                          style={{ 
                            background: 'none', 
                            border: '1px solid #334155', 
                            color: '#DC2626', 
                            padding: '0.5rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem'
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <User size={16} style={{ color: '#64748B' }} />
                        <span style={{ fontWeight: '600' }}>{selectedMessage.name}</span>
                        <span style={{ color: '#64748B' }}>&lt;{selectedMessage.email}&gt;</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <Clock size={16} style={{ color: '#64748B' }} />
                        <span style={{ color: '#64748B', fontSize: '0.875rem' }}>
                          {selectedMessage.date} at {selectedMessage.time}
                        </span>
                        <span style={{ 
                          padding: '2px 6px', 
                          background: 'rgba(0, 166, 126, 0.1)', 
                          color: '#00A67E', 
                          borderRadius: '4px', 
                          fontSize: '0.75rem' 
                        }}>
                          {selectedMessage.source}
                        </span>
                      </div>
                    </div>
                    
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                        {selectedMessage.subject}
                      </h3>
                    </div>
                    
                    <div style={{ 
                      background: '#0F172A', 
                      padding: '1rem', 
                      borderRadius: '8px', 
                      lineHeight: '1.6',
                      color: '#CBD5E1'
                    }}>
                      {selectedMessage.message}
                    </div>
                    
                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                      <button style={{
                        background: 'linear-gradient(135deg, #00A67E 0%, #DC2626 100%)',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Mail size={16} />
                        Reply
                      </button>
                      <button style={{
                        background: 'none',
                        border: '1px solid #334155',
                        color: '#CBD5E1',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <ExternalLink size={16} />
                        Open in Email Client
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ padding: '3rem', textAlign: 'center', color: '#64748B' }}>
                  <Mail size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                  <p>Select a message to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inbox;
