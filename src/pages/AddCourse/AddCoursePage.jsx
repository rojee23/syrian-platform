import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";

import "./AddCourse.css";

const AddCoursePage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const showStepper = currentStep <= 6;

  const getStepStatus = (groupNumber) => {
    if (groupNumber === 1) {
      if (currentStep > 1) return "completed";
      if (currentStep === 1) return "active";
    }
    if (groupNumber === 2) {
      if (currentStep > 5) return "completed";
      if (currentStep >= 2 && currentStep <= 5) return "active";
    }
    if (groupNumber === 3) {
      if (currentStep > 6) return "completed";
      if (currentStep === 6) return "active";
    }
    return "";
  };

  return (
    <div className="main-layout-container">
      <Navbar />

      <div className="course-page-body">
        {showStepper && (
          <div className="stepper-section">
            <h2 className="main-page-title">اضافة دورة جديدة :</h2>

            <div className="stepper-header-new">
              {/* الخطوة 1: يمين الشاشة */}
              <div className={`step-item-new ${getStepStatus(1)}`}>
                <div className="step-circle-new">
                  {getStepStatus(1) === "completed" ? "✓" : "1"}
                </div>
                <div className="step-text-content">
                  <span className="step-number-label">خطوة 1</span>
                  <span className="step-main-label">معلومات الكورس</span>
                </div>
              </div>

              <div className={`step-line-new ${currentStep >= 2 ? "filled" : ""}`}></div>

              {/* الخطوة 2: المنتصف */}
              <div className={`step-item-new ${getStepStatus(2)}`}>
                <div className="step-circle-new">
                  {getStepStatus(2) === "completed" ? "✓" : "2"}
                </div>
                <div className="step-text-content">
                  <span className="step-number-label">خطوة 2</span>
                  <span className="step-main-label">المراحل</span>
                </div>
              </div>

              <div className={`step-line-new ${currentStep > 5 ? "filled" : ""}`}></div>

              {/* الخطوة 3: يسار الشاشة */}
              <div className={`step-item-new ${getStepStatus(3)}`}>
                <div className="step-circle-new">
                  {getStepStatus(3) === "completed" ? "✓" : "3"}
                </div>
                <div className="step-text-content">
                  <span className="step-number-label">خطوة 3</span>
                  <span className="step-main-label">معاينة الاختبارات</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={showStepper ? "step-card-container" : "status-content"}>
          {currentStep === 1 && <Step1 onNext={() => setCurrentStep(2)} />}
          {currentStep === 2 && <Step2 onNext={() => setCurrentStep(3)} onPrev={() => setCurrentStep(1)} />}
          {currentStep === 3 && <Step3 onNext={() => setCurrentStep(4)} onPrev={() => setCurrentStep(2)} />}
          {currentStep === 4 && <Step4 onNext={() => setCurrentStep(5)} onPrev={() => setCurrentStep(3)} />}
          {currentStep === 5 && <Step5 onNext={() => setCurrentStep(6)} onPrev={() => setCurrentStep(4)} />}
          {currentStep === 6 && <Step6 onFinish={() => setCurrentStep(7)} onPrev={() => setCurrentStep(5)} />}
          
          {currentStep === 7 && <Step7 onComplete={() => setCurrentStep(8)} />}
          {currentStep === 8 && <Step8 />}
        </div>

        {showStepper && (
          <div className="fixed-footer-action">
            <div className="footer-buttons-wrapper">
              <button
                className="btn-next-main"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                {currentStep === 6 ? "اضافة الدورة ونشرها" : "التالي"}
              </button>

              {currentStep > 1 && (
                <button
                  className="btn-prev-main"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  السابق
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCoursePage;