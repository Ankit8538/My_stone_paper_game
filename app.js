let userScore=0;
let comScore=0;

let choices=document.querySelectorAll('.choice');
let msg=document.querySelector('#msg');
let usernum=document.querySelector('#user_score');
let comnum=document.querySelector('#com_score');

let gencomChoice=()=>
{
   let option=["rock","paper","scissrs"];
   let ranIdx=Math.floor(Math.random()*2);
   return option[ranIdx];
}

let showinner=(userWin,userChoice,comChoice)=>
{
    if(userWin)
    {
        userScore++;
        usernum.innerText=userScore;
        console.log("you win");
        msg.innerText=`you win!${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        comScore++;
        comnum.innerText=comScore;
        console.log("you loss"); 
        msg.innerText=`you loss !  ${comChoice} beats your${userChoice} `;
        msg.style.backgroundColor="red";
    }
}

let drawGame=()=>
{
    console.log("game was draw");
    msg.innerText="Game was draw!";
    msg.style.backgroundColor="black";
}



let playGame=(userChoice)=>
{
  console.log("user Choice=",userChoice);
  let comChoice=gencomChoice();
  console.log("compchoice=",comChoice);

  if(userChoice===comChoice)
  {
       drawGame();
  }
  else 
  {
    let userWin=true;
    if(userChoice=="rock")
    {
        userWin=comChoice==="paper"?false:true;
        console.log("Ankit",userWin);
    } else if(userChoice==="paper")
    {
             userWin=comChoice==='scissors'?false:true;
             console.log("ankii",userWin);
    }
    else
    {
        userWin=comChoice=="rock"?false:true;
    }
    showinner(userWin,userChoice,comChoice);
}

}


choices.forEach((choice)=>
{
    
    choice.addEventListener("click",()=>
    {
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});



