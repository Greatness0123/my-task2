

import React, { useState, useRef, useEffect } from 'react';

const options = [
  {
    icon: (
      <span style={{fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {/* Bobble icon (placeholder) */}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#fff"/><text x="7" y="20" fontSize="14" fontWeight="bold" fill="#1A2B6B">B</text></svg>
      </span>
    ),
    title: 'Bobble transfer',
    desc: 'Transfer to Bobble',
  },
  {
    icon: (
      <span style={{fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {/* Bank icon */}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#fff"/><g><rect x="8" y="16" width="12" height="2" rx="1" fill="#1A2B6B"/><rect x="10" y="12" width="2" height="4" rx="1" fill="#1A2B6B"/><rect x="16" y="12" width="2" height="4" rx="1" fill="#1A2B6B"/><rect x="13" y="12" width="2" height="4" rx="1" fill="#1A2B6B"/><rect x="7" y="10" width="14" height="2" rx="1" fill="#1A2B6B"/></g></svg>
      </span>
    ),
    title: 'Bobble transfer',
    desc: 'Transfer to other banks',
  },
  {
    icon: (
      <span style={{fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {/* Arrow icon */}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#fff"/><path d="M9 14h10m0 0l-4-4m4 4l-4 4" stroke="#1A2B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    ),
    title: 'Request fund via messaging',
    desc: 'Request money from friends',
  },
  {
    icon: (
      <span style={{fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {/* QR code icon */}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#fff"/><rect x="8" y="8" width="4" height="4" rx="1" fill="#1A2B6B"/><rect x="16" y="8" width="4" height="4" rx="1" fill="#1A2B6B"/><rect x="8" y="16" width="4" height="4" rx="1" fill="#1A2B6B"/><rect x="16" y="16" width="4" height="4" rx="1" fill="#1A2B6B"/></svg>
      </span>
    ),
    title: 'Scan to pay',
    desc: 'Scan a QR code to make payment',
  },
];


const sections = [
  {
    key: 'instant',
    label: 'Instant Payments',
    background: `url('/instantpaymentpic.jpg') center/cover no-repeat`,
    content: (
      <div style={{ width: '100%', maxWidth: 340, minHeight: 260, height: 'auto', borderRadius: 16, background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto', boxSizing: 'border-box', padding: 0 }}>
        <h2 style={{ fontWeight: 700, fontSize: 26, marginBottom: 12, textAlign: 'center', width: '100%' }}>
          Fast, flexible and easy payments
        </h2>
        <p style={{ fontSize: 15, marginBottom: 18, textAlign: 'center', color: '#e0e7ff', width: '100%' }}>
          Receive and make payments instantly with your account number or Bobble Tag. No more failed or pending transfers.
        </p>
        <button
          style={{
            background: '#fff',
            color: '#2563eb',
            border: 'none',
            borderRadius: 24,
            padding: '10px 24px',
            fontWeight: 600,
            fontSize: 15,
            marginBottom: 18,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(30,64,175,0.08)',
          }}
        >
          Get Bobble app
        </button>
        {/* Options card */}
        <div
          style={{
            background: 'linear-gradient(180deg, #334155 0%, #1e293b 100%)',
            borderRadius: 14,
            padding: '12px 0',
            width: '100%',
            boxShadow: '0 4px 16px rgba(30,41,59,0.10)',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            marginTop: 6,
            boxSizing: 'border-box',
          }}
        >
          {options.map((opt, idx) => (
            <div key={opt.title} style={{ display: 'flex', alignItems: 'center', padding: '8px 14px', borderBottom: idx !== options.length - 1 ? '1px solid #334155' : 'none' }}>
              <span style={{ marginRight: 12 }}>{opt.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: '#fff' }}>{opt.title}</div>
                <div style={{ fontSize: 12, color: '#cbd5e1', marginTop: 2 }}>{opt.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    key: 'savings',
    label: 'Savings',
    background: `url('/savingspic.jpg') center/cover no-repeat`,
    content: (
      <div style={{ width: '100%', maxWidth: 420, minHeight: 180, height: 'auto', borderRadius: 16, background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto', boxSizing: 'border-box', padding: 0 }}>
        <h2 style={{ fontWeight: 700, fontSize: 26, marginBottom: 10, textAlign: 'left', width: '100%' }}>
          Grow your wealth
        </h2>
        <p style={{ fontSize: 15, marginBottom: 12, textAlign: 'left', color: '#e0e7ff', width: '100%' }}>
          Save smarter and earn more. Whether it's your rent or side hustle fund, we make it easy to grow your money.
        </p>
        <button
          style={{
            background: '#fff',
            color: '#2563eb',
            border: 'none',
            borderRadius: 24,
            padding: '10px 24px',
            fontWeight: 600,
            fontSize: 15,
            marginBottom: 12,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(30,64,175,0.08)',
          }}
        >
          Start saving now
        </button>
        {/* Savings options card */}
        <div
          style={{
            background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
            borderRadius: 14,
            padding: '10px 0',
            width: '100%',
            boxShadow: '0 4px 16px rgba(30,41,59,0.10)',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            marginTop: 4,
            boxSizing: 'border-box',
          }}
        >
          {/* Show only 3 savings options for desktop to reduce height */}
          {[
            { icon: '🏦', title: 'Bobble Save', desc: 'Automatic daily, weekly or monthly savings', rate: '12% interest' },
            { icon: '🔒', title: 'SafeLock', desc: 'Lock funds to avoid temptations', rate: '12% interest' },
            { icon: '💰', title: 'Fixed Savings', desc: 'Fix your savings for a better profit.', rate: '9% interest' },
          ].map((item, idx) => (
            <div
              key={item.title}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 14px',
                borderBottom: idx !== 2 ? '1px solid #334155' : 'none',
                background: 'rgba(0,0,0,0.13)',
                borderRadius: idx === 0 ? '10px 10px 0 0' : idx === 2 ? '0 0 10px 10px' : 0,
              }}
            >
              <span style={{ fontSize: 20, marginRight: 12 }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: '#fff' }}>{item.title}</div>
                <div style={{ fontSize: 12, color: '#cbd5e1', marginTop: 2 }}>{item.desc}</div>
              </div>
              <div style={{ fontSize: 12, color: '#fff', background: '#1e293b', borderRadius: 10, padding: '2px 8px', fontWeight: 600, marginLeft: 6 }}>{item.rate}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    key: 'cards',
    label: 'Cards',
    background: `url('/card1.jpg') center/cover no-repeat`,
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative', width: '100%' }}>
        {/* Large card.png behind the main card */}
        {/* <img src="/cards.png" alt="Bobble Card Large" style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -55%) scale(1.5)',
          width: '380px',
          maxWidth: '90vw',
          opacity: 0.18,
          zIndex: 0,
          pointerEvents: 'none',
        }} /> */}
        <div style={{
          background: 'rgba(37,99,235,0.95)',
          borderRadius: 24,
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
          padding: '24px 12px 20px 12px',
          width: '95vw',
          maxWidth: 320,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          <h2 style={{ fontWeight: 700, fontSize: 22, marginBottom: 12, textAlign: 'left', width: '100%', color: '#fff' }}>
            Tap. swipe. pay. wherever
          </h2>
          <p style={{ fontSize: 14, marginBottom: 20, textAlign: 'left', color: '#e0e7ff', width: '100%' }}>
            Use your Bobble card to pay online and in-store. 24/7 access, zero drama. Easy payments, anytime, anywhere.
          </p>
          <button
            style={{
              background: '#fff',
              color: '#2563eb',
              border: 'none',
              borderRadius: 24,
              padding: '10px 20px',
              fontWeight: 600,
              fontSize: 15,
              marginBottom: 20,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(30,64,175,0.08)',
              alignSelf: 'flex-start',
            }}
          >
            Get a Bobble Card
          </button>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginTop: 12, position: 'relative', minHeight: 120 }}>
            <img src="/cards pics.png" alt="Bobble Cards" style={{ width: 120, zIndex: 2, borderRadius: 12, boxShadow: '0 4px 16px rgba(30,41,59,0.10)', position: 'relative', left: 0, bottom: 0, opacity: 0.95 }} />
          </div>
        </div>
      </div>
    ),
  },
  {
    key: 'loans',
    label: 'Loan',
    background: `url('/loanspic.jpg') center/cover no-repeat`,
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div style={{ background: '#2563eb', opacity: 0.95, borderRadius: 24, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)', padding: '32px 24px', width: 320, maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 12, textAlign: 'left', width: '100%' }}>Get a loan in minutes</h2>
          <p style={{ color: '#fff', marginBottom: 20, textAlign: 'left', width: '100%', fontSize: 15 }}>
            Instant access to funds, auto-repaid via salary. Zero paperwork. Zero stress.
          </p>
          <button style={{ background: '#fff', color: '#2563eb', fontWeight: 600, padding: '10px 28px', borderRadius: 24, marginBottom: 24, boxShadow: '0 2px 8px rgba(30,64,175,0.10)', border: 'none', fontSize: 16, alignSelf: 'flex-start' }}>
            Get a loan now
          </button>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', background: '#181C2A', borderRadius: 16, padding: '14px 18px', boxShadow: '0 2px 8px rgba(30,41,59,0.10)', marginBottom: 8 }}>
              <img src="/file.svg" alt="Personal Loan" style={{ width: 32, height: 32, marginRight: 14 }} />
              <div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>Personal Loan</div>
                <div style={{ color: '#cbd5e1', fontSize: 13 }}>Get a loan up to ₦1,000,000</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', background: '#181C2A', borderRadius: 16, padding: '14px 18px', boxShadow: '0 2px 8px rgba(30,41,59,0.10)' }}>
              <img src="/instant payment.png" alt="Salary Advance" style={{ width: 32, height: 32, marginRight: 14 }} />
              <div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>Salary Advance</div>
                <div style={{ color: '#cbd5e1', fontSize: 13 }}>Get a loan up to ₦5,000,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

// Component definition starts here
const DynamicBgSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoSwitchRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 40) {
        if (diff > 0 && activeIdx < sections.length - 1) {
          setActiveIdx(activeIdx + 1);
        } else if (diff < 0 && activeIdx > 0) {
          setActiveIdx(activeIdx - 1);
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto-switch every 3 seconds
  useEffect(() => {
    if (autoSwitchRef.current) clearInterval(autoSwitchRef.current);
    autoSwitchRef.current = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % sections.length);
    }, 3000);
    return () => {
      if (autoSwitchRef.current) clearInterval(autoSwitchRef.current);
    };
  }, []);

  // Pause auto-switch on manual navigation
  const handleManualNav = (idx: number) => {
    setActiveIdx(idx);
    if (autoSwitchRef.current) {
      clearInterval(autoSwitchRef.current);
      autoSwitchRef.current = setInterval(() => {
        setActiveIdx(prev => (prev + 1) % sections.length);
      }, 3000);
    }
  };

  const activeSection = sections[activeIdx];
  return (
    <div
      ref={containerRef}
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: activeSection.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0',
        touchAction: 'pan-y',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main content card */}
      <div
        style={{
          background: 'linear-gradient(180deg, #2563eb 0%, #1e40af 100%)',
          borderRadius: 20,
          padding: '16px 4vw 12px 4vw',
          boxShadow: '0 8px 32px rgba(30,64,175,0.10)',
          color: '#fff',
          maxWidth: 370,
          width: '98vw',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {activeSection.content}
      </div>
      {/* Navigation pills */}
      <div
        style={{
          position: 'absolute',
          bottom: 24,
          left: 0,
          right: 0,
          margin: '0 auto',
          display: 'flex',
          gap: 10,
          zIndex: 3,
          width: '100%',
          maxWidth: 400,
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          padding: '0 8px',
          justifyContent: 'center',
        }}
      >
        {sections.map((section, idx) => (
          <div
            key={section.key}
            onClick={() => handleManualNav(idx)}
            style={{
              padding: '8px 12px',
              borderRadius: 20,
              background: idx === activeIdx
                ? 'linear-gradient(90deg, #2563eb 0%, #1e40af 100%)'
                : 'rgba(255,255,255,0.7)',
              color: idx === activeIdx ? '#fff' : '#1e293b',
              fontWeight: idx === activeIdx ? 600 : 500,
              fontSize: 15,
              boxShadow: idx === activeIdx ? '0 2px 8px rgba(30,64,175,0.10)' : 'none',
              cursor: 'pointer',
              border: idx === activeIdx ? 'none' : '1px solid #e0e7ef',
              transition: 'background 0.2s',
              minWidth: 'max-content',
              textAlign: 'center',
              marginBottom: 2,
              whiteSpace: 'nowrap',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {section.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicBgSection;
