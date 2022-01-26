const questions = [
    {
        que: "You're 3rd place right now in a race. What place are you in when you pass the person in 2nd place",
        A: "1st",
        B: "2nd",
        C: "3rd",
        D: "None of the above",
        ans: "B"
    },
    {
       que: "How many months have 28 days?",
       A: "2",
       B: "1",
       C: "All of them",
       D: "Depends if there's a leap year or not",
       ans: "D"
    },
    {
        que: "There are two clocks of different colors: The red clock is broken and doesn't run at all, but the blue clock loses one second every 24 hours. Which clock is more accurate?", 
        A: "The red clock",
        B: "The blue clock",
        C: "Neither",
        D: "Both", 
        ans: "B"
    },
];
const que = document.getElementById("id_que");
const op_a = document.getElementById("op_a");
const op_b = document.getElementById("op_b");
const op_c = document.getElementById("op_c");
const op_d = document.getElementById("op_d");


let currQue = 0;
quiz();
function quiz(){
    const question = questions[currQue]; 
    que.innerText = question.que;
    op_a.innerText = question.A;
    op_b.innerText = question.B;
    op_c.innerText = question.C;
    op_d.innerText = question.D;
    currQue++;
}