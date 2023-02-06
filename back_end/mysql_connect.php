<?php
//This file will connect to the database
$servername = "localhost";
$username = "SameerShahid";
$password = "Dragonsuper!@#123";

$connect = new mysqli($servername, $username, $password);
if ($connect->connect_error)
{
  die("Connection failed: " . $connect->connect_error);
}

//Creating database and selecting
$dataBase = "store";
$command = "CREATE DATABASE IF NOT EXISTS $dataBase";
$connect->query($command);
mysqli_select_db($connect, $dataBase);

?>