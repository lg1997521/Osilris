let test = window.location.href;
let gid = test.split('=')[1];
let texttrue,color,size,theme;
let uid = 2;
function jiazai() {
    $.ajax({
        type:'post',
        url:'../controller/shoppingDao.php',
        data: {
            type: 'pc_select',
            gid
        },
        success(res){
            let arr = JSON.parse(res);
            texttrue = arr[0].texttrue;
            color = arr[0].color;
            size = arr[0].size;
            theme = arr[0].theme;
            let el = $(`
             <div class="item">
             <span>< 返回</span>
             <div class="tit">
                   <span>主页 /</span>
                    <span>首饰 /</span>
                    <span>耳饰 /</span>
                   <span>${arr[0].goodname},${arr[0].color},${arr[0].texttrue}</span>
            </div>
        </div>
              <div class="detail">
        <div class="left">
            <div class="img">
                <img src="${arr[0].img}" alt="">
            </div>
            <div class="detail1">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                   
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>

        </div>
        <div class="right">
            <div class="style">${arr[0].theme}</div>
            <div class="name">${arr[0].goodname},${arr[0].color},${arr[0].texttrue}</div>
            <div class="price">￥${arr[0].price}</div>
            <div class="num">
                <span class="jian">-</span>
                <span class="number">1</span>
                <span class="jia">+</span>
            </div>
            <div class="buy">立即购买</div>
            <div class="add">加入购物袋</div>
            <div class="xin">
                <img src="../resource/images/shopping/xin.png" alt="">
            </div>
        </div>
    </div>
              <div class="intro">
        <p>产品详情</p>
        <span>${arr[0].particulars}</span>
    </div>
              <div class="layui-collapse" lay-accordion="">
             <div class="layui-colla-item">
               <h2 class="layui-colla-title">产品详情</h2>
               <div class="layui-colla-content layui-show">
                   <span>产品编号:</span>
                   <span>${arr[0].Serialnumber}</span>
               </div>
               <div class="layui-colla-content layui-show">
                   <span>颜色:</span>
                   <span class="color">${arr[0].color}</span>
               </div>
               <div class="layui-colla-content layui-show">
                   <span>尺寸:</span>
                   <span class="size">${arr[0].size}</span>
               </div>
               <div class="layui-colla-content layui-show">
                   <span>物料:</span>
                   <span class="true1"> ${arr[0].texttrue}</span>
               </div>
               <div class="layui-colla-content layui-show">
                   <span>系列:</span>
                   <span class="theme">${arr[0].theme}</span>
               </div>
           </div>
       </div>     
          `);
            $('.content').append(el);
            let arrs = (arr[0].magnifying).split('|');
            for(let i = 0; i <arrs.length; i++){
                let le1 = $(`
                 <div class="swiper-slide">
                             <img src="${arrs[i]}" alt="">
                         </div>
                `);
                $('.swiper-wrapper').append(le1);
            }
            lbt();
            qiehaun();
            fdj();
            zhedie();
            nums();
            buy();
            add();
        }
    });
}
jiazai();
function lbt(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
// 切换图片
function qiehaun(){
    $('.swiper-slide img').click(function () {
        $('.img img').attr('src',this.src);
        $('.mask img').attr('src',this.src);
    });
}
//放大镜
function fdj(){
    $('.img img').click(function () {
        $('.mask').css({
            display:'block',
        });
        $('.content').css({
            display:'none'
        });
        $('.img img').css({
            backgroundSize:'100%'
        })
    });
    $('.mask').click(function () {
        $('.mask').css({
            display:'none'
        });
        $('.content').css({
            display:'block'
        })
    });
}
//折叠
function zhedie(){
    layui.use(['element', 'layer'], function(){
        var element = layui.element;
        var layer = layui.layer;
        //监听折叠
        element.on('collapse(test)', function(data){
            layer.msg('展开状态：'+ data.show);
        });
    });
}
//数量加减
function  nums() {
    $('.jia').click(function () {
        $('.number')[0].innerText++;
    });
    $('.jian').click(function () {
        $('.number')[0].innerText--;
        if($('.number')[0].innerText <= 1){
            $('.number')[0].innerText = 1;
        }
    });
}
//立即购买
function buy() {
    $('.add').click(function () {
           let count = $('.number')[0].innerText;
          $.ajax({
              type:'post',
              url:'../controller/shoppingDao.php',
              data:{
                  type:'add_shopping',
                  count,texttrue,color,size,theme,uid,gid
              },
              success(res) {
                  console.log(res);
                  const arr = JSON.parse(res);
                  console.log(arr);
                  if(arr.code){
                     $('.add').css({
                         background:'red'
                     })
                  }
              }
          });
    })
}
//收藏
function add() {
   let flag = false;
   $('.xin').click(function () {
       flag = !flag;
      if(flag){
          $('.xin img').attr('src','../resource/images/shopping/xin1.png');
          console.log(uid,gid);
          $.ajax({
              type:'post',
              url:'../controller/shoppingDao.php',
              data:{
                  type:'add_collects',
                  uid,
                  gid
              },
              success(res){
                  console.log(res);
              }
          })
      }else {
          $('.xin img').attr('src','../resource/images/shopping/xin.png');
          $.ajax({
              type:'post',
              url:'../controller/shoppingDao.php',
              data:{
                  type:'add_collects1',
                  uid,
                  gid
              },
              success(res){
                  console.log(res);
              }
          })
      }

   }) 
}