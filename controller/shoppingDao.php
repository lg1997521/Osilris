<?php
//接受前端发来的请求，让任务分发到model层的shopping文件中
require_once ('../beans/Shopping.php');
require_once('../model/shopping.php');
$type = $_POST['type'];
$commodity = new Commodity();

switch ($type){

    /*---------------------商品展示页-----------------------*/
    case 'prices';
        $commodity->prices();
        break;
    case 'prices1';
        $commodity->prices1();
        break;
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
    case 'dim':
        $js = $_POST[js];
        $commodity->dim($js);
                   /*---------------------登录注册部分-----------------------*/

    /*---------------------购物车部分-----------------------*/

    case 'sp_increase'://通过gid查询商品信息
        $gid = $_POST['gid'];
        $commodity->sp_increase($gid);
        break;

    case 'sp_select'://查询当前uid的购物信息
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
    case 'select_order':
        $commodity->select_order();
        break;
    case 'select_seit':
        $uid = $_POST['uid'];
        $commodity->select_seit($uid);
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
    case 'price_cj';//价格排序
        $pid = $_POST['pid'];
        $price = $_POST['price'];
        $commodity->price_cj($pid,$price);
    /*---------------------后台管理部分-----------------------*/
    //收藏页
    case 'sp_collect'://通过gid查询商品信息
        $gid = $_POST['gid'];
        $commodity->sp_collect($gid);
        break;

    case 'z_collect'://查询当前uid的购物信息
        $uid = $_POST['uid'];

        $commodity->z_collect($uid);
        break;
}

?>