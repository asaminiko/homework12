let list = document.getElementById('list')
let input = document.getElementById('task')
let myAdd = document.getElementById('myAdd')

myAdd.addEventListener('click', function () {
  //перевірка на пусту строку
  if (input.value.trim() == '') {
    alert('Ви нічого не ввели')
    return
  }

  liElement = document.createElement('li') //створення li
  liElement.textContent = input.value
  liElement.style.margin = '15px'

  removeElement = document.createElement('button') //створення кнопки "Видалити"
  removeElement.classList.add('remove')
  removeElement.textContent = 'Видалити'
  removeElement.id = 'remove'

  changeElement = document.createElement('button') //створення кнопки "Змінити"
  changeElement.classList.add('change')
  changeElement.textContent = 'Змінити'
  changeElement.id = 'change'
  list.appendChild(liElement)
  liElement.appendChild(removeElement)
  liElement.appendChild(changeElement)
  input.value = '' //очищення input
})

list.addEventListener('click', (event) => {
  let element = event.target.parentElement
  if (event.target.id === 'remove') {
    event.target.parentElement.remove() //видалення завдання
  } else if (
    !list.querySelector('input') && // перевірка чи є інші input в list
    event.target.id === 'change'
  ) {
    event.target.remove() //видалення кнопки "Змінити"

    inputChange = document.createElement('input') //створення нового input для зміни завдання
    inputChange.placeholder = 'Змінити завдання'
    inputChange.value = element.firstChild.textContent //в цьому input буде текст з завдання, який можна змінити

    okBtn = document.createElement('button') //створення кнопки є 'OK', щоб зберегти зміни
    okBtn.classList.add('okBtn')
    okBtn.textContent = 'OK'
    okBtn.id = 'save'
    element.appendChild(inputChange)
    element.appendChild(okBtn)
  } else if (event.target.id === 'save') {
    //перевірка на пусту строку
    if (inputChange.value.trim() !== '') {
      element.firstChild.textContent = inputChange.value
    }

    changeElement = document.createElement('button') // створення кнопки 'Змінити'
    changeElement.textContent = 'Змінити'
    changeElement.classList.add('change')
    changeElement.id = 'change'
    element.appendChild(changeElement)
    //Видалення input та кнопку "ОК"
    inputChange.remove()
    okBtn.remove()
  }
})
