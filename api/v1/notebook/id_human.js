let url = window.location.href;

let sub = url.slice(49);

let url_get = `http://notebook-web/api/v1/notebook/get_config.php?id=${sub}`

let xhr_get = new XMLHttpRequest();

xhr_get.open('GET', url_get);

let arr_obj = {};

let obj = {};

xhr_get.onreadystatechange = function () {

    if (xhr_get.readyState === 4 && xhr_get.status === 200) {
    
        arr_obj = JSON.parse(xhr_get.responseText);

        obj = arr_obj.object[0];

        console.log(arr_obj.object);

        //добавляем данные в таблицу, преобразованных из json-формата

        let people = document.createElement('div');

        people.classList.add('people');

        let name_div = document.createElement('div');

        name_div.innerText = obj.name;

        name_div.classList.add('field');

        let company_div = document.createElement('div');

        company_div.innerText = obj.company;

        company_div.classList.add('field');

        let phone = document.createElement('div');

        phone.innerText = obj.phone;

        phone.classList.add('field');

        let email = document.createElement('div');

        email.classList.add('field');

        email.innerText = obj.email;

        let birthday = document.createElement('div');

        birthday.innerText = obj.birthday;

        birthday.classList.add('field');

        people.appendChild(name_div);

        people.appendChild(company_div);

        people.appendChild(phone);

        people.appendChild(email);

        people.appendChild(birthday);

        table.appendChild(people);

        if (obj.image !== undefined && obj.image !== null) {

            document.querySelector('.preview_image').src = 'http://notebook-web/api/v1' + obj.image;

            document.querySelector('.preview_image').style.display = 'block';

        }

    }

    let obj_note = {};

    let obj_pass = {};

    obj_pass.name = true;

    obj_pass.email = true;

    obj_pass.phone = true;

    let name_field = document.querySelector('#name');

    name_field.value = obj.name;

    //форма заполнения имени

    name_field.addEventListener('input', (e) => {

        obj_note.name = e.target.value;

        if (e.target.value !== '') {

            name_val.innerHTML = '';
    
            obj_pass.name = true;
    
        } else {
    
            obj_pass.name = false;
    
            name_val.textContent = 'Обязательное поле';
    
        }

    })

    let company = document.querySelector('#company');

    company.value = obj.company;

    //форма заполнения названия компании

    company.addEventListener('input', (e) => {

        obj_note.company = e.target.value;

    })

    let phone = document.querySelector('#phone');

    phone.value = obj.phone;

    //форма заполнения телефона

    phone.addEventListener('input', (e) => {

        obj_note.phone = e.target.value;

        if (e.target.value !== '') {

            phone_val.innerHTML = '';
    
            obj_pass.phone = true;
    
        } else {
    
            obj_pass.phone = false;
    
            phone_val.textContent = 'Обязательное поле';
    
        }

    })

    let email = document.querySelector('#email');

    email.value = obj.email;

    //форма заполнения email

    email.addEventListener('input', (e) => {

        obj_note.email = e.target.value;

        if (e.target.value !== '') {

            email_val.innerHTML = '';
    
            obj_pass.email = true;
    
        } else {
    
            obj_pass.email = false;
    
            email_val.textContent = 'Обязательное поле';
    
        }
    

    })

    let birthday = document.querySelector('#birthday');

    birthday.value = obj.birthday;

    //форма заполнения даты рождения

    birthday.addEventListener('input', (e) => {

        obj_note.birthday = e.target.value;

    })

    if (obj.image !== undefined && obj.image !== null ) {

    let preview_image = document.querySelector('#preview_image');

    preview_image.src = 'http://notebook-web/api/v1/' + obj.image;

    preview_image.style.display = 'block';

    }

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

        isClickable = false;

        obj_note.id = obj.id;

        let xhr = new XMLHttpRequest();

        let url = 'http://notebook-web/api/v1/notebook/post_config.php'

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

        setTimeout(() => {
            isClickable = true;
        }, 3000);

        } else {

            document.querySelector('#result').style.color = 'red';
    
            document.querySelector('#result').innerHTML = 'Не заполнены обязательные поля!'
    
        }

        }

    });

}

xhr_get.send();