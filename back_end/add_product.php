<?php
include_once('./mysql_connect.php');

session_start();

$userId = $_SESSION["isLogin"];
$productId = uniqid();
$name = $_POST["product-name"];
$description = $_POST["product-description"];
$price = (int) $_POST["product-price"];
$type = $_POST["product-Category"];
$stock = (int) $_POST["product-stock"];

$table = "products";
$userTable = "users";

$command = "CREATE TABLE IF NOT EXISTS $table (
            ID VARCHAR(15) PRIMARY KEY,
            Name VARCHAR(25) NOT NULL,
            Description VARCHAR(200) NOT NULL,
            Price INT NOT NULL,
            Type VARCHAR(25) NOT NULL,
            Stock INT NOT NULL,
            UserID VARCHAR(15),
            FOREIGN KEY (UserID) REFERENCES $userTable(ID)
            )";

if ($connect->query($command) === true) {
    $command = "INSERT INTO $table (ID,Name,Description,Price,Type,Stock,UserID) VALUES('$productId','$name','$description',$price,'$type',$stock,'$userId')";

    if ($connect->query($command)) {
        echo json_encode(array("status" => true, "message" => "Successfully added the product"));
        $connect->close();
        exit(null);
    }
}

echo json_encode(array("status" => false, "message" => "cantnot add the product"));

$connect->close();
?>