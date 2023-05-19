
let wrap=document.querySelector('.wrap');
let ani=document.querySelector('.ani');
let sec=document.querySelector('#sec1');
let btn=document.querySelector('.btn')
let count=1;
let val=1;
let stay=false;
let rotate = function(){
    let eff=setInterval(function(){
        if(count===41){
            count=1;
            ani.setAttribute('src',`../img/40.png`);
            let op=setInterval(function(){
                if(val==='0'){
                    stay=false;
                    val=1;
                    clearInterval(op)
                }else{
                    ani.style.opacity=`${val-0.1}`        
                    val=ani.style.opacity;
                }
            },1800/30);
            clearInterval(eff);
        }else{
            ani.style.opacity='1'
            ani.setAttribute('src',`../img/${count}.png`);
            count+=1;
        }
    },2000/50);
}

btn.addEventListener('click', function(){
    if(!stay){
        stay=true;
        let start=setTimeout(rotate,100);
    }
}) ;
