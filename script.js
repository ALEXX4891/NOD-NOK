// Для вычисления наименьшего общего кратного (НОК) чисел 9 и 12 мы можем воспользоваться формулой:

// НОК(a, b) = (a * b) / НОД(a, b)

// Найдем сначала НОД(9, 12):
// 12 = 1 * 9 + 3
// 9 = 3 * 3 + 0

// Таким образом, НОД(9, 12) = 3.

// Теперь можем вычислить НОК(9, 12):
// НОК(9, 12):
// (9 *12)/НОД(9, 12) = (9 * 12) / 3 = 108 / 3 = 36

// Таким образом, НОК(9, 12) = 36.


document.querySelector('#submit').onclick = function(event) {
    
    event.preventDefault(); // отмена перезагрузки

    let finput = document.getElementById('fnumber');
    let sinput = document.getElementById('snumber');  
    let answerBlock = document.getElementById('answer'); 
    let select = document.getElementById('select');
    
    let fnumber = finput.value;
    let snumber = sinput.value;
    let selectVal = select.value;
    console.log(selectVal)
    let mult = fnumber * snumber;
    let nod = 0;
    let nok = 0;
    nok = 9  
    let arr = [];
    arr[0] = fnumber;
    arr[1] = snumber;
    let answer = '';
    
    // математика:
    function NOD(arr)
    {   
        let n = arr.length, x = Math.abs(arr[0]);
        for (let i = 1; i < n; i++)
         { let y = Math.abs(arr[ i ]);
           while (x && y){ x > y ? x %= y : y %= x; }
           x += y;
         }
        return x;
    }
    
    function NOK(arr)
    {   
        let  n = arr.length, a = Math.abs(arr[0]);
        for (let i = 1; i < n; i++)
         { let b = Math.abs(arr[ i ]), c = a;
           while (a && b){ a > b ? a %= b : b %= a; } 
           a = Math.abs(c*arr[ i ])/(a+b);
         }
        return a;
    }


    // выбор варианта ответа:
    if (selectVal == 'NOK') {
        answer = `Для вычисления наименьшего общего кратного (НОК) чисел 9 и 12 мы можем воспользоваться формулой:
        НОК(${fnumber}, ${snumber}) = (${fnumber} *${snumber})/НОД(${fnumber}, ${snumber})
        Найдем сначала НОД(${fnumber}, ${snumber})

        ${snumber} = 1 * ${fnumber} + ${NOD(arr)}
        ${fnumber} = ${NOD(arr)} * ${NOD(arr)} + 0
        Таким образом, НОД(${fnumber}, ${snumber}) = ${NOD(arr)}.
        Теперь можем вычислить НОК(${fnumber}, ${snumber}):
        НОК(${fnumber}, ${snumber}):
        (${fnumber}, ${snumber})/НОД(${fnumber}, ${snumber}) = (${fnumber}, ${snumber}) / ${NOD(arr)} = ${NOD(arr)} * ${NOD(arr)} / ${NOD(arr)} = ${NOK(arr)}

        Таким образом, НОК(${fnumber}, ${snumber}) = ${NOK(arr)}.`        

    } else if (selectVal == 'NOD') {
        answer = `
        Найдем НОД(${fnumber}, ${snumber})

        ${snumber} = 1 * ${fnumber} + ${NOD(arr)}
        ${fnumber} = ${NOD(arr)} * ${NOD(arr)} + 0
        Таким образом, НОД(${fnumber}, ${snumber}) = ${NOD(arr)}.`      
    }
    
    // отчистка блока ответа
    function clearAnswer() {
        answerBlock.innerHTML = "";
    }
    
    clearAnswer()


    // добавление ответа
    function createAnswer(answer) {
        let paragraph = document.createElement('p');
        paragraph.classList.add('fs-2');
        paragraph.innerText = answer;
        return paragraph;
    }

    answerBlock.append(createAnswer(answer));
}