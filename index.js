let userScore = 0;
let compScore = 0;

const emoji = document.querySelectorAll(".emojis");
const imgElementUser = document.getElementById("myImage");
const imgElementComp = document.getElementById("compImage");

emoji.forEach((emoji)=>{
    emoji.addEventListener("click",()=>{
        const userChoice = emoji.getAttribute("id");
        console.log("choice was clicked" ,userChoice);
        playGame(userChoice);
})
})
const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);
    displayImg(userChoice,compChoice);
    finalCheck(userChoice,compChoice);
}
const finalCheck = (userChoice,compChoice)=>{
    if(userChoice === compChoice){
        $(".msg").text("It's Tie!!,TRY AGAIN").removeClass("red green");
    }
    else if((userChoice === "rock" && compChoice === "scissors") || (userChoice === "paper" && compChoice === "rock") || (userChoice === "scissors" && compChoice === "paper") ){
        $(".msg").text("You Won!!").addClass("green").removeClass("red");
        $("#user").text(++userScore);
    }
    else{
        $(".msg").text("You Lost!!,TRY AGAIN").addClass("red").removeClass("green");
        $("#comp").text(++compScore);
    }
}
const displayImg = (userChoice,compChoice)=>{
    if(userChoice === "rock"){
        imgElementUser.src= "imagesUser/rock.png";}
    else if(userChoice === "paper") {
        imgElementUser.src= "imagesUser/paper.png";}
    else if (userChoice === "scissors") {
        imgElementUser.src = "imagesUser/scissors.png";}

    if(compChoice === "rock"){
        imgElementComp.src= "imagesComp/rockComp.png";}
    else if(compChoice === "paper") {
        imgElementComp.src= "imagesComp/paperComp.png";}
    else if (compChoice === "scissors") {
        imgElementComp.src = "imagesComp/scissorsComp.jpeg";}
}
const genCompChoice =()=>{
    const options = ["rock","paper","scissors"]
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}