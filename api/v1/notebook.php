<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

    #notebook_form {

        width: 500px;
        display: flex;
        flex-wrap: wrap;
        margin-left: 600px;
        margin-top: 100px;
        background-color: rgb(40, 189, 212);
        padding: 40px 40px 40px 120px;
        border-radius: 10px;

    }

    input {

        width: 400px;
        margin: 10px 0 20px;
        height: 25px;
        font-size: 1.3rem;

    }

    #image_input {

        display: inline-block;
        width: 140px;
        height: 24px;
        font-size: 1rem;
        margin-right: 550px;

    }

    button {

        display: inline-block;
        margin-left: 150px;
        margin-top: 40px;
        font-size: 1rem;
        margin-right: 550px;

    }

    img {

        width: 320px;
        margin-right: 550px;
        height: 240px;
        display: none;

    }

    #result {

        margin-right: 550px;
        margin-bottom: 10px;
        color: green;

    }

    .people {

        display: flex;
        flex-wrap: wrap;

    }

    .field {

        padding: 20px 20px 20px 20px;
        font-size: 1.4rem;
        color: rgb(0, 0, 0);
        font-weight: 700;
        max-width: 200px;
        min-width: 200px;
        border: 2px solid;
        border-color: rgb(0, 0, 0);

    }

    #table {

        margin-left: 400px;
        margin-top: 100px;

    }

    #paginate {

        margin-left: 500px;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        max-width: 500px;

    }

    .pag {

        padding: 15px 15px 15px 15px;
        margin: 5px 5px 5px 5px;
        background-color: blue;
        color: white;
        cursor: pointer;

    }

    </style>
</head>
<body>
    <div id="table">
    </div>
    <div id="paginate"></div>
    <div id="notebook_form">
    <div>
        <h2 style="color: white">Добавить новый контакт</h2>
        <p>Ф. И. O.</p>
        <br>
        <p id="name_val" style="color: red"></p>
        <input type="text" id="name">
    </div>
    <div>
        <p>Компания</p>
        <input type="text" id="company">
    </div>
    <div>
        <p>Телефон</p>
        <br>
        <p id="phone_val" style="color: red"></p>
        <input type="text" id="phone">
    </div>
    <div>
        <p>Email</p>
        <br>
        <p id="email_val" style="color: red"></p>
        <input type="text" id="email">
    </div>
    <div>
        <p>Дата рождения</p>
        <input type="text" id="birthday">
    </div>
    <div style="display: flex; flex-wrap: wrap">
    <p style="display: inline-block; margin-right: 550px;">Изображение</p>
    <input type="file" id="image_input">
    <img id="preview_image" src="" alt="">
    <p id="image_name"></p>
    </div>
    <div>
    <div id="result"></div>
    <button id="save" >Сохранить</button>
    </div>
    </div>

<script src="notebook_get.js"></script>
<script src="notebook.js"></script>
</body>
</html>