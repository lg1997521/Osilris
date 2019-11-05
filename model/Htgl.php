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
        if ($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }

    //添加商品
    function add_sp($commodity){
        $sql = "insert into commodity (goodname,img,magnifying,price,particulars,Serialnumber,T1,T2,texttrue,color,size,theme,count,time) values ('{$commodity->goodname}','{$commodity->img}','{$commodity->magnifying}','{$commodity->price}','{$commodity->particulars}','{$commodity->Serialnumber}','{$commodity->T1}','{$commodity->T2}','{$commodity->texttrue}','{$commodity->color}','{$commodity->size}','{$commodity->theme}','{$commodity->count}','{$commodity->timer}')";
        $res = $this->db->query($sql);
        if ($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }

    //删除商品
    function delete_sp($id){
        $sql = "delete from commodity where id ='{$id}'";
        $res = $this->db->query($sql);
        if ($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }

    //更改商品信息
    function update_sp($com){
        //修改商品信息
            $sql = "update commodity set goodname = '{$com->goodname}',img = '{$com->img}',magnifying='{$com->magnifying}',
            price = '{$com->price}',particulars = '{$com->particulars}',Serialnumber = '{$com->Serialnumber}',T1 = '{$com->T1}',
            T2 = '{$com->T2}',texttrue = '{$com->texttrue}',color = '{$com->color}',size = '{$com->size}',theme = '{$com->theme}',
            count = '{$cou}',time = '{$com->timer}' where id='{$com->id}'";
            $res = $this->db->query($sql);
            if ($res){
                echo '{"code":"1"}';
            }else{
                echo '{"code":"0"}';
            }
    }

    //一级类的搜索
    function Filtrate_T1($T1){
        $sql = "select * from commodity where T1 = '{$T1}'";
        $res = $this->db->query($sql);
        if ($res){
            echo json_encode($res);
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
}
