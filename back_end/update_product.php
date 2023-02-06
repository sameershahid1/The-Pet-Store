<?php
include_once('./mysql_connect.php');

$productId = $_POST["product-id"];
$name = $_POST["product-name"];
$description = $_POST["product-description"];
$price = (int) $_POST["product-price"];
$type = $_POST["product-Category"];
$stock = (int) $_POST["product-stock"];

$table = "products";

$command = "UPDATE $table SET
            Name = '$name' ,
            Description = '$description' ,
            Price = $price ,
            Type = '$type' ,
            Stock = $stock ,
            WHERE ID = '$productId'
            ";

if ($connect->query($command)) {
    echo json_encode(array("status" => true, "message" => "Successfully updated the product"));
    exit(null);
}

echo json_encode(array("status" => false, "message" => "Not able to update the product"));

$connect->close();
?>