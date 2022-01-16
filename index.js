// Your code here
const dodger=document.getElementById("dodger");
const game=document.getElementById("game");
dodger.style.backgroundColor="#0066dd";

const moveDodger=document.addEventListener('keydown', (event)=>{
        const dodgerLeftNumbers=dodger.style.left.replace("px", "");
        const left=parseInt(dodgerLeftNumbers, 10);
        const dodgerBottomNumbers=dodger.style.bottom.replace("px", "")
        const bottom=parseInt(dodgerBottomNumbers, 10)
        if (event.key==="ArrowLeft" && left>0){
        return dodger.style.left=`${left-10}px`
    } else if (event.key==="ArrowRight" && left<360){
        return dodger.style.left=`${left+10}px`
    } else if (event.key==='ArrowUp' && bottom<380){
        return dodger.style.bottom=`${bottom+10}px`
    } else if (event.key==="ArrowDown" && bottom >0){
        return dodger.style.bottom=`${bottom-10}px`
    }
})







