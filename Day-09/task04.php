<?php

function whoami() {
    if(isset($_POST['name'])){
        $name = $_POST['name'];
    }
    else {
        $name = "Unknow";
    }

    if(isset($_POST['age'])){
        $age = $_POST['age'];
    }
    else {
        $age = "Unknow";
    }

    if (isset($_POST['name']) && isset($_POST['age'])){
    echo "Hi, my name is ". $name ." and I'm " . $age . " years old.";
    }
    else if (! isset($_POST['name']) && isset($_POST['age'])){
        echo "Hi, my name is ". $name ." and I'm " . $age . " years old.";
    }
    else if (isset($_POST['name']) && ! isset($_POST['age'])){
        echo "Hi, my name is ". $name .".";
    }
    else {
        echo "Hi, my name is ". $name ." and I'm " . $age . " years old.";
    } 
}
?>
