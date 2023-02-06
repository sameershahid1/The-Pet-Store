<?php

session_start();

if (isset($_SESSION["isLogin"])) {
    echo json_encode($_SESSION["isLogin"]);
    exit(null);
}

echo json_encode(false);

?>