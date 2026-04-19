import React from "react";

export default function Step1({ onNext }) {
  return (
    <div className="step-wrapper">
      <h2 className="step-title">إضافة دورة جديدة</h2>
      <div className="form-group">
        <label>اسم الدورة</label>
        <input type="text" placeholder="من فضلك يجب أن يكون الاسم مميز ولا يتجاوز 30 حرف." />
      </div>
      <div className="form-group">
        <label>وصف الدورة</label>
        <textarea rows="4" placeholder="وصف الدورة كامل ومعبر"></textarea>
      </div>
      <div className="form-group">
        <label>صورة غلاف الدورة</label>
        <input type="file" />
      </div>
      <div className="form-group">
        <label>تصنيف الكورس</label>
        <select><option>UI / UX Designer</option></select>
      </div>
      <div className="button-footer">
        <button className="btn-next" onClick={onNext}>التالي</button>
      </div>
    </div>
  );
}