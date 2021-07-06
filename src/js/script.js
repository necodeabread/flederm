window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    });

    const descriptionToggles = document.querySelectorAll('.text_script');
    descrItems = document.querySelectorAll('.description_script');

    descriptionToggles.forEach((header) => {
        header.addEventListener('click', () => {
            let descr = header.querySelector('.description_script');

            descr.classList.toggle('open');             
        });
    });
})