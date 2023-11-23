<?php
header('Content-Type: application/json');

if (isset($_POST['mail'])) {
    $mail = $_POST['mail'];
    if(filter_var($mail , FILTER_VALIDATE_EMAIL)){
        echo json_encode(array('mail' => $mail));
      }
    else {
        http_response_code(400);
    }
} else {
    http_response_code(400);
}

?>
    