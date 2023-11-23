<?php
function sequence(int $n) {
    if ($n <= 0) {
        echo "1\n";
    } else {
        echo "1\n";
        $sequence = "1";
        for ($i = 0; $i < $n; $i++) {
            $table = str_split($sequence);
            $newSequence = "";
            $count = 1;
            $Char = $table[0];

            for ($j = 1; $j < count($table); $j++) {
                if ($table[$j] === $Char) {
                    $count++;
                } else {
                    $newSequence .= $count . $Char;
                    $Char = $table[$j];
                    $count = 1;
                }
            }
            $newSequence .= $count . $Char;
            echo  $newSequence . "\n" ;
            $sequence = $newSequence;
        }
    }
}

?>
