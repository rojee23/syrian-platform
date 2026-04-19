import React from 'react';

export default function Step5({ onNext, onPrev }) {
  return (
    <div className="step-wrapper">
      <h2 className="step-title">إضافة دورة جديدة :</h2>
      <div className="full-view-card" style={{ border: '2px solid #67cfe2', borderRadius: '15px', padding: '20px' }}>
        <h3 style={{ color: '#67cfe2', textAlign: 'center' }}>الوحدة الأولى</h3>
        <div className="form-group"><input type="text" value="دورة لغة إنجليزية" disabled /></div>
        <div className="lesson-block">
          <h4 style={{textAlign: 'center'}}>الدرس الأول والثاني والثالث</h4>
          <input type="text" value="دورة لغة إنجليزية" disabled style={{width: '100%', marginBottom: '10px'}} />
          <div className="quiz-section">
            <h4 style={{textAlign: 'center'}}>الاختبار الأول</h4>
            <div style={{background: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid #eee'}}>اسم السؤال هنا...</div>
          </div>
        </div>
        <div className="unit-actions-row">
          <button className="btn-outline">إضافة درس</button>
          <button className="btn-outline">إضافة اختبار</button>
        </div>
      </div>
      <div className="button-footer">
        <button className="btn-prev" onClick={onPrev}>السابق</button>
        <button className="btn-next" onClick={onNext}>التالي</button>
      </div>
    </div>
  );
}