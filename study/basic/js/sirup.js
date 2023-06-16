let x=0,y=0,targetX=0,targetY=0,speed=0.1;
const imgArr=document.querySelectorAll('.contWrap img');
const shadow=imgArr[0];
const date=imgArr[1];
const human=imgArr[2];
const textImg=imgArr[3];

window.addEventListener('mousemove',function(e){
    x= e.pageX - window.innerWidth / 2;
  
});
const loop=()=>{
    targetX += (x - targetX) * speed
    shadow.style.transform=`translateX(${targetX / 35}px)`
    human.style.transform=`translateX(${-targetX / 20}px)`
    date.style.transform=`translateX(${targetX / 20}px)`
    textImg.style.transform=`translateX(${-targetX / 10}px)`
    window.requestAnimationFrame(loop);
}
loop();