import React from "react";
import "./Step1.css";

const Step1 = () => {
  return (
    <div className="step-content-inner">
      <div className="form-group">
        <label className="input-label">اسم الدورة</label>
        <span className="input-hint">من فضلك يجب أن يكون الاسم معبراً ولا يتجاوز 30 حرف .</span>
        <input 
          type="text" 
          className="custom-input" 
          placeholder="دورة لغة انجليزية" 
        />
      </div>

      <div className="form-group">
        <label className="input-label">وصف الدورة</label>
        <textarea 
          className="custom-textarea" 
          placeholder="وصف الدورة كامل ومعبر"
          rows="5"
        ></textarea>
      </div>

      <div className="form-group">
        <label className="input-label">صورة غلاف الدورة</label>
        <span className="input-hint">من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم .</span>
        <label htmlFor="course-image-upload" className="upload-box-label">
          <div className="upload-box">
            <div className="upload-icon">+</div>
          </div>
        </label>
        <input type="file" id="course-image-upload" style={{ display: 'none' }} />
      </div>

      <div className="form-group">
        <label className="input-label">تصنيف الكورس</label>
        <div className="select-wrapper">
          <select className="custom-select">
            <option>UI / UX Designer</option>
            <option>Software Engineering</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Step1;