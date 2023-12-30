<?php
include 'confg.php';

if(isset($_POST["submit"])){
    $fullname =$_POST["fullname"];
    $cardnumber =$_POST["cardnumber"];
    $expiredate =$_POST["expiredate"];
    $cw =$_POST["CW"];
    $city =$_POST["city"];
    $postalcode =$_POST["postalcode"];
    $country =$_POST["country"];
}

$sql="INSERT INTO  payment_details ( fullname , cardnumber ,  expiredate , cw ,  city , postalcode ,  country) 
VALUES ('$fullname','$cardnumber','$expiredate','$cw','$city','$postalcode', '$country')";

if(mysqli_query($conn,$sql)){
    header("Location: thankyou.html");
    exit; 
}else{
    echo "Error:".$sql."<br>".mysqli_error($conn);
}
?>