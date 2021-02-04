<?php 

$servername = "localhost";
$username = "root";
//$password = "password";
$dbname = "user_db";
$mysqli = new mysqli($hostName, $username,"", $dbname);
$data = json_decode(file_get_contents("php://input"));
    $name = $data->name;
    $email = $data->email;
    $phone = $data->phone;
    $age = $data->age;
    $insert = "INSERT INTO `user` (`name`, `age`, `emailId`, `phoneNo`) VALUES ('".$name."','".$age."','".$email."','".$phone."')";
    $result = $mysqli->query($insert);
    if($result){
            $response[] = array('status'=>1);
    }else{
            $response[] = array('status'=>0);
    }
    echo json_encode($response);
    exit;
?>