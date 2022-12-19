# Тестовое задание для компании Консалт Инфо
Макет Figma (Спасибо автору Max) [ссылка на мекет](https://www.figma.com/file/DmIkAGpRNjIg7EqJRXQV4I/Healthy-food-%2B?node-id=2%3A2&t=24lMoADN3oovhyuU-0)

[Ссылка на демо страницу](https://tanasov49.github.io/healthy_food/)

В данном проекте я использовал локальный импорт изображений, но можно использовать импорт при помощи Rest Api.
Данный проект создан при помощи React.
Используются следующий стек технологий:

-Webpack 5 версии;

-NodeJs;

-React;

-Хуки реакта;

-grid

-flex;

-SASS

-БЭМ, именование блоков согласно методологии;

-Адаптивная и мобильная верстка под все разрешения (от 320px до 1440px);

Использовал только доуступные в React хуки, т.к. старался сделать проект с минимальным участием сторонних библиотек. 
### Для развертывания проекта с помощью webpack использовал следующие модули:
#### Установка самого webpack
```shell
npm i webpack --save-dev
```
#### Установка плагина интерфейса
```shell
npm i webpack-cli --save-dev
```
#### Установка плагина локального сервера
```shell
npm i webpack-dev-server --save-dev
```
#### Установка плагина для Babel
```shell
npm i @babel/core --save-dev
npm i @babel/preset-env --save-dev
npm i core-js
npm i babel-loader --save-dev
```
#### Установка плагина html
```shell
npm i html-webpack-plugin --save-dev 
```
#### Установка плагина CleanWebpackPlugin
```shell
npm i clean-webpack-plugin --save-dev 
```
#### Установка плагинов для обрабоки CSS
```shell
npm i css-loader --save-dev
npm i mini-css-extract-plugin --save-dev 
npm i postcss-loader --save-dev
npm i autoprefixer --save-dev
npm i cssnano --save-dev 
```
#### Установка плагина для SASS
```shell
npm i sass-loader
```
#### Установка плагина для обработки SVG файлов (нужно для для того чтобы их удобно помещать в виде блоков React)
```shell
npm install --save-dev @svgr/webpack
```
#### Для запуска проекта используем
```shell
npm start
```
#### Конфигурация package.json для запуска проекта и его build
```javascript
  "scripts": {
    "start": "webpack serve",
    "build": "webpack --mode production",
    "predeploy": "npm run build"
  },
```
Всю остальную информацию по настройке самого webpack и данных плагинов вы найдете в файле   [webpack.config.js](https://github.com/tanasov49/healthy_food/blob/main/webpack.config.js), [.babelrc](https://github.com/tanasov49/healthy_food/blob/main/.babelrc) и [postcss.config.js](https://github.com/tanasov49/healthy_food/blob/main/postcss.config.js)
### Компоненты React
Все блоки React разбиты на отдельные компоненты в папке [components](https://github.com/tanasov49/healthy_food/tree/main/src/components), в которой есть главные блоки Header, Main, Footer. А уже в самой папке [blocks](https://github.com/tanasov49/healthy_food/tree/main/src/components/blocks) находятся все основные блоки Main. Отдельно в самой папке [ui](https://github.com/tanasov49/healthy_food/tree/main/src/components/ui) находятся различные блоки, которые можно использовать повторно на каждой странице, либо в новом проекте, т.к. я старался использовать данный подход, как сам метод БЭМ.
### Шрифты
[Шрифты](https://github.com/tanasov49/healthy_food/tree/main/src/fonts) в данном проекте я использовал WorkSans [ссылка](https://fonts.google.com/specimen/Work+Sans), т.к. представленный шрифт в макете не имеется для распросранения в свободном доступе. Поэтому был подобран весьма близкий к данному шрифту.
### Стили
Весь проект построен с помощью методологии БЭМ, т.е. каждый отдельный взятый блок можно использовать повторно на любой странице проекта, либо в другом проете. Все шрифты в корневой папке src [blocks](https://github.com/tanasov49/healthy_food/tree/main/src/blocks). Все стили импортированы в файле [index.scss](https://github.com/tanasov49/healthy_food/blob/main/src/pages/index.scss)
### Изображения
Все изображения находятся в папке [images](https://github.com/tanasov49/healthy_food/tree/main/src/images). Подключение в проекте я использовал следующим образом:
```javascript
// Для импорта в качестве подключения к img
import ImageFood1 from '../../../images/images_food/imagefood1.jpg';
// Для ипорта SVG в качестве блока использовал также
import ButtonLeft from '../../../images/svg/button-left.svg';
// Для иморта svg в качестве src использовал
import ButtonLeft from '../../../images/svg/button-left.svg?url';
```
### Использование SASS
Для использования миксинов и переменных, чтобы можно было в случае чего менять быстро значения стилей я использовал их, все они находятся в папке [sass](https://github.com/tanasov49/healthy_food/tree/main/src/sass)
## Задача проекта
Тренировка самого себя и добавление в потрфолио