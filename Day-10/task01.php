<?php
header('Content-Type: application/json');

if (isset($_GET['name']) && $_GET['name'] != "") {
    $name = $_GET['name'];
    echo json_encode(array('name' => $name));
} else {
    http_response_code(400);
    
}

?>
