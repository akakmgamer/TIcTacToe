var gameisrunning=true;
var turn="X";
var xOry;
 var xOry=document.querySelector("h2");
//change Turn
function changeTurn(){
    turn=="X"?turn="O":turn="X";
}

//event Listeners
var boxes=document.getElementsByClassName("box");

Array.from(boxes).forEach(element=>{
    element.addEventListener("click",function(){
        if(gameisrunning){
    var boxestext=element.querySelector(".boxtext");

    
    //changing turn
    if(boxestext.innerHTML==""){
    boxestext.innerHTML=turn;
    changeTurn();
     xOry.innerHTML="Turn Of "+turn;
    

    //checking win
    checkWin();

    }
}});
})


//logic
function checkWin(){
    var boxestext=document.getElementsByClassName("boxtext");
    var win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    win.forEach(p=>{
        if(boxestext[p[0]].innerHTML==boxestext[p[1]].innerHTML && boxestext[p[1]].innerHTML==boxestext[p[2]].innerHTML && boxestext[p[2]].innerHTML!=""){
            xOry.innerHTML=boxestext[p[0]].innerHTML+" Wonn";
            gameisrunning=false;
        }
    })

}


document.querySelector("button").addEventListener("click",
    function(){
        var boxestext=document.getElementsByClassName("boxtext");
        Array.from(boxestext).forEach(empty=>{
        empty.innerHTML="";
        turn="X";
         xOry.innerHTML="Turn Of "+turn;
        })
        gameisrunning=true;
    }
)