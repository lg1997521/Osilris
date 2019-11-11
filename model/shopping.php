
<?php
require_once ('../model/DB.php');
class Commodity
{
    //数据库连接
    public $db;
    //构造函数
    function __construct()
    {
        $this->db = new DB();
    }

    /*--------------------------商品展示部分-----------------------------*/
    //查看所有商品的信息
    function select(){
        $sql = "select * from commodity";
        $res = $this->db->query($sql);
        if ($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
     //模糊查询
    function dim($js){
//        var_dump($js);

        $arr1 = ['color','size','theme','texttrue'];
        for($i = 0; $i < count($js); $i++){
//            var_dump($js[$i]);//
            for($j = 0; $j < count($arr1); $j++) {
                $sql = "select * from commodity where $arr1[$j] = '{$js[$i]}'";
                $res = $this->db->query($sql);
//                var_dump($res);
                if ($res) {
                    echo json_encode($res, true);
                }
            }
        }
    }
    //按照价格排序
    function  prices(){
       $sql = "select * from commodity order by price DESC ";
       $res = $this->db->query($sql);
      if($res){
         echo json_encode($res);
      }else{
        echo '{"code":"0"}';
      }
   }
    function  prices1(){
        $sql = "select * from commodity order by price asc ";
        $res = $this->db->query($sql);
        if($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    //
    //筛选
    function Filtrate($condition){
        $sql = "select * from commodity where color = '{$condition}' or texttrue = '${condition}'";
        $res = $this->db->query($sql);
        if ($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }

    /*------------------------详情页部分----------------------------------*/
    //查看详情页
    function pc_select($gid){
        $sql = "select * from commodity where id = '{$gid}'";
        $res = $this->db->query($sql);
        if ($res){
            echo  json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    //加入购物车
    function add_shopping($uid,$gid,$count,$true,$color,$size,$theme){
        $sql = "insert into shopping (uid,gid,count,texttrue,color,size,theme) values ('{$uid}','{$gid}','{$count}','{$true}','{$color}','{$size}','{$theme}')";
        $res = $this->db->query($sql);
        if ($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }
    //加入收藏
    function add_collects($uid,$gid){
        $sql = "insert into collect (uid,gid) values ('{$uid}','{$gid}')";
        $res = $this->db->query($sql);
        if ($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }
    /*------------------------------购物车部分--------------------------------*/
    //查看商品
    function sp_select($uid){
        $sql = "select * from shopping  where uid='{$uid}'";
        $res = $this->db->query($sql);
        if ($res){
                echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }

    //查看购物车中的商品信息
    function sp_increase($gid){
        $sql = "select *  from  commodity   where ID = '{$gid}'";
        $res = $this->db->query($sql);
        if($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }

    }

    //结算
    function sp_account($uid,$gid,$count){
        //创建一个临时数据信息 存放用户id，商品id，数量信息
        $sql = "insert into tyorder (uid,gid,count) values ('{$uid}','{$gid}','{$count}')";
        $res = $this->db->query($sql);
        if ($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }

    function  select_order(){
        $sql = "select * from tyorder";
        $res = $this->db->query($sql);
        if ($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    //订单生成页的信息查询
    function sp_generate($gid,$count){
        $sql = "select * from commodity where ID = '{$gid}'";
        $res = $this->db->query($sql);
        if ($res){
            echo json_encode($res);//找到商品 返回数据
        }else{
            echo '{"code":"0"}';
        }
    }
    //订单地址信息
    function select_seit($uid){
        $sql = "select * from site  where uid = ${uid}";
        $res = $this->db->query($sql);
        if ($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    //生成订单
    function order_cj($uid,$uname,$tel,$ustie,$count,$goods,$time,$status){
        $sql = "insert into orderform (uid,uname,utel,ustie,count,goods,time,status) values ('{$uid}','{$uname}','{$tel}','{$ustie}','{$count}','{$goods}','{$time}','{$status}')";
        $res = $this->db->query($sql);
        if ($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }
//价格排序

//收藏页查询uid信息
    function  sp_collect($uid){
        //查询uid
        $sql = "select * from collect where uid = '{$uid}'";

        $res = $this->db->query($sql);
//        var_dump($res);
        if ($res) {
            echo json_encode($res);
        } else {
            echo '{"code":"0"}';
        }
    }

    //查看收藏页商品信息
    function z_collect($gid){
        $sql = "select *  from  commodity   where  id = '{$gid}'";
        $res = $this->db->query($sql);
//        var_dump($res);
        if ($res) {
            echo json_encode($res);
        } else {
            echo '{"code":"0"}';
        }
    }
    //查询商品列表id
    function z_delete($id){
        $sql = "select * from collect where id = '{$id}'";
        $res = $this->db->query($sql);
//        var_dump($res);
        if($res){
            echo json_encode($res);
//            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }
    //删除商品列表id
    function d_delete($uid,$id){
        $sql = "delete from collect where uid= '{$uid}' and gid = '{$id}' ";
        $res = $this->db->query($sql);
        if($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }
    function getGoodsByUid($gid,$uid){
        $sql = "select * from shangping1 where gid= '{$gid}' and uid = '{$uid}' ";
//        $sql = "select status from collect where gid = '{$gid}' and uid = '{$uid}'";
        $res = $this->db->query($sql);
//        var_dump($res);
        if($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }

    /*------------------------后台管理部分---------------------------------------*/

}

?>