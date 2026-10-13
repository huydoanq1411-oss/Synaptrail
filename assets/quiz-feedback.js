/* Presentation only: the existing gradeQuiz still selects, scores and saves progress. */
(() => {
  const quizzes=[...document.querySelectorAll('[data-quiz-feedback]')];
  if(!quizzes.length||typeof window.gradeQuiz!=='function')return;
  const grade=window.gradeQuiz;
  window.gradeQuiz=function(id){
    const result=grade.apply(this,arguments);
    const quiz=quizzes.find(element=>element.dataset.quiz===id);
    if(quiz){quiz.querySelectorAll('.quiz-explanation').forEach(element=>element.hidden=false);quiz.querySelector('.quiz-feedback-status').textContent='Đã hiển thị giải thích cho từng đáp án.';}
    return result;
  };
  quizzes.forEach(quiz=>quiz.querySelectorAll('.quiz-q').forEach(question=>{
    const options=[...question.querySelectorAll('.quiz-opt')];
    options.forEach(option=>{
      option.addEventListener('click',()=>{
        if(option.style.pointerEvents==='none')return;
        options.forEach(item=>item.setAttribute('aria-pressed',String(item===option)));
      });
      option.addEventListener('keydown',event=>{
        if(event.key!=='Enter'&&event.key!==' ')return;
        event.preventDefault();if(option.style.pointerEvents!=='none')option.click();
      });
    });
  }));
})();
