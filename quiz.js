
//FUNCTION TO GET ARRAY OF ELEMENTS AND CHECK FOR USER ANSWER ANSWER
function getRadioValue(radioArray){
    for( let i = 0; i<radioArray.length; i++){
        if (radioArray[i].checked){
            return radioArray[i].value;
        }
    }   
    return "";
}
//RUNS WHEN PAGE IS LOADED
window.onload = function(){
    document.getElementById("questionForm").style.display = "none";
    document.getElementById("submitBtn").style.display = "none";
    document.getElementById("repeat").style.display = "none";
    document.getElementById("repeat0").style.display = "none";
}


//INITIALIZING 
var summary= [];
var total;
var add = 0;
var sub = 0;
var count=60;

//CHECKING IS USER ANSWERS ARE CORRECT/INCORRECT AND ADDING UP POINTS
function result(){
    if(getRadioValue(question.one)=="correct"){
        add += 2;
        summary[0]="Correct";

    }
    else{
        sub -= 1;
        summary[0] = "Incorrect"
    }
    if(getRadioValue(question.two)=="correct"){
        add += 2;
        summary[1]="Correct";
    }
    else{
        sub-= 1;
        summary[1] = "Incorrect"
    }
    if(getRadioValue(question.three)=="correct"){
        add += 2;
        summary[2]="Correct";
    }
    else{
        sub -= 1;
        summary[2] = "Incorrect"
    }
    if(getRadioValue(question.four)=="correct"){
        add += 2;
        summary[3]="Correct";
    }
    else{
        sub-= 1;
        summary[3] = "Incorrect"
    }
    if(getRadioValue(question.five)=="correct"){
        add += 2;
        summary[4]="Correct";
    }
    else{
        sub -= 1;
        summary[4] = "Incorrect"
    }
    if(getRadioValue(question.six)=="correct"){
        add += 2;
        summary[5]="Correct";
    }
    else{
        sub-= 1;
        summary[5] = "Incorrect"
    }
    if(getRadioValue(question.seven)=="correct"){
        add += 2;
        summary[6]="Correct";
    }
    else{
        sub -= 1;
        summary[6] = "Incorrect"
    }
    if(getRadioValue(question.eight)=="correct"){
        add += 2;
        summary[7]="Correct";
    }
    else{
        sub-= 1;
        summary[7] = "Incorrect"
    }
    if(getRadioValue(question.nine)=="correct"){
        add += 2;
        summary[8]="Correct";
    }
    else{
        sub -= 1;
        summary[8] = "Incorrect"
    }
    if(getRadioValue(question.ten)=="correct"){
        add += 2;
        summary[9]="Correct";
    }
    else{
        sub-= 1;
        summary[9] = "Incorrect"
    }
    total = add + sub;
    if(total<0){
        total=0
    }
    //DISPLAYING THE TOTAL POINTS OBTAINED BY USER AND TIME TAKEN
    score.innerHTML = "You scored  " + total + " points.";
    time.innerHTML = (60-count) + " second(s) taken to complete"
    //HIDES ALL QUESTIONS AND ANSWERS AND SUBMIT BUTTON
    document.getElementById("questionForm").style.display = "none";
    document.getElementById("submitBtn").style.display = "none";
    //CHANGES BACKGROUND COLOR ACCORDING TO USER SCORE
    if(total<7){
        document.getElementById("bodyid").classList.add("bad")
        document.getElementById("separator").classList.add("bad")             
    }
    if (total>=7 && total<15){
        document.getElementById("bodyid").classList.add("good")
        document.getElementById("separator").classList.add("good")    
    }
    else{
        document.getElementById("bodyid").classList.add("excellent")
        document.getElementById("separator").classList.add("excellent")    
    }
}
//FUNCTION TO HIDE WELCOME MESSAGE AND SHOW ALL QUESTIONS AND SUBMIT BUTTON
function begin(){
    document.getElementById("welcome").style.display = "none";
    document.getElementById("questionForm").style.display = "block";
    document.getElementById("submitBtn").style.display = "block";
}

//FUNCTION TO START TIMER AND AUTO SUBMIT QUESTION FORM AT THE END OF TIMER
function countdown(){
    var counter=setInterval(timer, 1000);
    function timer(){
        count=count-1;
        if (count <= 0){
    
            clearInterval(counter);
            result();
            correctAnswers();
            return;
        }
        document.getElementById("timer").innerHTML=count + " secs";
    }
}
// DISPLAYS IF USERS ANSWERS ARE CORRECT OR INCORRECT
function correctAnswers(){
    answers1.innerHTML ="Question 1 : " + summary[0];
    answers2.innerHTML ="Question 2 : " + summary[1];
    answers3.innerHTML ="Question 3 : " + summary[2];
    answers4.innerHTML ="Question 4 : " + summary[3];
    answers5.innerHTML ="Question 5 : " + summary[4];
    answers6.innerHTML ="Question 6 : " + summary[5];
    answers7.innerHTML ="Question 7 : " + summary[6];
    answers8.innerHTML ="Question 8 : " + summary[7];
    answers9.innerHTML ="Question 9 : " + summary[8];
    answers10.innerHTML ="Question 10 : " + summary[9];
    //DISPLAYS THE RESTART BUTTON AND TEXT
    document.getElementById("repeat").style.display = "block";
    document.getElementById("repeat0").style.display = "block";
}
//FUNCTION TO RELOAD PAGE
function repeat() {
    location.reload();   
}

//FUNTION TO GOT BACK TO TOP OF PAGE
function backtotop(){
    window.scrollTo({ top: 0 });
}
   