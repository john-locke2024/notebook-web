<?php

//использовалось приложение phpmyadmin (СУБД - MySQL)

$conn = new mysqli('127.0.0.1', 'root', '', 'notebook');

$name = $conn->query("SELECT name FROM note WHERE id = 1");

    $array = [];

    foreach ($name as $k => $v) {

        foreach ($v as $key => $value) {

            $array[$key] = $value;

        }

    }

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];

$conn = new mysqli('127.0.0.1', 'root', '', 'notebook');

//цикл позволяет пройтись по массиву, преобразованного из json-формата, для обновления данных в бд.

foreach ($data as $k => $v) {

    if ($v !== null && $k !== 'image' && $k !== 'id' && $k !== 'image_name') {

        $conn->query("UPDATE note SET $k = '$v' WHERE id = $id");
    
    }
    
}

$image_selected = $conn->query("SELECT image FROM note WHERE id = $id");

$img = [];

    foreach ($image_selected as $k => $v) {

        foreach ($v as $key => $value) {

            $img[$key] = $value;

        }

    }

$img = $img['image'];

//в зависимости от наличие старого фото и присутсвии новой загруженной фотографии, выполняем одну из двух условных конструкций

if ($img == null && $data['image'] !== null) {

    $base64_code = $data['image'];

    $base64_code = str_replace('data:image/jpeg;base64,', '', $base64_code);

    $base64_code  = str_replace(' ', '+', $base64_code);

    $name = $conn->query("SELECT name FROM note WHERE id = $id");

    $array = [];

    foreach ($name as $k => $v) {

        foreach ($v as $key => $value) {

            $array[$key] = $value;

        }

    }

    $image = "/photos" . '/' . $array['name'] . '/'. $data['image_name'];

    $path = $_SERVER['DOCUMENT_ROOT'];

    file_put_contents("$path" . "/api/v1/photos/" . $array['name'] . '/'. $data['image_name'], base64_decode($base64_code), FILE_APPEND);

    $conn->query("UPDATE note SET image = '$image' WHERE id = $id");

} elseif ($img !== null && $data['image'] !== null) {

    $base64_code = $data['image'];

    $base64_code = str_replace('data:image/jpeg;base64,', '', $base64_code);

    $base64_code  = str_replace(' ', '+', $base64_code);

    $name = $conn->query("SELECT name FROM note WHERE id = $id");

    $array = [];

    foreach ($name as $k => $v) {

        foreach ($v as $key => $value) {

            $array[$key] = $value;

        }

    }

    $image = "/photos" . '/' . $array['name'] . '/'. $data['image_name'];

    $path = $_SERVER['DOCUMENT_ROOT'];

    unlink("$path" . '/api/v1' . $img);

    file_put_contents("$path" . '/api/v1/photos/' . $array['name'] . '/'. $data['image_name'], base64_decode($base64_code), FILE_APPEND);

    $conn->query("UPDATE note SET image = '$image' WHERE id = $id");


}