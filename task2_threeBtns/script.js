const parent = document.getElementById('parent')
parent.addEventListener('click', function (event) {
  if (event.target.id == 'btn1') {
    alert('Кнопка 1')
  } else if (event.target.id == 'btn2') {
    alert('Кнопка 2')
  } else if (event.target.id == 'btn3') {
    alert('Кнопка 3')
  }
})
