const initLikes = 100;
const initDisLikes = 20;

let upCount = initLikes
let downCount = initDisLikes

let  likesBtn = document.getElementById("likeBtn");
let  dislikesBtn = document.getElementById("dislikeBtn");
likesBtn.innerText = "👍" + initLikes;
dislikesBtn.innerText = "👎" + initDisLikes;


window.onload = function(){
    if(document.cookie && document.cookie.indexOf("voted")>-1){
        disableButtons();
    
    }
}

function doLike(){
    upCount++;
    likesBtn,innerText = "👍"+ upCount
    disableButtons();
    setcookie();
}

function doDisLike(){
    downCount++;
    dislikesBtn.innerText = "👎" + downCount;
    disableButtons();
    setcookie();
}

function disableButtons(){
    dislikesBtn.disabled = true;
    likesBtn.disabled = true;
}

function setcookie(){
        document.cookie = "voted=true; SameSite=Strict; Max-Age="+ 60;

}