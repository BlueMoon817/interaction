
let img=document.querySelector('img');
let btn=document.querySelector('.btn');
let count=1;
let ani=function(){
    img.setAttribute('src',`../img/${count}.png`);
    if(count>=34){
        let delay=setTimeout(function(){
            img.style.opacity='0';
            count=1;
        },1000);
        let delay2=setTimeout(function(){
            img.setAttribute('src','');
            img.style.opacity='1';
            clearTimeout(delay);
            clearTimeout(delay2);
        },1500);
        return;       
    }else{
        count+=1;
        window.requestAnimationFrame(ani);
    }
}
btn.addEventListener('click',function(){
    window.requestAnimationFrame(ani);
});