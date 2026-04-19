import React from "react";

export default function Step3({ next, prev }) {
  return (
    <div className="step-wrapper">
      {/* Progress Bar */}
      <div className="progress">
        <div className="step done">1</div>
        <div className="line"></div>
        <div className="step done">2</div>
        <div className="line"></div>
        <div className="step active">3</div>
      </div>

      <h2 className="title">الوحدة الأولى</h2>

      <div className="form-group">
        <label>اسم الوحدة</label>
        <input
          type="text"
          placeholder="من فضلك يجب أن يكون الاسم مميز ولا يتجاوز 30 حرف."
        />
      </div>

      <div className="form-group">
        <label>وصف الوحدة</label>
        <textarea placeholder="وصف الدورة كامل ومعبر"></textarea>
      </div>

      <div className="unit-actions">
        <button className="lesson-btn">إضافة درس</button>
        <button className="test-btn">إضافة اختبار</button>
      </div>

      <div className="unit-box">
        <h3>إضافة وحدة علمية</h3>
        <button className="add-unit-btn">إضافة وحدة</button>
      </div>

      <div className="buttons">
        <button className="next-btn" onClick={next}>
          التالي
        </button>
        <button className="prev-btn" onClick={prev}>
          السابق
        </button>
      </div>
    </div>
  );
}
