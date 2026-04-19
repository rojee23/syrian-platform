import React from 'react';

const Step5 = ({ onNext, onPrev }) => {
  return (
    <div className="step-content">
      <h2 className="step-title" style={{ textAlign: 'center' }}>اضافة دورة جديدة :</h2>
      
      <div className="full-view-card" style={{ border: '2px solid #67cfe2', borderRadius: '15px', padding: '20px' }}>
        <h3 style={{ textAlign: 'center', color: '#67cfe2', marginBottom: '20px' }}>الوحدة الأولى</h3>
        
        {/* بيانات الوحدة الأساسية */}
        <div className="form-group"><input type="text" value="دورة لغة إنجليزية" disabled /></div>
        <div className="form-group"><textarea disabled>وصف الدورة كامل ومعبر</textarea></div>

        {/* الدرس الأول المحفوظ */}
        <div className="lesson-block" style={{ borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
          <h4 style={{ textAlign: 'center' }}>الدرس الأول</h4>
          <input type="text" value="دورة لغة إنجليزية" disabled className="form-group" style={{width: '100%'}} />
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', margin: '10px 0' }}>
            <label><input type="radio" disabled /> ملف pdf</label>
            <label><input type="radio" disabled defaultChecked /> فيديو</label>
          </div>
          <div className="upload-box" style={{ height: '60px', border: '1px solid #eee', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: '#ccc' }}>+</span>
          </div>
        </div>

        {/* تكرار للدرس الثاني والثالث كما في منزل 93 */}
        <div className="lesson-block" style={{ marginTop: '20px' }}>
          <h4 style={{ textAlign: 'center' }}>الدرس الثاني والثالث</h4>
          <input type="text" placeholder="عنوان الدرس" className="form-group" style={{width: '100%', marginBottom: '10px'}} />
          <input type="text" placeholder="رابط البث المباشر" className="form-group" style={{width: '100%'}} />
        </div>

        {/* قسم الاختبار النهائي في الوحدة */}
        <div className="quiz-section" style={{ marginTop: '30px', padding: '15px', background: '#fafafa', borderRadius: '12px' }}>
          <h4 style={{ textAlign: 'center' }}>الاختبار الأول</h4>
          <div className="question-item" style={{ background: '#fff', padding: '10px', borderRadius: '8px', marginBottom: '10px', border: '1px solid #eee' }}>
            <p>اسم السؤال هنا... (اختيار من متعدد)</p>
          </div>
          <div className="question-item" style={{ background: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid #eee' }}>
            <p>اسم السؤال هنا... (سؤال مقالي)</p>
          </div>
        </div>

        <div className="unit-actions-row" style={{ marginTop: '20px' }}>
          <button className="btn-next" style={{ flex: 1 }}>اضافة درس</button>
          <button className="btn-prev" style={{ flex: 1 }}>اضافة اختبار</button>
        </div>
      </div>

      <div className="button-footer">
        <button className="btn-prev" onClick={onPrev}>السابق</button>
        <button className="btn-next" onClick={onNext}>التالي</button>
      </div>
    </div>
  );
};

export default Step5;