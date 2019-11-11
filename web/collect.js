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
            const obj = JSON.parse(res);
            console.log(obj);
            //遍历取
            for (let item of obj){
                s_gid = item.gid ;
                $.ajax({
                    type: 'post',
                    url: '../controller/shoppingDao.php',
                    data: {
                        type: 'z_collect',
                        gid: s_gid,
                    },
                    success(res) {
                        console.log(res);
                        const obj = JSON.parse(res);
                        for (let item of obj) {
                            let el = $(`
                <div class="row">
        <div class="down">
            <div class="picture">
                <a href="">
                    <div class="map" style="background:url("${item.img}")">

                    </div>
                </a>
            </div>
            <div class="join">
                <div class="price ">
                    <a href="">
                        ${item.goodname}</a>
                    <span>${item.price}
                    </span>
                </div>
                <div>${item.Serialnumber}</div>
                <div class="history">
                    <div class="btn">
                        <button type="button" disabled="disabled">
                            <span>在您的购物袋中</span>
                        </button>
                        <button type="submit" data-id="${item.ID}" onclick="update(this)" data-added-message="在您的购物袋中">
                            <span>添加到购物袋</span>
                        </button>
                    </div>
                    <div class="btn-i">
                        <button class="line" data-id="${item.ID}" onclick="del(this)">
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

        }
    })
}
select();
//删除数据
function del(btn) {
    //btn:当前点击的按钮的本身
    //确定yao删除这tiao信息的ID
    const id = $(btn).attr('data-id');
    //发送ajax请求
    $.ajax({
        type: 'post',
        url: "",
        data: {
            type: 'delete',
            id
        },
        success(res) {
//             //接受返回值如果成功删除对应的tr移除
            const obj = JSON.parse(res);
            // const obj = JSON.parse(res);
            if (obj.code) {
                alert('删除成功');
                //删除成功之后将这条数据从表格中移除
                $(btn).parent().parent().parent().parent().parent().remove();
            } else {
                alert('删除失败');
            }
        }
    })
}
>>>>>>> 79d11a7b1f76d7a0a681e3f50e1c0373210efbef
