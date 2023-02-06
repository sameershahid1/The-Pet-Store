<?php
include_once('./mysql_connect.php');

session_start();

$productId = $_POST["id"];
$stock = (int) $_POST["stock"];
$table = "products";

echo json_encode($productId);

$command = "UPDATE $table SET Stock=$stock WHERE ID='$productId'";

if ($connect->query($command)) {
    echo json_encode(array("status" => true, "message" => "Successfully updated stock "));
    exit(null);
}

echo json_encode(array("status" => false, "message" => "Not able to update the stock"));

?>