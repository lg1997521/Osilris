// import upFn from './upload.js';
let upId; //要修改的数据的 id 值
let trc;
let btns = $('.btn');
let cards = $('.card');
let prevBtnIndex = 0;

function menuChange(){
    for(var i = 0; i < btns.length; i++){
        btns[i].onclick = function(){
            // 获取当前按钮在btns列表中的下标
            var index = this.getAttribute('data-i');
            // console.log(index);
            // 让上一个 card 隐藏，让当前 card 显示
            var prevClass = cards[prevBtnIndex].className.slice(0, -12);
            cards[prevBtnIndex].className = prevClass;
            cards[index].className += ' active-card';
            prevBtnIndex = index;
        };
    }
}
menuChange();

let same = $('.same');
let sd;


//查找数据
function select_sp(){
    $.ajax({
        type: 'post',
        url: '../../controller/htglDao.php',
        data: {
            type: 'select_sp'
        },
        success(res) {
            layui.use('table', function () {
                var table = layui.table;
                table.on('tool(demo)', function (obj) {
                    var data = obj.data;
                    if (obj.event === 'del') {
                        layer.confirm('真的删除这行么', function (index) {
                            $.ajax({
                                type:'post',
                                url:'../../controller/htglDao.php',
                                data:{
                                    type:'delete_sp',
                                    id:data.id
                                },
                                success(msg){
                                    if(msg == 1){
                                        layer.msg("删除成功", {icon: 6});
                                        setTimeout(function(){
                                            layer.closeAll();//关闭所有的弹出层
                                        }, 1000);
                                    }else{
                                        layer.msg("删除失败", {icon: 5});
                                    }
                                }
                            });
                            obj.del();
                            layer.close(index);
                        });
                    } else if (obj.event === 'edit') {
                        EidtUv(data,obj);
                    }

                });
            });
        }
    })
}
select_sp();
function  EidtUv(data,obj){
    $('.goodname').val(data.goodname);
    $('.up-res').attr('src',data.img);
    //详情图
    let pic = data.magnifying.split('|');
    console.log(pic);
    let l = $('.up-imglist');
    l.children().remove();
    l.fadeIn();
    let li;
    for(let item of pic){
         li = `
            <div class="imgs-src">
                <img src="${item}" class="img-list-bs">
                <button class="imgs-btn" onclick="delimgs(this)">X</button>
                </div>
        `;
        l.append(li);
    }

    $('.price').val(data.price);
    $('.particulars').val(data.particulars);
    $('.Serialnumber').val(data.Serialnumber);
    $('.T1').val(data.T1);
    $('.T2').val(data.T2);
    $('.texttrue').val(data.texttrue);
    $('.color').val(data.color);
    $('.size').val(data.size);
    $('.theme').val(data.theme);
    $('.time').val(data.time);
    layer.open({
        type:1,
        title:"修改信息",
        area: ['520px', '590px'],
        btn: ['确认', '取消'],
        content: $('#form1'),
        yes:function(index){
            let goodname = $('.goodname').val();
            let img = $('.up-res').attr('src');

            //详情图
            let imglistArr = [];
            let imglist = $('.up-imglist').children().children('.img-list-bs');
            console.log(imglist);
            for(let i = 0;i < imglist.length;i++){
                let srcs = $(imglist[i]).attr('src');
                imglistArr.push(srcs);
            }
            let magnifying = imglistArr.join('|');

            let price = $('.price').val();
            let particulars =$('.particulars').val();
            let Serialnumber =$('.Serialnumber').val();
            let T1 =$('.T1').val();
            let T2 =$('.T2').val();
            let texttrue =$('.texttrue').val();
            let color =$('.color').val();
            let size =$('.size').val();
            let theme =$('.theme').val();
            let count =$('.count').val();
            let time =$('.time').val();
            $.ajax({
                url:'../../controller/htglDao.php',
                type:'post',
                data:{
                    type:'update_sp',
                    id:data.id,
                    goodname, img,magnifying,
                    price, particulars, Serialnumber, T1, T2, texttrue, color, size, theme, count, time
                },
                success:function (msg) {
                    // console.log(res);
                    if(msg == 3){
                        layer.closeAll('loading');
                        layer.load(2);
                        layer.msg("修改成功", {icon: 6});
                        setTimeout(function(){
                            obj.update({
                                goodname:goodname,
                                img:img,
                                magnifying:magnifying,
                                price:price, particulars:particulars, Serialnumber:Serialnumber, T1:T1, T2:T2, texttrue:texttrue, color:color, size:size, theme:theme, count:count, time:time

                            });//修改成功修改表格数据不进行跳转

                            layer.closeAll();//关闭所有的弹出层
                        }, 1000);
                        clean();
                    }else{
                        layer.msg("修改失败", {icon: 5});
                    }
                }
            })
        }
    });


}
//添加商品时上传按钮点击事件
$('.up-img-btn').click(function(){
    //获取要上传的文件的信息并做验证
    const filedata = $('.img')[0].files[0];
    upFn(filedata,function(res){
        //将弹框中的img路径设置为上传成功之后的路径
        $('.up-res').attr('src',res);
        //点击弹框的确定按钮时，当前图片的路径要存储到数据库中
    })
});
//清空
function clean(){
    $('.goodname').val('');
    $('.up-res').attr('src','');
    $('.up-imglist').children().remove();
    $('.price').val('');
    $('.particulars').val('');
    $('.Serialnumber').val('');
    $('.T1').val('');
    $('.T2').val('');
    $('.texttrue').val('');
    $('.color').val('');
    $('.size').val('');
    $('.theme').val('');
    $('.count').val('');
    $('.time').val('');
}
//添加
layui.use('table',function (obj) {
    var table = layui.table;
    $('.add').click(function (data,obj) {
        clean();
        $('.up-imglist').fadeOut();
        // $('.up-imglist').children().remove();
        layer.open({
            type:1,
            title:"添加",
            area: ['520px', '590px'],
            btn: ['确认', '取消'],
            content: $('#form1'),
            yes:function (index) {
                let goodname = $('.goodname').val();
                let img = $('.up-res').attr('src');
                //详情图
                let imglist = $('.up-imglist').children().children('.img-list-bs');
                let imglistArr = [];
                for(let i = 0;i < imglist.length;i++){
                    let srcs = $(imglist[i]).attr('src');
                    imglistArr.push(srcs);
                }
                let magnifying = imglistArr.join('|');

                let price = $('.price').val();
                let particulars =$('.particulars').val();
                let Serialnumber =$('.Serialnumber').val();
                let T1 =$('.T1').val();
                let T2 =$('.T2').val();
                let texttrue =$('.texttrue').val();
                let color =$('.color').val();
                let size =$('.size').val();
                let theme =$('.theme').val();
                let count =$('.count').val();
                let time =$('.time').val();
                if(goodname&&img&&magnifying&&price&&particulars&&Serialnumber&&T1&&T2&&texttrue&&color&&size&&theme&&count&&time){
                    $.ajax({
                        url:'../../controller/htglDao.php',
                        type:'post',
                        data:{
                            type:'add_sp',
                            id:data.id,
                            goodname,img,magnifying, price, particulars, Serialnumber, T1, T2, texttrue, color, size, theme, count, time
                        },
                        success(msg){
                            if(msg == 5){
                                layer.closeAll('loading');
                                layer.load(2);
                                layer.msg("添加成功", {icon: 6});
                                setTimeout(function(){
                                    table.reload('idTest', {
                                        where: {type:'select_sp'} //设定异步数据接口的额外参数
                                        //,height: 300
                                    });
                                    layer.closeAll();//关闭所有的弹出层
                                }, 1000);
                                clean();
                            }else{
                                layer.msg("添加失败", {icon: 5});
                            }
                        }
                    })
                }
            }
        })
    });
});
//查询订单
let options;
function select_order(){
    $.ajax({
        type:'post',
        url:'../../controller/htglDao.php',
        data:{
            type:'select_order'
        },
        success(res){
            layui.use('table', function(){
                var table = layui.table;
                table.on('tool(test)', function (obj) {
                    let  data = obj.data;
                    if (obj.event === 'edit') {
                        layer.open({
                            type:1,
                            title:"修改信息",
                            area: ['300px', '300px'],
                            btn: ['确认', '取消'],
                            content: $('#form2'),
                            yes:function (index) {
                                let options = $(".frame option:selected").val();
                                if(options == '已下单'){
                                    options = 0;
                                } else if(options == '未发货'){
                                    options = 1;
                                } else if(options == '已发货'){
                                    options = 2;
                                } else if(options == '已收货'){
                                    options = 3;
                                } else if(options == '未收货'){
                                    options = 4;
                                } else if(options == '已完成'){
                                    options = 5
                                }
                                console.log(options);
                                $.ajax({
                                    type:'post',
                                    url:'../../controller/htglDao.php',
                                    data:{
                                        type:'update_order',
                                        id:data.id,
                                        status:options,
                                    },
                                    success(msg){
                                        if(msg == 2){
                                            layer.closeAll('loading');
                                            layer.load(2);
                                            layer.msg("修改成功", {icon: 6});
                                            setTimeout(function(){
                                                obj.update({
                                                    status: options
                                                });//修改成功修改表格数据不进行跳转

                                                layer.closeAll();//关闭所有的弹出层
                                            }, 1000);
                                            // clean();
                                        }else{
                                            layer.msg("修改失败", {icon: 5});
                                        }
                                    }
                                })
                            }
                        })
                    }

                });
            })
        }
    })
}
select_order();

//查询用户
function select_ul(){
    $.ajax({
        type:'post',
        url:'../../controller/htglDao.php',
        data:{
            type:'select'
        },
        success(res){
            // console.log(res);
            layui.use('table', function(){
                var table = layui.table;

                //第一个实例
                table.render({
                    elem: '#demo'
                    ,method:'post'
                    ,where:{type:'select'}
                    ,height: 600
                    ,url: 'http://localhost/XAH190603/CXK/controller/htglDao.php' //数据接口
                    ,page: true //开启分页
                    ,cols: [[ //表头
                        {field: 'username', title: '用户名'}
                        ,{field: 'tel', title: '电话'}
                        ,{field: 'pastalcode', title: '邮编', sort: true}
                        ,{field: 'sex', title: '性别', sort: true}
                        ,{field: 'birth', title: '生日'}
                        ,{field: 'email', title: '邮箱'}
                    ]]
                });

            });

        }
    })
}
select_ul();

//查询地址
function select_site() {
    $.ajax({
        type:'post',
        url:'../../controller/htglDao.php',
        data:{
            type:'select_site'
        },
        success(res){
            // console.log(res);
            layui.use('table', function(){
                var table = layui.table;

                //第一个实例
                table.render({
                    elem: '#site'
                    ,method:'post'
                    ,where:{type:'select_site'}
                    ,height: 600
                    ,url: 'http://localhost/XAH190603/CXK/controller/htglDao.php' //数据接口
                    ,page: true //开启分页
                    ,cols: [[ //表头
                        {field: 'uid', title: '用户id', sort: true}
                        ,{field: 'name', title: '用户名'}
                        ,{field: 'tel', title: '电话'}
                        ,{field: 'site', title: '详细地址'}
                    ]]
                });

            });

        }
    })
}
select_site();

//商品图片列表的事件
$('.up-img-btn2').click(function () {
    // console.log(11);
    $('.up-imglist').fadeIn();
    const Filedata = $('.magnifying')[0].files[0];
    // console.log(Filedata);
    upFn(Filedata,function (res) {
        // console.log(res);
        //将弹框中img的路径设置为上传成功之后的路径
        let tr = $(`
                <div class="imgs-src">
                <img src="${res}" class="img-list-bs">
                <button class="imgs-btn" onclick="delimgs(this)">X</button>
                </div>
            `);
        $('.up-imglist').append(tr);
        // console.log(tr);
        //向元素内动态创建img

    })
});
function delimgs(btn) {
    const  res = $(btn).parent().remove();
    // console.log(res);
}

//账户
function select_user(){
    $.ajax({
        type:'post',
        url:'../../controller/htglDao.php',
        data:{
            type:'select_user',
        },
        success(res){
            console.log(res);
            const obj = JSON.parse(res);
            for(item of obj){
                let username = item.username;
               $('.user').append(username);
            }

        }
    })
}
select_user();


//分页
layui.use(['laypage', 'layer'], function() {
    var laypage = layui.laypage
        , layer = layui.layer;
    // layer.open({
    //     type: 0,
    //     content: '传入任意的文本或html' //这里content是一个普通的String
    // });
    laypage.render({
        elem: 'demo6'
        ,limit:1
        ,count: 2
        ,layout: ['prev', 'next']
        ,curr: location.hash.replace('#!fenye=', '') //获取起始页
        ,hash: 'fenye' //自定义hash值
        ,jump: function(obj, first){
                console.log(obj.curr);
                console.log(123);
            if(!first){
                layer.msg('第 '+ obj.curr +' 页');
            }
        }
    });
});


//取消页面选中
document.onselectstart = function(){return false;};

//查询耳饰
function  select_es() {
    $.ajax({
        type: 'post',
        url: '../../controller/htglDao.php',
        data: {
            type: 'select_es',
            T1:3
        },
        success(res) {
            console.log(res);
            layui.use('table', function () {
                var table = layui.table;
                table.on('tool(demo)', function (obj) {
                    var data = obj.data;
                    if (obj.event === 'del') {
                        layer.confirm('真的删除这行么', function (index) {
                            $.ajax({
                                type:'post',
                                url:'../../controller/htglDao.php',
                                data:{
                                    type:'delete_sp',
                                    id:data.id
                                },
                                success(msg){
                                    if(msg == 1){
                                        layer.msg("删除成功", {icon: 6});
                                        setTimeout(function(){
                                            layer.closeAll();//关闭所有的弹出层
                                        }, 1000);
                                    }else{
                                        layer.msg("删除失败", {icon: 5});
                                    }
                                }
                            });
                            obj.del();
                            layer.close(index);
                        });
                    } else if (obj.event === 'edit') {
                        EidtUv(data,obj);
                    }

                });
            });
        }
    })
}
select_es();