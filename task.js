const links = document.querySelectorAll('.menu__link');


Array.from(links).forEach(item => {
    item.addEventListener('click', function(event) {

        closeAllSubMenu(event.target.nextElementSibling);       
              
        if (event.target.nextElementSibling.classList.contains('menu_sub')) {                
            event.target.nextElementSibling.classList.toggle('menu_active');
            //event.stopPropagation(); // останавливаем всплытие обработчика выше event.target.
            //клики по ссылкам работают только на своём элементе вложенного меню, без всплютия в корневое меню            
            event.preventDefault();  // останавливаем пропадание ниспадающего menu_active            
        }
    });            
});

//закрываем другие вложенные меню, открыто должно быть только какое-то одно вложенное меню
//current - текущее открытое меню
function closeAllSubMenu(current = null) {
    const subMenu = document.querySelectorAll('.menu ul'); //все вложенные меню определим по ul    
    Array.from(subMenu).forEach(item => {
        if (item != current) {
        item.classList.remove('menu_active')
        }

    });
};

// закрытие всех подменю, когда отводим мышку
document.querySelector('.menu').onmouseleave = closeAllSubMenu;

function closeAllSubMenuOnLeave(current = null) {
    const closeOnLeave = document.querySelectorAll('.menu ul');

    console.log(closeOnLeave);

    Array.from(closeOnLeave).forEach(item => {
        if (item != current) {
        item.onmouseleave = closeAllSubMenu;
        }
    });

};

closeAllSubMenuOnLeave();
