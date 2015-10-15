$(function(){
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
  	new WOW().init();

  };
  
  function gundongInfo(){
    var t=getid("z-list-hide"),
    	t1=getid("new-hb-u1"),
    	t2=getid("#new-hb-u2"),
    	timer;
      t2.innerHTML=t1.innerHTML;
    function mar(){
      if(t2.offsetTop<=t.scrollTop){
        t.scrollTop-=t1.offsetHeight;
      }else{
          t.scrollTop++;
      }
    }
    timer=setInterval(mar,30);

    function getid(id){
      return document.getElementById(id);
    }
  }

});
