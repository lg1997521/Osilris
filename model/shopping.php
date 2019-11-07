
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
    function  prices(){
       $sql = "select * from commodity order by price DESC ";
       $res = $this->db->query($sql);
      if($res){
         echo json_encode($res);
      }else{
        echo '{"code":"0"}';
      }
   }
   //模糊查询
    function dim(){
        
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
        $sql = "select * from commodity where color = '{$condition}'";
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

    /*------------------------后台管理部分---------------------------------------*/

}

?>