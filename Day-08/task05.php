<?php
function calc_average(array $table) {
    $sum = 0;
    foreach ($table as $value) {
        $sum += $value;
    }
    $total = count($table);
    $average = $sum / count($table);
    return round($average, 1);
}

?>