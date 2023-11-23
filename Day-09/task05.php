<?php
function whoami() {
    $name = "Unknown";
    if (isset($_POST['name']) && $_POST['name'] !== '') {
        $name = $_POST['name'];
    }

    $age = "Unknown";
    if (isset($_POST['age']) && $_POST['age'] !== '') {
        $age = $_POST['age'] . " years old";
    }

    $curriculum = "";
    if (isset($_POST['curriculum']) && $_POST['curriculum'] !== '') {
        $curriculum = "I'm a student of " . $_POST['curriculum'];
    }
    echo "Hi, my name is $name and I'm $age. $curriculum"; 
}

function form_is_submitted(){
    return isset($_POST['name']);
    return isset($_POST['age']);
    return isset($_POST['curriculum']);
}
?>