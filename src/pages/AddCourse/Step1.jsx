import React from "react";

export default function Step1({ next }) {
  return (
    <div className="step-wrapper">
      {/* Progress Bar */}
      <div className="progress">
        <div className="step active">1</div>
        <div className="line"></div>
        <div className="step">2</div>
        <div className="line"></div>
        <div className="step">3</div>
      </div>

      <h2 className="title">إضافة دورة جديدة</h2>

      <div className="form-group">
        <label>اسم الدورة</label>
        <input
          type="text"
          placeholder="من فضلك يجب أن يكون الاسم مميز ولا يتجاوز 30 حرف."
        />
      </div>

      <div className="form-group">
        <label>وصف الدورة</label>
        <textarea placeholder="وصف الدورة كامل ومعبر"></textarea>
      </div>

      <div className="form-group">
        <label>صورة غلاف الدورة</label>
        <input type="file" />
      </div>

      <div className="form-group">
        <label>تصنيف الكورس</label>
        <select>
          <option>UI / UX Designer</option>
        </select>
      </div>

      <div className="buttons">
        <button className="next-btn" onClick={next}>
          التالي
        </button>
      </div>
    </div>
  );
}
