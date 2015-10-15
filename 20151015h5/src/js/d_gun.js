function ZScroll(obj,time){

  var oMarquee = document.getElementById(obj);
  var iLineHeight = 28;
  var iLineCount = 6;
  var iScrollAmount = 1;

  function run() {
  oMarquee.scrollTop += iScrollAmount;
  if ( oMarquee.scrollTop == iLineCount * iLineHeight )
  oMarquee.scrollTop = 0;
  if ( oMarquee.scrollTop % iLineHeight == 0 ) {
    setTimeout( function(){
      run()
    }, time );
    } else {
    setTimeout( function(){
      run()
    }, 50 );
    }
  }
  oMarquee.innerHTML += oMarquee.innerHTML;
  setTimeout( function(){
    run()
  }, time );

}
