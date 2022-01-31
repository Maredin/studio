//----BURGER ----

var show_menu = document.getElementById('show-menu');
var hidden_menu = document.getElementById('hidden-menu');

var burger1 = document.getElementById('burger1');
var burger2 = document.getElementById('burger2');
var burger3 = document.getElementById('burger3');

let hide = document.querySelectorAll('#hidden-menu ul li');


show_menu.addEventListener('click', function(e){
   hidden_menu.style.right = hidden_menu.style.right === '0px' ? '-75%' : '0px';
    burger2.style.display = burger2.style.display === 'none' ? 'block' : 'none';
    burger1.style.transform = burger1.style.transform === 'translateY(10px) rotate(-45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(10px) rotate(-45deg)';
    burger3.style.transform = burger3.style.transform === 'translateY(3px) rotate(45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(3px) rotate(45deg)';
});


hide.forEach(item => {
    item.addEventListener('click', () => {
        hidden_menu.style.right = hidden_menu.style.right === '0px' ? '-75%' : '0px';
        burger2.style.display = burger2.style.display === 'none' ? 'block' : 'none';
        burger1.style.transform = burger1.style.transform === 'translateY(10px) rotate(-45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(10px) rotate(-45deg)';
        burger3.style.transform = burger3.style.transform === 'translateY(3px) rotate(45deg)' ? 'translateY(0px) rotate(0deg)' : 'translateY(3px) rotate(45deg)';
    });
});

