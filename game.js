

//selects each item : that is "rock","paper","scissor".
const allEmojis = document.querySelectorAll(".emoji");

 //let set the userscore and compscore : 
 let userScore=1;
 let compScore=1;

 let userScoreBoard = document.querySelector(".userScore");
 let compScoreBoard = document.querySelector(".compScore");


// console.log(allEmojis);


//CODE FOR USER-CHOICE :
//select each item  and perform a specific task on it...!
allEmojis.forEach((allEmojis) => {
    //perform task on each item : "make the item clickable and know what item is clicked".
    allEmojis.onclick = () => {
        let user_choice = allEmojis.getAttribute("data-choice");  //access each item class to know what emoji/item is selected.
        // console.log("clicked on = ", user_choice);

        //displaying this in the userchoice big emooji...!
        if (user_choice === "rock") {
            let userChoice_emoji = document.querySelector(".userChoice_emoji");
            console.log(userChoice_emoji.innerText = "✊");
        }
        else if (user_choice === "paper") {
            let userChoice_emoji = document.querySelector(".userChoice_emoji");
                console.log(userChoice_emoji.innerText = "✋");
        }
        else {
            let userChoice_emoji = document.querySelector(".userChoice_emoji");
                console.log(userChoice_emoji.innerText = "✌️");
        }

        //calling play game to generate actual output after choosing the choices(rock,paper,sciss) by user...!
        playGame(user_choice);
    }
});



//CODE FOR COMPUTER-CHOICE : 
let compChoice = () => {
    let comp_choices = ["rock", "paper", "scissor"];
    let random_choice = Math.floor(Math.random() * 3);  
     //selects the random value by accessing each index value...!
    // console.log("random choice = ", comp_choices[random_choice]);
    let random_compChoices =  comp_choices[random_choice];

    if(random_compChoices==="rock")
    {
        let compChoice_emojis = document.querySelector(".compChoice_emoji");
        console.log(compChoice_emojis.innerText="✊")
    }
    else if(random_compChoices=="paper")
    {
        let compChoice_emojis = document.querySelector(".compChoice_emoji");
        console.log(compChoice_emojis.innerText="✋")   
    }
    else
    {
        let compChoice_emojis = document.querySelector(".compChoice_emoji");
        console.log(compChoice_emojis.innerText="✌️"); 
    }
        return random_compChoices;
}



//CODE FOR actual PlayingGame  with outputs : user & comp ready to play the game...!
let playGame = (user_choice) => {
    //1. user choice given...
    
    console.log("user-choice = ", user_choice);


    //2. comp choice given...
    let comp_choice = compChoice();
    console.log("computer-choice = ", comp_choice);


    //3. play game :
    let gameResult = document.querySelector(".result");

    if (user_choice === comp_choice) {
        console.log("its draw!");
        gameResult.innerText = "Oops! Its draw!"+"😑";
        gameResult.style.backgroundColor = "blue";
    }
    else if (user_choice === "rock" && comp_choice === "scissor" ||
        user_choice === "paper" && comp_choice === "rock" ||
        user_choice === "scissor" && comp_choice === "paper") {
        console.log("user won!");
        gameResult.innerText = "Congratulations You Won!"+"🎊";
        gameResult.style.backgroundColor = "green";

        //if user won then increase the score...
        // console.log("userScore = ", userScore++);
        console.log(userScoreBoard.innerText = userScore++);
    }

    else {
        console.log("computer won!");
        gameResult.innerText = `Computer Won!`;
        gameResult.style.backgroundColor = "red";

        //if comp won then increase the score...
        console.log(compScoreBoard.innerText = compScore++);
    }

    console.log("\n\n");
}




