<?php
include_once('./mysql_connect.php');

$productId = $_POST["product-id"];
$table = "products";

$command = "SELECT *FROM $table WHERE ID='$productId'";
$result = $connect->query($command);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

if (sizeof($data)) {
    echo json_encode(array("status" => true, "data" => $data[0]));
    exit(null);
}

echo json_encode(array("status" => false));

?>