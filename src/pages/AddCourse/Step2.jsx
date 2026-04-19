import React from "react";

export default function Step2({ next, prev }) {
  return (
    <div className="step-wrapper">
      {/* Progress Bar */}
      <div className="progress">
        <div className="step done">1</div>
        <div className="line"></div>
        <div className="step active">2</div>
        <div className="line"></div>
        <div className="step">3</div>
      </div>

      <h2 className="title">إضافة دورة جديدة</h2>

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
