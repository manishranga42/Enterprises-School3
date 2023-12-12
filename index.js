let gameseq = [];

let userseq = [];

let started = false;

let level = 0;

let h2 = document.querySelector('h2')

let btns = ['pink','green','orange','blue']

document.addEventListener('keypress' , function(){
if(started==false){
    console.log('game started');
    started = true;

    levelUp();

}

});
 

function btnFlash(btn){
    btn.classList.add('gameFlash')
    setTimeout(function(){
        btn.classList.remove('gameFlash')
    }, 250);

} ;


// function userFlash(btn){
//     btn.classList.add('userflash')
//     setTimeout(function(){
//         btn.classList.remove('userflash')
//     }, 250);

// };


function levelUp(){
    userseq = []; 
    level++;
    h2.innerText = `level ${level}`;
let num = Math.floor(Math.random()*3);
let randcolor = btns[num];
let randbtn = document.querySelector(`.${randcolor}`)
gameseq.push(randcolor);
 
btnFlash(randbtn);

}

function checkAns(index){
 

   if(userseq[index]===gameseq[index]){
    if(userseq.length == gameseq.length){
       setTimeout(levelUp ,1000)
    }
   }else{
    h2.innerHTML=`game over !! Your score was <b>${level}</b> Presh any key to start `;
    document.querySelector('body').style.backgroundColor = "red"

    setTimeout(function(){
        document.querySelector('body').style.backgroundColor = "white"
    },150)
    reset();
   }
}

function btnPress(){
    
    
    let btn = this;

    btnFlash(btn);

    usercolor = btn.getAttribute("id");
    // console.log(usercolor);
    userseq.push(usercolor);


    checkAns(userseq.length-1); 
}


let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener('click' , btnPress);
} 

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;


}