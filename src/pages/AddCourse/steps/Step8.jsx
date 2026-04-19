import React from 'react';

const Step8 = () => {
  return (
    <div className="success-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
      gap: '32px', // المسافة المطلوبة
      textAlign: 'center',
      maxWidth: '806px', // العرض المطلوب
      margin: '0 auto'
    }}>
      
      {/* أيقونة النجاح الخضراء المزدوجة */}
      <div className="success-circle-wrapper" style={{
        width: '140px',
        height: '140px',
        backgroundColor: '#e6faf5',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#2ecc71',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '40px',
          fontWeight: 'bold'
        }}>
          ✓
        </div>
      </div>

      {/* المحتوى النصي */}
      <div className="success-text" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1a2b3c', margin: 0 }}>
          تمت اضافة الدورة بنجاح !
        </h2>
        <p style={{ fontSize: '18px', color: '#7f8c8d', margin: 0 }}>
          قد اجتزت جميع الدروس بنجاح، يمكنك الآن استلام شهادتك
        </p>
      </div>

      {/* أزرار الإجراءات */}
      <div className="action-buttons" style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
        <button style={{
          backgroundColor: '#e0f7fa',
          color: '#1a2b3c',
          border: 'none',
          padding: '12px 35px',
          borderRadius: '8px',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '16px'
        }}>
          معاينة الدورة
        </button>
        <button style={{
          backgroundColor: '#f8f9fa',
          color: '#1a2b3c',
          border: 'none',
          padding: '12px 35px',
          borderRadius: '8px',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '16px'
        }}>
          العودة للرئيسية
        </button>
      </div>

      {/* قسم التقييم السفلي (هل واجهت صعوبة) */}
      <div className="feedback-section" style={{
        marginTop: '40px',
        paddingTop: '30px',
        borderTop: '1px solid #eee',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        direction: 'rtl'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ fontSize: '15px', color: '#444' }}>هل واجهت صعوبة في عملية الاضافة</span>
          <button style={{ backgroundColor: '#67cfe2', color: 'white', border: 'none', padding: '6px 20px', borderRadius: '5px' }}>نعم</button>
          <button style={{ backgroundColor: '#eee', color: '#777', border: 'none', padding: '6px 20px', borderRadius: '5px' }}>لا</button>
        </div>
        <span style={{ fontSize: '14px', color: '#bdc3c7' }}>شكراً لك على مجهودك</span>
      </div>
    </div>
  );
};

export default Step8;