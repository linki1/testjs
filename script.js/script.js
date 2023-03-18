// функция проверяющая ответы пользователя
function cheakanswer(usValue, corectValue, corectValueENG) {
    switch (typeof usValue) {
        case "string":
            usValue = usValue.trim().toLowerCase()
            break;

        default:
            break;
    }
    console.log(usValue);
    if (!usValue || usValue == corectValue) {
        return 10;
    }
    else if (!usValue || usValue == corectValueENG) {
        return 10;
    }
    else {
        return 0;
    }

}
// спрашиваем вопросы с получением ответов в виде 0 и 10 и сумируем в переменую sum
alert('Тест поддерживает как рус так и англ ответы.')
let sum = cheakanswer(prompt('Сколько будет 2+2?', 0), 4, 4);
sum += cheakanswer(prompt('Солнце встает на востоке', 0), "да", "yes");
sum += cheakanswer(prompt('Сколько будет 5 / 0?', 0), "разделить нельзя", "can't be divided");
sum += cheakanswer(prompt('Какого цвета небо?', 0), "синего", "blue");
sum += cheakanswer(prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.', 0), 42);
// выводим результат 
document.write(`твой результат: ${sum}`)


