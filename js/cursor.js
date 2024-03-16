(function(){
  'use strict';
  window.objectInteraction = window.objectInteraction || {};  
  var UTIL= window.objectInteraction.common;
  window.objectInteraction.cursor = function(){
    this.cursor.prototype.init();
  }
  window.objectInteraction.cursor.prototype = {
    init: function(){
      this.render();
    },
    render: function(){
      let html = document.querySelector('html');
      let element = document.querySelector('.js-cursor');
      let iframeEl = document.querySelectorAll('iframe');
      let tagButton;
      let tagAnchor;
      this.x=0,
      this.y=0,
      this.windowY;
      this.winScrollY;
      this.currentPosY;
      
      if(window.innerWidth < UTIL.breakpoint.MOBILE){
        element.style.display='none'; 
        return;
      }
      window.addEventListener('mousemove', function(event){
        tagButton = event.target.closest('button');
        tagAnchor = event.target.closest('a');
        this.x=event.pageX;
        this.y=event.pageY;
        this.windowY=window.scrollY;
        element.style.top=`${this.y}px`;
        element.style.left=`${this.x}px`;        
        if(event.pageX < 5 || event.pageY-window.scrollY < 5 || event.pageY>html.offsetHeight-98){return element.style.display='none';}

        if(iframeEl.length>0){
          iframeEl.forEach(iframe => {
            if(event.pageX>=iframe.offsetLeft-10 && event.pageX< iframe.offsetLeft+iframe.clientWidth+10 && event.pageY>=iframe.offsetTop-10 && event.pageY<iframe.offsetTop+iframe.clientHeight){
              return element.style.display='none';
            }
            if(element.style.display==='none' && window.innerWidth > UTIL.breakpoint.MOBILE){
              element.style.display='block';
              return;
            }
          })
        }
        if(tagButton || tagAnchor) {
          element.style.backgroundImage='url(../img/cursor_on.png)';
        }else {
          element.style.backgroundImage='url(../img/cursor_off.png)';
        }        
      });
      window.addEventListener('scroll', function(){
        this.winScrollY=this.scrollY;
        this.currentPosY=this.y+(this.winScrollY-this.windowY);
        element.style.top=this.currentPosY+'px';
      });
      window.addEventListener('resize', UTIL.util.debounce(function(){
        if(window.innerWidth < UTIL.breakpoint.MOBILE){
          element.style.display='none';
        }
      },500));
    },
  }
})();

