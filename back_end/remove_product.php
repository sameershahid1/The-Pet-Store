<?php
include_once('./mysql_connect.php');

$productId = $_POST["id"];
$table = "products";
$command = "DELETE FROM $table WHERE ID='$productId'";

if ($connect->query($command)) {
    echo json_encode(array("status" => true, "message" => "Successfully deleted product"));
    exit(null);
}

echo json_encode(array("status" => false, "message" => "Not able to deleted product"));

$connect->close();
?>