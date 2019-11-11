//获取元素
var wrap = document.querySelector('.wrap-nav');


var el = document.createElement('div');
wrap.appendChild(el);
el.innerHTML =
    `  
<div class="wrap-nav-one">
<span class="wrap-nav-1">
    <span class="nav1">订单编号:</span>
    <span class="wrap-nav2 nav1 ddnum"></span> 
</span>
<span class="wrap-nav-2">
    <span class="wrap-nav1">支付方式 :</span>
    <span class="wrap-nav2 pay"></span>
</span>
<span class="wrap-nav-3">
    <span class="wrap-nav1">订单状态:</span>
 <span class="wrap-nav2 nav2 ddstate"></span>
</span>
</div>
<div class="wrap-nav-tow">
<span class="wrap-nav-4">
    <span class="wrap-nav1">消费时间:</span>
 <span class="wrap-nav2 nav3 time"></span>
</span>
<span class="wrap-nav-5">
    <span class="wrap-nav1">订单金额:</span>
    <span class="wrap-nav2 nav4 djdate"></span>
</span>
<span class="wrap-nav-6">
        <span class="wrap-nav1">订单操作:</span>
         <span class="wrap-nav4 nav6 ddstate1"></span>
</span>
</div>
<hr>
<div class="content">
<div class="cont-1" >
    <img class="ddimg">
</div>
<div class="cont-1-2">
    <div class="cont-2">
       <span class="wrap-nav-7">
            <span class="cont-nav1">商品名称:</span>
      <span class="cont-nav2 name"></span>
       </span>
        <span class="wrap-nav-8">
                <span class="cont-nav1">单价：</span>
                <span class="cont-nav2 spdate"></span>
        </span>
       <span class="wrap-nav-9">
            <span class="cont-nav1">商品数量：</span>
           <span class="cont-nav2 spnum"></span>
       </span>
    </div>
    <div class="cont-2-2 ">
        <span class="wrap-nav-10">
                <span class="cont-nav1">物流状态:</span>
                <span class="cont-nav2 wlstate"></span> 
        </span>
       <span  class="wrap-nav-11">
            <span class="cont-nav1">物流单号：</span>
             <span class="cont-nav2 wlnum"></span>
       </span>
       <span class="wrap-nav-12">
            <span class="cont-nav1">配送操作：</span>
      <span class="cont-nav3">快递</span>
       </span>
    </div>
</div>
`;

var ddNum = document.querySelector('.ddnum');
var pAy = document.querySelector('.pay');
var ddState = document.querySelector('.ddstate');
var ddState1 = document.querySelector('.ddstate1')
var tIme = document.querySelector('.time');
var djDate = document.querySelector('.djdate');
var nAme = document.querySelector('.name');
var spDate = document.querySelector('.spdate');
var wlState = document.querySelector('.wlstate');
var spNum = document.querySelector('.spnum');
var wlNum = document.querySelector('.wlnum');
var ddImg = document.querySelector('.ddimg');

getList(7,'indent',function(res){
    var date = res;
    var n1 = date[0].ddnum;
    var n2 = date[0].pay;
    var n3 = date[0].time;
    var n4 = date[0].djdate;
    var n5 = date[0].name;
    var n6 = date[0].spdate;
    var n7 = date[0].wlstate;
    var n8 = date[0].spnum;
    var n9 = date[0].wlnum;
    var n10 = date[0].img;
    var n11 = date[0].ddstate;

    ddNum.innerHTML = n1;
    pAy.innerHTML = n2;
    tIme.innerHTML = n3;
    djDate.innerHTML = n4;
    nAme.innerHTML = n5;
    spDate.innerHTML = n6;
    wlState.innerHTML = n7;
    spNum.innerHTML = n8;
    wlNum.innerHTML = n9;
    ddImg.src = n10;
    ddState.innerHTML = n11;
    ddState1.innerHTML = n11;
})