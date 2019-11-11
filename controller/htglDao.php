<?php
require_once ('../beans/Shopping.php');
require_once ('../model/Htgl.php');
$type = $_POST['type'];
$manage = new Manage();

switch ($type){
    //查看商品信息
    case 'select_sp':
    $manage->select_sp();
    break;
    //查看用户信息
    case 'select':
        $manage->select();
        break;
    case 'select_zc':
        $manage->select_zc();
        break;
    case 'select_order':
        $manage->select_order();
        break;
    case 'select_orderzc':
        $manage->select_orderzc();
        break;
    case 'select_site':
        $manage->select_site();
        break;
    case 'select_user':
        $manage->select_user();
        break;
    //添加商品信息
    case 'add_sp':
//        $id = $_POST['id'];
    $goodname = $_POST['goodname'];
    $img = $_POST['img'];
    $magnifying = $_POST['magnifying'];
    $price = $_POST['price'];
    $particulars = $_POST['particulars'];
    $Serialnumber = $_POST['Serialnumber'];
    $T1 = $_POST['T1'];
    $T2 = $_POST['T2'];
    $texttrue = $_POST['texttrue'];
    $color = $_POST['color'];
    $size = $_POST['size'];
    $theme = $_POST['theme'];
    $count = $_POST['count'];
    $time = $_POST['time'];
    $commodity = new Commoditys($goodname,$img,$magnifying,$price,$particulars,$Serialnumber,$T1,$T2,$texttrue,$color,$size,$theme,$count,$time);
    $manage->add_sp($commodity);
    break;
    //删除商品信息
    case  'delete_sp';
    $id = $_POST['id'];
    $manage->delete_sp($id);
    break;
    //修改商品信息
    case 'update_sp':
    $id = $_POST['id'];
    $goodname = $_POST['goodname'];
    $img = $_POST['img'];
    $magnifying = $_POST['magnifying'];
    $price = $_POST['price'];
    $particulars = $_POST['particulars'];
    $Serialnumber = $_POST['Serialnumber'];
    $T1 = $_POST['T1'];
    $T2 = $_POST['T2'];
    $texttrue = $_POST['texttrue'];
    $color = $_POST['color'];
    $size = $_POST['size'];
    $theme = $_POST['theme'];
    $count = $_POST['count'];
    $time = $_POST['time'];
    $commodity = new Commoditys($goodname,$img,$magnifying,$price,$particulars,$Serialnumber,$T1,$T2,$texttrue,$color,$size,$theme,$count,$time);
    $manage->update_sp($id, $commodity);
    break;
    case 'update_order':
        $id = $_POST['id'];
        $status = $_POST['status'];
//        $uid = $_POST['uid'];
//        $uname = $_POST['uname'];
//        $utel = $_POST['utel'];
//        $ustie = $_POST['usite'];
//        $count = $_POST['count'];
//        $goods = $_POST['goods'];
//        $time = $_POST['time'];
//        $status = $_POST['status'];
//        $ord = new Order($uid,$uname,$utel,$ustie,$count,$goods,$time,$status);
       $ord = new Order($status);
        $manage->update_order($id,$ord);
        break;
    //一级类搜索
    case 'select_es':
    $T1 = $_POST['T1'];
    $manage->select_es($T1);
    break;
    //二级类搜索
    case 'Filtrate_T2';
    $T1 = $_POST['T1'];
    $T2 = $_POST['T2'];
    $manage->Filtrate_T2($T1,$T2);
    break;
}

?>