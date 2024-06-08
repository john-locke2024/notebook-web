let obj_note = {};

let obj_pass = {};

obj_pass.name = false;

obj_pass.email = false;

obj_pass.phone = false;

let name_field = document.querySelector('#name');

let name_val = document.querySelector('#name_val');

name_val.textContent = 'Обязательное поле';

name_field.addEventListener('input', (e) => {

    //форма заполнения имени

    obj_note.name_field = e.target.value;

    if (e.target.value !== '') { //установка флага для валидации

        name_val.innerHTML = '';

        obj_pass.name = true;

    } else {

        obj_pass.name = false;

        name_val.textContent = 'Обязательное поле';

    }

})

let company = document.querySelector('#company');

company.addEventListener('input', (e) => {

    //форма заполнения названия компании

    obj_note.company = e.target.value;

})

let phone = document.querySelector('#phone');

let phone_val = document.querySelector('#phone_val');

phone_val.textContent = 'Обязательное поле';

phone.addEventListener('input', (e) => {

    //форма заполнения телефона

    obj_note.phone = e.target.value;

    if (e.target.value !== '') { //установка флага для валидации

        phone_val.innerHTML = '';

        obj_pass.phone = true;

    } else {

        obj_pass.phone = false;

        phone_val.textContent = 'Обязательное поле';

    }

})

let email = document.querySelector('#email');

let email_val = document.querySelector('#email_val');

email_val.textContent = 'Обязательное поле';

email.addEventListener('input', (e) => {

    //форма заполнения email

    obj_note.email = e.target.value;

    if (e.target.value !== '') { //установка флага для валидации

        email_val.innerHTML = '';

        obj_pass.email = true;

    } else {

        obj_pass.email = false;

        email_val.textContent = 'Обязательное поле';

    }

})

let birthday = document.querySelector('#birthday');

birthday.addEventListener('input', (e) => {

    //форма заполнения даты рождения

    obj_note.birthday = e.target.value;

})

document.querySelector('#image_input').addEventListener('change', (event) => {

    //сохранение изображения в base64 для передачи через api

    let input = event.target;

    if (input.files && input.files[0]) {

        let imageFile = input.files[0];
        let imageName = imageFile.name;

        // Отображение имени изображения
        document.querySelector('#image_name').innerText = `Имя файла: ${imageName}`;

        obj_note.image_name = imageName;

        // Чтение и отображение изображения
        let reader = new FileReader();

        reader.onload = function (e) {

            let preview_image = document.querySelector('#preview_image');
            preview_image.style.display = 'block';
            preview_image.src = e.target.result;

            obj_note.image = e.target.result;

        };

        reader.readAsDataURL(imageFile);

        console.log(obj_note);
    }
});

let save = document.querySelector('#save');

save.addEventListener('click', function(e) {

    e.preventDefault();

    let isClickable = true;

    if (isClickable == true) {

    if (obj_pass.name !== false && obj_pass.phone !== false && obj_pass.email !== false) {

    //кнопка сохранения, где происходит отправка данных через api методом post

    let xhr = new XMLHttpRequest();

    let url = 'http://notebook-web/api/v1/post_config.php'

    xhr.open("POST", url, true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () { 

        console.log("Ready State:", xhr.readyState);
        console.log("Status:", xhr.status);

        if (xhr.readyState === 4 && xhr.status === 200) { 

            console.log(xhr.responseText);

            document.querySelector('#result').style.color = 'green';
            
            document.querySelector('#result').innerHTML = 'Данные успешно сохранены'
        
        }

    };

    let data = JSON.stringify(obj_note);

    xhr.send(data)

    } else {

        document.querySelector('#result').style.color = 'red';

        document.querySelector('#result').innerHTML = 'Не заполнены обязательные поля!'

    }

    setTimeout(() => {
        isClickable = true;
    }, 3000);

    }

});