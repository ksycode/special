$(function(){
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
  	new WOW().init();

  };


  // var speed=50
  //  demo2.innerHTML=demo1.innerHTML
  //  function Marquee(){
  //  if(demo2.offsetTop-demo.scrollTop<=0)
  //  demo.scrollTop-=demo1.offsetHeight
  //  else{
  //  demo.scrollTop++
  //  }
  //  }
  //  var MyMar=setInterval(Marquee,speed)
  //  demo.onmouseover=function() {clearInterval(MyMar)}
  //  demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
});

function myHBList(data) {
      var _u = $(".hb-show-u");
      var stc = "";
       for (var i = 0; i < data.length; i++) {
           var price = data[i].RedAmount;
           stc += '<li class="wow swing animated" data-wow-iteration="3">' +
                '<h5 class="price">' + price + '</h5>' +
                '<p class="p1">来源：提交运单领红包</p>' +
                '<p class="p2">仅限2015.11.11当天使用</p' +
              '</li>';
        console.log(stc);
        }
    console.log(data.length);
    _u.html(stc);
}
