import React from "react";

export default function Step2({ onNext, onPrev }) {
  return (
    <div className="step-wrapper">
      <h2 className="step-title">إضافة دورة جديدة</h2>
      <div className="unit-box">
        <h3>إضافة وحدة علمية</h3>
        <button className="add-unit-btn" onClick={() => alert("سيتم تفعيل إضافة الوحدة")}>إضافة وحدة</button>
      </div>
      <div className="button-footer">
        <button className="btn-prev" onClick={onPrev}>السابق</button>
        <button className="btn-next" onClick={onNext}>التالي</button>
      </div>
    </div>
  );
}