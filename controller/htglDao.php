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
    //添加商品信息
    case 'add_sp':
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
    $timer = $_POST['time'];
    $commodity = new Commoditys($goodname,$img,$magnifying,$price,$particulars,$Serialnumber,$T1,$T2,$texttrue,$color,$size,$theme,$timer);
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
    $timer = $_POST['time'];
    $commodity = new Commoditys($id,$goodname,$img,$magnifying,$price,$particulars,$Serialnumber,$T1,$T2,$texttrue,$color,$size,$theme,$timer);
    $manage->updata_sp($commodity);
    break;
    //一级类搜索
    case 'Filtrate_T1':
    $T1 = $_POST['T1'];
    $manage->Filtrate_T1($T1);
    break;
    //二级类搜索
    case 'Filtrate_T2';
    $T1 = $_POST['T1'];
    $T2 = $_POST['T2'];
    $manage->Filtrate_T2($T1,$T2);
    break;
}

?>