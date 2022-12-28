document.querySelector('.addBtn').onclick = function () {
    if (document.querySelector('input').value === "") {
        alert('please enter a task')
    } else {
        (document.querySelector('.tasks').innerHTML
            += `<div class="task">
                    <span class="taskName">${document.querySelector('input').value}</span>
                    <button class="delete">x</button>   
            </div>`)
        document.querySelector('input').value = ''
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
let calculator;
function func() {
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch (calculator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 === 0) {
                alert('на ноль не делится')
                break
            }
            result = num1 / num2;
            break;
        default:
            alert('error')
    }
    const rez = document.getElementById('result')
    rez.innerText = result

}

const plus = document.getElementById('plus')
plus.onclick = () => {
    calculator = '+'
}

const minus = document.getElementById('minus')
minus.onclick = () => {
    calculator = '-'
}

const umn = document.getElementById('multiplication')
umn.onclick = () => {
    calculator = '*'
}

const del = document.getElementById('divided')
del.onclick = () => {
    calculator = '/'
}

const btn = document.querySelector('.btn')
btn.onclick = () => {
    func()
}