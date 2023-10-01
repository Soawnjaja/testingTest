import capitalize from "./capitalize.js"

if(capitalize('text') !== ('Text')) {
    throw new Error ('функция работает не верно');
}
if(capitalize('') !== ('')) {
    throw new Error ('Функция работает не верно')
}
console.log('Все тесты прошли успешно!')