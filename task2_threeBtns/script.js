const parent = document.getElementById('parent')
let btns = document.getElementsByTagName('button')
parent.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') alert(event.target.textContent)
})
