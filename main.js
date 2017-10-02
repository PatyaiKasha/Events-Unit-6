// Задача 1. Выведите координаты мыши относительно блока в момент движения курсора мыши внутри блока. Координаты выводить под блоком.

document.onmousemove = function(event) {
    if (event.target.id == 'block1') {
        giveCoord(event);
        // console.log(event);
    }
}

function giveCoord(a) {
    var x = document.getElementById('coordX');
    x.innerHTML = a.offsetX + ' px';
    var y = document.getElementById('coordY');
    y.innerHTML = a.offsetY + ' px';
}

// Задача 2. Создайте блок div, в качестве изображения фона установите ему
// изображение закрытой папки. Добавьте событие, которое выполняется при
// двойном клике на блоке и заменяет фон блока на изображение открытой
// папки.

document.getElementById('folder').ondblclick = onDblclick;

function onDblclick() {
    if (this.id == 'folder') {
        this.src = 'img/folder-open.svg';
        this.id = 'folder-open';
    } else {
        this.src = 'img/folder.svg';
        this.id = 'folder';
    }
}


// Задача 3. Добавьте в документ 300 - 400 блоков div квадратной формы с размерами сторон 30 px, и цветом фона.Добавление элементов выполните с помощью цикла.Добавьте событие при наведении мыши, которое будет скруглять данные блоки с помощью border - radius до круга.(Для замедления эффекта скругления в CSS можно добавить transition).

function sqr300() {
    var div = '<div class="sqr"></div>';
    for (var i = 0; i < 320; i++) {
        document.getElementById('out').innerHTML += div;
    }
}

sqr300();

var sqr = document.getElementsByClassName('sqr');
for (var i = 0; i < sqr.length; i++) {
    sqr[i].onmouseover = function() {
        this.style.borderRadius = 100 + '%';
        this.style.boxShadow = 0 + ' ' + 0 + ' ' + 10 + 'px';
    }
    sqr[i].onmouseleave = function() {
        this.style.borderRadius = 0;
        this.style.boxShadow = 'none';
    }
}

// Задача 4. Создайте div размерами ширина – 100%, высота 250px. Ниже
// добавьте 4-5 изображений с одинаковыми классами, разного размера.
// Добавьте событие, которое будет при клике на изображении
// устанавливать его фоном блока div со свойством background-size: contain.

document.onclick = function(event) {
    // console.log(event);
    if (event.target.className == 'sm-img') {
        changeImg(event.target);

    }
}

function changeImg(t) {
    // console.log(t);
    document.querySelector('#slider4').style.background = 'url(' + t.src + ')';
    document.querySelector('#slider4').style.backgroundSize = 'contain';
    document.querySelector('#slider4').style.backgroundRepeat = 'no-repeat';
    document.querySelector('#slider4').style.backgroundPosition = 'center center';
}

// Задача 5. Создайте блок размерами 50 x50px.Добавьте событие клик, так,
// что при каждом клике на блоке он отодвигается на 100px вниз от
// предыдущего положения.

var mrg = 0;
document.getElementById('sqr5').onclick = function() {
    mrg += 100;
    this.style.marginTop = mrg + 'px';
}

// Задача 6. РЕАЛИЗУЙТЕ ТРИГГЕР ПЕРЕКЛЮЧАТЕЛЬ Реализуйте
// триггер переключатель следующего вида:
// При загрузке переключатель находится в первом положении.
// При клике, он переходит в положение два (средняя картинка), а в консоль
// выводится цифра 1.
// При следующем клике переключатель переходит в состояние три (нижняя
// картинка), а в консоль выводится цифра 2. При следующем клике,
// переключатель переходит в состояние 1 (верхняя картинка), а в консоль
// выводится 0.

var mrgl = 0;
var pos = 0;
document.getElementById('sqr6').onclick = function() {
    if (mrgl == 0) {
        mrgl += 100;
        this.style.marginLeft = mrgl + 'px';
        console.log(++pos);
    } else if (mrgl == 100) {
        mrgl += 100;
        this.style.marginLeft = mrgl + 'px';
        console.log(++pos);
    } else {
        mrgl = 0;
        pos = 0;
        this.style.marginLeft = mrgl;
        console.log(pos);
    }
}