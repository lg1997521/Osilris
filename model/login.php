<?php
require_once ('../model/DB.php');
//接收请求类型
$type = $_POST['type'];
switch($type){
    case 'register':
        register();
        break;
    case 'login':
        login();
        break;
}

//关闭数据库链接
$con->close();

//注册
function register(){
    global $con;
    //如果代码执行到此处，代表数据库链接没有问题，可以进行数据操作
    $name = $_POST['uname'];
    $pswd = $_POST['pswd'];

    //通过sql语句添加用户注册的信息
    $sql = "insert into userlist (ID,username,password) values (NULL,'{$name}','{$pswd}')";
    //执行sql语句,并且接受返回值
    $res = $con->query($sql);
    if($res){
        echo '{"code": "1"}';
    }
}
//登录
function login(){
    global $con;
    //接收用户名和密码
    $name = $_POST['uname'];
    $pswd = $_POST['pswd'];

    //通过sql语句进行登录操作(用户是否注册，如果用户注册，密码是否匹配)
    $sql = "select password from userlist where username='{$name}'";
    $res = $con->query($sql);
    //判断用户是否注册，如果未查到信息，代表用户，没有注册
    if($res->num_rows == 0){
        //用户未注册
        echo '{"code":"0"}';
    }else if($res->num_rows > 0){
        //用户注册了，判断密码
        //使用mysqli_fetch_assoc 函数从执行sql语句拿到的结果中（$res）中获取到查询到的值，$obj是一个关联数组
        $obj = mysqli_fetch_assoc($res);
        //获取查询到的密码
        $p = $obj['password'];
        //和用户此次登录输入的密码做匹配
        if($pswd === $p){
            //查询成功
            echo '{"code":"2"}';
        }else{
            //密码输入错误
            echo '{"code":"3"}';
        }
    }else{
        //内部服务器出错
        echo '{"code":"1"}';
    }
}

?>