/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score,roundScore,activeplayer,dice;

score=[0,0];
roundScore=0;
activeplayer=0;


document.querySelector("#score-0").textContent=0;
document.querySelector("#score-1").textContent=0;

document.querySelector("#current-0").textContent=0;
document.querySelector("#current-1").textContent=0;

document.querySelector(".dice").style.display='none';

document.querySelector(".btn-roll").addEventListener("click" , function(){
    
    dice=Math.ceil(Math.random() * 6);
    
    document.querySelector(".dice").src="dice-"+dice+".png";
    document.querySelector(".dice").style.display='block';
        
//    document.querySelector("#current-" + activeplayer).textContent=dice;
    
    if( dice > 1)
    {
        roundScore+=dice;
        
        document.querySelector("#current-" + activeplayer).textContent=roundScore;
    }
    else
    {
        roundScore=0;
        document.querySelector(".dice").style.display='none';
        
        document.querySelector("#current-"+activeplayer).textContent=0;
        
        activeplayer === 0 ? activeplayer=1 : activeplayer =0;
        
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        
        
        
        
    }
    
});



document.querySelector(".btn-hold").addEventListener("click" , function(){
    
    score[activeplayer]+=roundScore;
    
    roundScore=0;
    
    document.querySelector("#score-"+activeplayer).textContent=score[activeplayer];
    
    if(score[activeplayer] >= 100 )
    {
        document.querySelector("#name-"+activeplayer).textContent="WINNER!";
        
        document.querySelector("#current-"+activeplayer).textContent=0;   
        
        document.querySelector(".player-"+activeplayer+"-panel").classList.add("winner");
        document.querySelector(".player-"+activeplayer+"-panel").classList.remove("active");
        
        
        document.querySelector(".dice").style.display='none';
        document.querySelector(".btn-hold").style.display="none";
        document.querySelector(".btn-roll").style.display="none";
    }
    else
    {
        
        document.querySelector("#current-"+activeplayer).textContent=0;        
    
        document.querySelector(".dice").style.display='none';

        activeplayer === 0 ? activeplayer=1 : activeplayer =0;

        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        
    }
        
    
});


document.querySelector(".btn-new").addEventListener("click" , function(){
    
    document.querySelector("#name-"+activeplayer).textContent="Player "+(activeplayer+1);
    document.querySelector(".player-"+activeplayer+"-panel").classList.remove("winner");
    
    score=[0,0];
    roundScore=0;
    activeplayer=0;

    document.querySelector("#score-0").textContent=0;
    document.querySelector("#score-1").textContent=0;

    document.querySelector("#current-0").textContent=0;
    document.querySelector("#current-1").textContent=0;
    
    //document.querySelector(".player-0-panel").classList.remove("winner");
    //document.querySelector(".player-1-panel").classList.remove("winner");
    
    document.querySelector(".player-0-panel").classList.add("active");
    
    document.querySelector(".btn-hold").style.display="block";
    document.querySelector(".btn-roll").style.display="block";
    
});






