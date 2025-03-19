
function closeAndOpenMenu() {
    let list = document.querySelector('ul.dropdown__list')
    list.classList.contains('dropdown__list_active') ? list.classList.remove('dropdown__list_active') : 
    list.classList.add('dropdown__list_active');
};

let title = document.querySelector('div.dropdown__value');
let menu = Array.from(document.querySelectorAll('a.dropdown__link'));

title.addEventListener('click', closeAndOpenMenu);
menu.forEach(function (item) {
    item.onclick = function () {
        document.querySelector('div.dropdown__value').textContent = item.textContent;
        return false;
    };
    item.addEventListener("click", closeAndOpenMenu);
})