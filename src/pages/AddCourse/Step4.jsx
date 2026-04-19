import React from 'react';

export default function Step4({ onNext, onPrev }) {
  return (
    <div className="step-wrapper">
      <h2 className="step-title" style={{ color: '#67cfe2' }}>الوحدة الأولى</h2>
      <div className="form-group">
        <label>اسم الوحدة</label>
        <input type="text" value="دورة لغة إنجليزية" disabled />
      </div>
      <div className="form-group">
        <label>وصف الوحدة</label>
        <textarea rows="2" value="وصف الدورة كامل ومعبر" disabled></textarea>
      </div>
      <div className="sub-card" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '12px', background: '#fcfcfc' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>الدرس الأول</h3>
        <div className="form-group">
          <label>عنوان الدرس</label>
          <input type="text" placeholder="دورة لغة إنجليزية" />
        </div>
        <div className="form-group">
          <label>اختر نوع الدرس</label>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <label><input type="radio" name="type" /> ملف pdf</label>
            <label><input type="radio" name="type" defaultChecked /> فيديو</label>
          </div>
        </div>
        <div className="form-group">
          <label>رفع الفيديو</label>
          <div className="upload-box" style={{ border: '2px dashed #67cfe2', textAlign: 'center', padding: '15px', borderRadius: '10px' }}>
            <span style={{ color: '#67cfe2', cursor: 'pointer', fontSize: '20px' }}>+</span>
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