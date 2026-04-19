import React from 'react';

const Step4 = ({ onNext, onPrev }) => {
  return (
    <div className="step-content">
      <h2 className="step-title" style={{ textAlign: 'center' }}>الوحدة الأولى</h2>
      
      <div className="form-group">
        <label>اسم الوحدة</label>
        <input type="text" placeholder="دورة لغة إنجليزية" />
      </div>

      <div className="form-group">
        <label>وصف الوحدة</label>
        <textarea rows="3" placeholder="وصف الدورة كامل ومعبر"></textarea>
      </div>

      {/* قسم الدرس الأول */}
      <div className="sub-card" style={{ border: '1px solid #f0f0f0', padding: '20px', borderRadius: '12px', background: '#fdfdfd' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>الدرس الأول</h3>
        <div className="form-group">
          <label>عنوان الدرس</label>
          <input type="text" placeholder="دورة لغة إنجليزية" />
        </div>
        <div className="form-group">
          <label>اختر نوع الدرس ( فيديو / ملف / رابط البث المباشر )</label>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <label><input type="radio" name="l-type" /> ملف pdf</label>
            <label><input type="radio" name="l-type" /> رابط بث مباشر</label>
            <label><input type="radio" name="l-type" defaultChecked /> فيديو</label>
          </div>
        </div>
        <div className="form-group">
          <label>رفع ( فيديو ) الدرس</label>
          <div className="upload-box" style={{ border: '2px dashed #67cfe2', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' }}>
            <span style={{ color: '#67cfe2', fontSize: '25px', cursor: 'pointer' }}>+</span>
          </div>
        </div>
        <div className="form-group">
          <label>عنوان الفيديو</label>
          <input type="text" placeholder="دورة لغة إنجليزية" />
        </div>
        <div className="unit-actions-row">
          <button className="btn-next" style={{ flex: 1 }}>اضافة درس</button>
          <button className="btn-prev" style={{ flex: 1 }}>اضافة اختبار</button>
        </div>
      </div>

      <div className="add-unit-footer" style={{ marginTop: '20px', textAlign: 'center', border: '1px solid #eee', padding: '15px', borderRadius: '10px' }}>
         <p>اضافة وحدة علمية</p>
         <button className="btn-outline" style={{ borderRadius: '50%', width: '35px', height: '35px' }}>+</button>
      </div>

      <div className="button-footer">
        <button className="btn-prev" onClick={onPrev}>السابق</button>
        <button className="btn-next" onClick={onNext}>التالي</button>
      </div>
    </div>
  );
};

export default Step4;