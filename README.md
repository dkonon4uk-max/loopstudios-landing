# Frontend Mentor - Рішення для цільової сторінки Loopstudios

Це рішення для [челенджу зі створення цільової сторінки Loopstudios на Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Челенджі від Frontend Mentor допомагають покращити навички кодування шляхом створення реалістичних проєктів. 

### Завдання

Користувачі повинні мати можливість:

- Переглядати оптимальний макет сайту залежно від розміру екрана їхнього пристрою
- Бачити ефекти наведення (hover) для всіх інтерактивних елементів на сторінці

### Скриншот

![](./preview.jpg)

### Посилання

- [URL-адреса рішення:](https://github.com/dkonon4uk-max/loopstudios-landing)
- [URL-адреса живого сайту:](https://dkonon4uk-max.github.io/loopstudios-landing/)

## Мій процес

### Технології

- Семантична розмітка HTML5
- Базове скидання стилів CSS (CSS reset)
- Flexbox
- Адаптивний дизайн
  
### Чого я навчився

Це була практика зі створення односторінкового вебсайту за допомогою простих вебтехнологій.

Приклади коду з цього проекту:

```html
<h1 class="josefin-sans">Immersive experiences that deliver</h1>
```
```css
.josefin-sans {
    font-family: "Josefin Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
}
```
```js
burgerBtn.addEventListener('click', () => {
    const isOpen = menuList.classList.toggle('open')

    logo.style.zIndex = isOpen ? '999' : ''
    burgerBtn.style.zIndex = isOpen ? '999' : ''
    burgerBtn.classList.toggle('close', isOpen)
    burgerBtn.textContent = isOpen ? '❌' : ''
})
```

## Подяки

Я створив цей проєкт під час уроків із фронтенд-розробки під керівництвом ментора.
