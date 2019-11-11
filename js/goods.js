var kinds = document.querySelectorAll(' .kind1');
var kinds1 = document.querySelectorAll('.kind-add');
let flag = true;
let addArr;//存添加的数据
let addA = [];//选中的前一一个
for (let i = 0; i < kinds.length; i++) {
    kinds[i].index = i;
    kinds[i].onclick = function () {
        for (var j = 0; j < kinds.length; j++) {
            kinds1[j].className = 'kinds';
        }
        this.className = 'kind2';
        if(flag){
            kinds1[this.index].style.display = 'none';
            kinds[i].children[1].innerHTML = '+';
            flag = !flag;
        }else{
            kinds1[this.index].style.display = 'block';
            kinds[i].children[1].innerHTML = '-';
            flag = !flag;
        }
    }
};
//点击复选框将内容添加到上面
let con;
let check;
let  num;
//删除x
    function shan(btn) {
        $(btn).parent()[0].remove();//页面删除
        shaixuan();
        let sh = ($(btn)[0].previousElementSibling.innerHTML);
        addA.push(sh);
        let cs;
        let lang = $('.shan div').length;
        for(let i = 0; i < lang; i++){
            cs = $('.shan div')[i].children[0].innerHTML;
            addA.push(cs)
        }
        const spliceArr = addA.splice(-lang,lang);
        let as = [];
        for (let i = 0; i < spliceArr.length;i++){
            if(sh == spliceArr[i]){
                num = i;
            }
        }
        $('input')[num].checked = false;

    }
//开启范围选择
layui.use('slider', function(){
    var $ = layui.$
        ,slider = layui.slider;
    //开启范围选择
    slider.render({
        elem: '#slideTest9'
        ,value:100 //初始值
        ,range: true //范围选择
        ,change: function(vals){
            $('#test-slider-tips2').html( '￥' + vals[0] +  '--' + '￥'+ vals[1]);
        }
    });
});
let colorArr = [];//颜色数组
let kindArr = [];//种类
let textArr = [];//材料
let sizeArr = [];//尺寸
let themeArr = [];//主题
function  select() {
     $.ajax({
       type:'post',
       url:'../controller/shoppingDao.php',
       data:{
           type: 'select'
       },
       success(res){
           const arr = JSON.parse(res);
           for(let i = 0; i < arr.length; i++){
               let el = $(`
               <div class="goods">
                        <div>
                            <img src="${arr[i].img}" alt="">
                        </div>
                        <div>${arr[i].theme}</div>
                        <div>${arr[i].goodname},${arr[i].color},${arr[i].texttrue}</div>
                        <div>￥${arr[i].price}</div>
                    </div>
            `);
               $('.list').append(el);
               colorArr.push(arr[i].color);
               kindArr.push(arr[i].kind);
               textArr.push(arr[i].texttrue);
               sizeArr.push(arr[i].size);
               themeArr.push(arr[i].theme);
           }
           se();
           check = $('input[name=checkone]');
           tianjia();
           price();
        }
     })
}
select();
//筛选数据库中数据表的内容与个数
let colorObj,kindObj,textObj,sizeObj,themeObj;
function se() {
    var unique=(arr)=>{
        let obj={};
        for(var i=0;i<arr.length;i++){
            let key=arr[i];
            if(!obj[key]){
                obj[key]=1;
            }else{
                obj[key]+=1;
            }
        }
        return obj;
    };
    //数据和个数以对象的形式存在
        colorObj = unique(colorArr),
        kindObj = unique(kindArr),
        textObj = unique(textArr),
        sizeObj = unique(sizeArr),
        themeObj = unique(themeArr);
        xunhaun(colorObj);
        xunhaun(kindObj);
        xunhaun(textObj);
        xunhaun(sizeObj);
        xunhaun(themeObj);
}
function xunhaun(objs) {
    for(let i in objs){
       let key = i;
       let val = objs[i];
            let el1 =$(`
                <div>
                   <span>${key}</span>
                    <span>[${val}]</span>
                </div>
                <input type="checkbox" name="checkone" >
        `)
        if(objs == colorObj){
            $('.color').append(el1);
        }
        if(objs == kindObj){
            $('.kinds1').append(el1);
            $('.kinds1 input').remove();
        }
        if(objs == textObj){
            $('.text').append(el1);
        }
        if(objs == sizeObj){
            $('.size').append(el1);
        }
        if(objs == themeObj){
            $('.theme').append(el1);
        }
    }
}
function tianjia() {
    check.click(function () {
        con = this.previousElementSibling.children[0].innerHTML;
        if($(this).is(':checked')){
            //  将选择的元素添加到搜索区域
            addA = [];
            const  div = $(`
            <div class="adds">
                <span class="n">${con}</span>
                 <span class="cuo" onclick="shan(this)">×</span>     
            </div>     
          `);
            $('.y-add').append(div);
            //添加之后发生ajax情求,根据搜索框的内容在数据库搜索到对应内容添加到右侧的框中
            for(let i = 0; i < $('.n').length; i++){
                addA.push($('.n')[i].innerHTML);
            }
            if($('.y-add').append(div)){
                shaixuan();
            }
        }else {
            //再次点击删除搜索区域的元素
            addArr = [];
            addA1 = [];
            for (let i = 0; i < $('.n').length; i++){
                let zi = $('.n')[i].innerText;
                addArr.push(zi);
            };
            for(let j = 0; j < addArr.length; j++){
                if(con == addArr[j]){
                    $('.y-add')[0].children[j].remove();
                    shaixuan();
                }
            }
            
            for(let k = 0; k < $('.n').length; k++){
                addA1.push($('.n')[k].innerHTML);
            }

        }
    });
}
// 按照价格排序
function price() {
    $(function () {
        $('#s1').change(function () {
            if($('#s1').val() == '价格由高到低'){
                $.ajax({
                    type:'post',
                    url:'../controller/shoppingDao.php',
                    data:{
                        type:'prices'
                    },
                    success(res) {
                        const  arr = JSON.parse(res);
                        $('.list').children().css({
                            display:'none'
                        });
                        for(let i = 0; i < arr.length; i++){
                            let el = $(`
                            <div class="goods">
                        <div>
                            <img src="${arr[i].img}" alt="">
                        </div>
                        <div>${arr[i].theme}</div>
                        <div>${arr[i].goodname},${arr[i].color},${arr[i].texttrue}</div>
                        <div>￥${arr[i].price}</div>
                         </div>
                       `);
                            $('.list').append(el);
                        }
                    }
                });
            }else {
                $.ajax({
                    type:'post',
                    url:'../controller/shoppingDao.php',
                    data:{
                        type:'prices1'
                    },
                    success(res) {
                        const  arr = JSON.parse(res);
                        $('.list').children().css({
                            display:'none'
                        });
                        for(let i = 0; i < arr.length; i++){
                            let el = $(`
                            <div class="goods">
                        <div>
                            <img src="${arr[i].img}" alt="">
                        </div>
                        <div>${arr[i].theme}</div>
                        <div>${arr[i].goodname},${arr[i].color},${arr[i].texttrue}</div>
                        <div>￥${arr[i].price}</div>
                         </div>
                       `);
                            $('.list').append(el);
                        }
                    }
                });
            }
        })
    });
}
//根据选项里面的条件进行筛选所对应的商品
function shaixuan() {
      var addArr = [];
      for(let i = 0; i < $('.y-add').children().length; i++){
       let content = $('.y-add').children()[i].children[0].innerHTML;
       addArr.push(content);
      }
      console.log(addArr);
      //将数组转换成json格式的字符串，再发生到后台
    let js = JSON.stringify(addArr);
    console.log(js);
      $.ajax({
          type:'post',
          url:'../controller/shoppingDao.php',
          data:{
               type:'dim',
               js
          },
          success(res) {
              console.log(res);
          }
      })
}

