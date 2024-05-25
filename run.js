const correctAnswer=["A","C","C","B","D","A","A","B"]
const form =document.querySelector(".quiz-form")
const result=document.querySelector(".result");
const questions=document.querySelectorAll(".question")
form.addEventListener("submit",event=>{
    event.preventDefault();
    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value];
    userAnswers.forEach((answer,index) => {
        if(correctAnswer[index]===answer){
            score++;
            questions[index].classList.add("correct")
        } 
        else{
            questions[index].classList.add("wrong")
        }       
    });
    console.log(score);
    scrollTo(0,0);
    result.classList.remove( "hide" );
    console.log(result.querySelector("p").textContent=`Your score is ${score} out of 8.`);
})