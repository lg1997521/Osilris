<?php
//连接数据库
$servername = 'localhost'; //服务器的主机名：域名+端口号
$username = 'wenrou'; //访问数据库的用户名称
$password = '123456'; //访问数据库的这个用户所对应的密码
$database = 'osiris'; //要连接的数据库的名称

//创建一个数据库的连接
$con = new mysqli($servername,$username,$password,$database);

//检测连接是否成功
if($con->connect_error){
    //数据库连接失败
    //die : 输出一段字符，并且结束代码的执行
    die('{"code": "0"}');
}

//接受请求类型
$type = $_POST['type'];
switch ($type){
    case 'login':
        login();
        break;
}

//关闭数据库连接
$con->close();


//登录
function login(){
    global $con;
    //接受用户名和密码
    $name = $_POST['uname'];
    $pswd = $_POST['pswd'];
    //通过 sql 语句进行登录操作（用户是否注册，如果用户注册了，密码是否匹配）
    $sql = "select password from htuserlist where username = '{$name}'";
    $res = $con->query($sql);
    //判断用户是否注册，如果未查到信息，代表用户没有注册
    if($res->num_rows == 0){
        //用户未注册
        echo '{"code":"0"}';
    }else if($res->num_rows > 0){
        //用户注册了，判断密码
        //使用 mysqli_fetch_assoc 函数从执行 sql 语句拿到的结果中($res)中获取都查询到的值，$obj 是一个关联数组。
        $obj = mysqli_fetch_assoc($res);
        //获取查询到的密码
        $p = $obj['password'];
        // 和用户此次登录输入的密码做匹配
        if($pswd === $p){
            //登录成功
            echo '{"code":"2"}';
        } else {
            //密码输入错误
            echo '{"code":"3"}';
        }
    }else{
        //未知行为
        echo '{"code":"1"}';
    }
}


