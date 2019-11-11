<?php

class Shopping
{
    public $uid;
    public $gid;
    public $texttrue;
    public $color;
    public $size;
    public $theme;
    public $count;

    function __construct($uid,$gid,$texttrue,$color,$size,$theme,$count)
    {
        $this->uid =$uid;
        $this->gid = $gid;
        $this->texttrue = $texttrue;
        $this->color = $color;
        $this->size = $size;
        $this->theme = $theme;
        $this->count = $count;
    }
}

class Commoditys
{
    public $goodname;
    public $img;
    public $magnifying;
    public $price;
    public $particulars;
    public $Serialnumber;
    public $T1;
    public $T2;
    public $texttrue;
    public $color;
    public $size;
    public $theme;
    public $count;
    public $time;

    function __construct($goodname,$img,$magnifying,$price,$particulars,$Serialnumber,$T1,$T2,$texttrue,$color,$size,$theme,$count,$time)
    {
        $this->goodname =$goodname;
        $this->img = $img;
        $this->magnifying = $magnifying;
        $this->price = $price;
        $this->particulars = $particulars;
        $this->Serialnumber = $Serialnumber;
        $this->T1 = $T1;
        $this->T2 = $T2;
        $this->texttrue = $texttrue;
        $this->color = $color;
        $this->size = $size;
        $this->theme = $theme;
        $this->count = $count;
        $this->time = $time;
    }
}
class Order
{
//    public $uid;
//    public $uname;
//    public $utel;
//    public $ustie;
//    public $count;
//    public $goods;
//    public $time;
    public $status;
    function __construct($status)
    {
//        $this->uid = $uid;
//        $this->uname = $uname;
//        $this->utel = $utel;
//        $this->ustie = $ustie;
//        $this->count = $count;
//        $this->goods = $goods;
//        $this->time = $time;
        $this->status = $status;
    }
}
?>