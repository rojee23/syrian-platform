import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "./AddCourse.css";

const AddCoursePage = () => {
  const [currentSubStep, setCurrentSubStep] = useState(1);
  
  // تحديد المرحلة الرئيسية للـ Progress Bar
  const getMainStep = () => {
    if (currentSubStep === 1) return 1;
    if (currentSubStep >= 2 && currentSubStep <= 7) return 2;
    return 3;
  };

  const mainStep = getMainStep();

  return (
    <div className="course-container">
      {/* Progress Bar ثابت */}
      <div className="stepper-header">
        <div className="step-line"></div>
        <div className={`step-item ${mainStep >= 1 ? "active" : ""}`}>
          <div className="step-circle">{mainStep > 1 ? "✓" : "1"}</div>
          <span className="step-label">معلومات الكورس</span>
        </div>
        <div className={`step-item ${mainStep >= 2 ? "active" : ""}`}>
          <div className="step-circle">{mainStep > 2 ? "✓" : "2"}</div>
          <span className="step-label">المراحل</span>
        </div>
        <div className={`step-item ${mainStep >= 3 ? "active" : ""}`}>
          <div className="step-circle">3</div>
          <span className="step-label">معاينة الاختبارات</span>
        </div>
      </div>

      <div className="step-card">
        {currentSubStep === 1 && <Step1 onNext={() => setCurrentSubStep(2)} />}
        {currentSubStep === 2 && <Step2 onNext={() => setCurrentSubStep(3)} onPrev={() => setCurrentSubStep(1)} />}
        {currentSubStep === 3 && <Step3 onNext={() => setCurrentSubStep(4)} onPrev={() => setCurrentSubStep(2)} />}
        {/* سيتم إضافة باقي الـ Steps هنا لاحقاً */}
      </div>
    </div>
  );
};

export default AddCoursePage;