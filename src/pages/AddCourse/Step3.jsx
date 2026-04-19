import React from "react";

export default function Step3({ onNext, onPrev }) {
  return (
    <div className="step-wrapper">
      <h2 className="step-title" style={{color: '#67cfe2'}}>الوحدة الأولى</h2>
      <div className="form-group">
        <label>اسم الوحدة</label>
        <input type="text" placeholder="من فضلك يجب أن يكون الاسم مميز ولا يتجاوز 30 حرف." />
      </div>
      <div className="form-group">
        <label>وصف الوحدة</label>
        <textarea rows="3" placeholder="وصف الدورة كامل ومعبر"></textarea>
      </div>
      <div className="unit-actions-row">
        <button className="btn-outline">إضافة درس</button>
        <button className="btn-outline">إضافة اختبار</button>
      </div>
      <div className="unit-box" style={{padding: '20px', marginTop: '20px'}}>
        <p>إضافة وحدة علمية</p>
        <button className="add-unit-btn" style={{borderRadius: '50%', width: '40px'}}>+</button>
      </div>
      <div className="button-footer">
        <button className="btn-prev" onClick={onPrev}>السابق</button>
        <button className="btn-next" onClick={onNext}>التالي</button>
      </div>
    </div>
  );
}