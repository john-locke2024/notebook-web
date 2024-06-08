<?php

$conn = new mysqli('127.0.0.1', 'root', '', 'notebook');

$id = $_GET['id'];

$result = $conn->query("SELECT * FROM note WHERE id = '$id'");

$array = ['object' => []];

foreach ($result as $k => $v) {

    foreach ($v as $key => $value) {

        $array['object'][$k][$key] = $value;

    }

}

echo json_encode($array);