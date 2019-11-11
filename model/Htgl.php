<?php
require_once ('../model/DB.php');
class Manage{
    public $db;
    //构造函数
    function __construct()
    {
        $this->db = new DB();
    }

    //查看所有商品
    function select_sp(){
        $sql = "select * from commodity";
        $res = $this->db->query($sql);
        $result = array('code'=>0,'msg'=>'','count'=>count($res),'data'=>$res);
        if ($res){
            echo json_encode($result);
        }else{
            echo '{"code":"0"}';
        }
    }

    //查看所有商品
    function select(){
        $sql = "select * from userregister";
        $res = $this->db->query($sql);
        $result = array('code'=>0,'msg'=>'','count'=>count($res),'data'=>$res);
        if ($res){
            echo json_encode($result);
        }else{
            echo '{"code":"0"}';
        }
    }

    function select_zc(){
        $sql = "select * from commodity";
        $res = $this->db->query($sql);
        if ($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    //查询订单
    function select_order(){
        $sql = "select * from orderform";
        $res = $this->db->query($sql);
        $result = array('code'=>0,'msg'=>'','count'=>count($res),'data'=>$res);
        if ($res){
            echo json_encode($result);
        }else{
            echo '{"code":"0"}';
        }
    }
    function select_orderzc(){
        $sql = "select * from orderform";
        $res = $this->db->query($sql);
        if ($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    function select_site(){
        $sql = "select * from consignee";
        $res = $this->db->query($sql);
        $result = array('code'=>0,'msg'=>'','count'=>count($res),'data'=>$res);
        if($res) {
            echo json_encode($result);
        } else {
            echo '{"code":"0"}';
        }
    }
    //查询账户
    function select_user(){
        $sql = "select * from htuserlist";
        $res = $this->db->query($sql);
        if($res){
            echo json_encode($res);
        } else {
            echo '{"code":"0"}';
        }
    }
    //查询耳饰
//    function select_es(){
//        $sql = "select * from commodity where ";
//        $res = $this->db->query($sql);
//        $result = array('code'=>0,'msg'=>'','count'=>count($res),'data'=>$res);
//        if ($res){
//            echo json_encode($result);
//        }else{
//            echo '{"code":"0"}';
//        }
//    }
    //添加商品
    function add_sp($commodity){
<<<<<<< HEAD
        $sql = "insert into commodity (goodname,img,magnifying,price,particulars,Serialnumber,T1,T2,texttrue,color,size,theme,count,time) values ('{$commodity->goodname}','{$commodity->img}','{$commodity->magnifying}','{$commodity->price}','{$commodity->particulars}','{$commodity->Serialnumber}','{$commodity->T1}','{$commodity->T2}','{$commodity->texttrue}','{$commodity->color}','{$commodity->size}','{$commodity->theme}','{$commodity->count}','{$commodity->time}')";
=======
        $sql = "insert into commodity (goodname,img,magnifying,price,particulars,Serialnumber,T1,T2,texttrue,color,size,theme,count,time) values ('{$commodity->goodname}','{$commodity->img}','{$commodity->magnifying}','{$commodity->price}','{$commodity->particulars}','{$commodity->Serialnumber}','{$commodity->T1}','{$commodity->T2}','{$commodity->texttrue}','{$commodity->color}','{$commodity->size}','{$commodity->theme}','{$commodity->count}','{$commodity->timer}')";
>>>>>>> 102076c0a648e2a1eb0b4f322a31a2d43987ee48
        $res = $this->db->query($sql);
        if ($res){
//            echo $commodity->goodname;
            echo 5;
        }else{
            echo '{"code":"0"}';
        }
    }

    //删除商品
    function delete_sp($id){
        $sql = "delete from commodity where id ='{$id}'";
        $res = $this->db->query($sql);
        if ($res){
            echo 1;
        }else{
            echo '{"code":"0"}';
        }
    }

    //更改商品信息
    function update_sp($id,$com){
        //修改商品信息
            $sql = "update commodity set goodname = '{$com->goodname}',img = '{$com->img}',magnifying = '{$com->magnifying}',price = '{$com->price}',particulars = '{$com->particulars}',Serialnumber = '{$com->Serialnumber}',T1 = '{$com->T1}',
            T2 = '{$com->T2}',texttrue = '{$com->texttrue}',color = '{$com->color}',size = '{$com->size}',theme = '{$com->theme}',
<<<<<<< HEAD
            time = '{$com->time}' where id='{$id}'";
=======
            count = '{$cou}',time = '{$com->timer}' where id='{$com->id}'";
>>>>>>> 102076c0a648e2a1eb0b4f322a31a2d43987ee48
            $res = $this->db->query($sql);
            if ($res){
                echo 3;
            }else{
                echo '{"code":"0"}';
            }
    }
    function update_order($id,$ord){
        $sql = "update orderform set status='{$ord->status}' where id='{$id}'";
        $res = $this->db->query($sql);
        if ($res){
            echo 2;
        }else{
            echo '{"code":"0"}';
        }
    }

    //一级类的搜索
    function select_es($T1){
        $sql = "select * from commodity where T1 = '{$T1}'";
        $res = $this->db->query($sql);
        $result = array('code'=>0,'msg'=>'','count'=>count($res),'data'=>$res);
        if ($res){
            echo json_encode($result);
        }else{
            echo '{"code":"0"}';
        }
    }

    //二级类的搜索
    function Filtrate_T2($T1,$T2){
        $sql = "select * from commodity where T1 = '{$T1}'and T2 = '{$T2}'";
        $res = $this->db->query($sql);
        if ($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    //
}
