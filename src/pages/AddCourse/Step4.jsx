import React from "react";

const Step4 = ({ onNext, onPrev }) => {
  return (
    <div className="step-content">
      <h2 className="step-title" style={{ color: "#67cfe2" }}>الوحدة الأولى</h2>
      
      {/* تفاصيل الوحدة (عرض فقط) */}
      <div className="form-group">
        <label>اسم الوحدة</label>
        <input type="text" value="دورة لغة إنجليزية" disabled />
      </div>

      <div className="form-group">
        <label>وصف الوحدة</label>
        <textarea rows="2" value="وصف الدورة كامل ومعبر" disabled></textarea>
      </div>

      {/* قسم إضافة الدرس */}
      <div className="sub-card" style={{ background: "#f9f9f9", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
        <h3 style={{ fontSize: "18px", marginBottom: "15px" }}>الدرس الأول</h3>
        
        <div className="form-group">
          <label>عنوان الدرس</label>
          <input type="text" placeholder="دورة لغة إنجليزية" />
        </div>

        <div className="form-group">
          <label>اختر نوع الدرس ( فيديو / ملف / رابط البث المباشر )</label>
          <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
            <label style={{ fontWeight: "normal" }}><input type="radio" name="type" /> ملف pdf</label>
            <label style={{ fontWeight: "normal" }}><input type="radio" name="type" /> رابط بث مباشر</label>
            <label style={{ fontWeight: "normal" }}><input type="radio" name="type" defaultChecked /> فيديو</label>
          </div>
        </div>

        <div className="form-group">
          <label>رفع ( فيديو ) الدرس</label>
          <div className="upload-placeholder" style={{ border: "2px dashed #67cfe2", height: "100px", display: "flex", justifyContent: "center", alignitems: "center", borderRadius: "10px", background: "#f0fbff" }}>
            <span style={{ color: "#67cfe2", fontSize: "24px" }}>+</span>
          </div>
        </div>

        <div className="form-group">
          <label>عنوان الفيديو</label>
          <input type="text" placeholder="دورة لغة إنجليزية" />
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
};

export default Step4;