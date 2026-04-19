import React, { useEffect } from 'react';

const Step7 = ({ onComplete }) => {
  useEffect(() => {
    // محاكاة وقت الانتظار للموافقة ثم الانتقال التلقائي
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="status-wrapper" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60vh',
      gap: '24px'
    }}>
      <div className="custom-loader"></div>
      
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '10px' }}>
          بانتظار موافقة المشرفين
        </h2>
        <p style={{ fontSize: '16px', color: '#888' }}>
          عندما يتم الموافقة على انشاء هذه الدورة سيتم اضافتها مباشرة وتلقائياً !!
        </p>
      </div>

      <style>{`
        .custom-loader {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, transparent 30%, #67cfe2 100%);
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 7px), #000 0);
          mask: radial-gradient(farthest-side, transparent calc(100% - 7px), #000 0);
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Step7;