// Импорт стилей
import './index.css';
const valuesUl = document.querySelector('.select-body');
const selectHeader = document.querySelector('.select-header');
const selectBody = document.querySelector('.select-body');
const select = document.querySelector('.select');
const selectCurrentHeader = document.querySelector('.select-header__current');
const selectItem = document.querySelectorAll('.select-body__item');
// Значения для массива select
const values = [
    {id: '1', value: 'Vue'},
    {id: '2', value: 'React'},
    {id: '3', value: 'NextJs'},
    {id: '4', value: 'ExpressJs'},
    {id: '5', value: 'Angular'}
]
// Вставка первого значения Value
const selectHeaderText = document.querySelector('.select-header__current');
selectHeaderText.textContent = values[0].value
// Открытие Select Body
const openSelectBody = (selectBody) => {
    selectBody.classList.add('select-body_active');
    selectCurrentHeader.classList.add('select-header__current_active');

}
// Закрытие Select Body
const closeSelectBody = (selectBody) => {
    selectBody.classList.remove('select-body_active');
    selectCurrentHeader.classList.remove('select-header__current_active');
}
// Переменная для изменения состояния открытия selectBody
let isSelectBodyShow = true;

// Открытие и закрытие по клику Select
selectHeader.addEventListener('click', ()=> {
    if (isSelectBodyShow) {
        openSelectBody(selectBody);
        isSelectBodyShow = false;
    } else {
        closeSelectBody(selectBody);
        isSelectBodyShow = true;
    }
})
// Закрытие окна после покидания мышью select
select.addEventListener('mouseleave', () => {
    if (isSelectBodyShow === false) {
        closeSelectBody(selectBody);
        isSelectBodyShow = true;
    }
})
// Перебор и вставка массива из values
values.forEach(function (value){
    const valueText = document.createElement('li');
    const idValue = value.id;
    const textValue = value.value;
    valueText.className = 'select-body__item select-text';
    valueText.textContent = textValue;
    valueText.id = idValue;
    valuesUl.appendChild(valueText);
    valueText.addEventListener('click', () => {
        selectHeaderText.textContent = value.value;
        isSelectBodyShow = true;
        closeSelectBody(selectBody);
        console.log(value);
    })
})