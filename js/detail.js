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
//切换图片
$('.swiper-slide img').click(function () {
     $('.img img').attr('src',this.src);
     $('.mask img').attr('src',this.src);
});
//放大镜
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
//折叠
layui.use(['element', 'layer'], function(){
    var element = layui.element;
    var layer = layui.layer;
    //监听折叠
    element.on('collapse(test)', function(data){
        layer.msg('展开状态：'+ data.show);
    });
});
//数量加减
$('.jia').click(function () {
    $('.number')[0].innerText++;
});
$('.jian').click(function () {
    $('.number')[0].innerText--;
    if($('.number')[0].innerText <= 1){
        $('.number')[0].innerText = 1;
    }
});