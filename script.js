console.log("TicTacToe");
let gameover=false;
let turn="X";
const changeTurn=()=>{
    return turn==="X"?"0":"X";
}
const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxtext")
    let wins=[
        [0,1,2],[3,4,5],[6,7,8], //rows
        [0,3,6],[1,4,7],[2,5,8], //coloumns
        [0,4,8],[2,4,6] //diagonals 
    ]
    wins.forEach(e=>{
            if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && boxtext[e[0]].innerText!=="")
            { 
                document.querySelector(".info").innerText=changeTurn()+" Won";
                gameover=true;
            }
   })
}

 
//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===""){
            boxtext.innerText= turn;
        turn= changeTurn();
        checkWin();
        if(!gameover)
            document.getElementsByClassName("info")[0].innerText="Turn for "+turn;  
        }
    })
}) 


Reset.addEventListener("click",()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    });
    turn="X";
    if(!gameover)
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;  
  
})