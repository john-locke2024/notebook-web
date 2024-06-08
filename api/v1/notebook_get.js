let xhr_get = new XMLHttpRequest();

let url_get = 'http://notebook-web/api/v1/get_config.php'

xhr_get.open('GET', url_get);

let arr_obj = {};

xhr_get.onreadystatechange = function () {

    if (xhr_get.readyState === 4 && xhr_get.status === 200) {
    
        arr_obj = JSON.parse(xhr_get.responseText);

        console.log(arr_obj.object);

        let table = document.querySelector('#table');

        arr_obj.object.forEach( (obj) => {

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

            let a_id = document.createElement('a');

            a_id.href = `http://notebook-web/api/v1/notebook/human.php?id=${obj.id}`;

            a_id.classList.add('field');

            a_id.textContent = 'Подробнее';

            let delete_id = document.createElement('div');

            delete_id.classList.add('field');

            delete_id.classList.add('delete');

            delete_id.textContent = 'Удалить';

            let id = document.createElement('input');

            id.name = 'id';

            id.value = obj.id;

            id.type = 'hidden';

            people.appendChild(name_div);

            people.appendChild(company_div);

            people.appendChild(phone);

            people.appendChild(a_id);

            people.appendChild(delete_id);

            people.appendChild(id);

            people.style.display = 'none';

            table.appendChild(people);

            let delete_btns = document.querySelectorAll('.delete');

            delete_btns.forEach( delete_btn => {

                delete_btn.addEventListener('click', function(e) {

                            // e.preventDefault();
                        
                            let isClickable = true;
                        
                            if (isClickable == true) {

                            id = e.target.parentNode.children[5].value
                        
                            let xhr = new XMLHttpRequest();
                        
                            let url = 'http://notebook-web/api/v1/notebook/post_delete_config.php'
                        
                            xhr.open("POST", url, true);
                        
                            xhr.setRequestHeader("Content-Type", "application/json");
                        
                            xhr.onreadystatechange = function () { 
                        
                                console.log("Ready State:", xhr.readyState);
                                console.log("Status:", xhr.status);
                        
                                if (xhr.readyState === 4 && xhr.status === 200) { 
                        
                                    console.log(xhr.responseText);

                                    location.reload();
                                
                                }
                        
                            };
                        
                            let data = JSON.stringify({ id: id });
                        
                            xhr.send(data)
                        
                            setTimeout(() => {
                                isClickable = true;
                            }, 3000);
                        
                            };

                });
        

                })

        });

        //пагинация данных

        let elements_table = document.querySelector('#table').children;

        let count_paginate = 5; //количество записей на одной странице

        let btns_paginate = elements_table.length / count_paginate; //количество кнопок

        //учитываем значение btns_paginate типа float

        if (!Number.isInteger(btns_paginate)) {

            btns_paginate = parseInt(btns_paginate) + 1;

        }

        for (let i = 0; i < elements_table.length; i++) {

            if (i <= count_paginate - 1) {

                elements_table[i].style.display = 'flex';

            }

        }

        let paginate = document.querySelector('#paginate');

        for (let i = 1; i <= btns_paginate; i++) {

            let btn_pag = document.createElement('div');

            btn_pag.textContent = i;

            btn_pag.classList.add('pag');

            paginate.appendChild(btn_pag);

        }

        document.querySelectorAll('.pag').forEach( item => {       
            
            item.addEventListener( 'click',  (e) => {

            for (let i = 0; i < elements_table.length; i++) {

                let pag_max = e.target.textContent * count_paginate;

                let pag_min = pag_max - count_paginate;

                if (i >= pag_min && i < pag_max) {
    
                    elements_table[i].style.display = 'flex';
    
                } else {

                    elements_table[i].style.display = 'none';
                }
    
            }

            });
            }
        )

    }
    
};

xhr_get.send();