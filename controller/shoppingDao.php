<?php
//接受前端发来的请求，让任务分发到model层的shopping文件中
require_once ('../beans/Shopping.php');
require_once('../model/shopping.php');
$type = $_POST['type'];
$commodity = new Commodity();

switch ($type){

    /*---------------------商品展示页-----------------------*/
    case 'select';
        $commodity->select();
        break;
    //筛选
    case 'Filtrate':
        $condition = $_POST['condition'];
        $commodity->Filtrate($condition);
        break;
    /*---------------------商品详情页-----------------------*/
    //查看商品
    case 'pc_select':
        $gid = $_POST['gid'];
        $commodity->pc_select($gid);
        break;
    //加入购物车
    case 'add_shopping':
        $uid = $_POST['uid'];
        $gid = $_POST['gid'];
        $count = $_POST['count'];
        $true = $_POST['texttrue'];
        $color = $_POST['color'];
        $size = $_POST['size'];
        $theme = $_POST['theme'];
        $commodity->add_shopping($uid,$gid,$count,$true,$color,$size,$theme);
        break;
    /*---------------------登录注册部分-----------------------*/

    /*---------------------购物车部分-----------------------*/

    case 'sp_increase'://加入购物车
        $gid = $_POST['gid'];
        $commodity->sp_increase($gid);
        break;

    case 'sp_select'://购物车的商品查询
        $uid = $_POST['uid'];

        $commodity->sp_select($uid);
        break;



    case 'sp_account'://结算
        $uid = $_POST['uid'];
        $gid = $_POST['gid'];
        $count = $_POST['count'];

        $commodity->sp_account($uid,$gid,$count);
        break;

    case 'sp_generate';//商品选购，确认订单信息
        $gid = $_POST['gid'];
        $count = $_POST['count'];
        $commodity->sp_generate($gid,$count);
        break;
    case 'order_cj';//订单生产
        $uid = $_POST['uid'];
        $uname = $_POST['uname'];
        $status = $_POST['status'];
        $tel = $_POST['tel'];
        $ustie = $_POST['ustie'];
        $count = $_POST['count'];
        $goods = $_POST['goods'];
        $time = $_POST['time'];
        $commodity->order_cj($uid,$uname,$tel,$ustie,$count,$goods,$time,$status);

    /*---------------------后台管理部分-----------------------*/
}

?>