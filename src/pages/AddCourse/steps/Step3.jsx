import React from "react";
import "./StepsShared.css";
import "./Step3.css";

const Step3 = ({ onAddLesson, onAddQuiz, onAddUnit }) => {
  return (
    <div className="steps-wrapper-container">
      {/* بوكس الوحدة الأساسي */}
      <div className="unit-main-card">
        <h2 className="unit-title-header">الوحدة الأولى</h2>
        
        <div className="form-group">
          <label className="input-label">اسم الوحدة</label>
          <span className="input-hint">من فضلك يجب أن يكون الاسم مميز ولا يتجاوز 30 حرف.</span>
          <input type="text" className="custom-input" placeholder="دورة لغة انجليزية" />
        </div>

        <div className="form-group">
          <label className="input-label">وصف الوحدة</label>
          <textarea className="custom-textarea" placeholder="وصف الدورة كامل ومعبر" rows="3"></textarea>
        </div>

        <div className="unit-actions-buttons">
          <button className="btn-add-lesson" onClick={onAddLesson}>إضافة درس</button>
          <button className="btn-add-quiz" onClick={onAddQuiz}>إضافة اختبار</button>
        </div>
      </div>

      {/* بوكس إضافة وحدة علمية (خارج بوكس الوحدة) */}
      <div className="add-unit-container-outer" onClick={onAddUnit}>
        <h3 className="outer-unit-text">اضافة وحدة علمية</h3>
        <div className="add-unit-btn-circle">+</div>
      </div>
    </div>
  );
};

export default Step3;