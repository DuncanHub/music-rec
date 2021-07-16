<?php
    $username= "";
    $email= "";
    $errors=array();
        //connect to database
    $db= mysqli_connect('localhost', 'root', '', 'registration');

        //if the register button is clicked 
    if (isset($_POST['register'])){
        $username = mysqli_real_escape_string($_POST['username']);
        $email = mysqli_real_escape_string($_POST['email']);
        $password_1 = mysqli_real_escape_string($_POST['password_1']);
        $password_2 = mysqli_real_escape_string($_POST['password_2']);
    }

    // check for properly filled 

    if (empty($username)){
        array_push($errors, "Username is required");
    }
    if (empty($email)){
        array_push($errors, "Email is required");
    }
    if (empty($password)){
        array_push($errors, "Password is required");
    }
    if ($password_1 != $password_2){
        array_push($errors, "the two passwords do not match");
    }
    
    //no errors? save user to database

    if(count($errors)== 0){
        $password= md5($password_1); // encrypt password before storing (SECURITY)
        $sql= "INSERT INTO users(username, email, password) VALUES ('$username', '$email', '$password')";
        mysqli_query($db, $sql);
    }
?>