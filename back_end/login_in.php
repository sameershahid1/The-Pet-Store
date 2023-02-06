<?php
include_once('./mysql_connect.php');

session_start();

$email = $_POST["email"];
$password = $_POST["password"];

$table = "users";

$command = "SELECT *FROM $table WHERE Email='$email'";
$result = $connect->query($command);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

if ($data[0]["Email"] !== $email) {
    echo json_encode(array("status" => false, "message" => "Invalid email"));
    exit(null);
}

if ($data[0]["Password"] !== $password) {
    echo json_encode(array("status" => false, "message" => "Invalid password"));
    exit(null);
}

if (!isset($_SESSION["isLogin"])) {
    $_SESSION["isLogin"] = $data[0]["ID"];
    echo json_encode(array("status" => true));
    exit(null);
}


?>