<?php

function dynamic_body() {
    if(isset($_GET['page'])){

        $lien = $_GET['page'];
            
        if ($lien == 'home'){
           return file_get_contents('home.html');
        }
        else if ($lien == 'sql'){
           return file_get_contents('sql.html');
        }
        else if ($lien == 'php'){
           return file_get_contents('php.html');
        }
        else {
            return "<p>Unknow Page</p>";
        }
    }
    
}
?>
