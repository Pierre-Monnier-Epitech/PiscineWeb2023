<?php

function render_body($lien) {
            
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
    

?>
