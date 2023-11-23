<?php
function get_shortest(array $table) {
    $little = $table[0];

    foreach ($table as $string) {
        if (strlen($string) < strlen($little)) {
            $little = $string;
        }
    }

    return $little;
}

?>
