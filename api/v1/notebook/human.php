<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .people {

        display: flex;
        flex-wrap: wrap;

        }

        .field {

        padding: 20px 20px 20px 20px;
        font-size: 1.4rem;
        color: rgb(0, 0, 0);
        font-weight: 700;
        min-width: 100px;
        border: 2px solid;
        border-color: rgb(0, 0, 0);

        }

        #table {

        margin-left: 450px;
        margin-top: 100px;

        }
        img {

        width: 320px;
        margin-right: 550px;
        height: 240px;
        display: none;

        }


        .preview_image {

        width: 320px;
        margin-right: 550px;
        height: 240px;
        display: none;
        margin-left: 800px;
        margin-top: 100px;

        }

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

        #result {

        margin-right: 550px;
        margin-bottom: 10px;
        color: green;

        }

        #all_notes {

            display: block;
            margin-left: 500px;
            margin-top: 50px;
            text-decoration: none;
            color: aliceblue;
            background-color: green;
            padding: 10px 10px 10px 10px;
            width: 100px;
            font-size: 1.2rem;
            text-align: center;

        }

    </style>
</head>
<body>
    <div id="table">
    </div>
    <img class="preview_image" src="" alt="">
    <a href="http://notebook-web/api/v1/notebook.php" id="all_notes">Все записи</a>

    <div id="notebook_form">
    <div>
        <h2 style="color: white">Изменить контакт</h2>
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
    <script src="id_human.js"></script>
</body>
</html>