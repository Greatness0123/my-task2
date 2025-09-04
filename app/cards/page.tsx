import React from 'react';

const CardsPage = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: `url('/sky.jpg') center/cover no-repeat`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Main content card */}
      <div
        style={{
          background: 'linear-gradient(180deg, #2563eb 0%, #1e40af 100%)',
          borderRadius: 32,
          padding: '48px 40px 32px 40px',
          boxShadow: '0 8px 32px rgba(30,64,175,0.10)',
          color: '#fff',
          maxWidth: 420,
          width: '100%',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 style={{ fontWeight: 700, fontSize: 28, marginBottom: 16, textAlign: 'left', width: '100%' }}>
          Tap. swipe. pay. wherever
        </h2>
        <p style={{ fontSize: 16, marginBottom: 28, textAlign: 'left', color: '#e0e7ff', width: '100%' }}>
          Use your Bobble card to pay online and in-store. 24/7 access, zero drama. Easy payments, anytime, anywhere.
        </p>
        <button
          style={{
            background: '#fff',
            color: '#2563eb',
            border: 'none',
            borderRadius: 24,
            padding: '12px 32px',
            fontWeight: 600,
            fontSize: 16,
            marginBottom: 32,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(30,64,175,0.08)',
          }}
        >
          Get a Bobble Card
        </button>
        {/* Card images */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 24 }}>
          <img src="/cards.png" alt="Bobble Cards" style={{ width: 180, marginRight: -60, zIndex: 2, borderRadius: 16, boxShadow: '0 4px 16px rgba(30,41,59,0.10)' }} />
          <img src="/cards pics.png" alt="Bobble Cards" style={{ width: 180, zIndex: 1, borderRadius: 16, boxShadow: '0 4px 16px rgba(30,41,59,0.10)' }} />
        </div>
      </div>
      {/* Hand with card image */}
      <img src="/frame 1.png" alt="Hand with card" style={{ position: 'absolute', right: 80, bottom: 0, width: 300, maxWidth: '40vw', zIndex: 3 }} />
      {/* Navigation pills */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 16,
          zIndex: 4,
        }}
      >
        <div style={{ padding: '10px 28px', borderRadius: 24, background: 'rgba(255,255,255,0.7)', color: '#1e293b', fontWeight: 500, fontSize: 16, border: '1px solid #e0e7ef', marginRight: 0 }}>Instant Payments</div>
        <div style={{ padding: '10px 28px', borderRadius: 24, background: 'linear-gradient(90deg, #2563eb 0%, #1e40af 100%)', color: '#fff', fontWeight: 600, fontSize: 16, boxShadow: '0 2px 8px rgba(30,64,175,0.10)' }}>Cards</div>
        <div style={{ padding: '10px 28px', borderRadius: 24, background: 'rgba(255,255,255,0.7)', color: '#1e293b', fontWeight: 500, fontSize: 16, border: '1px solid #e0e7ef' }}>Savings</div>
        <div style={{ padding: '10px 28px', borderRadius: 24, background: 'rgba(255,255,255,0.7)', color: '#1e293b', fontWeight: 500, fontSize: 16, border: '1px solid #e0e7ef' }}>Loan</div>
      </div>
    </div>
  );
};

export default CardsPage;
