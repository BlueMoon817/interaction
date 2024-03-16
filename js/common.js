    
    (function(){
      'use strict';
      window.objectInteraction = window.objectInteraction || {};
      window.objectInteraction.common = (function(){
        return {
          breakpoint: {
            TABLET: 1279,
            MOBILE: 767
          },
          util: {
            debounce :function(callback, wait){
              let timeout;
              return function(...args){
                const context = this; 
                clearTimeout(timeout);
                // console.log(args)  => Event 객체.
                timeout = setTimeout(() => callback.apply(context, args), wait);
              }
            },
            scrollLock : function (_boolean) {
              let bodyElement = document.querySelector('body'),
                  result;
              if(_boolean) {
                result = bodyElement.classList.add('is-scroll-lock');
              } else {
                result = bodyElement.classList.remove('is-scroll-lock');
              }
              return result;
            }
          },
        }
      })();      
    })();
