<?php
function dog_bark(int $woof_nb) {
    $i = 1;
    while ($i <= $woof_nb) {
        if ($i == $woof_nb) {
            echo "woof";
            $i++;
        } else {
            echo "woof ";
            $i++;
        }
    }
    echo "\n";
}
?>
