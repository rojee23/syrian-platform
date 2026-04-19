import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import "./AddCourse.css";

const AddCoursePage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // منطق إخفاء الـ Stepper في آخر مرحلتين لمطابقة الصور
  const showStepper = currentStep <= 6;

  return (
    <div className="course-container">
      {showStepper && (
        <>
          <h2 className="main-page-title">اضافة دورة جديدة :</h2>
          <div className="stepper-header">
            <div className="step-line"></div>
            <div className={`step-item ${currentStep >= 6 ? "completed" : currentStep >= 5 ? "active" : ""}`}>
              <div className="step-circle">{currentStep >= 6 ? "✓" : "3"}</div>
              <span className="step-label">الشهادة</span>
            </div>
            <div className={`step-item ${currentStep >= 2 && currentStep < 6 ? "active" : currentStep > 2 ? "completed" : ""}`}>
              <div className="step-circle">{(currentStep > 5) ? "✓" : "2"}</div>
              <span className="step-label">المراحل</span>
            </div>
            <div className={`step-item ${currentStep >= 1 ? "completed" : ""}`}>
              <div className="step-circle">✓</div>
              <span className="step-label">معلومات الكورس</span>
            </div>
          </div>
        </>
      )}

      <div className={showStepper ? "step-card" : ""}>
        {currentStep === 1 && <Step1 onNext={() => setCurrentStep(2)} />}
        {currentStep === 2 && <Step2 onNext={() => setCurrentStep(3)} onPrev={() => setCurrentStep(1)} />}
        {currentStep === 3 && <Step3 onNext={() => setCurrentStep(4)} onPrev={() => setCurrentStep(2)} />}
        {currentStep === 4 && <Step4 onNext={() => setCurrentStep(5)} onPrev={() => setCurrentStep(3)} />}
        {currentStep === 5 && <Step5 onNext={() => setCurrentStep(6)} onPrev={() => setCurrentStep(4)} />}
        {currentStep === 6 && <Step6 onFinish={() => setCurrentStep(7)} onPrev={() => setCurrentStep(5)} />}
        
        {/* المرحلة 7 و 8 تظهر بدون كارد خارجي كما في الصور */}
        {currentStep === 7 && <Step7 onComplete={() => setCurrentStep(8)} />}
        {currentStep === 8 && <Step8 />}
      </div>

      {/* أزرار التنقل الرئيسية تظهر فقط في الخطوات الأولى */}
      {showStepper && currentStep < 6 && (
        <div className="fixed-button-footer">
          <button className="btn-next" onClick={() => setCurrentStep(currentStep + 1)}>التالي</button>
          <button className="btn-prev" onClick={() => setCurrentStep(currentStep - 1)}>السابق</button>
        </div>
      )}
    </div>
  );
};

export default AddCoursePage;