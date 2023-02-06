<?php
include_once('./mysql_connect.php');

$table = "products";

$command = "SELECT *FROM $table";
$result = $connect->query($command);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

if (sizeof($data) !== 0) {
    echo json_encode(array("status" => true, "data" => $data));
    exit(null);
}

echo json_encode(array("status" => true));

$connect->close();

?>