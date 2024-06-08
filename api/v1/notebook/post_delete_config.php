<?php

//использовалось приложение phpmyadmin (СУБД - MySQL)

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];

$conn = new mysqli('127.0.0.1', 'root', '', 'notebook');

$human = $conn->query("SELECT name, image FROM note WHERE id = $id;");

$array = [];

foreach ($human as $k => $v) {

    foreach ($v as $key => $value) {

        $array[$key] = $value;

    }
    
}

$path = $_SERVER['DOCUMENT_ROOT'];

if ($array['image'] !== null) {

    unlink("$path" . '/api/v1' . $array['image']);

}

rmdir("$path" . '/api/v1/photos/' . $array['name'] . '/');

$conn->query("DELETE FROM note WHERE id = $id;");