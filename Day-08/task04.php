<?php
function calc(string $operator , int $nbr1 , int $nbr2) {
   if ($operator == '+') {
    $total = $nbr1 + $nbr2;
   }
   else if ($operator == '*') {
    $total = $nbr1 * $nbr2;
   }
   else if ($operator == '%') {
      $total = $nbr1 % $nbr2;
     }
   else if ($operator == '/') {
    if ($nbr2 == 0)  {
        $total = "Cannot divide by 0";
       }
    else {
    $total = $nbr1 / $nbr2;
    }
   }
   else if ($operator == '-') {
    $total = $nbr1 - $nbr2;
   }
  
   else {
    $total = "Unknown operator";
   }
   return $total;

   
}
?>