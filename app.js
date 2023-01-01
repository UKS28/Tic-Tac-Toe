const music=new Audio('music.mp3');
const gameOverMusic=new Audio('gameover.mp3');
const turnMusic=new Audio('ting.mp3');

let turn='X';
let isGameOver=0;


// to find the next turn
function getTurn(){
    return turn==='X'?'0':'X';
}


// TO CHECK WIN
// finding the winning conndition
function checkWin(){
  
    const boxTexts=document.querySelectorAll('.box-text');
    const win_chances=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win_chances.forEach((chance)=>{
        if(boxTexts[chance[0]].innerText===boxTexts[chance[1]].innerText
            && boxTexts[chance[1]].innerText===boxTexts[chance[2]].innerText
            && boxTexts[chance[0]].innerText!=='' 
            && boxTexts[chance[1]].innerText!=='' 
            && boxTexts[chance[2]].innerText!==''){
                isGameOver=1;
                document.querySelector('.info').innerText=`YAY! ${boxTexts[chance[0]].innerText}  WINS`;
                document.querySelector('img').style.width="200px";
                
            }

    })

}


// CONCEPT:
// 1.GET EACH SPAN OF EACH BOXES 
// 2.IF SPAN IS NOT FILLED THEN FILL IT WITH turn
// 3.CHECK FOR WIN
// 4.CHANGE THE turn
// 5.PRINT THE TURN IF GAME NOT OVER



// TRAVESING EACH BOXES AND ADDING EVENT LISTNER 
const boxes=document.querySelectorAll('.box');

Array.from(boxes).forEach((box)=>{
    // SPAN FOR EACH BOX
    let ele=box.querySelector('span');
    
    box.addEventListener('click',()=>{
        // IF SPAN IS EMPTY THE FILL WITH TURN
        if(ele.innerText ==='')
        ele.innerText=turn;

        checkWin();
        turn=getTurn();
        turnMusic.play();
        if(isGameOver===0){
          document.querySelector('.info').innerText=`Turn for ${turn}`;
        }

    })
})



// RESETING THE GAME
//   1.clear each span
//   2.clear the info
//   3.game over=0
//   4.image width=0


const reset=document.querySelector('#reset');
reset.addEventListener('click',()=>{
    Array.from(boxes).forEach((box)=>{
        let ele=box.querySelector('span');
        ele.innerText="";
    })

    turn='X';
    isGameOver=0;
    document.querySelector('.info').innerText=`Turn for ${turn}`;
    document.querySelector('img').style.width="0px";
})

