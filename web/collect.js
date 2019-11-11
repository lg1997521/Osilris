
let count;
let texttrue;
let color;
let size ;
let theme;
let uid =2;
let ss;
let status = 0;
let countNum = 0;
let deleteGid;
let aa;

//查找数据
function select() {
    $.ajax({
<<<<<<< HEAD
        type: 'post',
        url: '../controller/shoppingDao.php',
        data: {
            type: 'sp_collect',
            uid: 1,
        },
        success(res) {
            console.log(res);
        }
//             const obj = JSON.parse(res);
//             console.log(obj);
//             //遍历取
//             for (let item of obj) {
//                 s_gid = item.gid;
//                 $.ajax({
//                     type: 'post',
//                     url: '../controller/shoppingDao.php',
//                     data: {
//                         type: 'z_collect',
//                         gid: s_gid,
//                     },
//                     success(res) {
//                         console.log(res);
//                         const obj = JSON.parse(res);
//                         for (let item of obj) {
//                             let el = $(`
//                 <div class="row">
//         <div class="down">
//             <div class="picture">
//                 <a href="">
//                     <div class="map" style="background:url("${item.img}")">
//
//                     </div>
//                 </a>
//             </div>
//             <div class="join">
//                 <div class="price ">
//                     <a href="">
//                         ${item.goodname}</a>
//                     <span>${item.price}
//                     </span>
//                 </div>
//                 <div>${item.Serialnumber}</div>
//                 <div class="history">
//                     <div class="btn">
//                         <button type="button" disabled="disabled">
//                             <span>在您的购物袋中</span>
//                         </button>
//                         <button type="submit" data-id="${item.ID}" onclick="update(this)" data-added-message="在您的购物袋中">
//                             <span>添加到购物袋</span>
//                         </button>
//                     </div>
//                     <div class="btn-i">
//                         <button class="line" data-id="${item.ID}" onclick="del(this)">
//                             <span></span>
//                         </button>
//                     </div>
//                 </div>
//                 <div class="ipt">
//                     <input type="checkbox"></div>
//                 <span>SHARE VIA E-MAIL</span>
//             </div>
//         </div>
//     </div>
// `);
//                             $('.tab').append(el);
//                         }
//
//                     }
//                 })
//             }
//         }
    })
}
select();
//删除数据、
// function del(btn) {
//     //btn:当前点击的按钮的本身
//     //确定yao删除这tiao信息的ID
//     const id = $(btn).attr('data-id');
//     //发送ajax请求
//     $.ajax({
//         type: 'post',
//         url: "",
//         data: {
//             type: 'delete',
//             id
//         },
//         success(res) {
// //             //接受返回值如果成功删除对应的tr移除
//             const obj = JSON.parse(res);
//             // const obj = JSON.parse(res);
//             if (obj.code) {
//                 alert('删除成功');
//                 //删除成功之后将这条数据从表格中移除
//                 $(btn).parent().parent().parent().parent().parent().remove();
//             } else {
//                 alert('删除失败');
//             }
//         }
//     })
// }
=======
        type:'post',
        url:'../controller/shoppingDao.php',
        data:{
            type:'sp_collect',
            uid
        },
        success(res){
            // console.log(res);
            const obj = JSON.parse(res);
            //console.log(obj);
            //遍历取
            for (let item of obj){
                console.log(item)
                //根据用户uid绘制商品gid
                ff(item.gid);
            }
        }
    })
}
select();
//查找 商品gid
function ff(xc) {
    // console.log(xc);
    $.ajax({
        type: 'post',
        url: '../controller/shoppingDao.php',
        data: {
            type: 'z_collect',
            gid:xc
        },
        success(res) {
            ++countNum;
            let pac =  "package"+countNum;
            const obj1 = JSON.parse(res);
            console.log(obj1);
                   size = obj1[0].size;
                   let gid = obj1[0].id;
                   count= obj1[0].count;
                   texttrue= obj1[0].texttrue;
                   color= obj1[0]. color;
                   theme = obj1[0].theme;
            // getGoodsByUid(gid,uid,pac);

            for (let item1 of obj1) {
                let el = $(`
                <div class="row">
        <div class="down">
            <div class="picture">
                <a href="">
                    <div class="map" style="background:url("${item1.img}")">

                    </div>
                </a>
            </div>
            <div class="join">
                <div class="price ">
                    <a href="">
                       <span>${item1.goodname}</span>
                        <span>,</span>
                        <span>${item1.color}</span>
                        <span>,</span>
                        <span>${item1.texttrue}</span>
                        </a>
                       
                    <span>${item1.price}
                    </span>
                </div>
                <div>${item1.Serialnumber}</div>
                <div class="history">
                    <div class="btn">
                        <button type="button" disabled="disabled" class="${pac}" >
                            <span>在您的购物袋中</span>
                        </button>
                        <button class="pp" type="submit" data-id="${item1.id}" onclick="zupdate(this)" data-added-message="在您的购物袋中">
                            <span>添加到购物袋</span>
                        </button>
                    </div>
                    <div class="btn-i">
                        <button class="line" data-id="${item1.id}" onclick="tt(this)">
                            <span></span>
                        </button>
                    </div>
                </div>
                <div class="ipt">
                    <input type="checkbox"></div>
                <span>SHARE VIA E-MAIL</span>
            </div>
        </div>
    </div>
`);
                $('.tab').append(el);

            }
        }
    })
}
function tt(btn){
    $('.mask').fadeIn();
    $('.modal').fadeIn();
    deleteGid = $(btn).attr('data-id');
}
$(".sure").click(function () {
            $(this).parent().parent().parent().parent().parent().remove();
            $('.mask').fadeOut();
            $('.modal').fadeOut();
            zdel(deleteGid );
            window.location.reload();
    });
$(".exit").click(function () {
        $('.mask').fadeOut();
        $('.modal').fadeOut();
});
//移除收藏页面
function zdel(id) {
    // //为按钮绑定点击事件
//显示遮罩层和弹框
    //btn当前点击按钮的本身
    //确定要删除的这条信息的id

  //  const id = $(btn).attr('data-id');
    console.log(id);
    //发送ajax请求
    console.log(uid);
    $.ajax({
        type:'post',
        url:'../controller/shoppingDao.php',
        data:{
            type:'d_delete',
            uid,
            id:id
        },
        success(res){
            // console.log(res);
            //接收返回值成功就移除对应商品
            const obj = JSON.parse(res);
            // console.log(obj);
            if(obj.code){
                // alert('删除成功');
                //删除成功将数据从页面移除
                // $(btn).parent().parent().parent().parent().parent()[0].remove();
                // $('.mask').fadeIn();
                // $('.modal').fadeIn();
            }else{
                console.log(obj.code);
                alert('删除失败');
            }
        }
    })
}
>>>>>>> 79d11a7b1f76d7a0a681e3f50e1c0373210efbef
