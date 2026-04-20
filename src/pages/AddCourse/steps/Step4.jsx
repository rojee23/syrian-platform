import React, { useState } from "react";
import "./StepsShared.css";
import "./Step4.css";

const Step4 = ({ onAddUnit }) => {
  const [lessonType, setLessonType] = useState("video");

  return (
    <div className="steps-wrapper-container">
      <div className="unit-main-card lesson-detailed-height">
        <h2 className="unit-title-header">الوحدة الأولى</h2>
        
        {/* معلومات الوحدة (تعرض كقراءة فقط أو مدخلات) */}
        <div className="form-group opacity-reduced">
          <label className="input-label">اسم الوحدة</label>
          <input type="text" className="custom-input" value="دورة لغة انجليزية" disabled />
        </div>

        {/* بوكس الدرس الداخلي */}
        <div className="lesson-internal-box">
          <h3 className="lesson-number-title">الدرس الأول</h3>
          
          <div className="form-group">
            <label className="input-label">عنوان الدرس</label>
            <input type="text" className="custom-input" placeholder="دورة لغة انجليزية" />
          </div>

          <div className="form-group">
            <label className="input-label text-center">اختر نوع الدرس ( فيديو / ملف / رابط البث المباشر )</label>
            <div className="radio-group-container">
              <label className={`radio-item ${lessonType === 'pdf' ? 'active' : ''}`}>
                <input type="radio" name="type" onChange={() => setLessonType('pdf')} />
                <span>ملف pdf</span>
              </label>
              <label className={`radio-item ${lessonType === 'live' ? 'active' : ''}`}>
                <input type="radio" name="type" onChange={() => setLessonType('live')} />
                <span>رابط بث مباشر</span>
              </label>
              <label className={`radio-item ${lessonType === 'video' ? 'active' : ''}`}>
                <input type="radio" name="type" defaultChecked onChange={() => setLessonType('video')} />
                <span>فيديو</span>
              </label>
            </div>
          </div>

          {/* Upload Box المتغير */}
          <div className="form-group">
            <label className="input-label">
              رفع ( {lessonType === 'video' ? 'فيديو' : lessonType === 'pdf' ? 'ملف pdf' : 'رابط البث'} ) الدرس
            </label>
            <div className="upload-box-cyan">
               <div className="upload-icon-cyan">+</div>
            </div>
          </div>

          <div className="form-group">
            <label className="input-label">عنوان الفيديو</label>
            <input type="text" className="custom-input" placeholder="دورة لغة انجليزية" />
          </div>

          <div className="unit-actions-buttons mt-10">
            <button className="btn-add-lesson">إضافة درس</button>
            <button className="btn-add-quiz">إضافة اختبار</button>
          </div>
        </div>
      </div>

      <div className="add-unit-container-outer" onClick={onAddUnit}>
        <h3 className="outer-unit-text">اضافة وحدة علمية</h3>
        <div className="add-unit-btn-circle">+</div>
      </div>
    </div>
  );
};

export default Step4;