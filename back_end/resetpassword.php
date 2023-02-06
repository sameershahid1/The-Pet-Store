<?php
include_once('./mysql_connect.php');

session_start();

$email = $_POST["email"];
$table = "users";
$command = "UPDATE $table SET Password='987654' WHERE Email='$email'";

if ($connect->query($command)) {
    echo json_encode(array("status" => true, "message" => "Successfully reset the password"));
    exit(null);
}

echo json_encode(array("status" => false, "message" => "Not able to reset the password"));

?>