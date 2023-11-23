<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "task04";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$typeCheckQuery = "SELECT COUNT(*) AS type_count FROM types WHERE type = '$type'";
$typeCheckResult = $conn->query($typeCheckQuery);
$typeRow = $typeCheckResult->fetch_assoc();

echo "<script>console.log(" . json_encode($typeRow) . ")</script>";

$brandCheckQuery = "SELECT COUNT(*) AS brand_count FROM brands WHERE brand = '$brand'";
$brandCheckResult = $conn->query($brandCheckQuery);
$brandRow = $brandCheckResult->fetch_assoc();

$type = isset($_GET['type']);
$brand = isset($_GET['brand']);

$typeMessages = array(
  'type_min' => 'Type does not have enough characters.',
  'type_max' => 'Type has too many characters.',
  'type_invalid_chars' => 'Type has non-alphabetical characters.',
  'type_not_exist' => 'Type does not exist in our shop.',
  'type_exists' => 'Type exists in databases.'
);

$brandMessages = array(
  'brand_min' => 'Brand does not have enough characters.',
  'brand_max' => 'Brand has too many characters.',
  'brand_invalid_chars' => 'Brand has invalid characters.',
  'brand_exists' => 'Brand already exists in databases.',
  'brand_valid' => 'Brand is valid for the type ' . ucfirst($type) . '.'
);

if (strlen($type) < 3) {
  echo $typeMessages['type_min'];
} elseif (strlen($type) > 10) {
  echo $typeMessages['type_max'];
} elseif (!preg_match('/^[a-z-]+$/', $type)) {
  echo $typeMessages['type_invalid_chars'];
} elseif ($typeRow['type_count'] == 0) {
  echo $typeMessages['type_not_exist'];
} else {
  echo $typeMessages['type_exists'];
}

echo '<br>';

if (strlen($brand) < 2) {
  echo $brandMessages['brand_min'];
} elseif (strlen($brand) > 20) {
  echo $brandMessages['brand_max'];
} elseif (!preg_match('/^[a-zA-Z0-9&-]+$/', $brand)) {
  echo $brandMessages['brand_invalid_chars'];
} elseif ($brandRow['brand_count'] > 0) {
  echo $brandMessages['brand_exists'];
} else {
  echo $brandMessages['brand_valid'];
}

$conn->close();
?>
