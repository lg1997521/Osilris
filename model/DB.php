<?php
class DB
{
    private $host = "localhost";

    private $username = "lang";
    private $pwd="123456";
    private $database="osiris";

    public $mysqli;

    function __construct()
    {
        $this->connect();
        $this->mysqli->query("set names 'utf8'");

    }

    function connect() {
        $this->mysqli = new mysqli($this->host, $this->username, $this->pwd, $this->database);
        if($this->mysqli->connect_error) {
            die($this->mysqli->connect_error);
        }
    }

    function query($sql)
    {
        $result = $this->mysqli->query($sql);
        //获取执行 sql 语句的结果的数据类型，进行判断。根据类型返回具体的值
        $datatype = gettype($result);
        if ($datatype== 'object'){
            return $result->fetch_all(MYSQLI_ASSOC);
        } elseif ($datatype == 'boolean'){
            return $result;
        }
    }
}