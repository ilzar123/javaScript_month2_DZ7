document.querySelector('.addBtn').onclick = function () {
    if (document.querySelector('input').value === "") {
        alert('please enter a task')
    } else {
        (document.querySelector('.tasks').innerHTML
            += `<div class="task">
                    <span class="taskName">${document.querySelector('input').value}</span>
                    <button class="delete">x</button>   
            </div>`)
        document.querySelector('input').value=''
        ////////delete task////////
        let current_task = document.querySelectorAll('.delete');
        for (let i = 0; i < current_task.length; i++) {
            current_task[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        /////////done task/////////
        let doneTask = document.querySelectorAll('.taskName');
        for(let i = 0; i < doneTask.length; i++){
            doneTask[i].onclick = function () {
                this.classList.toggle('completed')
            }
        }
    }
}






//2)задание
const a = Number(prompt('введите первое число'))
const num = prompt('введите математическое значение')
const b = Number(prompt('введите второе число'))
let result = 'result'
const culc = (a, num, b, result) => {
    switch (num){
        case '+':
           alert (result = a + b)
            break
        case '-':
           alert (result = a - b)
            break
        case '*':
           alert (result = a * b)
            break
        case '/':
            if (b === 0){
                alert('на ноль делить нельзя')
                break
            }
           alert (result = a / b)
            break
        default:
            alert('error')
            break
    }
}

culc(a, num, b, result)