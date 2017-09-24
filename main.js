// Задание 1. Вычитайте строку из input. Высчитайте ее длину.
// Выведите результат.

document.getElementById('btn1').onclick = function() {
    var in1 = document.getElementById('in1').value;
    var out1 = document.getElementById('out1');
    out1.innerHTML = in1.length;
}

// Задание 2. Создайте массив, который содержит имена изображений
// в определенной папке. Запустите цикл по массиву и выведите все
// изображения на страницу. Подсказка, для вывода изображения
// используйте тег <img src=”xxxx”> где xxx – путь к файлу.

var imgArray = ['ds.png', 'dv.png', 'falcon.png', 'leia.png', 'bh.png'];
var imgCont = document.getElementById('imgCont');
var img2 = document.getElementById('img2');

document.getElementById('btn2').onclick = function() {

    for (var i = 0; i < imgArray.length; i++) {
        var someImg = document.createElement('IMG');
        someImg.src = 'img/' + imgArray[i];
        imgCont.insertBefore(someImg, imgCont.children[0]);
    }
}

// Задание 3. Пользователь вводит URL адрес в input в формате http или https. Выведите только имя домена без префиксов http://, https://.

document.getElementById('btn3').onclick = function() {
    var in3 = document.getElementById('in3').value;
    var out = '';
    if (~in3.indexOf('http://')) {
        out = in3.substring(7);
        document.getElementById('out3').innerHTML = out;
    } else if (~in3.indexOf('https://')) {
        out = in3.substring(8);
        document.getElementById('out3').innerHTML = out;
    } else {
        // console.log(-1);
        out = in3.substring(0);
        document.getElementById('out3').innerHTML = out;
    }
}
// Задание 4. Пользователь может ввести адрес сайта в формате http://site.ua, https://site.ua, http://www.site.ua, https://www.site.ua или site.ua. Ваша задача используя поиск в подстроке вывести site в виде: site.ua.
document.getElementById('btn4').onclick = function() {
    var in4 = document.getElementById('in4').value;
    var pos = '';
    if (~in4.indexOf('http://')) {
        pos = in4.slice(7);
        document.getElementById('out4').innerHTML = pos;
        if (~in4.indexOf('http://www.')) {
            pos = in4.slice(11);
            document.getElementById('out4').innerHTML = pos;
        }
    } else if (~in4.indexOf('https://')) {
        pos = in4.slice(8);
        document.getElementById('out4').innerHTML = pos;
        if (~in4.indexOf('https://www.')) {
            pos = in4.slice(12);
            document.getElementById('out4').innerHTML = pos;
        }
    } else {
        // console.log(-1);
        pos = in4.slice(0);
        document.getElementById('out4').innerHTML = pos;
    }
}

// Задание 5. Пользователь заполняет форму состоящую из фамилии, имени пароля и email. Используя приведенные методы выполните обработку формы состоящую из удаления пробелов до и после введённых слов, пароль не должен быть меньше 5 символов, email должен содержать один символ @ и не содержать пробелов. Если форма заполнена корректно, возвращать true.

var myForm = document.getElementById('myForm');

document.getElementById('submit-btn').onclick = function() {
    valid(myForm);
}

function valid(form) {
    var fail = false;
    var fName = form.fName.value;
    var lName = form.lName.value;
    var pass = form.pass.value;
    var eMail = form.eMail.value;

    var text1 = fName.trim();
    console.log(text1);

    var text2 = lName.trim();
    console.log(text2);

    var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (fName == '' || fName == ' ') {
        console.log('Введите имя');
    } else if (lName == '' || lName == ' ') {
        console.log('Введите фамилию');
    } else if (pass == '' || pass.length < 6) {
        console.log('Введите пароль');
    } else if (validEmail.test(eMail) == false) {
        console.log('Введите E-mail правильно!');
    } else {
        return (console.log(true));
        // window.location = 'http://diz.promo.net.ua/patyaikasha/';
    }


    // Получаем все значения/value элементов form
    // for (var i = 0; i < form.length; i++) {
    //     if (form[i] != undefined) {
    //         console.log(form[i].value);
    //     }
    // }

}





// Задание 6. Пользователь вводит символ, выведите его код.

document.getElementById('in6').onkeypress = function(event) {
    document.getElementById('out6').innerHTML += event.charCode + '; ';
}