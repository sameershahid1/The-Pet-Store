<?php
include_once('./mysql_connect.php');

session_start();

try {

    if (isset($_SESSION["isLogin"])) {
        header("Location:product-form.html");
    }

    $id = uniqid();
    $userName = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $conformPassword = $_POST["conform_password"];

    $userName = trim($userName);
    $email = trim($email);

    $emailRegex = "/[A-Za-z1-9]+@gmail[.]com/";
    $userNameRegex = "/[A-Za-z]/";

    $status = preg_match($userNameRegex, $userName);
    if (!$status && strlen(trim($userName)) !== 6) {
        echo json_encode(array("status" => false, "message" => "Invalid username, length must be 6"));
        exit(null);
    }

    $status = preg_match($emailRegex, $email);
    if (!$status) {
        echo json_encode(array("status" => false, "message" => "Invalid email"));
        exit(null);
    }

    if (strlen($password) < 6 || strlen($password) > 12) {
        echo json_encode(array("status" => false, "message" => "Invalid password, length must be between 6 to 12"));
        exit(null);
    }

    if (strcmp($password, $conformPassword)) {
        echo json_encode(array("status" => false, "message" => "It does not match with password"));
        exit(null);
    }

    $table = "users";
    $command = "CREATE TABLE IF NOT EXISTS $table (ID VARCHAR(15) PRIMARY KEY,Name VARCHAR(25) NOT NULL,Email VARCHAR(50) NOT NULL,Password VARCHAR(12) NOT NULL)";

    if ($connect->query($command) === true) {
        $command = "SELECT *FROM $table WHERE Email='$email'";
        $result = $connect->query($command);
        $data = mysqli_fetch_all($result, MYSQLI_ASSOC);

        if (sizeof($data) === 0) {
            $command = "INSERT INTO $table (ID,Name,Email,Password) VALUES('$id','$userName','$email','$password')";

            if ($connect->query($command)) {
                echo json_encode(array("status" => true, "message" => "Successfully created account"));
                $connect->close();
                exit(null);
            }
        }
        echo json_encode(array("status" => $status, "message" => "Email already exists"));
    }

    $connect->close();

} catch (Exception $exc) {
    echo json_encode(array("status" => 500, "message" => $exc));
}
?>