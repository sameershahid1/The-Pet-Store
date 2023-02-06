<?php
include_once('./mysql_connect.php');

session_start();

$userID = $_SESSION["isLogin"];
$table = "products";


$command = "SELECT *FROM $table WHERE UserID='$userID'";
$result = $connect->query($command);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

if (sizeof($data) !== 0) {
    echo json_encode(array("status" => true, "data" => $data));
    exit(null);
}

echo json_encode(array("status" => true));

$connect->close();

?>