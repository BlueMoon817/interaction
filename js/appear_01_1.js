
let wrap=document.querySelector('.wrap');
let ani=document.querySelector('.ani');
let sec=document.querySelector('#sec1');
let btn=document.querySelector('.btn')
let count=40;
let val=1;
let stay=false;
let rotate = function(){
    let eff=setInterval(function(){
        if(count===0){
            count=40;
            ani.setAttribute('src',`img/1.png`);
            stay=false;
            clearInterval(eff);
        }else{
            ani.setAttribute('src',`img/${count}.png`);
            count-=1;
        }
    },2000/50);
}

btn.addEventListener('click', function(){
    if(!stay){
        stay=true;
        let start=setTimeout(rotate,100);
    }
}) ;
