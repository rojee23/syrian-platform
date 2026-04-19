import React from 'react';

const Step6 = ({ onPrev, onFinish }) => {
  // بيانات تجريبية لمحاكاة القائمة الموجودة في الصورة
  const quizzes = [
    { id: 1, name: 'الاختبار الأول', count: 10 },
    { id: 2, name: 'الاختبار الثاني', count: 10 },
    { id: 3, name: 'الاختبار الثالث', count: 10 },
  ];

  return (
    <div className="step-content">
      {/* قسم رفع الشهادة */}
      <div className="certificate-section" style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '15px', color: '#444', textAlign: 'right' }}>رفع شهادة الكورس</h3>
        <div className="upload-placeholder" style={{ 
          background: '#f0fbff', 
          border: '1px solid #e0f2f7', 
          borderRadius: '12px', 
          height: '120px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          cursor: 'pointer'
        }}>
          <div style={{ 
            background: '#67cfe2', 
            color: 'white', 
            width: '35px', 
            height: '35px', 
            borderRadius: '50%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            fontSize: '20px'
          }}>+</div>
        </div>
      </div>

      {/* قسم معاينة الاختبارات */}
      <div className="quizzes-preview">
        <h3 style={{ fontSize: '16px', marginBottom: '20px', color: '#444', textAlign: 'center' }}>معاينة الاختبارات</h3>
        
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="quiz-card" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '15px 20px', 
            background: 'white', 
            border: '1px solid #f0f0f0', 
            borderRadius: '12px', 
            marginBottom: '15px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }}>
            {/* زر التعديل */}
            <button className="btn-edit" style={{ 
              background: '#f5f5f5', 
              border: '1px solid #eee', 
              padding: '8px 20px', 
              borderRadius: '8px', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              تعديل <i className="fas fa-edit"></i>
            </button>

            {/* عدد الأسئلة */}
            <div className="quiz-info" style={{ textAlign: 'center' }}>
              <div style={{ background: '#f5f5f5', padding: '5px 15px', borderRadius: '8px' }}>
                <span style={{ display: 'block', fontWeight: 'bold' }}>{quiz.count}</span>
                <span style={{ fontSize: '11px', color: '#888' }}>عدد الاسئلة</span>
              </div>
            </div>

            {/* اسم الاختبار والأيقونة */}
            <div className="quiz-name" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontWeight: '600' }}>{quiz.name}</span>
              <div style={{ color: '#67cfe2', fontSize: '18px' }}>
                <i className="fas fa-tasks"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* أزرار التحكم السفلية المحدثة حسب الصورة */}
      <div className="button-footer" style={{ marginTop: '50px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <button className="btn-prev" onClick={onPrev} style={{ minWidth: '150px' }}>السابق</button>
        <button className="btn-next" onClick={onFinish} style={{ minWidth: '250px' }}>اضافة الدورة ونشره</button>
      </div>
    </div>
  );
};

export default Step6;