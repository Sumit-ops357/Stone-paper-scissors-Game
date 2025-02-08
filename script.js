let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".image");

const msg=document.querySelector(".msg-container");

const userScorePara=document.querySelector("#mine");
const compScorePara=document.querySelector("#comp");

const compChoice=(userChoice)=>{

    let options=["rock","paper","scissors"];

    let randomIdx=Math.floor(Math.random()*3);

    let compChoice=options[randomIdx];

    console.log("Computers choice is ",compChoice);

    if(userChoice===compChoice)
    {
        msg.innerText="Draw";
        msg.style.backgroundColor="rgb(14, 14, 92)";
    }
    else{

        let userWin=true;

        if(compChoice==="rock")
        {
            //Two options :- paper , scissors
            userWin=userChoice==="paper" ? true : false;
        }
        else if(compChoice=="paper")
        {
            //Two options:- rock , scissors
            userWin=userChoice==="scissors" ? true : false;
        }
        else
        {
            //Two options:- paper, rock
            userWin=userChoice==="rock" ? true : false;
        }

        if(userWin)
        {
            userScore++;
            userScorePara.innerText=userScore;
            msg.innerText="User Won !!";
            msg.style.backgroundColor="green";
        }
        else
            {
                compScore++;
                compScorePara.innerText=compScore;
                msg.innerText="Computer Won";
                msg.style.backgroundColor="red";
            }
    }
}

choices.forEach( (choice) =>{
    choice.addEventListener("click" , () => {

        const userChoice=choice.getAttribute("id");

        console.log("Users Choice",userChoice);

        compChoice(userChoice);
    })
})