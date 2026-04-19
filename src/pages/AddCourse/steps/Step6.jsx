import React from 'react';

export default function Step6({ onPrev, onFinish }) {
  const quizzes = [{ id: 1, name: 'الاختبار الأول', count: 10 }, { id: 2, name: 'الاختبار الثاني', count: 10 }];
  return (
    <div className="step-wrapper">
      <div className="certificate-section">
        <h3 style={{ textAlign: 'right', fontSize: '16px' }}>رفع شهادة الكورس</h3>
        <div className="upload-box" style={{ background: '#f0fbff', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' }}>
          <button style={{ background: '#67cfe2', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px' }}>+</button>
        </div>
      </div>
      <div className="quizzes-preview" style={{ marginTop: '30px' }}>
        <h3 style={{ textAlign: 'center' }}>معاينة الاختبارات</h3>
        {quizzes.map(q => (
          <div key={q.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', border: '1px solid #eee', borderRadius: '10px', marginBottom: '10px', alignItems: 'center' }}>
            <button className="btn-prev" style={{padding: '5px 15px'}}>تعديل</button>
            <div style={{textAlign: 'center'}}><strong>{q.count}</strong><br/><small>عدد الأسئلة</small></div>
            <span>{q.name}</span>
          </div>
        ))}
      </div>
      <div className="button-footer">
        <button className="btn-prev" onClick={onPrev}>السابق</button>
        <button className="btn-next" onClick={onFinish} style={{minWidth: '200px'}}>إضافة الدورة ونشرها</button>
      </div>
    </div>
  );
}