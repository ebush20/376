<!DOCTYPE html>
<html>
    <head>
        <title>PHP Lesson 2</title>
    </head>
    <h1>Company Database</h1>
<table border="1">
  <tr>
    <th>ID </th>
    <th>Name </th>
  </tr>
  



<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "DBA";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT COM_NAME, COM_ID, COM_ADDRESS_LINE1, COM_ADDRESS_LINE2, COM_CITY, COM_STATE, COM_ZIP_CODE, COM_PHONE_NUMBER, FROM COMPANY Order by COM_ID " ;
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["COM_ID"] . "</td><td>" . $row["COM_NAME"]. "</td></tr>" . $row["COM_ADDRESS_LINE1"] . "</td><td>" . ;
    }
} else {
    echo "0 results";
}
$conn->close();
?>
</table>
</body>
</html>