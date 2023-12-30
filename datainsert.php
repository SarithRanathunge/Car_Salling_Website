<?php
include 'confg.php';

if(isset($_POST["submit"])){
    $brand = $_POST["brand"];
    $type = $_POST["type"];
    $year = $_POST["year"];
    $model = $_POST["model"];
    $color = $_POST["color"];
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];
    $telephoneno1 = $_POST["telephoneno1"];
    $telephoneno2 = $_POST["telephoneno2"];
    $address = $_POST["address"];
    $postalcode = $_POST["postalcode"];
    $nicno = $_POST["nicno"];
    $niccopy = $_POST["niccopy"];
    $accept = $_POST["accept"];
}

$sql ="INSERT INTO  order_details( brand , type , year ,  model , color ,  firstname , lastname ,  email , telephoneno1 ,  telephoneno2 ,  address ,  postalcode ,  nicno , niccopy , status) 
VALUES ('$brand','$type','$year','$model','$color','$firstname','$lastname','$email','$telephoneno1','$telephoneno2','$address','$postalcode','$nicno', '$niccopy' ,'$accept')";

if(mysqli_query($conn, $sql)){
    header("Location: payment.html");
    exit;
}else{
    echo "Error:".$sql."<br>".mysqli_error($conn);
}
?>