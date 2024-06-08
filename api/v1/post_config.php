<?php

//использовалось приложение phpmyadmin (СУБД - MySQL)

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name_field'];

$company = $data['company'];

$phone = $data['phone'];

$email = $data['email'];

$birthday = $data['birthday'];

//если существует в json изображение, сохраняем его и создаём директорию, иначе только создаём директорию

mkdir("./photos" . '/'.  $name . '/', 0777, true);

$image = null;

if (isset($data['image']) && $data['image'] !== null) {

    $base64_code = $data['image'];

    $base64_code = str_replace('data:image/jpeg;base64,', '', $base64_code);

    $base64_code  = str_replace(' ', '+', $base64_code);

    $image = "/photos" . '/' . $name . '/'. $data['image_name'];

    file_put_contents("./photos/" . $name . '/'. $data['image_name'], base64_decode($base64_code), FILE_APPEND);

}

$conn = new mysqli('127.0.0.1', 'root', '', 'notebook');

if ($image == null) {

    //cохранение данных в таблицу 'note'

    $conn->query("INSERT INTO note (name, company, phone, email, birthday) VALUES ('$name', '$company', '$phone', '$email', '$birthday')");

} else {

    $conn->query("INSERT INTO note (name, company, phone, email, birthday, image) VALUES ('$name', '$company', '$phone', '$email', '$birthday', '$image')");

}